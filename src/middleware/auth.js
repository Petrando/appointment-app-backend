import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { USERS } from "../models/user.js";

// Load environment variables
dotenv.config();

const { JWT_SECRET } = process.env;

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { userId } = jwt.verify(token, JWT_SECRET);

    const user = USERS.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // dynamically attach user to request
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
