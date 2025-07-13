import { defineConfig } from 'drizzle-kit';

if (!process.env.POSTGRES_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
  	schema: './src/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: { url: process.env.POSTGRES_URL ?? '' },
	verbose: true,
	strict: true
});
