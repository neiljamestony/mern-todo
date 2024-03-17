const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/todos', require('./routes/todoRoutes'));

app.listen(port, () => console.log(`Server is running on port ${port}`));
