import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export function getDb(env: Env) {
	return drizzle(postgres(env.HYPERDRIVE?.connectionString));
}
