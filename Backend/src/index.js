import express from "express"
import cors from "cors"

const app = express()

app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 3000 || 8000,
    credentials: true
}))

//import routes

import farmerRouter from './routes/farmer.routes.js'
import buyerRouter from './routes/buyer.routes.js'


//declare routes

app.use("/fdashboard", farmerRouter)
app.use("/bdashboard", buyerRouter)


export { app }