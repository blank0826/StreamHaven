import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://blank0826:Kurumi08!@cluster0.lg7omxo.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Mongo DB is connected!");
  } catch (e) {}
};

export default connectToDB;
