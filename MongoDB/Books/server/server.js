import express from "express"
import dbConnect from "./config/mongoose.config.js"
import cors from 'cors';

const app= express()
const PORT= 3000
app.use(express.json())
app.use(cors())
dbConnect()

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))