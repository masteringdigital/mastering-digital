import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { getDb } from "./db";
import * as db from "./db";

describe("FITD Lead Capture", () => {
  let testLeadId: number;

  beforeAll(async () => {
    const database = await getDb();
    if (!database) {
      throw new Error("Database connection failed");
    }
  });

  it("should create a FITD lead for marketing audit", async () => {
    const result = await db.createFitdLead({
      reportType: "marketing-audit",
      businessName: "Test Business",
      websiteUrl: "https://testbusiness.com",
      name: "John Doe",
      email: "john@testbusiness.com",
      phone: "555-1234",
      industry: "Home Services",
      reportDeliveryStatus: "pending",
    });

    expect(result).toBeDefined();
    expect(Array.isArray(result) || result.id).toBeTruthy();
  });

  it("should create a FITD lead for SEO snapshot", async () => {
    const result = await db.createFitdLead({
      reportType: "seo-snapshot",
      businessName: "SEO Test Business",
      websiteUrl: "https://seotestbusiness.com",
      name: "Jane Smith",
      email: "jane@seotestbusiness.com",
      industry: "E-commerce / Retail",
      primaryService: "Online Retail",
      targetLocation: "Denver, CO",
      reportDeliveryStatus: "pending",
    });

    expect(result).toBeDefined();
    if (Array.isArray(result) && result.length > 0) {
      testLeadId = result[0].id;
    } else if (result && typeof result === "object" && "id" in result) {
      testLeadId = (result as any).id;
    }
  });

  it("should create a FITD lead for AI visibility report", async () => {
    const result = await db.createFitdLead({
      reportType: "ai-visibility",
      businessName: "AI Test Business",
      websiteUrl: "https://aitestbusiness.com",
      name: "Bob Johnson",
      email: "bob@aitestbusiness.com",
      industry: "Professional Services",
      primaryService: "Consulting",
      targetLocation: "New York, NY",
      reportDeliveryStatus: "pending",
    });

    expect(result).toBeDefined();
    expect(Array.isArray(result) || result.id).toBeTruthy();
  });

  it("should retrieve a FITD lead by ID", async () => {
    if (testLeadId) {
      const lead = await db.getFitdLeadById(testLeadId);
      expect(lead).toBeDefined();
      expect(lead?.businessName).toBe("SEO Test Business");
      expect(lead?.reportType).toBe("seo-snapshot");
    }
  });

  it("should retrieve a FITD lead by email", async () => {
    const lead = await db.getFitdLeadByEmail("jane@seotestbusiness.com");
    expect(lead).toBeDefined();
    expect(lead?.businessName).toBe("SEO Test Business");
    expect(lead?.reportType).toBe("seo-snapshot");
  });

  it("should return undefined for non-existent email", async () => {
    const lead = await db.getFitdLeadByEmail("nonexistent@email.com");
    expect(lead).toBeUndefined();
  });

  it("should update a FITD lead", async () => {
    if (testLeadId) {
      await db.updateFitdLead(testLeadId, {
        reportDeliveryStatus: "sent",
        thankYouPageViewed: true,
      });

      const lead = await db.getFitdLeadById(testLeadId);
      expect(lead?.reportDeliveryStatus).toBe("sent");
      expect(lead?.thankYouPageViewed).toBe(true);
    }
  });

  it("should retrieve all FITD leads", async () => {
    const leads = await db.getAllFitdLeads();
    expect(Array.isArray(leads)).toBe(true);
    expect(leads.length).toBeGreaterThan(0);
  });

  it("should have correct report types", async () => {
    const leads = await db.getAllFitdLeads();
    const reportTypes = leads.map((lead) => lead.reportType);
    expect(reportTypes).toContain("marketing-audit");
    expect(reportTypes).toContain("seo-snapshot");
    expect(reportTypes).toContain("ai-visibility");
  });
});
