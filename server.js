//server.js
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDB from "./src/config/db.js";
import userRoute from "./src/user/user.routes.js"

const app = express();
app.use(express.json());
connectToDB();
const PORT = process.env.PORT || 3000;

app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})

