import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;
    console.log(`Database Connected: ${connection.host}`);
  }
  catch (error) { console.log("ERROR: ",error); }
}

export default connectDB;