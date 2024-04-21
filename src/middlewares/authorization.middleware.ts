import { NextFunction, Request, Response } from "express";
import IAuth from "../interfaces/authRequest.interface"
import AuthRequest from "../interfaces/authRequest.interface";

async function isAdmin (req: Request, res: Response, next: NextFunction) {
    const user =  (req as AuthRequest).user
    if (user.role === 'admin') {
        next()
    } else {
        return res.status(404).send({
            messgae: 'You are not an admin',
            success:  false
        })
    }
}


export default isAdmin;