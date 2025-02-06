import express from "express";
import connectDB from "./db/connectDB.js";
import { router } from "./routes/user.router.js";
import cors from "cors"



const app = express();
app.use(cors())
app.use(express.json())

app.use("/api/auth", router)



connectDB()
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
