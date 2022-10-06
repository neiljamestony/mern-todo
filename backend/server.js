const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')
const cors = require('cors')

connectDB()
const app = express()
const config = {
    origin: 'http://localhost:3000',
    credential: true,
    optionSuccessStatus: 200
}
app.use(cors(config))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todo', errorHandler, require('./routes/todoRoutes'))
app.use('/api/users', errorHandler, require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server is running in port ${port}`))