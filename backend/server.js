const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();
const app = express();

const config = {
  origin: "http://127.0.0.1:5173",
  credential: true,
  optionSuccessStatus: 200,
};

app.use(cors(config));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/UserRoutes"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
