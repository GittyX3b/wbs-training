import { registerSchema } from '#schemas';
import { type registerType } from '#types';

export function validateRegisterData(data: registerType): boolean {
  return registerSchema.safeParse(data).success;
}
