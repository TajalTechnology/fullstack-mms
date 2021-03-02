const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const env = require('dotenv').config()

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
console.log(process.env.PORT)
const connectDB = require('./config/db.connection')
connectDB()

app.get('/', (req, res) =>{
    res.json({
        message:"Welcome to backend application"
    })
})

const PORT = process.env.PORT || 3456
app.listen(PORT, ()=>{
    console.log(`SERVER is running on port ${PORT}`)
})
