import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Admin users for CMS authentication
 * Separate from OAuth users table for simple username/password login
 */
export const adminUsers = mysqlTable("admin_users", {
  id: int("id").autoincrement().primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertAdminUser = typeof adminUsers.$inferInsert;

// CMS Content Tables

/**
 * Team members displayed on About page and homepage
 */
export const teamMembers = mysqlTable("team_members", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  bio: text("bio"),
  photoUrl: text("photoUrl"),
  linkedinUrl: text("linkedinUrl"),
  order: int("order").default(0).notNull(), // Display order
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TeamMember = typeof teamMembers.$inferSelect;
export type InsertTeamMember = typeof teamMembers.$inferInsert;

/**
 * Client testimonials
 */
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  clientName: varchar("clientName", { length: 255 }).notNull(),
  clientTitle: varchar("clientTitle", { length: 255 }),
  clientCompany: varchar("clientCompany", { length: 255 }),
  testimonialText: text("testimonialText").notNull(),
  photoUrl: text("photoUrl"),
  rating: int("rating").default(5), // 1-5 stars
  order: int("order").default(0).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

/**
 * Case studies / client success stories
 */
export const caseStudies = mysqlTable("case_studies", {
  id: int("id").autoincrement().primaryKey(),
  clientName: varchar("clientName", { length: 255 }).notNull(),
  industry: varchar("industry", { length: 255 }).notNull(), // Home Services, E-commerce, Lease-Ups
  logoUrl: text("logoUrl"),
  challenge: text("challenge"),
  solution: text("solution"),
  // Metrics
  metric1Label: varchar("metric1Label", { length: 100 }),
  metric1Value: varchar("metric1Value", { length: 100 }),
  metric2Label: varchar("metric2Label", { length: 100 }),
  metric2Value: varchar("metric2Value", { length: 100 }),
  metric3Label: varchar("metric3Label", { length: 100 }),
  metric3Value: varchar("metric3Value", { length: 100 }),
  metric4Label: varchar("metric4Label", { length: 100 }),
  metric4Value: varchar("metric4Value", { length: 100 }),
  order: int("order").default(0).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  isFeatured: boolean("isFeatured").default(false).notNull(), // Show on homepage
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = typeof caseStudies.$inferInsert;

/**
 * Portfolio items (website projects for Web Design page)
 */
export const portfolioItems = mysqlTable("portfolio_items", {
  id: int("id").autoincrement().primaryKey(),
  projectName: varchar("projectName", { length: 255 }).notNull(),
  clientName: varchar("clientName", { length: 255 }),
  category: varchar("category", { length: 100 }), // E-commerce, Home Services, etc.
  description: text("description"),
  imageUrl: text("imageUrl"), // Screenshot
  projectUrl: text("projectUrl"), // Live site URL
  order: int("order").default(0).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type InsertPortfolioItem = typeof portfolioItems.$inferInsert;

/**
 * Client logos for homepage showcase
 */
export const clientLogos = mysqlTable("client_logos", {
  id: int("id").autoincrement().primaryKey(),
  clientName: varchar("clientName", { length: 255 }).notNull(),
  logoUrl: text("logoUrl").notNull(),
  websiteUrl: text("websiteUrl"),
  order: int("order").default(0).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ClientLogo = typeof clientLogos.$inferSelect;
export type InsertClientLogo = typeof clientLogos.$inferInsert;

/**
 * Site settings (global configuration)
 */
export const siteSettings = mysqlTable("site_settings", {
  id: int("id").autoincrement().primaryKey(),
  settingKey: varchar("settingKey", { length: 100 }).notNull().unique(),
  settingValue: text("settingValue"),
  settingType: varchar("settingType", { length: 50 }).default("text").notNull(), // text, number, boolean, json
  description: text("description"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SiteSetting = typeof siteSettings.$inferSelect;
export type InsertSiteSetting = typeof siteSettings.$inferInsert;

/**
 * Page content for WordPress-style editing
 * Stores all editable content sections across the website
 */
export const pageContent = mysqlTable("page_content", {
  id: int("id").autoincrement().primaryKey(),
  pageId: varchar("pageId", { length: 100 }).notNull(), // e.g., 'home', 'about', 'services', 'results', 'contact'
  sectionId: varchar("sectionId", { length: 100 }).notNull(), // e.g., 'hero', 'services-overview', 'team'
  contentKey: varchar("contentKey", { length: 100 }).notNull(), // e.g., 'headline', 'subheadline', 'paragraph1', 'image1'
  contentValue: text("contentValue").notNull(), // The actual content (text or image URL)
  contentType: varchar("contentType", { length: 50 }).default("text").notNull(), // 'text', 'html', 'image', 'url'
  displayOrder: int("displayOrder").default(0).notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PageContent = typeof pageContent.$inferSelect;
export type InsertPageContent = typeof pageContent.$inferInsert;

/**
 * Blog categories
 */
export const blogCategories = mysqlTable("blog_categories", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(), // URL-friendly name
  description: text("description"),
  order: int("order").default(0).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogCategory = typeof blogCategories.$inferSelect;
export type InsertBlogCategory = typeof blogCategories.$inferInsert;

/**
 * Blog posts
 */
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  categoryId: int("categoryId").notNull(), // Foreign key to blogCategories
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(), // URL-friendly title
  excerpt: text("excerpt"), // Short summary for listing page
  content: text("content").notNull(), // Full blog post content (markdown or HTML)
  featuredImageUrl: text("featuredImageUrl"), // Hero image for post
  author: varchar("author", { length: 255 }).default("Mastering Digital").notNull(),
  order: int("order").default(0).notNull(), // Display order
  isPublished: boolean("isPublished").default(false).notNull(),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;


/**
 * FITD (Free In The Door) Lead Captures
 * Stores submissions from free tool landing pages
 */
export const fitdLeads = mysqlTable("fitd_leads", {
  id: int("id").autoincrement().primaryKey(),
  reportType: mysqlEnum("reportType", ["marketing-audit", "seo-snapshot", "ai-visibility"]).notNull(), // Which tool they signed up for
  businessName: varchar("businessName", { length: 255 }).notNull(),
  websiteUrl: varchar("websiteUrl", { length: 500 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  industry: varchar("industry", { length: 100 }).notNull(), // Home Services, E-commerce, etc.
  primaryService: varchar("primaryService", { length: 255 }), // For SEO Snapshot & AI Report
  targetLocation: varchar("targetLocation", { length: 255 }), // For SEO Snapshot & AI Report
  crmContactId: varchar("crmContactId", { length: 255 }), // ID from CRM (GoHighLevel, etc.)
  reportDeliveryStatus: mysqlEnum("reportDeliveryStatus", ["pending", "sent", "failed"]).default("pending").notNull(),
  reportDeliveryDate: timestamp("reportDeliveryDate"),
  thankYouPageViewed: boolean("thankYouPageViewed").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type FitdLead = typeof fitdLeads.$inferSelect;
export type InsertFitdLead = typeof fitdLeads.$inferInsert;

// Delayed jobs table for SMS follow-ups and other scheduled tasks
export const delayedJobs = mysqlTable("delayed_jobs", {
  id: int("id").primaryKey().autoincrement(),
  jobType: varchar("job_type", { length: 50 }).notNull(), // 'sms_followup', etc.
  payload: text("payload").notNull(), // Job-specific data as JSON string
  scheduledFor: timestamp("scheduled_for").notNull(), // When to execute
  status: varchar("status", { length: 20 }).notNull().default("pending"), // pending, completed, failed
  attempts: int("attempts").notNull().default(0),
  lastError: text("last_error"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  completedAt: timestamp("completed_at"),
});

export type DelayedJob = typeof delayedJobs.$inferSelect;
export type InsertDelayedJob = typeof delayedJobs.$inferInsert;
