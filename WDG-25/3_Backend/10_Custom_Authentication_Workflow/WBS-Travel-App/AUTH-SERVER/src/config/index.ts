import { z } from 'zod/v4';

const envSchema = z.object({
  CLIENT_BASE_URL: z.url().default('http://localhost:5173'),
  MONGO_URI: z.url({ protocol: /mongodb/ }),
  DB_NAME: z.string(),
  ACCESS_JWT_SECRET: z
    .string({
      error: 'ACCESS_JWT_SECRET is required and must be at least 64 characters long'
    })
    .min(64),
  REFRESH_TOKEN_TTL: z
    .string()
    .optional()
    .transform(val => (val ? Number(val) : 30 * 24 * 60 * 60)), // default 30 days in seconds
  SALT_ROUNDS: z
    .string()
    .optional()
    .transform(val => (val ? Number(val) : 13)) // default 13
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:\n', z.prettifyError(parsedEnv.error));
  process.exit(1);
}

export const {
  CLIENT_BASE_URL,
  MONGO_URI,
  DB_NAME,
  ACCESS_JWT_SECRET,
  REFRESH_TOKEN_TTL,
  SALT_ROUNDS
} = parsedEnv.data;
