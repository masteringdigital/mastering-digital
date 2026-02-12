import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, 'db.sqlite');

const db = new Database(dbPath);

// Blog posts data
const blogPosts = [
  {
    slug: 'lead-generation-strategies-home-services',
    title: 'Lead Generation Strategies for Home Services Companies',
    excerpt: 'Discover proven strategies to generate qualified leads for home services businesses using LSA, Google Ads, social media, and systematic follow-up systems.',
    content: `In the home services industry, lead generation isn't just about getting phone calls—it's about attracting qualified prospects who are ready to hire and willing to pay your rates. The difference between a thriving home services business and one that struggles often comes down to a consistent, strategic approach to lead generation.

Over the past decade working with hundreds of home services companies, I've seen what works and what doesn't. The most successful companies don't rely on a single lead source. Instead, they build a diversified system that captures leads across multiple channels while maintaining quality and cost-efficiency.

## Understanding Your Lead Sources

Home services companies typically generate leads from five primary channels: Google Local Services Ads (LSA), Google Search Ads, Facebook and Instagram advertising, organic search traffic, and referrals. Each channel serves a different purpose in your overall strategy. LSA provides immediate visibility to high-intent customers actively searching for your service in your area. Google Search Ads capture broader search volume and allow for sophisticated targeting based on keywords and location. Social media advertising builds brand awareness and captures leads from people in the early stages of their decision-making process.

The most effective approach combines these channels strategically. For a typical home services company, we recommend allocating approximately 40% of your marketing budget to LSA and Google Ads, 30% to social media advertising, 20% to organic search optimization, and 10% to referral incentives and retention marketing.

## Optimizing Your Google Local Services Ads

Google LSA remains one of the highest-converting channels for home services. These ads appear at the very top of Google search results for local service queries and show your business name, ratings, and response time. Customers can message you directly through Google, making the friction incredibly low.

To maximize LSA performance, ensure your profile is completely filled out with high-quality photos of your work, detailed service descriptions, and your service area clearly defined. Respond to every message within one hour—Google's algorithm rewards fast response times by showing your ads more frequently. Maintain a rating above 4.5 stars by consistently delivering excellent service and following up with customers to request reviews.

## Building a Lead Capture System

The best lead source in the world won't help if you don't have a system to follow up with leads. Most home services companies lose 50-70% of potential business because they don't follow up quickly or systematically. Implement a CRM system that automatically routes leads to the right team member, tracks all communication, and sends automatic follow-up reminders.

When a lead comes in, your response should be immediate. Research shows that contacting a lead within five minutes increases the likelihood of conversion by 100x compared to waiting an hour. Use automation to acknowledge receipt of the inquiry immediately, then have a human follow up with a personalized message within 15 minutes.

## Converting Leads Into Appointments

Getting the lead is only half the battle. Converting that lead into a booked appointment is where most home services companies struggle. Your follow-up messaging should be brief, professional, and focused on solving the customer's problem rather than selling your services.

Instead of launching into a sales pitch, ask clarifying questions. "I see you're interested in HVAC repair. Is this for an emergency situation or routine maintenance?" This shows you're listening and helps you understand their urgency level. For emergency situations, offer same-day or next-day service. For routine work, provide a specific time window for an estimate appointment.

## Leveraging Social Proof and Reviews

Social proof is incredibly powerful in home services. Customers want to see that others have had positive experiences with your company. Actively collect reviews from every completed job. Make it easy for customers by sending a text message with a direct link to your review page immediately after the job is complete.

Display your reviews prominently on your website and in your advertising. Google Ads and Facebook Ads both allow you to showcase customer reviews and ratings directly in the ad creative. This increases click-through rates and improves conversion rates significantly.

## Creating Referral Incentives

Your existing customers are your best source of new business. Implement a referral program that rewards customers for sending their friends and family to your business. A simple $50-100 referral bonus for each customer referred typically generates a strong response without cutting too deeply into your margins.

Make the referral process simple. Provide customers with a unique referral link they can share, or simply ask them to mention your business by name. Track referrals carefully and ensure you reward them promptly.

## Measuring and Optimizing

Track every lead source, conversion rate, and customer acquisition cost. Use this data to continuously optimize your marketing spend. If Google LSA is generating leads at $15 per lead with a 40% conversion rate, but Facebook is generating leads at $8 per lead with a 25% conversion rate, you might want to shift budget accordingly.

However, don't optimize for cost per lead alone. A $15 lead that converts into a $5,000 job is far better than a $8 lead that converts into a $500 job. Focus on customer acquisition cost relative to average job value and lifetime customer value.

## Conclusion

Successful lead generation for home services companies requires a strategic, multi-channel approach combined with excellent follow-up and conversion systems. By implementing these strategies—optimizing your LSA profile, building a systematic lead capture and follow-up process, leveraging social proof, and continuously measuring and optimizing—you'll create a consistent pipeline of qualified leads that converts into steady, predictable revenue growth.`,
    categoryId: 1, // Home Services
    featuredImageUrl: 'https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/3U2nSU5WS6MGxpObz4vErs-img-1_1770937167000_na1fn_YmxvZy1sZWFkLWdlbmVyYXRpb24tc3RyYXRlZ2llcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ2RvTXpNTE1YN1JwZXpNeGdRU2VZTi9zYW5kYm94LzNVMm5TVTVXUzZNR3hwT2J6NHZFcnMtaW1nLTFfMTc3MDkzNzE2NzAwMF9uYTFmbl9ZbXh2Ynkxc1pXRmtMV2RsYm1WeVlYUnBiMjR0YzNSeVlYUmxaMmxsY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=szdIBwUUvpZKcoMbHDFHZ1dthtGjYz9Qqa~tDhfqNF0TOSMjtFiozU~yWC1Ig6PFa-GJvvC8rRsHtIW0hwiQJrdIyUwpEVf9ffLqg0nLmhYAhxAOjUiISRQ1KM0g43huX9HHe3fwR~Vmu7K-6ZvKJOiqfNpWw-tMuQpiFi3svBLPujDBPNA2XMP3JVHG0TpWdh8GJ66RZIaZByhFOLErlff6s6McDb6s8UigWspBCQsCOlJK9jGAFJxUhbPOL6gSaIL7UIo9vA2-i72rjG8AgzNMScbSBgiLg0N0Z4-e-NXvaMLbQZ7ae2F8VwbEy~UJ49pdND3P~~-037XeZnscug__',
    author: 'Michael Schott',
    readTime: 8,
  },
  {
    slug: 'seo-optimization-ecommerce-businesses',
    title: 'SEO Optimization for E-commerce Businesses',
    excerpt: 'Master SEO for e-commerce with strategies for product pages, category optimization, content marketing, and building authority to drive organic traffic.',
    content: `For e-commerce businesses, organic search traffic represents one of the most valuable and cost-effective customer acquisition channels. Unlike paid advertising, which stops generating traffic the moment you stop paying, SEO creates a compounding asset that generates traffic month after month with minimal ongoing investment.

However, e-commerce SEO is fundamentally different from traditional SEO. You're not just optimizing for rankings—you're optimizing for conversions, average order value, and customer lifetime value. This requires a strategic approach that goes beyond basic keyword optimization.

## The E-commerce SEO Foundation

E-commerce SEO success starts with technical excellence. Your site must load quickly, be mobile-responsive, and have a clear, logical structure that search engines can easily crawl and understand. Page speed is particularly critical for e-commerce sites. Research shows that every one-second delay in page load time results in a 7% reduction in conversions. If your site takes five seconds to load instead of two seconds, you're losing approximately 21% of potential sales.

Implement lazy loading for images, use a content delivery network (CDN) to serve assets from locations near your customers, and minimize CSS and JavaScript. Use tools like Google PageSpeed Insights and GTmetrix to identify specific performance bottlenecks and address them systematically.

Mobile optimization is equally critical. Over 60% of e-commerce traffic now comes from mobile devices, yet many e-commerce sites still prioritize desktop experience. Ensure your site is fully responsive, with touch-friendly navigation, readable text without zooming, and fast-loading mobile pages.

## Keyword Research for E-commerce

Effective e-commerce SEO starts with understanding what your customers are searching for. Unlike traditional businesses that target a few dozen high-value keywords, e-commerce sites typically target thousands of keywords across multiple categories and product types.

Conduct keyword research at multiple levels. Start with broad category keywords like "running shoes" or "office chairs." Then research subcategory keywords like "women's trail running shoes" or "ergonomic office chairs for back pain." Finally, research long-tail keywords and question-based queries like "best running shoes for flat feet" or "how to choose an office chair."

Use tools like Ahrefs, SEMrush, or Moz to identify search volume, competition level, and commercial intent for each keyword. Prioritize keywords with high search volume, low competition, and high commercial intent. These keywords represent the sweet spot where you can realistically rank and where searchers are actively looking to buy.

## Product Page Optimization

Each product page is an opportunity to rank for multiple keywords and convert a searcher into a customer. Optimize each product page with a unique, descriptive title that includes your primary keyword naturally. Instead of "Running Shoes," use "Women's Trail Running Shoes for Flat Feet - Lightweight & Supportive."

Write compelling product descriptions that address customer pain points and questions. Instead of just listing features, explain benefits. "Lightweight design reduces foot fatigue on long runs" is more compelling than "Weighs 8 ounces." Include high-quality product images from multiple angles, and consider adding a short video showing the product in use.

Include customer reviews and ratings prominently. Search engines favor pages with user-generated content and social proof. Encourage customers to leave reviews by sending a follow-up email after purchase with a direct link to your review page.

## Category and Collection Pages

Category pages are often overlooked in e-commerce SEO, but they represent significant ranking opportunities. Optimize each category page with a unique, keyword-rich title and meta description. Write a 200-300 word category description that explains what products are in that category, their benefits, and who they're for.

Include internal links to related categories and featured products. This helps search engines understand your site structure and distributes link equity throughout your site. Use breadcrumb navigation to make it clear to both users and search engines how pages relate to each other.

## Building Authority Through Content

While product pages generate transactional traffic, content pages generate informational traffic that builds authority and trust. Create a blog section on your site with articles that address common questions and pain points related to your products.

If you sell running shoes, create articles like "How to Choose Running Shoes Based on Your Gait" or "The Best Running Shoes for Different Types of Terrain." These articles target informational keywords that might not convert immediately but build authority and trust. Many of these readers will eventually return to your site to purchase.

Link from these content pages to relevant product pages. This passes link equity to your product pages and helps search engines understand the relationship between your content and your products.

## Link Building and Authority

Links remain one of the most important ranking factors for e-commerce sites. Focus on building high-quality links from authoritative websites in your industry. Reach out to bloggers and journalists who cover your industry and offer them exclusive discounts or early access to new products in exchange for coverage and links.

Create link-worthy content that naturally attracts links. Comprehensive guides, original research, and unique data visualizations are more likely to be linked to than standard product pages. For example, if you sell fitness equipment, publish an annual report on fitness trends with original data and insights. This type of content naturally attracts links from fitness blogs and publications.

## Conversion Rate Optimization

SEO traffic is only valuable if it converts. Implement conversion rate optimization (CRO) strategies to maximize the value of your organic traffic. Use A/B testing to optimize product page layouts, call-to-action buttons, and checkout processes.

Implement exit-intent popups that offer a discount or free shipping to visitors who are about to leave without purchasing. Use retargeting ads to show ads to visitors who viewed products but didn't purchase. Simplify your checkout process to reduce friction and cart abandonment.

## Measuring and Reporting

Track organic traffic, keyword rankings, and conversion rates for your top pages. Use Google Analytics to understand which pages generate the most traffic and conversions. Use Google Search Console to identify which keywords drive traffic to your site and which pages have the most impressions.

Create a dashboard that tracks key metrics monthly. Monitor changes in organic traffic, average order value from organic traffic, and return on investment from your SEO efforts. Use this data to continuously optimize your strategy and allocate resources to the highest-impact activities.

## Conclusion

E-commerce SEO requires a comprehensive approach that combines technical excellence, strategic keyword targeting, high-quality content, and continuous optimization. By implementing these strategies—optimizing site speed and mobile experience, conducting thorough keyword research, optimizing product and category pages, building authority through content, and continuously measuring and optimizing—you'll create a sustainable source of high-converting organic traffic that drives consistent revenue growth.`,
    categoryId: 2, // E-commerce
    featuredImageUrl: 'https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/3U2nSU5WS6MGxpObz4vErs-img-2_1770937178000_na1fn_YmxvZy1zZW8tb3B0aW1pemF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ2RvTXpNTE1YN1JwZXpNeGdRU2VZTi9zYW5kYm94LzNVMm5TVTVXUzZNR3hwT2J6NHZFcnMtaW1nLTJfMTc3MDkzNzE3ODAwMF9uYTFmbl9ZbXh2WnkxelpXOHRiM0IwYVcxcGVtRjBhVzl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZXFGhVyZfR7fjjWgcC84Ayhd6JG3RINIOAKVcr7eFpBpslxynM4TzsyncoQq-7-jxi1tpVx8uHNWnQCOmUsBIImV2fJTdGeJiNINhsJR627J~xLal1fVQvkogyBh8YQblC~yst2NobDsskbP7JCimaFUSBt30DiHcfASO9lhdpaFKRw2qbJ9cdi-XPQEowu~wyfyBALqRlMXdcb5H7PTenyzQDNAXVi7I0kDZUFwJgXb3ubQXYFy26rm8zNzOoGkOQKK1wstGKLgffsfenSnnFpEsdrnq-PkgmIpFbslSi8OIq5zhaGbuL9JlX3lGQ0~8kf5Pi25ocXmX4qMqIOTIA__',
    author: 'Michael Schott',
    readTime: 9,
  },
  {
    slug: 'paid-advertising-strategy-guide',
    title: 'Paid Advertising Strategy Guide',
    excerpt: 'Master paid advertising with strategies for Google Ads, Facebook Ads, landing pages, and continuous optimization to maximize ROI and scale profitably.',
    content: `Paid advertising is the fastest way to generate qualified leads and drive sales. Unlike organic channels that take months to produce results, paid advertising can generate leads within hours of launching a campaign. However, many businesses waste thousands of dollars on poorly structured, unoptimized paid campaigns.

The difference between a profitable paid advertising campaign and one that hemorrhages money comes down to strategy, execution, and continuous optimization. This guide walks you through the framework we use to build profitable paid campaigns for clients across multiple industries.

## Understanding Your Customer Acquisition Cost

Before launching any paid campaign, you need to understand your unit economics. Calculate your average order value, gross margin, and customer lifetime value. Then work backward to determine your maximum allowable customer acquisition cost (CAC).

If your average order value is $500 and your gross margin is 50%, you have $250 to spend on acquiring that customer and still break even. However, you don't want to break even—you want to profit. A healthy business typically targets a CAC of 20-30% of the first purchase value. In this example, you'd target a CAC of $50-75 per customer.

This calculation determines which channels and strategies make sense for your business. If your unit economics only support a $25 CAC, you can't afford to run Facebook ads at $50 per lead. You need to focus on lower-cost channels like organic search or referrals.

## Channel Selection and Allocation

Different channels serve different purposes in your marketing funnel. Google Search Ads are ideal for capturing high-intent customers actively searching for your solution. Facebook and Instagram Ads are ideal for building awareness and reaching people in the early stages of their buying journey. YouTube Ads are ideal for storytelling and building brand awareness. LinkedIn Ads are ideal for B2B lead generation.

Allocate your budget based on your business model and customer acquisition strategy. For most businesses, we recommend starting with Google Search Ads, which typically generate the highest-quality leads. Once you've optimized your Google campaigns and have consistent profitability, expand to other channels.

## Google Search Ads Strategy

Google Search Ads work by bidding on keywords related to your business. When someone searches for those keywords, your ad appears at the top of the search results. You only pay when someone clicks your ad.

Start by identifying the keywords your customers are searching for. Use tools like Google Keyword Planner, SEMrush, or Ahrefs to identify high-intent keywords with decent search volume. Focus on keywords with commercial intent—keywords where people are actively looking to buy.

Organize your keywords into tightly themed ad groups. Each ad group should contain 5-20 related keywords and have a unique ad that speaks directly to those keywords. This improves your Quality Score, which reduces your cost per click and improves your ad position.

Write compelling ad copy that addresses the customer's pain point and clearly states your value proposition. Instead of generic copy like "Buy Our Product Today," use specific, benefit-driven copy like "Save 40% on Your First Order - Free Shipping Included."

## Facebook and Instagram Ads Strategy

Facebook and Instagram Ads are ideal for reaching people who might not be actively searching for your solution but would be interested if they saw the right message. These platforms allow you to target people based on interests, behaviors, demographics, and even their past interactions with your website.

Start by building a custom audience of people who have visited your website or engaged with your business. These people already know who you are, so your ads can be more direct and sales-focused. Offer them a specific discount or promotion to encourage them to complete a purchase.

Next, create lookalike audiences based on your best customers. Facebook analyzes the characteristics of your best customers and finds similar people who are likely to be interested in your product. These audiences typically have lower conversion costs than cold audiences.

Finally, create interest-based audiences targeting people interested in topics related to your business. These are cold audiences, so your messaging should focus on building awareness and interest rather than making an immediate sale.

## Landing Page Optimization

Your paid ads are only as good as the landing page they send people to. A poorly designed landing page will waste your ad spend regardless of how good your ads are.

Create dedicated landing pages for each campaign or ad group. Don't send people to your homepage—send them to a page that continues the conversation started in your ad. If your ad talks about "Save 40% on Your First Order," your landing page should prominently display that offer.

Keep your landing page focused on a single conversion action. Whether that's making a purchase, signing up for a free trial, or requesting a demo, make it clear what you want the visitor to do. Remove navigation menus and other distractions that might tempt visitors to leave your page.

Use social proof elements like customer testimonials, ratings, and trust badges to build credibility. Include a clear, compelling call-to-action button that stands out visually from the rest of the page.

## Conversion Tracking and Attribution

You can't optimize what you don't measure. Implement proper conversion tracking so you know exactly which ads, keywords, and campaigns are driving conversions and revenue.

Set up conversion tracking in Google Ads and Facebook Ads Manager. Track not just clicks, but actual conversions—purchases, leads, or whatever your business considers a conversion. This allows you to calculate your cost per conversion and return on ad spend (ROAS).

Implement a CRM system that tracks customers from first touch through purchase. This helps you understand which channels and campaigns are driving the highest-quality customers with the best lifetime value.

## A/B Testing and Optimization

Continuous optimization is what separates profitable campaigns from money-losing ones. Implement a systematic A/B testing process where you test one variable at a time and measure the results.

Test different ad copy variations to see which messaging resonates best with your audience. Test different landing page layouts, headlines, and call-to-action buttons. Test different audience segments to identify which audiences have the lowest cost per conversion.

Run each test for at least two weeks or until you have at least 100 conversions. This ensures your results are statistically significant and not just random variation.

## Scaling Profitable Campaigns

Once you've identified a profitable campaign, the next step is scaling it. Increase your budget gradually—typically 10-20% per week—and monitor your cost per conversion and ROAS carefully. As you scale, your cost per conversion might increase slightly due to audience saturation, but it should remain profitable.

Expand to new keywords, audiences, and placements that are similar to your best performers. If a particular keyword is driving conversions at a 5% conversion rate, look for similar keywords that might perform similarly.

## Conclusion

Profitable paid advertising requires a strategic approach that starts with understanding your unit economics, selecting the right channels, creating compelling ads and landing pages, and continuously testing and optimizing. By implementing these strategies—calculating your maximum allowable CAC, starting with high-intent channels like Google Search Ads, creating dedicated landing pages, implementing proper conversion tracking, and systematically testing and optimizing—you'll build paid campaigns that generate consistent, profitable growth.`,
    categoryId: 5, // Paid Ads
    featuredImageUrl: 'https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/3U2nSU5WS6MGxpObz4vErs-img-3_1770937166000_na1fn_YmxvZy1wYWlkLWFkcy1zdHJhdGVneQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ2RvTXpNTE1YN1JwZXpNeGdRU2VZTi9zYW5kYm94LzNVMm5TVTVXUzZNR3hwT2J6NHZFcnMtaW1nLTNfMTc3MDkzNzE2NjAwMF9uYTFmbl9ZbXh2Ynkxd1lXbGtMV0ZrY3kxemRISmhkR1ZuZVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UcYYH078NVpRz7rJitnBZyg~XarcmJIAWW-e2skbF8gbCD71QlEGvHF0-wh3QJ6inEjY0zgZ48SOG88zUVGVfM7ZHvYWKj-kCXy96eedqc-ixia2Pa3Vfj5vuWrQ8lBHQahI7XXie1zxclbD-wmqOwAdWzeK-PLTnhp~r7Ag652whc9NQifqPRj6NU-MCNMWLIg9I9igS65Srj1aMbPA862oyU5YO0QYsI32o~AtsLPSkGkiOTnWIWPExQZtkR5Vtcfl-pkr3pvz2A-Dzeb3AJMNlMkSUrEVvB0s-j9IB9iZp8KFMJkrce7p9ueLKPnnuoj5q31ygp-XBKja0eaRKQ__',
    author: 'Michael Schott',
    readTime: 10,
  },
];

// Insert blog posts
const insertPost = db.prepare(`
  INSERT INTO blog_posts (slug, title, excerpt, content, category_id, featured_image_url, author, read_time, created_at, updated_at)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
`);

try {
  db.exec('BEGIN TRANSACTION');
  
  for (const post of blogPosts) {
    insertPost.run(
      post.slug,
      post.title,
      post.excerpt,
      post.content,
      post.categoryId,
      post.featuredImageUrl,
      post.author,
      post.readTime
    );
  }
  
  db.exec('COMMIT');
  console.log(`✅ Successfully inserted ${blogPosts.length} blog posts into the database`);
} catch (error) {
  db.exec('ROLLBACK');
  console.error('❌ Error inserting blog posts:', error.message);
  process.exit(1);
}

db.close();
