import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  users,
  adminUsers,
  teamMembers,
  testimonials,
  caseStudies,
  portfolioItems,
  clientLogos,
  siteSettings,
  pageContent,
  blogCategories,
  blogPosts,
  InsertAdminUser,
  InsertTeamMember,
  InsertTestimonial,
  InsertCaseStudy,
  InsertPortfolioItem,
  InsertClientLogo,
  InsertSiteSetting,
  InsertPageContent,
  InsertBlogCategory,
  InsertBlogPost,
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// CMS Query Helpers

// Team Members
export async function getAllTeamMembers() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(teamMembers).orderBy(teamMembers.order);
}

export async function getActiveTeamMembers() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(teamMembers).where(eq(teamMembers.isActive, true)).orderBy(teamMembers.order);
}

export async function getTeamMemberById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(teamMembers).where(eq(teamMembers.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createTeamMember(member: InsertTeamMember) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(teamMembers).values(member);
  return 0; // Return 0 as placeholder, actual ID will be auto-generated
}

export async function updateTeamMember(id: number, member: Partial<InsertTeamMember>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(teamMembers).set(member).where(eq(teamMembers.id, id));
}

export async function deleteTeamMember(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(teamMembers).where(eq(teamMembers.id, id));
}

// Testimonials
export async function getAllTestimonials() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(testimonials).orderBy(testimonials.order);
}

export async function getActiveTestimonials() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(testimonials).where(eq(testimonials.isActive, true)).orderBy(testimonials.order);
}

export async function getTestimonialById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(testimonials).where(eq(testimonials.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createTestimonial(testimonial: InsertTestimonial) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(testimonials).values(testimonial);
  return 0;
}

export async function updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(testimonials).set(testimonial).where(eq(testimonials.id, id));
}

export async function deleteTestimonial(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(testimonials).where(eq(testimonials.id, id));
}

// Case Studies
export async function getAllCaseStudies() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(caseStudies).orderBy(caseStudies.order);
}

export async function getActiveCaseStudies() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(caseStudies).where(eq(caseStudies.isActive, true)).orderBy(caseStudies.order);
}

export async function getFeaturedCaseStudies() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(caseStudies).where(eq(caseStudies.isFeatured, true)).orderBy(caseStudies.order);
}

export async function getCaseStudyById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(caseStudies).where(eq(caseStudies.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createCaseStudy(caseStudy: InsertCaseStudy) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(caseStudies).values(caseStudy);
  return 0;
}

export async function updateCaseStudy(id: number, caseStudy: Partial<InsertCaseStudy>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(caseStudies).set(caseStudy).where(eq(caseStudies.id, id));
}

export async function deleteCaseStudy(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(caseStudies).where(eq(caseStudies.id, id));
}

// Portfolio Items
export async function getAllPortfolioItems() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(portfolioItems).orderBy(portfolioItems.order);
}

export async function getActivePortfolioItems() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(portfolioItems).where(eq(portfolioItems.isActive, true)).orderBy(portfolioItems.order);
}

export async function getPortfolioItemById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(portfolioItems).where(eq(portfolioItems.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createPortfolioItem(item: InsertPortfolioItem) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(portfolioItems).values(item);
  return 0;
}

export async function updatePortfolioItem(id: number, item: Partial<InsertPortfolioItem>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(portfolioItems).set(item).where(eq(portfolioItems.id, id));
}

export async function deletePortfolioItem(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(portfolioItems).where(eq(portfolioItems.id, id));
}

// Client Logos
export async function getAllClientLogos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(clientLogos).orderBy(clientLogos.order);
}

export async function getActiveClientLogos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(clientLogos).where(eq(clientLogos.isActive, true)).orderBy(clientLogos.order);
}

export async function getClientLogoById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(clientLogos).where(eq(clientLogos.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createClientLogo(logo: InsertClientLogo) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(clientLogos).values(logo);
  return 0;
}

export async function updateClientLogo(id: number, logo: Partial<InsertClientLogo>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(clientLogos).set(logo).where(eq(clientLogos.id, id));
}

export async function deleteClientLogo(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(clientLogos).where(eq(clientLogos.id, id));
}

// Site Settings
export async function getAllSiteSettings() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(siteSettings);
}

export async function getSiteSettingByKey(key: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(siteSettings).where(eq(siteSettings.settingKey, key)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function upsertSiteSetting(setting: InsertSiteSetting) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(siteSettings).values(setting).onDuplicateKeyUpdate({
    set: { settingValue: setting.settingValue },
  });
}

// Page Content
export async function getPageContent(pageId: string, sectionId?: string) {
  const db = await getDb();
  if (!db) return [];
  
  if (sectionId) {
    return await db
      .select()
      .from(pageContent)
      .where(and(
        eq(pageContent.pageId, pageId),
        eq(pageContent.sectionId, sectionId)
      ))
      .orderBy(pageContent.displayOrder);
  }
  
  return await db
    .select()
    .from(pageContent)
    .where(eq(pageContent.pageId, pageId))
    .orderBy(pageContent.displayOrder);
}

export async function getAllPageContent() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(pageContent).orderBy(pageContent.pageId, pageContent.sectionId, pageContent.displayOrder);
}

export async function getContentByKey(pageId: string, sectionId: string, contentKey: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(pageContent)
    .where(and(
      eq(pageContent.pageId, pageId),
      eq(pageContent.sectionId, sectionId),
      eq(pageContent.contentKey, contentKey)
    ))
    .limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function upsertPageContent(content: InsertPageContent) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  // Check if content exists
  const existing = await getContentByKey(content.pageId, content.sectionId, content.contentKey);
  
  if (existing) {
    // Update existing
    await db
      .update(pageContent)
      .set({ 
        contentValue: content.contentValue,
        contentType: content.contentType,
        displayOrder: content.displayOrder,
      })
      .where(eq(pageContent.id, existing.id));
    return existing.id;
  } else {
    // Insert new
    const result = await db.insert(pageContent).values(content);
    return result[0].insertId;
  }
}

export async function bulkUpsertPageContent(contents: InsertPageContent[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  for (const content of contents) {
    await upsertPageContent(content);
  }
}

export async function deletePageContent(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(pageContent).where(eq(pageContent.id, id));
}

// ============================================================================
// Admin Users
// ============================================================================

export async function getAllAdminUsers() {
  const db = await getDb();
  if (!db) throw new Error('Database not initialized');
  return await db.select().from(adminUsers).orderBy(desc(adminUsers.createdAt));
}

export async function getAdminUserByUsername(username: string) {
  const db = await getDb();
  if (!db) throw new Error('Database not initialized');
  const results = await db.select().from(adminUsers).where(eq(adminUsers.username, username)).limit(1);
  return results[0] || null;
}

export async function getAdminUserById(id: number) {
  const db = await getDb();
  if (!db) throw new Error('Database not initialized');
  const results = await db.select().from(adminUsers).where(eq(adminUsers.id, id)).limit(1);
  return results[0] || null;
}

export async function createAdminUser(data: InsertAdminUser) {
  const db = await getDb();
  if (!db) throw new Error('Database not initialized');
  const result = await db.insert(adminUsers).values(data);
  return result;
}

export async function updateAdminUser(id: number, data: Partial<InsertAdminUser>) {
  const db = await getDb();
  if (!db) throw new Error('Database not initialized');
  await db.update(adminUsers).set(data).where(eq(adminUsers.id, id));
  return await getAdminUserById(id);
}

export async function deleteAdminUser(id: number) {
  const db = await getDb();
  if (!db) throw new Error('Database not initialized');
  await db.delete(adminUsers).where(eq(adminUsers.id, id));
}

// ============================================================================
// Blog Categories
// ============================================================================

export async function getAllBlogCategories() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(blogCategories).where(eq(blogCategories.isActive, true)).orderBy(blogCategories.order);
}

export async function getBlogCategoryById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogCategories).where(eq(blogCategories.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getBlogCategoryBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogCategories).where(eq(blogCategories.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createBlogCategory(category: InsertBlogCategory) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(blogCategories).values(category);
  return 0;
}

export async function updateBlogCategory(id: number, category: Partial<InsertBlogCategory>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(blogCategories).set(category).where(eq(blogCategories.id, id));
}

export async function deleteBlogCategory(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(blogCategories).where(eq(blogCategories.id, id));
}

// ============================================================================
// Blog Posts
// ============================================================================

export async function getAllBlogPosts() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(blogPosts).where(eq(blogPosts.isPublished, true)).orderBy(desc(blogPosts.publishedAt));
}

export async function getBlogPostsByCategory(categoryId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(blogPosts).where(and(eq(blogPosts.categoryId, categoryId), eq(blogPosts.isPublished, true))).orderBy(desc(blogPosts.publishedAt));
}

export async function getBlogPostById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getBlogPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createBlogPost(post: InsertBlogPost) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(blogPosts).values(post);
  return 0;
}

export async function updateBlogPost(id: number, post: Partial<InsertBlogPost>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(blogPosts).set(post).where(eq(blogPosts.id, id));
}

export async function deleteBlogPost(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(blogPosts).where(eq(blogPosts.id, id));
}
