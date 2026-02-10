import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { TRPCError } from "@trpc/server";
import { storagePut } from "./storage";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { trackLead, trackContact, trackPageView } from "./_core/metaCAPI";

// Admin-only procedure
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
  }
  return next({ ctx });
});

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // CMS Routers - Public procedures for frontend display
  cms: router({
    // Image upload
    uploadImage: adminProcedure.input(z.object({
      file: z.string(), // base64 encoded image
      filename: z.string(),
      contentType: z.string(),
    })).mutation(async ({ input }) => {
      // Validate file size (max 5MB)
      const buffer = Buffer.from(input.file, 'base64');
      const fileSizeInMB = buffer.length / (1024 * 1024);
      
      if (fileSizeInMB > 5) {
        throw new TRPCError({ code: 'BAD_REQUEST', message: 'File size exceeds 5MB limit' });
      }
      
      // Validate content type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!allowedTypes.includes(input.contentType)) {
        throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid file type. Only JPG, PNG, WEBP, and GIF are allowed' });
      }
      
      // Generate unique filename
      const randomSuffix = crypto.randomBytes(8).toString('hex');
      const ext = input.filename.split('.').pop();
      const fileKey = `cms-uploads/${Date.now()}-${randomSuffix}.${ext}`;
      
      // Upload to S3
      const { url } = await storagePut(fileKey, buffer, input.contentType);
      
      return { url, key: fileKey };
    }),

    // Admin login - checks database
    adminLogin: publicProcedure.input(z.object({
      username: z.string(),
      password: z.string(),
    })).mutation(async ({ input }) => {
      // Check database for admin user
      const adminUser = await db.getAdminUserByUsername(input.username);
      
      if (!adminUser) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid username or password' });
      }
      
      if (!adminUser.isActive) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Account is disabled' });
      }
      
      // Verify password
      const isValidPassword = await bcrypt.compare(input.password, adminUser.passwordHash);
      
      if (!isValidPassword) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid username or password' });
      }
      
      return { success: true, userId: adminUser.id, username: adminUser.username };
    }),
    // Team Members
    teamMembers: router({
      list: publicProcedure.query(async () => {
        console.log("[DEBUG] Fetching active team members...");
        try {
          const result = await db.getActiveTeamMembers();
          console.log("[DEBUG] Team members fetched:", result.length);
          return result;
        } catch (error) {
          console.error("[DEBUG] Error fetching team members:", error);
          throw error;
        }
      }),
      listAll: adminProcedure.query(() => db.getAllTeamMembers()),
      get: publicProcedure.input(z.number()).query(({ input }) => db.getTeamMemberById(input)),
      create: adminProcedure.input(z.object({
        name: z.string(),
        role: z.string(),
        bio: z.string().optional(),
        photoUrl: z.string().optional(),
        linkedinUrl: z.string().optional(),
        order: z.number().default(0),
        isActive: z.boolean().default(true),
      })).mutation(({ input }) => db.createTeamMember(input)),
      update: adminProcedure.input(z.object({
        id: z.number(),
        name: z.string().optional(),
        role: z.string().optional(),
        bio: z.string().optional(),
        photoUrl: z.string().optional(),
        linkedinUrl: z.string().optional(),
        order: z.number().optional(),
        isActive: z.boolean().optional(),
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return db.updateTeamMember(id, data);
      }),
      delete: adminProcedure.input(z.number()).mutation(({ input }) => db.deleteTeamMember(input)),
    }),

    // Testimonials
    testimonials: router({
      list: publicProcedure.query(() => db.getActiveTestimonials()),
      listAll: adminProcedure.query(() => db.getAllTestimonials()),
      get: publicProcedure.input(z.number()).query(({ input }) => db.getTestimonialById(input)),
      create: adminProcedure.input(z.object({
        clientName: z.string(),
        clientTitle: z.string().optional(),
        clientCompany: z.string().optional(),
        testimonialText: z.string(),
        photoUrl: z.string().optional(),
        rating: z.number().min(1).max(5).default(5),
        order: z.number().default(0),
        isActive: z.boolean().default(true),
      })).mutation(({ input }) => db.createTestimonial(input)),
      update: adminProcedure.input(z.object({
        id: z.number(),
        clientName: z.string().optional(),
        clientTitle: z.string().optional(),
        clientCompany: z.string().optional(),
        testimonialText: z.string().optional(),
        photoUrl: z.string().optional(),
        rating: z.number().min(1).max(5).optional(),
        order: z.number().optional(),
        isActive: z.boolean().optional(),
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return db.updateTestimonial(id, data);
      }),
      delete: adminProcedure.input(z.number()).mutation(({ input }) => db.deleteTestimonial(input)),
    }),

    // Case Studies
    caseStudies: router({
      list: publicProcedure.query(() => db.getActiveCaseStudies()),
      listFeatured: publicProcedure.query(() => db.getFeaturedCaseStudies()),
      listAll: adminProcedure.query(() => db.getAllCaseStudies()),
      get: publicProcedure.input(z.number()).query(({ input }) => db.getCaseStudyById(input)),
      create: adminProcedure.input(z.object({
        clientName: z.string(),
        industry: z.string(),
        logoUrl: z.string().optional(),
        challenge: z.string().optional(),
        solution: z.string().optional(),
        metric1Label: z.string().optional(),
        metric1Value: z.string().optional(),
        metric2Label: z.string().optional(),
        metric2Value: z.string().optional(),
        metric3Label: z.string().optional(),
        metric3Value: z.string().optional(),
        metric4Label: z.string().optional(),
        metric4Value: z.string().optional(),
        order: z.number().default(0),
        isActive: z.boolean().default(true),
        isFeatured: z.boolean().default(false),
      })).mutation(({ input }) => db.createCaseStudy(input)),
      update: adminProcedure.input(z.object({
        id: z.number(),
        clientName: z.string().optional(),
        industry: z.string().optional(),
        logoUrl: z.string().optional(),
        challenge: z.string().optional(),
        solution: z.string().optional(),
        metric1Label: z.string().optional(),
        metric1Value: z.string().optional(),
        metric2Label: z.string().optional(),
        metric2Value: z.string().optional(),
        metric3Label: z.string().optional(),
        metric3Value: z.string().optional(),
        metric4Label: z.string().optional(),
        metric4Value: z.string().optional(),
        order: z.number().optional(),
        isActive: z.boolean().optional(),
        isFeatured: z.boolean().optional(),
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return db.updateCaseStudy(id, data);
      }),
      delete: adminProcedure.input(z.number()).mutation(({ input }) => db.deleteCaseStudy(input)),
    }),

    // Portfolio Items
    portfolio: router({
      list: publicProcedure.query(() => db.getActivePortfolioItems()),
      listAll: adminProcedure.query(() => db.getAllPortfolioItems()),
      get: publicProcedure.input(z.number()).query(({ input }) => db.getPortfolioItemById(input)),
      create: adminProcedure.input(z.object({
        projectName: z.string(),
        clientName: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        projectUrl: z.string().optional(),
        order: z.number().default(0),
        isActive: z.boolean().default(true),
      })).mutation(({ input }) => db.createPortfolioItem(input)),
      update: adminProcedure.input(z.object({
        id: z.number(),
        projectName: z.string().optional(),
        clientName: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        projectUrl: z.string().optional(),
        order: z.number().optional(),
        isActive: z.boolean().optional(),
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return db.updatePortfolioItem(id, data);
      }),
      delete: adminProcedure.input(z.number()).mutation(({ input }) => db.deletePortfolioItem(input)),
    }),

    // Client Logos
    clientLogos: router({
      list: publicProcedure.query(() => db.getActiveClientLogos()),
      listAll: adminProcedure.query(() => db.getAllClientLogos()),
      get: publicProcedure.input(z.number()).query(({ input }) => db.getClientLogoById(input)),
      create: adminProcedure.input(z.object({
        clientName: z.string(),
        logoUrl: z.string(),
        websiteUrl: z.string().optional(),
        order: z.number().default(0),
        isActive: z.boolean().default(true),
      })).mutation(({ input }) => db.createClientLogo(input)),
      update: adminProcedure.input(z.object({
        id: z.number(),
        clientName: z.string().optional(),
        logoUrl: z.string().optional(),
        websiteUrl: z.string().optional(),
        order: z.number().optional(),
        isActive: z.boolean().optional(),
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return db.updateClientLogo(id, data);
      }),
      delete: adminProcedure.input(z.number()).mutation(({ input }) => db.deleteClientLogo(input)),
    }),

    // Page Content
    pageContent: router({      
      getPage: publicProcedure.input(z.object({
        pageId: z.string(),
        sectionId: z.string().optional(),
      })).query(({ input }) => db.getPageContent(input.pageId, input.sectionId)),
      
      getAll: adminProcedure.query(() => db.getAllPageContent()),
      
      getByKey: publicProcedure.input(z.object({
        pageId: z.string(),
        sectionId: z.string(),
        contentKey: z.string(),
      })).query(({ input }) => db.getContentByKey(input.pageId, input.sectionId, input.contentKey)),
      
      upsert: adminProcedure.input(z.object({
        pageId: z.string(),
        sectionId: z.string(),
        contentKey: z.string(),
        contentValue: z.string(),
        contentType: z.string().default("text"),
        displayOrder: z.number().default(0),
      })).mutation(({ input }) => db.upsertPageContent(input)),
      
      bulkUpsert: adminProcedure.input(z.array(z.object({
        pageId: z.string(),
        sectionId: z.string(),
        contentKey: z.string(),
        contentValue: z.string(),
        contentType: z.string().default("text"),
        displayOrder: z.number().default(0),
      }))).mutation(({ input }) => db.bulkUpsertPageContent(input)),
      
      delete: adminProcedure.input(z.number()).mutation(({ input }) => db.deletePageContent(input)),
    }),

    // Admin Users Management
    adminUsers: router({
      list: adminProcedure.query(() => db.getAllAdminUsers()),
      get: adminProcedure.input(z.number()).query(({ input }) => db.getAdminUserById(input)),
      create: adminProcedure.input(z.object({
        username: z.string().min(3).max(100),
        password: z.string().min(6),
        email: z.string().email().optional(),
      })).mutation(async ({ input }) => {
        // Check if username already exists
        const existing = await db.getAdminUserByUsername(input.username);
        if (existing) {
          throw new TRPCError({ code: 'BAD_REQUEST', message: 'Username already exists' });
        }
        
        // Hash password
        const passwordHash = await bcrypt.hash(input.password, 10);
        
        // Create user
        return await db.createAdminUser({
          username: input.username,
          passwordHash,
          email: input.email || null,
          isActive: true,
        });
      }),
      update: adminProcedure.input(z.object({
        id: z.number(),
        username: z.string().min(3).max(100).optional(),
        password: z.string().min(6).optional(),
        email: z.string().email().optional(),
        isActive: z.boolean().optional(),
      })).mutation(async ({ input }) => {
        const { id, password, ...rest } = input;
        
        // If password is provided, hash it
        const updateData: any = { ...rest };
        if (password) {
          updateData.passwordHash = await bcrypt.hash(password, 10);
        }
        
        return await db.updateAdminUser(id, updateData);
      }),
      delete: adminProcedure.input(z.number()).mutation(({ input }) => db.deleteAdminUser(input)),
    }),

    // Site Settings
    settings: router({
      list: adminProcedure.query(() => db.getAllSiteSettings()),
      get: publicProcedure.input(z.string()).query(({ input }) => db.getSiteSettingByKey(input)),
      upsert: adminProcedure.input(z.object({
        settingKey: z.string(),
        settingValue: z.string().optional(),
        settingType: z.string().default("text"),
        description: z.string().optional(),
      })).mutation(({ input }) => db.upsertSiteSetting(input)),
    }),
  }),

  // Meta Conversion API tracking
  metaCAPI: router({
    trackLead: publicProcedure.input(z.object({
      eventId: z.string(),
      sourceUrl: z.string(),
      fbp: z.string().optional(),
      fbc: z.string().optional(),
      customData: z.any().optional(),
    })).mutation(async ({ input, ctx }) => {
      const userAgent = ctx.req.headers['user-agent'];
      const ipAddress = ctx.req.headers['x-forwarded-for'] as string || ctx.req.socket.remoteAddress;
      
      const success = await trackLead({
        eventId: input.eventId,
        sourceUrl: input.sourceUrl,
        userAgent,
        ipAddress,
        fbp: input.fbp,
        fbc: input.fbc,
        customData: input.customData,
      });
      
      return { success };
    }),
    
    trackContact: publicProcedure.input(z.object({
      eventId: z.string(),
      sourceUrl: z.string(),
      fbp: z.string().optional(),
      fbc: z.string().optional(),
      customData: z.any().optional(),
    })).mutation(async ({ input, ctx }) => {
      const userAgent = ctx.req.headers['user-agent'];
      const ipAddress = ctx.req.headers['x-forwarded-for'] as string || ctx.req.socket.remoteAddress;
      
      const success = await trackContact({
        eventId: input.eventId,
        sourceUrl: input.sourceUrl,
        userAgent,
        ipAddress,
        fbp: input.fbp,
        fbc: input.fbc,
        customData: input.customData,
      });
      
      return { success };
    }),
    
    trackPageView: publicProcedure.input(z.object({
      eventId: z.string(),
      sourceUrl: z.string(),
      fbp: z.string().optional(),
      fbc: z.string().optional(),
    })).mutation(async ({ input, ctx }) => {
      const userAgent = ctx.req.headers['user-agent'];
      const ipAddress = ctx.req.headers['x-forwarded-for'] as string || ctx.req.socket.remoteAddress;
      
      const success = await trackPageView({
        eventId: input.eventId,
        sourceUrl: input.sourceUrl,
        userAgent,
        ipAddress,
        fbp: input.fbp,
        fbc: input.fbc,
      });
      
      return { success };
    }),
  }),
});

export type AppRouter = typeof appRouter;
