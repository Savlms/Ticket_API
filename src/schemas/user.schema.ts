import joi from 'joi'


const createUserSchema = joi.object({
    username: joi.string().required().trim(),
    password: joi.string().trim().required(),
    role: joi.string().optional().lowercase().trim()
})

const editUserSchema = joi.object({
    username: joi.string().optional().trim(),
    password: joi.string().trim().optional(),
    role: joi.string().optional().lowercase().trim()
})

export {createUserSchema, editUserSchema};