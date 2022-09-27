const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todo', errorHandler, require('./routes/todoRoutes'))

app.listen(port, () => console.log(`Server is running in port ${port}`))