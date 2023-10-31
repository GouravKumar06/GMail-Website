import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = () => {
    const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gouravclusters.jmpw2lp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
    try{
        mongoose.connect(MONGODB_URL,{
            UseNewUrlParser:true,
            UseUnifiedTopology:true,
        })
        console.log("database connected successfully")
    }catch(error){
        console.log("error while connecting database",error.messsge)
    }
}

export default dbConnect;