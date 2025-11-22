import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import invariant from 'tiny-invariant';

const currentEnv = process.env.NODE_ENV || 'development';
console.log(`Drizzle Config - Current Environment: ${currentEnv}`);
const pathToEnv = currentEnv === 'production' ? '.prod.vars' : '.dev.vars';

console.log(`Drizzle Config - Loading environment variables from: ${pathToEnv}`);

dotenv.config({
	path: pathToEnv,
});

invariant(process.env.NEON_DATABASE_URL, 'NEON_DATABASE_URL is not defined in environment variables');

export default defineConfig({
	out: './drizzle',
	schema: './src/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.NEON_DATABASE_URL,
	},
});
