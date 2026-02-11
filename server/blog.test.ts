import { describe, it, expect, beforeAll } from 'vitest';
import * as db from './db';
import { getDb } from './db';

describe('Blog Database Functions', () => {
  let categoryId: number;

  beforeAll(async () => {
    const dbInstance = await getDb();
    if (!dbInstance) {
      throw new Error('Database not initialized');
    }
  });

  describe('Blog Categories', () => {
    it('should get all blog categories', async () => {
      const categories = await db.getAllBlogCategories();
      expect(Array.isArray(categories)).toBe(true);
      expect(categories.length).toBeGreaterThan(0);
      
      if (categories.length > 0) {
        categoryId = categories[0].id;
      }
    });

    it('should get blog category by slug', async () => {
      const categories = await db.getAllBlogCategories();
      if (categories.length > 0) {
        const category = await db.getBlogCategoryBySlug(categories[0].slug);
        expect(category).toBeDefined();
        expect(category?.slug).toBe(categories[0].slug);
      }
    });

    it('should get blog category by ID', async () => {
      if (!categoryId) {
        expect(true).toBe(true);
        return;
      }

      const category = await db.getBlogCategoryById(categoryId);
      expect(category).toBeDefined();
      expect(category?.id).toBe(categoryId);
    });
  });

  describe('Blog Posts', () => {
    it('should get all blog posts', async () => {
      const posts = await db.getAllBlogPosts();
      expect(Array.isArray(posts)).toBe(true);
      posts.forEach(post => {
        expect(post.isPublished).toBe(true);
      });
    });

    it('should get blog posts by category', async () => {
      const categories = await db.getAllBlogCategories();
      if (categories.length === 0) {
        expect(true).toBe(true);
        return;
      }

      const posts = await db.getBlogPostsByCategory(categories[0].id);
      expect(Array.isArray(posts)).toBe(true);
      
      posts.forEach(post => {
        expect(post.categoryId).toBe(categories[0].id);
        expect(post.isPublished).toBe(true);
      });
    });

    it('should get blog post by slug', async () => {
      const posts = await db.getAllBlogPosts();
      if (posts.length === 0) {
        expect(true).toBe(true);
        return;
      }

      const post = await db.getBlogPostBySlug(posts[0].slug);
      expect(post).toBeDefined();
      expect(post?.slug).toBe(posts[0].slug);
      expect(post?.title).toBe(posts[0].title);
    });

    it('should get blog post by ID', async () => {
      const posts = await db.getAllBlogPosts();
      if (posts.length === 0) {
        expect(true).toBe(true);
        return;
      }

      const post = await db.getBlogPostById(posts[0].id);
      expect(post).toBeDefined();
      expect(post?.id).toBe(posts[0].id);
    });

    it('should have blog posts with content', async () => {
      const posts = await db.getAllBlogPosts();
      if (posts.length === 0) {
        expect(true).toBe(true);
        return;
      }

      posts.forEach(post => {
        expect(post.title).toBeDefined();
        expect(post.title.length).toBeGreaterThan(0);
        expect(post.content).toBeDefined();
        expect(post.content.length).toBeGreaterThan(0);
        expect(post.slug).toBeDefined();
        expect(post.slug.length).toBeGreaterThan(0);
      });
    });

    it('should have blog posts with metadata', async () => {
      const posts = await db.getAllBlogPosts();
      if (posts.length === 0) {
        expect(true).toBe(true);
        return;
      }

      posts.forEach(post => {
        expect(post.author).toBeDefined();
        expect(post.categoryId).toBeGreaterThan(0);
        expect(post.isPublished).toBe(true);
      });
    });
  });
});
