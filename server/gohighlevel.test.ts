import { describe, it, expect } from "vitest";
import { createGoHighLevelContact, mapFITDToGoHighLevel } from "./_core/gohighlevel";
import { ENV } from "./_core/env";

describe("GoHighLevel Integration", () => {
  it("should have GoHighLevel API credentials configured", () => {
    expect(ENV.goHighLevelApiKey).toBeTruthy();
    expect(ENV.goHighLevelLocationId).toBeTruthy();
    expect(ENV.goHighLevelApiKey.length).toBeGreaterThan(50);
    expect(ENV.goHighLevelLocationId.length).toBeGreaterThan(10);
  });

  it("should map FITD form data to GoHighLevel contact format correctly", () => {
    const formData = {
      businessName: "Test Business",
      website: "https://testbusiness.com",
      name: "John Doe",
      email: "john@testbusiness.com",
      phone: "+1234567890",
      industry: "Home Services",
      primaryService: "HVAC",
      targetLocation: "Miami, FL",
    };

    const ghlContact = mapFITDToGoHighLevel(formData, "marketing-audit");

    expect(ghlContact.firstName).toBe("John");
    expect(ghlContact.lastName).toBe("Doe");
    expect(ghlContact.email).toBe("john@testbusiness.com");
    expect(ghlContact.phone).toBe("+1234567890");
    expect(ghlContact.website).toBe("https://testbusiness.com");
    expect(ghlContact.tags).toContain("FITD-marketing-audit");
    expect(ghlContact.tags).toContain("Website Lead");
    expect(ghlContact.source).toBe("Website FITD Form");
    
    // Check custom fields
    expect(ghlContact.customFields).toBeDefined();
    expect(ghlContact.customFields?.length).toBeGreaterThan(0);
    
    const businessNameField = ghlContact.customFields?.find(f => f.key === "business_name");
    expect(businessNameField?.field_value).toBe("Test Business");
    
    const reportTypeField = ghlContact.customFields?.find(f => f.key === "report_type");
    expect(reportTypeField?.field_value).toBe("marketing-audit");
    
    const industryField = ghlContact.customFields?.find(f => f.key === "industry");
    expect(industryField?.field_value).toBe("Home Services");
  });

  it("should handle names with single word correctly", () => {
    const formData = {
      businessName: "Test Business",
      website: "https://testbusiness.com",
      name: "Madonna",
      email: "madonna@testbusiness.com",
      industry: "E-commerce",
    };

    const ghlContact = mapFITDToGoHighLevel(formData, "seo-snapshot");

    expect(ghlContact.firstName).toBe("Madonna");
    expect(ghlContact.lastName).toBe("");
  });

  it("should handle names with multiple words correctly", () => {
    const formData = {
      businessName: "Test Business",
      website: "https://testbusiness.com",
      name: "John Paul Jones",
      email: "jpj@testbusiness.com",
      industry: "Real Estate",
    };

    const ghlContact = mapFITDToGoHighLevel(formData, "ai-visibility");

    expect(ghlContact.firstName).toBe("John");
    expect(ghlContact.lastName).toBe("Paul Jones");
  });

  it("should include optional fields when provided", () => {
    const formData = {
      businessName: "Test Business",
      website: "https://testbusiness.com",
      name: "Jane Smith",
      email: "jane@testbusiness.com",
      phone: "+1234567890",
      industry: "E-commerce",
      primaryService: "Shopify Store",
      targetLocation: "New York, NY",
    };

    const ghlContact = mapFITDToGoHighLevel(formData, "seo-snapshot");

    const primaryServiceField = ghlContact.customFields?.find(f => f.key === "primary_service");
    expect(primaryServiceField?.field_value).toBe("Shopify Store");
    
    const targetLocationField = ghlContact.customFields?.find(f => f.key === "target_location");
    expect(targetLocationField?.field_value).toBe("New York, NY");
  });

  it("should omit optional fields when not provided", () => {
    const formData = {
      businessName: "Test Business",
      website: "https://testbusiness.com",
      name: "Jane Smith",
      email: "jane@testbusiness.com",
      industry: "E-commerce",
    };

    const ghlContact = mapFITDToGoHighLevel(formData, "marketing-audit");

    const primaryServiceField = ghlContact.customFields?.find(f => f.key === "primary_service");
    expect(primaryServiceField).toBeUndefined();
    
    const targetLocationField = ghlContact.customFields?.find(f => f.key === "target_location");
    expect(targetLocationField).toBeUndefined();
  });

  // Note: We're skipping the actual API call test to avoid creating test contacts in production
  // The integration will be tested manually with a real form submission
  it.skip("should create contact in GoHighLevel via API", async () => {
    const testContact = {
      firstName: "Test",
      lastName: "Contact",
      email: `test+${Date.now()}@example.com`,
      phone: "+1234567890",
      tags: ["Test"],
      source: "Vitest",
    };

    const result = await createGoHighLevelContact(testContact);
    
    expect(result.success).toBe(true);
    expect(result.contactId).toBeTruthy();
  });
});
