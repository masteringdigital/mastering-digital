import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { blogCategories, blogPosts } from './drizzle/schema.ts';
import { eq } from 'drizzle-orm';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

// Create Marketing category
console.log('Creating Marketing category...');
const [marketingCategory] = await db.select().from(blogCategories).where(eq(blogCategories.slug, 'marketing'));

let categoryId;
if (marketingCategory) {
  console.log('Marketing category already exists');
  categoryId = marketingCategory.id;
} else {
  await db.insert(blogCategories).values({
    name: 'Marketing',
    slug: 'marketing',
    description: 'Marketing strategies and best practices for growing your business',
    order: 1,
    isActive: true,
  });
  
  const [newCategory] = await db.select().from(blogCategories).where(eq(blogCategories.slug, 'marketing'));
  categoryId = newCategory.id;
  console.log('Marketing category created with ID:', categoryId);
}

// Add SEO blog post
console.log('Adding SEO blog post...');
const slug = 'getting-qualified-leads-through-seo-power-of-keywords';
const [existingPost] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));

if (existingPost) {
  console.log('SEO blog post already exists');
} else {
  const content = `# Getting Qualified Leads Through SEO: The Power of Keywords

You've probably heard that using the right keywords is essential for SEO success. But what does that really mean? And how can you use keywords to get more qualified leads?

In this post, we'll explain what keywords are and why they're important for SEO. We'll also show you how to find the right keywords for your kitchen & bathroom remodeling business, and give you some tips on using them effectively.

So if you're ready to start generating more leads through SEO, keep reading! We'll teach you everything you need to know about keywords and SEO success.

## What Are Keywords?

When it comes to getting qualified leads through SEO, the power of keywords can't be underestimated. What are keywords, you ask? Simply put, keywords are the words and phrases that potential customers type into search engines when they're looking for information on a particular topic.

And when it comes to the kitchen and bathroom remodeling industry, there are a few key keywords that you definitely don't want to miss out on. Top keywords include "kitchen remodeling", "bathroom remodeling", "design-build", and "remodeler".

But that's just the beginning. To really rank high for these keywords, you'll also need to include words like "remodeling", "remodeler", "design-build", "kitchen remodeling", and "bathroom" in your website's title, meta descriptions, and header tags.

## The Importance of Targeting Qualified Leads

Your kitchen and bathroom remodeling company is only as successful as your leads. That's why it's so important to target qualified leads through SEO.

By identifying the right keywords, you can attract prospects who are already interested in remodeling their kitchen or bathroom. This way, you're not wasting time and money chasing leads that aren't a good fit for your business.

And SEO can help you get these valuable leads for free! So if you're looking to grow your remodeling business, make sure to focus on SEO and target the right keywords.

## What Are the Benefits of Using Keywords in SEO?

There are many benefits of using keywords in SEO. When done correctly, keywords can help to improve website visibility, bring in more qualified leads, and boost overall website traffic.

Here are five benefits of using keywords in SEO:

**Improved website visibility:** When you use the right keywords in your SEO strategy, you can improve your website's visibility and reach more people online. As a result, you'll see an increase in website traffic and more qualified leads.

**Increased website traffic:** By targeting the right keywords, you can bring in more traffic to your website. This will help to boost your business and increase your sales.

**More qualified leads:** Keywords help to target the right people who are looking for your products or services. As a result, you'll get more qualified leads from people who are actually interested in what you have to offer.

**Greater ROI:** SEO is a cost-effective way to promote your business online. When you use the right keywords, you'll see a greater ROI for your investment.

**Improved brand awareness:** Keywords can help to improve your brand awareness and reach a larger audience. As a result, you'll see an increase in brand awareness and popularity.

## How to Select the Right Keywords for Your Kitchen & Bathroom Remodeling Business

When it comes to generating leads for your kitchen & bathroom remodeling business, using the right keywords is essential. But how do you know which keywords to use? And once you've selected them, how do you make sure your website is optimized for those keywords?

Here are a few tips for selecting the right keywords:

### 1. Do Your Research

There are a number of tools and resources available online that can help you find the right keywords for your business. Google AdWords Keyword Tool and semrush.com are two good options.

### 2. Think About What Makes Your Business Unique

What are the specific services or products that you offer that no one else does? When potential customers search for those services or products, you want your website to show up as one of the top results.

### 3. Use Long-Tail Keywords

Long-tail keywords are specific phrases that people are more likely to enter into a search engine than a single word. They're also less competitive, so it's easier to rank your website higher for those keywords.

### 4. Optimize Your Website Content

Once you've selected the right keywords, make sure your website content is optimized for those keywords. This means using them throughout your website copy, including in the title tag, meta description, and header tags.

## Tips for Optimizing Your Website for Lead Conversion

When it comes to optimizing your website for lead conversion, there are a few key things to keep in mind. Here are five tips to help you get started:

**Make sure your website is easy to navigate.** The site's navigation should be simple and straightforward for all visitors.

**Make your website mobile-friendly.** More and more people are browsing the web on their smartphones and tablets, so it's important that your website looks good on all devices.

**Use clear and concise copy.** Don't overwhelm your visitors with too much information; keep it simple and easy to understand.

**Use attractive visuals.** A well-designed website will help capture the attention of visitors and encourage them to stay longer.

**Optimize your website for SEO.** This will help ensure that your website appears at the top of search engine results pages, which will bring more traffic to your site.

## Talk to Us

When selecting the right keywords, think about what your target audience is most likely to type into a search engine when they're looking for the types of products or services you offer. When you use the right keywords, you can attract more qualified leads to your business and increase your sales.

Are you tired of watching your competitors notch up the social shares and steal all your traffic? Worry not! Mastering Digital is here to help. Marketers have been lured into the dark world of black hat SEO for years. However, those years are behind us now.

We're here to teach you a different way of doing things to help increase your visibility and sales. In our Digital Marketing Masterclass, we'll conveniently teach you how to develop a cohesive marketing strategy using cutting-edge techniques and incorporating keywords in your content. Apply today to learn more.`;

  await db.insert(blogPosts).values({
    categoryId: categoryId,
    title: 'Getting Qualified Leads Through SEO: The Power of Keywords',
    slug: slug,
    excerpt: 'Learn how to use the right keywords to attract qualified leads through SEO for your kitchen and bathroom remodeling business.',
    content: content,
    author: 'Mastering Digital',
    order: 0,
    isPublished: true,
    publishedAt: new Date('2026-02-11'),
  });
  
  console.log('SEO blog post created successfully');
}

await connection.end();
console.log('Done!');
