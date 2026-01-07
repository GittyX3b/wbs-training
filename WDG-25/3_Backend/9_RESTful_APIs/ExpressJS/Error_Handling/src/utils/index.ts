export function envOrThrow(key: string) {
  if (!process.env[key]) throw new Error(`${key} is missing in .env file`);
  return process.env[key];
}
