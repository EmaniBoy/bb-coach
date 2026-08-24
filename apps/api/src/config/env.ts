import { z } from 'zod';

const envSchema = z.object({
  APP_ENV: z.enum(['local', 'test', 'staging', 'production']).default('local'),
  API_HOST: z.string().default('127.0.0.1'),
  API_PORT: z.coerce.number().int().positive().max(65535).default(3001),
});

export const env = envSchema.parse(process.env);
