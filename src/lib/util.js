import mongoose from "mongoose";

// CHECK IF THERE'S A CONNECTION ALREADY
const connection = {};

// FUNCTION TO CONNECT TO MONGODB
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = mongoose.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error(error);
  }
};
