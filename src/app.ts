import express from "express";
const app = express()
import dotenv from 'dotenv'
import database from './configs/db.configs'
dotenv.config()
const port = process.env.PORT
import ticketRouter from'./routes/ticket.route'
import eventRouter from './routes/event.route'



app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('Hello you, welcome to Ticket Hub')
})

app.use("/", ticketRouter)
app.use("/", eventRouter)

app.listen(port, () => {
    database()
    console.log(`server started on ${port}`)
})
