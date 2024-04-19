import express from "express";
import EventControllers from "../controllers/event.controller";
import eventSchema from "../schemas/event.schema";
const router = express.Router();

const {
    createEvent,
    getAllEvent,
    updateEvent,
    deleteEvent
} = new EventControllers()

router.post('/api/1/event')
router.get('/api/1/event')

export default router