//server.js
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDB from "./config/db.js";
import authRoute from "./auth/authRoutes.js"
import userRouter from "./user/userRoutes.js"

const app = express();

//middelwares
app.use(express.json());
connectToDB();

//Routes
app.use("/api/auth",authRoute);
app.use("/api/users",userRouter)


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`✅ Server is running at port http://localhost:${PORT}`)
})

