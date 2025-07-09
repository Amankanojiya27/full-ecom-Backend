import User from "./authModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const { userName, email, password, role } = req.body;
    if (!email || !password || !userName) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ userName, email, hashPassword, role });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating user", error: error.message });
  }
}

export async function login() {}
