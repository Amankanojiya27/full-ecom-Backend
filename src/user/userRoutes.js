import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
const router = Router();

//only admin can acces this router
router.route("/admin").get(verifyToken, (req, res) => {
  res.status(201).json({ message: "Welcome Admin" });
});
//both admin and manager can acces this router
router.route("/manager").get((req, res) => {
  res.status(201).json({ message: "Welcome Manager" });
});
//all can acces this router
router.route("/user").get((req, res) => {
  res.status(201).json({ message: "Welcome user" });
});

export default router;
