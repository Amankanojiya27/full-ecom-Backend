import User from "./user.models.js";

export async function createUser(req, res) {
  try {
    const { name, email, password, role } = req.body;
    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating user", error: error.message });
  }
}
