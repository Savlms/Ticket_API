import joi from 'joi'

const createTicketSchema = joi.object({
    ticketname: joi.string().required().trim().lowercase(),
    price: joi.number().required(),
    status: joi.string().optional(),
    createdAt: joi.date().required(),

})

const editTicketSchema = joi.object({
    tickekname: joi.string().required().trim().lowercase(),
    status: joi.string().optional(),
    updatedAt: joi.date(),
})

export {createTicketSchema, editTicketSchema}
