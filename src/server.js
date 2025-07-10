//server.js
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDB from "./config/db.js";
import userRoute from "./auth/authRoutes.js"

const app = express();

//middelwares
app.use(express.json());
connectToDB();

//Routes
app.use("/user",userRoute);


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`✅ Server is running at port http://localhost:${PORT}`)
})

