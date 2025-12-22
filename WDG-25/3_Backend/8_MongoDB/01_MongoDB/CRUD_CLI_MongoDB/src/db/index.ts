import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI!);

try {
  await client.connect();
} catch (err) {
  process.env.NODE_ENV !== "production" &&
    console.error(
      '<img draggable="false" role="img" class="emoji" alt="❌" src="https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg"> MongoDB connection error:',
      err
    );
  process.exit(1);
}

export const db = client.db();
