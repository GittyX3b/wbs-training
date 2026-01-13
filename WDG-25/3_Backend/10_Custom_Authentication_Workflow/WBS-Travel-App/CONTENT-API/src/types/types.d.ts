import { userSchema, postSchema, signInSchema } from '#schemas';
import { z } from 'zod/v4';

declare global {
  type UserRequestBody = z.infer<typeof userSchema>;
  type PostRequestBody = z.infer<typeof postSchema>;
  type SignInRequestBody = z.infer<typeof signInSchema>;

  type SanitizedBody = UserRequestBody | PostRequestBody | SignInRequestBody;
}
