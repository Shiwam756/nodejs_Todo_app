import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then(() => {
      console.log("Database is Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
