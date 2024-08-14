import express from "express";
import { Register } from "../controllers/authController.js";

const router = express.Router();

router.route("/signup").post(Register);

export default router;