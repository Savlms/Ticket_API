import express from "express";
const app = express()
import dotenv from 'dotenv'
import database from './configs/db.configs'
dotenv.config()
const port = process.env.PORT
import ticketRouter from'./routes/ticket.route'
import eventRouter from './routes/event.route'
import userRouter from './routes/user.route'
import cookie from 'cookie-parser'
import cors from 'cors'





app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookie())


app.get('/', (req, res) => {
    res.send('Hello you, welcome to Ticket_Hub')
})

app.use("/", ticketRouter)
app.use("/", eventRouter)
app. use("/", userRouter)


app.listen(port, () => {
    database()
    console.log(`server started on ${port}`)
})
