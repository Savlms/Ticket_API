import jwt from 'jsonwebtoken'
import UserService from '../services/user.service'
import { NextFunction, Request,Response } from 'express'
import AuthRequest from '../interfaces/authRequest.interface'
const {
    findById
} = new UserService()

async function autheticate(req: Request, res: Response, next: NextFunction) {
   const SECRET = process.env.SECRET
   const token = await req.cookies.token
   if (!token) {
    return res.status(401).send({
        message: 'Token not provided',
        success: false
    })
   }
   
   const decodedToken = jwt.verify(token, SECRET!)
   const id = (decodedToken as any)._id
   const user = await findById(id)
   if (!user) {
    return res.status(401).send({
        message: "User does not exist",
        success: false
    })
   }

   (req as AuthRequest).user = user
   next()
}

export default autheticate;
