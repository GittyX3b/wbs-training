import { z } from 'zod/v4';
import { registerSchema } from '#schemas';

export type registerType = z.infer<typeof registerSchema>;
