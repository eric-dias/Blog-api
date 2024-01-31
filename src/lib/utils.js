const { default: mongoose } = require("mongoose");

//CHECK IF THERE'S A CONNECTION ALREADY
const connection = {};

// FUNCTION TO CONNECT TO MONGODB

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
     // console.log("using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

//const db = await mongoose.connect(process.env.MONGO);
//connection.isConnected = db.connections[0].readyState;
//
//serves to connect to the existing connection