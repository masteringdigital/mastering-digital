import { describe, it, expect, beforeAll } from 'vitest';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/trpc';

describe('CMS Testimonials CRUD', () => {
  let caller: ReturnType<typeof appRouter.createCaller>;
  let testTestimonialId: number;

  beforeAll(() => {
    // Create a mock admin context
    const mockContext: TrpcContext = {
      req: {} as any,
      res: {} as any,
      user: {
        id: 1,
        openId: 'test-admin',
        name: 'Test Admin',
        email: 'admin@test.com',
        role: 'admin',
        loginMethod: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      },
    };
    caller = appRouter.createCaller(mockContext);
  });

  it('should create a new testimonial', async () => {
    const result = await caller.cms.testimonials.create({
      clientName: 'John Doe',
      clientTitle: 'CEO',
      clientCompany: 'Acme Corp',
      testimonialText: 'Working with this team was amazing! They delivered exceptional results.',
      rating: 5,
      photoUrl: 'https://example.com/john.jpg',
      order: 1,
      isActive: true,
    });

    expect(result).toBeDefined();
    expect(result).toHaveProperty('id');
    expect(typeof result.id).toBe('number');
    testTestimonialId = result.id;
    console.log('Created testimonial with ID:', testTestimonialId);
  });

  it('should list all testimonials', async () => {
    const result = await caller.cms.testimonials.listAll();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('clientName');
    expect(result[0]).toHaveProperty('testimonialText');
  });

  it('should get active testimonials only', async () => {
    const result = await caller.cms.testimonials.list();

    expect(Array.isArray(result)).toBe(true);
    result.forEach(testimonial => {
      expect(testimonial.isActive).toBe(true);
    });
  });

  it('should get a single testimonial by id', async () => {
    const result = await caller.cms.testimonials.get(testTestimonialId);

    expect(result).toBeDefined();
    expect(result?.id).toBe(testTestimonialId);
    expect(result?.clientName).toBe('John Doe');
  });

  it('should update a testimonial', async () => {
    const result = await caller.cms.testimonials.update({
      id: testTestimonialId,
      clientName: 'Jane Doe',
      rating: 4,
    });

    expect(result).toBeDefined();
    expect(result.id).toBe(testTestimonialId);

    // Verify the update
    const updated = await caller.cms.testimonials.get(testTestimonialId);
    expect(updated?.clientName).toBe('Jane Doe');
    expect(updated?.rating).toBe(4);
  });

  it('should delete a testimonial', async () => {
    const result = await caller.cms.testimonials.delete(testTestimonialId);

    expect(result).toBeDefined();
    expect(result.success).toBe(true);

    // Verify deletion
    const deleted = await caller.cms.testimonials.get(testTestimonialId);
    expect(deleted).toBeNull();
  });

  it('should require admin role for create operation', async () => {
    const userContext: TrpcContext = {
      req: {} as any,
      res: {} as any,
      user: {
        id: 2,
        openId: 'test-user',
        name: 'Test User',
        email: 'user@test.com',
        role: 'user',
        loginMethod: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      },
    };
    const userCaller = appRouter.createCaller(userContext);

    await expect(
      userCaller.cms.testimonials.create({
        clientName: 'Test',
        testimonialText: 'Test testimonial',
      })
    ).rejects.toThrow('Admin access required');
  });
});
