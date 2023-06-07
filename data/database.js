import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then((c) => {
      console.log(`Database is Connected with ${c.Connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
