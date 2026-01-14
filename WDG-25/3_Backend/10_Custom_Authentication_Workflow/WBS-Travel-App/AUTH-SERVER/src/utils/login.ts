import { loginSchema } from '#schemas';
import { type loginType } from '#types';

export function validateLoginData(data: loginType): boolean {
  return loginSchema.safeParse(data).success;
}
