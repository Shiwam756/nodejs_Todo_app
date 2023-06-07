import { app } from "./app.js";
import { connectDB } from "./data/database.js";

//Database connecting
connectDB();

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server started at http://localhost:${process.env.PORT}`);
});
