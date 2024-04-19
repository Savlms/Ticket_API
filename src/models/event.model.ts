import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase:  true

    }
})

const Event =  mongoose.model('event', EventSchema)
export default Event;