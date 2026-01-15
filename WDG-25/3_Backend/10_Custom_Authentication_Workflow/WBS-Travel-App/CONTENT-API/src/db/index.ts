import mongoose from 'mongoose';

try {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) throw new Error('No Mongo DB Connection String present');
  const client = await mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
  console.log('✅ Connected to MongoDB: ' + client.connection.name);
} catch (error) {
  console.error('❌ MongoDB connection error:', error);
  process.exit(1);
}
