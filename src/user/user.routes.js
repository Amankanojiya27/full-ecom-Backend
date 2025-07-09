import { createUser } from "./user.controllers.js";
import { Router } from "express";
const router = Router();

router
.route("/new")
.post(createUser);

export default router;
