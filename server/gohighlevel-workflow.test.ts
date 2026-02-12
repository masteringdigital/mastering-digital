import { describe, it, expect } from "vitest";
import { ENV } from "./_core/env";

describe("GoHighLevel Workflow API", () => {
  it("should have workflow API key configured", () => {
    expect(ENV.goHighLevelWorkflowApiKey).toBeTruthy();
    expect(ENV.goHighLevelWorkflowApiKey.length).toBeGreaterThan(20);
    expect(ENV.goHighLevelWorkflowApiKey).toMatch(/^pit-/);
  });

  it("should be able to authenticate with GHL API (contacts endpoint)", async () => {
    // Test API key by fetching contacts (known working endpoint)
    const response = await fetch(
      `https://rest.gohighlevel.com/v1/contacts/?locationId=${ENV.goHighLevelLocationId}`,
      {
        headers: {
          Authorization: `Bearer ${ENV.goHighLevelWorkflowApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Should not be auth errors
    expect(response.status).not.toBe(401);
    expect(response.status).not.toBe(403);
    
    // 200 means success
    expect(response.status).toBe(200);
  });
});
