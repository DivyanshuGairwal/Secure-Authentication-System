import { body } from "express-validator";
import express from "express";
import { signup, login, getProfile, changePassword } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post(
    "/signup",
    [
        body("email").isEmail().withMessage("Enter valid email"),
        body("password")
         .isLength({ min: 6 })
         .withMessage("password must be at least 6 characters"),
    ],
    signup
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Enter valid email"),
        body("password").notEmpty().withMessage("password is required"),
    ],
    login
);

// ✅ use controller (important)
router.get("/profile", protect, getProfile);

router.put("/change-password", protect, changePassword);

export default router;