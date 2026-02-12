/**
 * GoHighLevel Webhook Automation
 * 
 * Handles FITD report delivery via email and SMS when contacts are tagged in GHL
 */

import { ENV } from "./env";

const GHL_API_BASE_URL = "https://rest.gohighlevel.com/v1";

interface EmailParams {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

interface SMSParams {
  to: string; // Phone number
  message: string;
  contactId: string;
}

/**
 * Send email via GoHighLevel
 */
export async function sendGHLEmail(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`${GHL_API_BASE_URL}/conversations/messages/email`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${ENV.goHighLevelApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationId: ENV.goHighLevelLocationId,
        email: params.to,
        subject: params.subject,
        html: params.html,
        emailFrom: params.from || "roi@masteringdigital.com",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[GHL Email] API Error:", response.status, errorText);
      return { success: false, error: `Email API error: ${response.status}` };
    }

    console.log(`[GHL Email] Sent to ${params.to}: ${params.subject}`);
    return { success: true };
  } catch (error) {
    console.error("[GHL Email] Request failed:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

/**
 * Send SMS via GoHighLevel
 */
export async function sendGHLSMS(params: SMSParams): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`${GHL_API_BASE_URL}/conversations/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${ENV.goHighLevelApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "SMS",
        contactId: params.contactId,
        message: params.message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[GHL SMS] API Error:", response.status, errorText);
      return { success: false, error: `SMS API error: ${response.status}` };
    }

    console.log(`[GHL SMS] Sent to ${params.to}: ${params.message.substring(0, 50)}...`);
    return { success: true };
  } catch (error) {
    console.error("[GHL SMS] Request failed:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

/**
 * Email templates for FITD reports
 */
export function getFITDEmailTemplate(reportType: "marketing-audit" | "seo-snapshot" | "ai-visibility", data: {
  firstName: string;
  businessName: string;
  calendarLink: string;
}): { subject: string; html: string } {
  const templates = {
    "marketing-audit": {
      subject: `Your Free Marketing Audit is Ready, ${data.firstName}! 📊`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #1E3A5F; padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Your Marketing Audit is Ready!</h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">Hi ${data.firstName},</p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">
                Your free marketing audit for <strong>${data.businessName}</strong> is complete!
              </p>
              
              <div style="background-color: #f8f9fa; border-left: 4px solid #F97316; padding: 20px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; color: #1E3A5F; font-size: 18px;">What's Inside:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #555555;">
                  <li style="margin-bottom: 8px;">Overall digital health score</li>
                  <li style="margin-bottom: 8px;">Tech stack analysis (tracking, pixels, tools)</li>
                  <li style="margin-bottom: 8px;">Google Business Profile review</li>
                  <li style="margin-bottom: 8px;">Reputation snapshot (ratings + reviews)</li>
                  <li style="margin-bottom: 8px;">Website performance check</li>
                  <li style="margin-bottom: 8px;">SEO quick wins</li>
                </ul>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 30px 0 20px 0;">
                <strong>Next Step:</strong> Book a free 15-minute call to review your results and identify quick wins:
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="${data.calendarLink}" style="display: inline-block; background-color: #F97316; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 6px; font-size: 16px; font-weight: 600;">Book Your Free Call</a>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 14px; line-height: 1.6; color: #666666; margin: 30px 0 0 0;">
                Whether we work together or not, you'll walk away with 2-3 actionable priorities.
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 30px 0 0 0;">
                Best,<br>
                <strong>Mike</strong><br>
                Mastering Digital
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="font-size: 14px; color: #666666; margin: 0;">
                Mastering Digital | Growth Marketing Agency
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    },
    "seo-snapshot": {
      subject: `Your SEO Snapshot for ${data.businessName} is Ready 🔍`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color: #1E3A5F; padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Your SEO Snapshot is Complete!</h1>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">Hi ${data.firstName},</p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">
                Your SEO Snapshot for <strong>${data.businessName}</strong> is ready!
              </p>
              
              <div style="background-color: #f8f9fa; border-left: 4px solid #7C3AED; padding: 20px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; color: #1E3A5F; font-size: 18px;">What's Inside:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #555555;">
                  <li style="margin-bottom: 8px;">Current search rankings</li>
                  <li style="margin-bottom: 8px;">Keyword opportunities</li>
                  <li style="margin-bottom: 8px;">Technical SEO issues</li>
                  <li style="margin-bottom: 8px;">Local SEO audit</li>
                  <li style="margin-bottom: 8px;">Priority action items</li>
                </ul>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 30px 0 20px 0;">
                <strong>Want to discuss your results?</strong> Book a free strategy call:
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="${data.calendarLink}" style="display: inline-block; background-color: #F97316; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 6px; font-size: 16px; font-weight: 600;">Book Your Strategy Call</a>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 30px 0 0 0;">
                Best,<br>
                <strong>Mike</strong><br>
                Mastering Digital
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="font-size: 14px; color: #666666; margin: 0;">
                Mastering Digital | Growth Marketing Agency
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    },
    "ai-visibility": {
      subject: `Your AI Visibility Report for ${data.businessName} is Ready 🤖`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color: #1E3A5F; padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Your AI Visibility Report is Ready!</h1>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">Hi ${data.firstName},</p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">
                Your AI Visibility Report for <strong>${data.businessName}</strong> is complete!
              </p>
              
              <div style="background-color: #f8f9fa; border-left: 4px solid #06B6D4; padding: 20px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; color: #1E3A5F; font-size: 18px;">What's Inside:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #555555;">
                  <li style="margin-bottom: 8px;">AI search presence analysis</li>
                  <li style="margin-bottom: 8px;">ChatGPT & Perplexity visibility</li>
                  <li style="margin-bottom: 8px;">Competitive AI positioning</li>
                  <li style="margin-bottom: 8px;">Optimization roadmap</li>
                </ul>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 30px 0 20px 0;">
                <strong>Interested in the Full AI Search Audit ($299 value)?</strong> Let's discuss:
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="${data.calendarLink}" style="display: inline-block; background-color: #F97316; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 6px; font-size: 16px; font-weight: 600;">Book Your Strategy Call</a>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 30px 0 0 0;">
                Best,<br>
                <strong>Mike</strong><br>
                Mastering Digital
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="font-size: 14px; color: #666666; margin: 0;">
                Mastering Digital | Growth Marketing Agency
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    },
  };

  return templates[reportType];
}

/**
 * SMS template for FITD follow-up
 */
export function getFITDSMSTemplate(reportType: "marketing-audit" | "seo-snapshot" | "ai-visibility", firstName: string): string {
  const reportNames = {
    "marketing-audit": "Marketing Audit",
    "seo-snapshot": "SEO Snapshot",
    "ai-visibility": "AI Visibility Report",
  };

  return `Hi ${firstName}, just sent your ${reportNames[reportType]} to your email. Check your spam folder if you don't see it. Book a call to review: https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike`;
}
