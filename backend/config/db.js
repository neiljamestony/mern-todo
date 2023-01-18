const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected ${connect.connection.host}`.green.underline);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
