import { registerSchema } from '#schemas';
import { type registerType } from '#types';

export function validateInputData(data: registerType): boolean {
  return registerSchema.safeParse(data).success;
}
