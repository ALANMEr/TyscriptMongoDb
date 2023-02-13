import mongoose, { ConnectOptions } from "mongoose";

import { db } from "../config";


const dbConnection = async () => {
    try {
        await mongoose.set('strictQuery', false);
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        } as ConnectOptions )
        console.log('Connected to MongoDB')

    } catch (err) {
        console.error(err)
    }
}


export default dbConnection;