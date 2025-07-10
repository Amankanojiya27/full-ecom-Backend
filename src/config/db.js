import mongoose from "mongoose";

async function connectToDB() {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URL);

        if (connection) {
            console.log(`✅ Connected to MongoDB: ${connection.name}`);
            // console.log(`✅ Connected to MongoDB: ${connection.host}, ${connection.name}`);
        }
    } catch (error) {
        console.log("❌ Error Connecting to DB: ", error);
        process.exit(1);
    }
}
export default connectToDB;