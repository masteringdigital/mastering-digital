import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { blogCategories, blogPosts } from './drizzle/schema.ts';
import { eq, like } from 'drizzle-orm';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

// Find test category
console.log('Finding test category...');
const [testCategory] = await db.select().from(blogCategories).where(like(blogCategories.name, '%Test%'));

if (testCategory) {
  console.log('Found test category:', testCategory.name, 'ID:', testCategory.id);
  
  // Delete test posts in this category
  console.log('Deleting test posts in category...');
  const deletedPosts = await db.delete(blogPosts).where(eq(blogPosts.categoryId, testCategory.id));
  console.log('Deleted test posts');
  
  // Delete test category
  console.log('Deleting test category...');
  await db.delete(blogCategories).where(eq(blogCategories.id, testCategory.id));
  console.log('Deleted test category');
} else {
  console.log('No test category found');
}

// Also delete any test posts by title
console.log('Deleting any remaining test posts...');
const testPosts = await db.select().from(blogPosts).where(like(blogPosts.title, '%Test%'));
console.log('Found', testPosts.length, 'test posts');

for (const post of testPosts) {
  console.log('Deleting test post:', post.title);
  await db.delete(blogPosts).where(eq(blogPosts.id, post.id));
}

await connection.end();
console.log('Done!');
