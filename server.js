const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const env = require('dotenv').config()

//routers
const user = require('./routers/userRouter')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//mongoose
const connectDB = require('./config/db.connection')
connectDB()

//custom routes
app.use('/api/user', user)

//port allocate
const PORT = process.env.PORT || 3456
app.listen(PORT, ()=>{
    console.log(`SERVER is running on port ${PORT}`)
})
