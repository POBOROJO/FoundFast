import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

const app = express();

dotenv.config({
    path: ".env"
});

//database connection
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));