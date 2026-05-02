import helmet from "helmet";
import rateLimit from "express-rate-limit";
import express from "express";
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middleware/errorMiddleware";

const app = express();

//security headers
app.use(helmet());

//rate Limiting (protect from spam/brute force)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max:100, // max 100 requests per IP
  message: "Too many requests, try again later",
});

app.use(limiter);

app.use(express.json());

// 🔥 test route (VERY IMPORTANT)
app.post("/test", (req, res) => {
  console.log("TEST HIT ✅");
  res.send("TEST WORKING");
});

// auth routes
app.use("/api/auth", authRoutes);

// root

app.get("/unique-test-123", (req, res) => {
  res.send("YES THIS IS MY SERVER");
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

export default app;