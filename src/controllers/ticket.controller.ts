import { Request, Response } from "express";
import TicketService from "../services/ticket.service";

const {
    createTicket,
    getAllTicket,
    getTicket,
    getTicketByFilter,
    updateTicket,
    deleteTicket
} = new TicketService();

export default class TicketControllers {

    //create Ticket
    async createTicket(req: Request, res: Response) {
        try {

            //get the data the user sends from req.params
            const data = req.body

            //check to see if Ticket name has been used before
            const foundTicket = await getTicketByFilter({ ticketName: data.ticketName })

            //if found, send an error to the user that ticket name exists
            if (foundTicket) {
                return res.status(409).send({
                    message: 'Name already exists',
                    success: 'false'
                })
            }

            //else go ahead and create the ticket name
            const createdTicket = await createTicket(data)
            return res.status(201).send({
                message: 'Ticket name created successfully',
                success: true,
                data: createdTicket
            })
        } catch (err: any) {
            res.status(200).send({
                message: 'Failed to create Ticket',
                error: err.message
            })
        }

    }

    //get all Ticket
    async getAllTicket(req: Request, res: Response) {
        // retrieve all ticket names in the database
        const existingTicket = await getAllTicket()

        //sends a response with retrieved tickets
        return res.status(200).send({
            message: 'Ticketname fetched successfully',
            success: true,
            data: existingTicket
        })
    }

    //get Ticket
    async getById(req: Request, res: Response) {
        //get id of the user
        const ticketId = req.params.ticketId

        //checks the db to see if there is a ticket with the id
        const ticket = await getTicket(ticketId)

        //sends an error if it doesn't
        if (!ticket) {
            return res.status(404).send({
                message: 'Ticket not found',
                success: false
            })
        }
        // else return the ticket to the user if it exists
        return res.status(200).send({
            message: 'Ticket found',
            success: true,
            data: ticket
        })
    }
    //update Ticket by id
    async updateTicket(req: Request, res: Response) {
        const data = req.body
        // get the data the user sends through req.params
        const ticketId = req.params.ticketId

        //checks if the ticket exists and send s an error if it doesn't
        const ticket = await getTicket(ticketId)
        //sends an error if it doesn't
        if (!ticket) {
            return res.status(404).send({
                message: 'Ticket not found',
                success: false
            })
        }
        //else update the ticket if it is found and return the updated ticket to the user
        const updatedTicket = await updateTicket(ticketId, data)
        return res.status(200).send({
            message: 'Ticket updated',
            success: true,
            data: updatedTicket
        })
    }
    //delete Ticket by Id
    async deleteTicket(req: Request, res: Response) {
        //get the d user sends through req.params
        const { ticketId } = req.params

        //checks if ticket exists and sends an error if it doesn't
        const ticket = await getTicket(ticketId)
        //sends an error if it doesnt exist
        if (!ticket) {
            return res.status(404).send({
                message: 'Ticket not found',
                success: false
            })
        }

        //else delete the ticket if a ticket if found and return the deleted ticket to the user
        const deletedTicket = await deleteTicket(ticketId)
        return res.status(200).send({
            message: 'Ticket deleted successfully',
            success: true,
            data: deletedTicket
        })
    }
}


