import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import connectDB from "./config/db";

const port = 7777;

connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});