import Ticket from "../models/ticket.model";

export default class TicketService {
    async createTicket () {
        const newTicket = await Ticket.create()
        return newTicket
    }

    async getTicket (id: string) {
        const getTicket = await Ticket.findById(id)
        return getTicket
    }

    async getAllTicket () {
        const allTicket = await Ticket.find()
        return allTicket
    }

    async updateTicket (id: string) {
        const updatedTicket = await Ticket.findByIdAndUpdate(id)
        return updatedTicket
    }

    async deleteTicket (id: string) {
        const deletedTicket = await Ticket.findByIdAndDelete(id)
    }
}