import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("MongoDB connected");
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};
export default connectToDB;
