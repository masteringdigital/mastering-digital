/**
 * Meta Conversion API (CAPI) Helper
 * 
 * Server-side event tracking that bypasses browser privacy restrictions
 * and improves conversion tracking accuracy.
 */

// @ts-ignore - No type definitions available for facebook-nodejs-business-sdk
import bizSdk from 'facebook-nodejs-business-sdk';

const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
const pixelId = process.env.VITE_META_PIXEL_ID;

if (!accessToken) {
  console.warn('[Meta CAPI] META_CAPI_ACCESS_TOKEN not configured');
}

if (!pixelId) {
  console.warn('[Meta CAPI] VITE_META_PIXEL_ID not configured');
}

const ServerEvent = bizSdk.ServerEvent;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;

interface MetaEventParams {
  eventName: string;
  eventId?: string; // For deduplication with browser pixel
  sourceUrl: string;
  userAgent?: string;
  ipAddress?: string;
  fbp?: string; // Facebook browser ID cookie
  fbc?: string; // Facebook click ID cookie
  customData?: Record<string, any>;
}

/**
 * Send a server-side event to Meta Conversion API
 */
export async function sendMetaEvent(params: MetaEventParams): Promise<boolean> {
  if (!accessToken || !pixelId) {
    console.warn('[Meta CAPI] Skipping event - missing configuration');
    return false;
  }

  try {
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Build user data
    const userData = new UserData()
      .setClientIpAddress(params.ipAddress)
      .setClientUserAgent(params.userAgent)
      .setFbp(params.fbp)
      .setFbc(params.fbc);

    // Build custom data if provided
    let customData: any = null;
    if (params.customData) {
      customData = new CustomData();
      Object.entries(params.customData).forEach(([key, value]) => {
        (customData as any)[`set${key.charAt(0).toUpperCase() + key.slice(1)}`]?.(value);
      });
    }

    // Build server event
    const serverEvent = new ServerEvent()
      .setEventName(params.eventName)
      .setEventTime(currentTimestamp)
      .setUserData(userData)
      .setEventSourceUrl(params.sourceUrl)
      .setActionSource('website');

    // Add event ID for deduplication with browser pixel
    if (params.eventId) {
      serverEvent.setEventId(params.eventId);
    }

    // Add custom data if provided
    if (customData) {
      serverEvent.setCustomData(customData);
    }

    // Send event to Meta
    const eventsData = [serverEvent];
    const eventRequest = new EventRequest(accessToken, pixelId)
      .setEvents(eventsData);

    const response = await eventRequest.execute();

    console.log('[Meta CAPI] Event sent successfully:', {
      eventName: params.eventName,
      eventId: params.eventId,
      response: response
    });

    return true;
  } catch (error) {
    console.error('[Meta CAPI] Error sending event:', error);
    return false;
  }
}

/**
 * Track PageView event via CAPI
 */
export async function trackPageView(params: {
  sourceUrl: string;
  userAgent?: string;
  ipAddress?: string;
  fbp?: string;
  fbc?: string;
  eventId?: string;
}): Promise<boolean> {
  return sendMetaEvent({
    eventName: 'PageView',
    ...params
  });
}

/**
 * Track Lead event via CAPI
 */
export async function trackLead(params: {
  sourceUrl: string;
  userAgent?: string;
  ipAddress?: string;
  fbp?: string;
  fbc?: string;
  eventId?: string;
  customData?: Record<string, any>;
}): Promise<boolean> {
  return sendMetaEvent({
    eventName: 'Lead',
    ...params
  });
}

/**
 * Track Contact event via CAPI
 */
export async function trackContact(params: {
  sourceUrl: string;
  userAgent?: string;
  ipAddress?: string;
  fbp?: string;
  fbc?: string;
  eventId?: string;
  customData?: Record<string, any>;
}): Promise<boolean> {
  return sendMetaEvent({
    eventName: 'Contact',
    ...params
  });
}
