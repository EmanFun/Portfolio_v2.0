import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Error 001");
}
const cached: {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
} = {};

async function connectMongo() {
  if (!MONGO_URI) {
    throw new Error(
      `Error 001`
    );
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
  } catch (error) {
    cached.promise = undefined;
    throw error;
  }
  return cached.connection;
}
export default connectMongo;
