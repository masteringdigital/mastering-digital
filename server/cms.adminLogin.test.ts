import { describe, it, expect, beforeAll } from 'vitest';
import { appRouter } from './routers';

describe('CMS Admin Login', () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeAll(() => {
    // Create a mock context
    const mockContext = {
      req: {} as any,
      res: {} as any,
      user: null,
    };
    caller = appRouter.createCaller(mockContext);
  });

  it('should successfully login with correct credentials', async () => {
    const result = await caller.cms.adminLogin({
      username: process.env.ADMIN_USERNAME!,
      password: process.env.ADMIN_PASSWORD!,
    });

    expect(result).toEqual({ success: true });
  });

  it('should fail login with incorrect username', async () => {
    await expect(
      caller.cms.adminLogin({
        username: 'wronguser',
        password: process.env.ADMIN_PASSWORD!,
      })
    ).rejects.toThrow('Invalid username or password');
  });

  it('should fail login with incorrect password', async () => {
    await expect(
      caller.cms.adminLogin({
        username: process.env.ADMIN_USERNAME!,
        password: 'wrongpassword',
      })
    ).rejects.toThrow('Invalid username or password');
  });

  it('should fail login with both incorrect credentials', async () => {
    await expect(
      caller.cms.adminLogin({
        username: 'wronguser',
        password: 'wrongpassword',
      })
    ).rejects.toThrow('Invalid username or password');
  });
});
