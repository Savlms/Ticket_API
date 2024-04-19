import express from "express";
import TicketControllers from "../controllers/ticket.controller";
import { createTicketSchema, editTicketSchema } from "../schemas/ticket.schema";
const router = express.Router();

const {

    getAllTicket,
    createTicket,
    getById,
    updateTicket,
    deleteTicket

} = new TicketControllers()

router.get('/api/1/ticket', getAllTicket)
router.post('/api/1/ticket', createTicket)
router.get('/api/1/ticket/:ticketId', getById)
router.patch('/api/1/ticket/:ticketId', updateTicket)
router.delete('/api/1/ticket/:ticketId', deleteTicket)


export default router