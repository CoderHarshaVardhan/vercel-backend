import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import formRoutes from "./routes/formRoutes.js";
import authRoutes from "./routes/authRoutes.js";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", formRoutes);
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB Connection Failed:", err));
