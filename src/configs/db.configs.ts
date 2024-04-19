import mongoose from "mongoose";
mongoose.set('strictQuery', true);

export default function database() {
    mongoose.connect(process.env.DB_URI!)
        .then(() => {
            console.log("MongoDB is connected")
        })
        .catch(() =>  {
            console.log (
                "There is an error connecting to the database")
        });
}