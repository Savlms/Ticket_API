import joi from 'joi'

const eventSchema = joi.object({
    name: joi.string().required().trim().lowercase()
})


export default eventSchema