function envOrThrow(key: string) {
	if (!process.env[key])
		throw new Error(`env Variable for ${key} is missing`);

	return process.env[key];
}

const MONGO_URI = envOrThrow('MONGO_URI');

const JWT_ACCESS_SECRET = envOrThrow('JWT_ACCESS_SECRET');

export { MONGO_URI, JWT_ACCESS_SECRET };
