import jwt from "jsonwebtoken";
// import User from "../auth/authModels.js"


export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization token missing or malformed" });
    }

    // const token = authHeader.replaceAll("Bearer", "");
    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: "Authorization token not found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    console.log("Authenticated user:", req.user);
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
