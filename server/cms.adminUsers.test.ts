import { describe, it, expect } from 'vitest';
import { appRouter } from './routers';
import bcrypt from 'bcryptjs';

describe('Admin Users Management', () => {
  const caller = appRouter.createCaller({ user: { role: 'admin' } } as any);

  it('should hash passwords correctly', async () => {
    const password = 'testPassword123';
    const hash = await bcrypt.hash(password, 10);
    const isValid = await bcrypt.compare(password, hash);
    expect(isValid).toBe(true);
  });

  it('should reject weak passwords', async () => {
    try {
      await caller.cms.adminUsers.create({
        username: 'testuser',
        password: '123', // Too short
      });
      expect.fail('Should have thrown an error for weak password');
    } catch (error: any) {
      expect(error.message).toContain('String must contain at least 6 character(s)');
    }
  });

  it('should reject short usernames', async () => {
    try {
      await caller.cms.adminUsers.create({
        username: 'ab', // Too short
        password: 'password123',
      });
      expect.fail('Should have thrown an error for short username');
    } catch (error: any) {
      expect(error.message).toContain('String must contain at least 3 character(s)');
    }
  });

  it('should validate email format', async () => {
    try {
      await caller.cms.adminUsers.create({
        username: 'testuser',
        password: 'password123',
        email: 'invalid-email', // Invalid format
      });
      expect.fail('Should have thrown an error for invalid email');
    } catch (error: any) {
      expect(error.message).toContain('Invalid email');
    }
  });
});
