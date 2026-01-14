import { z } from 'zod/v4';
import { registerSchema, loginSchema } from '#schemas';

export type registerType = z.infer<typeof registerSchema>;
export type loginType = z.infer<typeof loginSchema>;
