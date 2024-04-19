import {Request, Response} from "express"
import EventService from "../services/event.service"
const {
    createEvent,
    getEvent,
    getEventByFilter,
    getAllEvent,
    updateEvent,
    deleteEvent
} = new EventService

export default class EventControllers {

    //createEvent
    async createEvent (req: Request, res: Response) {
        try {
            //get the events the users sends from the req.body
            const data =  req.body

            //checks to see if name has been used before
            const foundEvent = await getEventByFilter({name: data.name})
            console.log(foundEvent)

            //if found , send an err to the user that event already exists
            if (foundEvent) {
                return res.status(409).send({
                    message: 'Event already exist',
                    success: false
                })
            }

            //else , go ahead and create event and send the output to user
            const createdEvent =  await createEvent(data)
            return res.status(201).send({
                messgae: 'Event created successfully',
                success: true,
                data: createdEvent
            })
        } catch (err: any) {
            res.status(500).send({
                message: 'Failed to create event',
                success: false
            })
        }
    }

    //get Event
    async getById(req: Request, res: Response) {
        //get id of the user
        const eventId = req.params.eventId

        //checks the db to see if there is a Event with the id
        const Event = await getEvent(eventId)

        //sends an error if it doesn't
        if (!Event) {
            return res.status(404).send({
                message: 'Event not found',
                success: false
            })
        }
        // else return the Event name to the user if it exists
        return res.status(200).send({
            message: 'Event found',
            success: true,
            data: Event
        })
    }

    //get all Event
    async getAllEvent(req: Request, res: Response) {
        // retrieve all ticket names in the database
        const existingEvent = await getAllEvent()

        //sends a response with retrieved tickets
        return res.status(200).send({
            message: 'Eventname fetched successfully',
            success: true,
            data: existingEvent
        })
    }

     //update Event by id
     async updateEvent(req: Request, res: Response) {
        const data = req.body
        // get the data the user sends through req.params
        const eventId= req.params.eventId

        //checks if the event exists and send s an error if it doesn't
        const event = await getEvent(eventId)
        //sends an error if it doesn't
        if (!event) {
            return res.status(404).send({
                message: 'event not found',
                success: false
            })
        }
        //else update the event if it is found and return the updated Event to the user
        const updatedEvent = await updateEvent(eventId, data)
        return res.status(200).send({
            message: 'Event updated',
            success: true,
            data: updatedEvent
        })
    }

    //delete Event by Id
    async deleteEvent(req: Request, res: Response) {
        //get the d user sends through req.params
        const { eventId } = req.params

        //checks if event exists and sends an error if it doesn't
        const event = await getEvent(eventId)
        //sends an error if it doesnt exist
        if (!event) {
            return res.status(404).send({
                message: 'Event not found',
                success: false
            })
        }

        //else delete the event if a event if found and return the deleted ticket to the user
        const deletedEvent = await deleteEvent(eventId)
        return res.status(200).send({
            message: 'Event deleted successfully',
            success: true,
            data: deletedEvent
        })
    }
}