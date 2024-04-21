import express from 'express'
import UserController from '../controllers/user.controller'
import validate from '../middlewares/validation.middleware'
import { createUserSchema, editUserSchema } from '../schemas/user.schema'
const router = express.Router();

const {
    createUser,
    findAll,
    findOne,
    updateUser,
    deleteUser,
    login
} = new UserController()

router.post('api/1/users', validate(createUserSchema), createUser)
router.patch('api/1/users/:id', validate(editUserSchema), updateUser)
router.get('api/1/users', findAll)
router.get('api/1/users/:id', findOne)
router.post('api/1/users/:id/:', login)
router.delete('api/1/users/:id', deleteUser)



export default router