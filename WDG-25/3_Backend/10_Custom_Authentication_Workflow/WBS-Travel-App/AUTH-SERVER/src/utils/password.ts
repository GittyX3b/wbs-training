import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '#config';

// returns encrypted hashstring
export async function encryptPassword(password: string) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

// returns true (passwords match) or false (input does not match stored password)
export async function checkPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}
