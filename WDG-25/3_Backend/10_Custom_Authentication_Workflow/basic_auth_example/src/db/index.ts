import mongoose from 'mongoose';
import { MONGO_URI } from '#config';

try {
	await mongoose.connect(MONGO_URI, { dbName: 'basic-auth' });
	console.log('\x1b[35mMongoDB connected via Mongoose\x1b[0m');
} catch (error) {
	console.error('MongoDB connection error:', error);
	process.exit(1);
}
