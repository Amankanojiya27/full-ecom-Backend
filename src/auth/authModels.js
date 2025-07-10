import { model, Schema } from "mongoose";

const userShema = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      min: [8, "Password must be at least 8 characters long"],
      max: [20, "Password must be at most 50 characters long"],
      // match: [
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      //   "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number",
      // ],
    },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"],
      default: "user",
    },
  },
  { timestamps: true }
);
const User = model("User", userShema,);
export default User;