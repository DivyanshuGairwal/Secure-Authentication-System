import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://LenovoUser:Admin123@secure-auth-cluster.oeh7t8w.mongodb.net/secure-auth?retryWrites=true&w=majority");
        console.log("MongoDB connected");
      } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1);
      }
};

export default connectDB;