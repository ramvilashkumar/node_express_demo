import mongoose from "mongoose";

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});

  console.log(`MongoDb connected ${conn.connection.host}`.yellow.bold);
};

export default connectDb;
