import dotenv from "dotenv";
import connectDB, { getDB } from "./db/index.js";
import {app} from './index.js';

dotenv.config({})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

app.get('/', (req, res) => {
    res.send('Im Kisanmitra')
})
