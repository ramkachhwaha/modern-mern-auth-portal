import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUri = process.env.MONGO_URI;


export default async function dbConnect() {
    try {
        const client = await connect(mongoUri);

        if (client) {
            console.log("Database Connected Successfully")
        }

    } catch (error) {
        console.log(error);
    }
}