import { Schema, model, Types } from 'mongoose';

const TicketSchema = new Schema({
    ticketNumber: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    room: {
        type: Types.ObjectId,
        ref: 'room',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Ticket = model('ticket', TicketSchema);
export default Ticket;