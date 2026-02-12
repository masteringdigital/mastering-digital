# GoHighLevel Workflow Setup Guide
## FITD Report Delivery Automation

This guide will help you set up 3 automated workflows in GoHighLevel to deliver your FITD reports when contacts are tagged.

---

## Overview

Your website forms already create contacts in GHL with these tags:
- `FITD-marketing-audit` → Instant delivery
- `FITD-seo-snapshot` → 24-hour delivery  
- `FITD-ai-visibility` → 48-hour delivery

You'll create 3 workflows (one for each tag) that automatically:
1. Send a personalized email with the report
2. Wait 2 hours
3. Send an SMS follow-up

**Time to complete:** ~10 minutes per workflow (30 minutes total)

---

## Workflow 1: Marketing Audit (Instant Delivery)

### Step 1: Create Workflow
1. Go to **Automation** → **Workflows**
2. Click **Create Workflow**
3. Name: `FITD - Marketing Audit Delivery`

### Step 2: Set Trigger
1. Click **Add Trigger**
2. Select **Contact Tag Added**
3. Choose tag: `FITD-marketing-audit`
4. Save trigger

### Step 3: Add Email Action
1. Click **+** to add action
2. Select **Send Email**
3. Configure:
   - **From Name:** Mike (or your name)
   - **From Email:** roi@masteringdigital.com
   - **Subject:** `Your Free Marketing Audit is Ready, {{contact.first_name}}! 📊`
   - **Body:** Copy the HTML template below

**Email Template (Marketing Audit):**
```html
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
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">Hi {{contact.first_name}},</p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">
                Your free marketing audit for <strong>{{contact.custom_fields.business_name}}</strong> is complete!
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
                    <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" style="display: inline-block; background-color: #F97316; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 6px; font-size: 16px; font-weight: 600;">Book Your Free Call</a>
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
```

### Step 4: Add Wait Action
1. Click **+** to add action
2. Select **Wait**
3. Set duration: **2 hours**

### Step 5: Add SMS Action
1. Click **+** to add action
2. Select **Send SMS**
3. Message:
```
Hi {{contact.first_name}}, just sent your Marketing Audit to {{contact.email}}. Check your spam folder if you don't see it. Book a call to review: https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike
```

### Step 6: Activate Workflow
1. Review all steps
2. Click **Publish** or **Activate**

---

## Workflow 2: SEO Snapshot (24-Hour Delivery)

### Step 1: Create Workflow
1. Go to **Automation** → **Workflows**
2. Click **Create Workflow**
3. Name: `FITD - SEO Snapshot Delivery`

### Step 2: Set Trigger
1. Click **Add Trigger**
2. Select **Contact Tag Added**
3. Choose tag: `FITD-seo-snapshot`
4. Save trigger

### Step 3: Add Wait Action (24 hours)
1. Click **+** to add action
2. Select **Wait**
3. Set duration: **24 hours**

### Step 4: Add Email Action
1. Click **+** to add action
2. Select **Send Email**
3. Configure:
   - **From Name:** Mike
   - **From Email:** roi@masteringdigital.com
   - **Subject:** `Your SEO Snapshot for {{contact.custom_fields.business_name}} is Ready 🔍`
   - **Body:** Copy the HTML template below

**Email Template (SEO Snapshot):**
```html
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
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">Hi {{contact.first_name}},</p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">
                Your SEO Snapshot for <strong>{{contact.custom_fields.business_name}}</strong> is ready!
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
                    <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" style="display: inline-block; background-color: #F97316; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 6px; font-size: 16px; font-weight: 600;">Book Your Strategy Call</a>
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
```

### Step 5: Add Wait Action (2 hours)
1. Click **+** to add action
2. Select **Wait**
3. Set duration: **2 hours**

### Step 6: Add SMS Action
1. Click **+** to add action
2. Select **Send SMS**
3. Message:
```
Hi {{contact.first_name}}, just sent your SEO Snapshot to {{contact.email}}. Check your spam folder if you don't see it. Book a call to review: https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike
```

### Step 7: Activate Workflow
1. Review all steps
2. Click **Publish** or **Activate**

---

## Workflow 3: AI Visibility Report (48-Hour Delivery)

### Step 1: Create Workflow
1. Go to **Automation** → **Workflows**
2. Click **Create Workflow**
3. Name: `FITD - AI Visibility Report Delivery`

### Step 2: Set Trigger
1. Click **Add Trigger**
2. Select **Contact Tag Added**
3. Choose tag: `FITD-ai-visibility`
4. Save trigger

### Step 3: Add Wait Action (48 hours)
1. Click **+** to add action
2. Select **Wait**
3. Set duration: **48 hours**

### Step 4: Add Email Action
1. Click **+** to add action
2. Select **Send Email**
3. Configure:
   - **From Name:** Mike
   - **From Email:** roi@masteringdigital.com
   - **Subject:** `Your AI Visibility Report for {{contact.custom_fields.business_name}} is Ready 🤖`
   - **Body:** Copy the HTML template below

**Email Template (AI Visibility Report):**
```html
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
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">Hi {{contact.first_name}},</p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">
                Your AI Visibility Report for <strong>{{contact.custom_fields.business_name}}</strong> is complete!
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
                    <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" style="display: inline-block; background-color: #F97316; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 6px; font-size: 16px; font-weight: 600;">Book Your Strategy Call</a>
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
```

### Step 5: Add Wait Action (2 hours)
1. Click **+** to add action
2. Select **Wait**
3. Set duration: **2 hours**

### Step 6: Add SMS Action
1. Click **+** to add action
2. Select **Send SMS**
3. Message:
```
Hi {{contact.first_name}}, just sent your AI Visibility Report to {{contact.email}}. Check your spam folder if you don't see it. Book a call to review: https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike
```

### Step 7: Activate Workflow
1. Review all steps
2. Click **Publish** or **Activate**

---

## Testing Your Workflows

After setting up all 3 workflows:

1. **Test each workflow** by manually adding the tags to a test contact
2. **Check email delivery** - emails should arrive within a few minutes
3. **Verify SMS timing** - SMS should arrive 2 hours after email
4. **Review analytics** - Monitor open rates and click rates in GHL

---

## Custom Fields Required

Make sure these custom fields exist in your GHL location:
- `business_name` - Business name from form
- `industry` - Industry selection
- `report_type` - Type of report requested

These are automatically populated by your website forms.

---

## Troubleshooting

**Emails not sending?**
- Check that your GHL email is verified
- Verify the "From Email" is authorized in GHL
- Check spam/junk folders

**SMS not sending?**
- Ensure contacts have valid phone numbers
- Check GHL SMS credits
- Verify SMS is enabled for your location

**Tags not triggering?**
- Confirm tag names match exactly (case-sensitive)
- Check workflow is Published/Active
- Review workflow execution logs in GHL

---

## Next Steps

1. Set up all 3 workflows (30 minutes)
2. Test with dummy contacts
3. Monitor performance in GHL analytics
4. Adjust email copy based on open/click rates

Your FITD lead generation system is now complete! 🎉
