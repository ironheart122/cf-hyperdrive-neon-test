import invariant from 'tiny-invariant';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export function getDb(env: Env) {
	const url = env.NEON_DATABASE_URL?.trim();

	invariant(url, 'NEON_DATABASE_URL is not defined');

	return drizzle(postgres(url));
}
