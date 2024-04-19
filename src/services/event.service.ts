import IEvent from "../interfaces/event.interface";
import Event from "../models/event.model";


export default class EventService {
    //create Event
    async createEvent (data: IEvent) {
        const newEvent = await Event.create(data)
        return newEvent
    }

    //get Event
    async getEvent (id: string) {
        const event = await Event.findById(id)
        return event
    }

    //get Event with filter
    async getEventByFilter (filter: {}) {
        const eventFilter = await Event.findOne(filter)
        return eventFilter
    }

    //get all Event
    async getAllEvent () {
        const allEvent = await Event.find()
        return allEvent
    }
    
    async updateEvent (id: string, data: any) {
        const updatedEvent = await Event.findByIdAndUpdate(id, data, {new: true})
        return updatedEvent
    }

    async deleteEvent (id: string) {
        const deletedEvent = await Event.findByIdAndDelete(id)
    }
}