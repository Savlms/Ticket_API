import ITicket from "../interfaces/ticket.interface";
import Ticket from "../models/ticket.model";

export default class TicketService {
    async createTicket (data: ITicket) {
        const newTicket = await Ticket.create(data)
        return newTicket
    }

    async getTicket (id: string) {
        const getTicket = await Ticket.findById(id)
        return getTicket
    }

    async getTicketByFilter (filter: object) {
        const getTicket = await Ticket.findOne(filter)
        return getTicket
    }

    async getAllTicket () {
        const allTicket = await Ticket.find()
        return allTicket
    }

    async updateTicket (id: string, data: any) {
        const updatedTicket = await Ticket.findByIdAndUpdate(id, data, {new: true})
        return updatedTicket
    }

    async deleteTicket (id: string) {
        const deletedTicket = await Ticket.findByIdAndDelete(id)
    }
}