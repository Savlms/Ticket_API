import { ObjectId } from "mongoose";

export default interface ITicket {
    ticketName: string;
    price: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}