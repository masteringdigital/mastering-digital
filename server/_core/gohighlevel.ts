/**
 * GoHighLevel API Integration
 * 
 * This module provides helper functions to interact with the GoHighLevel API
 * for creating contacts and triggering automations.
 */

import { ENV } from "./env";

const GHL_API_BASE_URL = "https://rest.gohighlevel.com/v1";

interface GoHighLevelContact {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  dnd?: boolean;
  tags?: string[];
  customFields?: Array<{
    key: string;
    field_value: string;
  }>;
  source?: string;
}

interface CreateContactResponse {
  success: boolean;
  contactId?: string;
  message?: string;
  error?: string;
}

/**
 * Create a new contact in GoHighLevel
 * 
 * @param contact Contact data to create
 * @returns Response with contact ID or error
 */
export async function createGoHighLevelContact(
  contact: GoHighLevelContact
): Promise<CreateContactResponse> {
  try {
    const response = await fetch(`${GHL_API_BASE_URL}/contacts/`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${ENV.goHighLevelApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationId: ENV.goHighLevelLocationId,
        ...contact,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[GoHighLevel] API Error:", response.status, errorText);
      
      return {
        success: false,
        error: `GoHighLevel API error: ${response.status} - ${errorText}`,
      };
    }

    const data = await response.json();
    
    return {
      success: true,
      contactId: data.contact?.id || data.id,
      message: "Contact created successfully",
    };
  } catch (error) {
    console.error("[GoHighLevel] Request failed:", error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Map FITD form data to GoHighLevel contact format
 * 
 * @param formData FITD form submission data
 * @param reportType Type of report requested (marketing-audit, seo-snapshot, ai-visibility)
 * @returns GoHighLevel contact object
 */
export function mapFITDToGoHighLevel(
  formData: {
    businessName: string;
    website: string;
    name: string;
    email: string;
    phone?: string;
    industry?: string;
    primaryService?: string;
    targetLocation?: string;
  },
  reportType: string
): GoHighLevelContact {
  const [firstName, ...lastNameParts] = formData.name.trim().split(" ");
  const lastName = lastNameParts.join(" ");

  const customFields: Array<{ key: string; field_value: string }> = [
    { key: "business_name", field_value: formData.businessName },
    { key: "report_type", field_value: reportType },
  ];

  if (formData.industry) {
    customFields.push({ key: "industry", field_value: formData.industry });
  }

  if (formData.primaryService) {
    customFields.push({ key: "primary_service", field_value: formData.primaryService });
  }

  if (formData.targetLocation) {
    customFields.push({ key: "target_location", field_value: formData.targetLocation });
  }

  return {
    firstName: firstName || formData.name,
    lastName: lastName || "",
    email: formData.email,
    phone: formData.phone || "",
    website: formData.website,
    tags: [`FITD-${reportType}`, "Website Lead"],
    customFields,
    source: "Website FITD Form",
  };
}
