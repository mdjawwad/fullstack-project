import mongoose from "mongoose";
import { BD_NAME } from "../constants.js";
const mongodbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONOGDB_URI}/${BD_NAME}`
    );
    console.log(
      `/n Mongodb connected !! BD Host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection Error :", error);
    process.exit(1);
  }
};

export default mongodbConnection;
