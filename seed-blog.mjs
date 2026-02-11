import { drizzle } from 'drizzle-orm/mysql2';
import { blogCategories, blogPosts } from './drizzle/schema.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = drizzle(process.env.DATABASE_URL);

// Blog post metadata
const blogMetadata = {
  "5 Ways to Get More Leads for Kitchen Bathroom Remodeling Companies": {
    slug: "5-ways-get-more-leads-kitchen-bathroom-remodeling",
    excerpt: "Discover five proven strategies to generate more leads for your kitchen and bathroom remodeling company, including SEO, PPC, social media, email marketing, and traditional advertising."
  },
  "Foolproof Ways to Get More 5 Star Reviews for Your Kitchen Bathroom Remodeling Business": {
    slug: "foolproof-ways-get-5-star-reviews-kitchen-bathroom",
    excerpt: "Learn the most effective strategies to encourage satisfied customers to leave 5-star reviews for your remodeling business."
  },
  "Getting Qualified Leads Through SEO The Power of Keywords": {
    slug: "getting-qualified-leads-seo-power-keywords",
    excerpt: "Understand how to leverage SEO and strategic keyword targeting to attract qualified leads for your remodeling company."
  },
  "Hiring a Marketing Agency for Your Kitchen Bathroom Remodeling Business Factors to Consider": {
    slug: "hiring-marketing-agency-kitchen-bathroom-remodeling",
    excerpt: "A comprehensive guide to evaluating and selecting the right marketing agency for your kitchen and bathroom remodeling business."
  },
  "Image Based Inbound Marketing for Kitchen and Bathroom Remodeling Companies": {
    slug: "image-based-inbound-marketing-kitchen-bathroom",
    excerpt: "Discover how to leverage visual content and image-based inbound marketing to attract and engage potential customers."
  },
  "Is Email And SMS Marketing Still Relevant For Kitchen And Bathroom Remodeling Companies": {
    slug: "email-sms-marketing-kitchen-bathroom-remodeling",
    excerpt: "Explore the continued relevance and effectiveness of email and SMS marketing for remodeling companies in today's digital landscape."
  },
  "Is Ranking in SEO Important for Kitchen and Bath Remodeling Companies": {
    slug: "is-seo-ranking-important-kitchen-bath-remodeling",
    excerpt: "Learn why SEO rankings are crucial for kitchen and bathroom remodeling companies and how to improve your online visibility."
  }
};

async function seedBlog() {
  try {
    console.log('Starting blog seeding...');
    
    // Use existing category ID (1)
    const categoryId = 1;
    console.log(`Using category ID: ${categoryId}`);
    
    // Read blog content from JSON file
    const contentData = JSON.parse(fs.readFileSync('/tmp/blog_content.json', 'utf-8'));
    
    // Create blog posts
    let postCount = 0;
    for (const [titleKey, content] of Object.entries(contentData)) {
      // Extract clean title from key
      const cleanTitle = titleKey.replace(/ \d+$/, '');
      const metadata = blogMetadata[cleanTitle];
      
      if (!metadata) {
        console.warn(`⚠ No metadata found for: ${cleanTitle}`);
        continue;
      }
      
      try {
        await db.insert(blogPosts).values({
          categoryId,
          title: cleanTitle,
          slug: metadata.slug,
          excerpt: metadata.excerpt,
          content,
          author: 'Mastering Digital',
          order: postCount,
          isPublished: true,
          publishedAt: new Date(),
        });
        
        postCount++;
        console.log(`✓ Created post: ${cleanTitle}`);
      } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          console.log(`⊘ Post already exists: ${cleanTitle}`);
        } else {
          throw err;
        }
      }
    }
    
    console.log(`\n✅ Blog seeding complete! Created ${postCount} posts.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seedBlog();
