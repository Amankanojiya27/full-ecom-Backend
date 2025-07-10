//server.js
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDB from "./config/db.js";
import authRoute from "./auth/authRoutes.js"
import userRouter from "./user/userRoutes.js"
import cookieParser from "cookie-parser";

const app = express();


//middelwares
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
connectToDB();

//Welcome Route
app.get("/", (req,res)=>{
    res.json({
        status: 200,
        message: "Welcome to Aman - Full-Ecom-Backend"
    })
})

//Routes
app.use("/api/auth",authRoute);
app.use("/api",userRouter)


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`✅ Server is running at port http://localhost:${PORT}`)
})

