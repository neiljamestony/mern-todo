const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todo', errorHandler, require('./routes/todoRoutes'))

app.listen(port, () => console.log(`Server is running in port ${port}`))