import bcrypt from 'bcryptjs';
import { drizzle } from 'drizzle-orm/mysql2';
import { adminUsers } from './drizzle/schema.js';
import { eq } from 'drizzle-orm';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set');
  process.exit(1);
}

const db = drizzle(DATABASE_URL);

async function seedAdminUser() {
  const username = process.argv[2];
  const password = process.argv[3];
  const email = process.argv[4];

  if (!username || !password) {
    console.error('Usage: node seed-admin.mjs <username> <password> [email]');
    console.error('Example: node seed-admin.mjs admin SecurePass123 admin@example.com');
    process.exit(1);
  }

  try {
    // Check if user already exists
    const existing = await db.select().from(adminUsers).where(eq(adminUsers.username, username)).limit(1);
    
    if (existing.length > 0) {
      console.log(`Admin user "${username}" already exists. Updating password...`);
      
      // Hash the new password
      const passwordHash = await bcrypt.hash(password, 10);
      
      // Update existing user
      await db.update(adminUsers)
        .set({ passwordHash, email: email || existing[0].email, isActive: true })
        .where(eq(adminUsers.username, username));
      
      console.log(`✓ Admin user "${username}" updated successfully`);
    } else {
      console.log(`Creating new admin user "${username}"...`);
      
      // Hash the password
      const passwordHash = await bcrypt.hash(password, 10);
      
      // Create new user
      await db.insert(adminUsers).values({
        username,
        passwordHash,
        email: email || null,
        isActive: true,
      });
      
      console.log(`✓ Admin user "${username}" created successfully`);
    }
    
    console.log('\nYou can now log in to the CMS at /admin/cms');
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin user:', error);
    process.exit(1);
  }
}

seedAdminUser();
