import fetch from 'node-fetch';

const API_URL = 'http://localhost:3000/api/trpc';

const blogPosts = [
  {
    categoryId: 1,
    title: 'Lead Generation Strategies for Home Services Companies',
    slug: 'lead-generation-strategies-home-services',
    excerpt: 'Discover proven strategies to generate qualified leads for home services businesses using LSA, Google Ads, social media, and systematic follow-up systems.',
    content: `In the home services industry, lead generation isn't just about getting phone calls—it's about attracting qualified prospects who are ready to hire and willing to pay your rates.

## Understanding Your Lead Sources

Home services companies typically generate leads from five primary channels: Google Local Services Ads (LSA), Google Search Ads, Facebook and Instagram advertising, organic search traffic, and referrals.

## Optimizing Your Google Local Services Ads

Google LSA remains one of the highest-converting channels for home services. These ads appear at the very top of Google search results for local service queries.

## Building a Lead Capture System

The best lead source in the world won't help if you don't have a system to follow up with leads. Most home services companies lose 50-70% of potential business.

## Converting Leads Into Appointments

Getting the lead is only half the battle. Converting that lead into a booked appointment is where most home services companies struggle.

## Leveraging Social Proof and Reviews

Social proof is incredibly powerful in home services. Customers want to see that others have had positive experiences with your company.

## Creating Referral Incentives

Your existing customers are your best source of new business. Implement a referral program that rewards customers for sending their friends and family.

## Measuring and Optimizing

Track every lead source, conversion rate, and customer acquisition cost. Use this data to continuously optimize your marketing spend.

## Conclusion

Successful lead generation for home services companies requires a strategic, multi-channel approach combined with excellent follow-up and conversion systems.`,
    featuredImageUrl: 'https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/3U2nSU5WS6MGxpObz4vErs-img-1_1770937167000_na1fn_YmxvZy1sZWFkLWdlbmVyYXRpb24tc3RyYXRlZ2llcw.png',
    author: 'Michael Schott',
    isPublished: true,
  },
  {
    categoryId: 2,
    title: 'SEO Optimization for E-commerce Businesses',
    slug: 'seo-optimization-ecommerce-businesses',
    excerpt: 'Master SEO for e-commerce with strategies for product pages, category optimization, content marketing, and building authority to drive organic traffic.',
    content: `For e-commerce businesses, organic search traffic represents one of the most valuable and cost-effective customer acquisition channels.

## The E-commerce SEO Foundation

E-commerce SEO success starts with technical excellence. Your site must load quickly, be mobile-responsive, and have a clear, logical structure.

## Keyword Research for E-commerce

Effective e-commerce SEO starts with understanding what your customers are searching for. Unlike traditional businesses that target a few dozen high-value keywords, e-commerce sites typically target thousands.

## Product Page Optimization

Each product page is an opportunity to rank for multiple keywords and convert a searcher into a customer.

## Category and Collection Pages

Category pages are often overlooked in e-commerce SEO, but they represent significant ranking opportunities.

## Building Authority Through Content

While product pages generate transactional traffic, content pages generate informational traffic that builds authority and trust.

## Link Building and Authority

Links remain one of the most important ranking factors for e-commerce sites.

## Measuring and Reporting

Track organic traffic, keyword rankings, and conversion rates for your top pages.

## Conclusion

E-commerce SEO requires a comprehensive approach that combines technical excellence, strategic keyword targeting, high-quality content, and continuous optimization.`,
    featuredImageUrl: 'https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/3U2nSU5WS6MGxpObz4vErs-img-2_1770937178000_na1fn_YmxvZy1zZW8tb3B0aW1pemF0aW9u.png',
    author: 'Michael Schott',
    isPublished: true,
  },
  {
    categoryId: 5,
    title: 'Paid Advertising Strategy Guide',
    slug: 'paid-advertising-strategy-guide',
    excerpt: 'Master paid advertising with strategies for Google Ads, Facebook Ads, landing pages, and continuous optimization to maximize ROI and scale profitably.',
    content: `Paid advertising is the fastest way to generate qualified leads and drive sales. Unlike organic channels that take months to produce results, paid advertising can generate leads within hours.

## Understanding Your Customer Acquisition Cost

Before launching any paid campaign, you need to understand your unit economics. Calculate your average order value, gross margin, and customer lifetime value.

## Channel Selection and Allocation

Different channels serve different purposes in your marketing funnel. Google Search Ads are ideal for capturing high-intent customers actively searching for your solution.

## Google Search Ads Strategy

Google Search Ads work by bidding on keywords related to your business. When someone searches for those keywords, your ad appears at the top of the search results.

## Facebook and Instagram Ads Strategy

Facebook and Instagram Ads are ideal for reaching people who might not be actively searching for your solution but would be interested if they saw the right message.

## Landing Page Optimization

Your paid ads are only as good as the landing page they send people to. A poorly designed landing page will waste your ad spend regardless of how good your ads are.

## Conversion Tracking and Attribution

You can't optimize what you don't measure. Implement proper conversion tracking so you know exactly which ads, keywords, and campaigns are driving conversions and revenue.

## A/B Testing and Optimization

Continuous optimization is what separates profitable campaigns from money-losing ones. Implement a systematic A/B testing process where you test one variable at a time.

## Conclusion

Profitable paid advertising requires a strategic approach that starts with understanding your unit economics, selecting the right channels, creating compelling ads and landing pages, and continuously testing and optimizing.`,
    featuredImageUrl: 'https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/3U2nSU5WS6MGxpObz4vErs-img-3_1770937166000_na1fn_YmxvZy1wYWlkLWFkcy1zdHJhdGVneQ.png',
    author: 'Michael Schott',
    isPublished: true,
  },
];

async function addBlogPosts() {
  console.log('Starting to add blog posts via tRPC...');
  
  for (const post of blogPosts) {
    try {
      // Call the tRPC endpoint to create blog post
      const response = await fetch(`${API_URL}/blog.createPost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          json: post,
        }),
      });

      const result = await response.json();
      
      if (result.error) {
        console.error(`❌ Error creating post "${post.title}":`, result.error);
      } else {
        console.log(`✅ Created post: "${post.title}"`);
      }
    } catch (error) {
      console.error(`❌ Failed to create post "${post.title}":`, error.message);
    }
  }

  console.log('✅ Finished adding blog posts');
}

addBlogPosts();
