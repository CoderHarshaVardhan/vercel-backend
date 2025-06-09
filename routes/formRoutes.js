import express from "express";
import {
    submitForm,
    getAllSubmissions
} from "../controllers/formController.js";
import { authenticate, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/submit-form",authenticate, submitForm);
router.get("/admin/submissions", authenticate, isAdmin, getAllSubmissions);

export default router;
