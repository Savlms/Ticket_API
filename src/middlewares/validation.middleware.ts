import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

function validate (schema: ObjectSchema<any>) {
    return function (req: Request, res: Response, next: NextFunction) {
        const {error, value} = schema.validate(req.body, {abortEarly: false})
        if (error) {
            let errMessage: string[] = []
            error.details.forEach(detail => {
                errMessage.push(detail.message)
            });
            return res.status(403).send({
                message: errMessage,
                success: false
            })
        }
        req.body = value
        next()
    }
}


export default validate