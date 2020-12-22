const mongoose = require("mongoose");
const config = require("config");
const dbURI = config.get("mongoURI");

//Mongo DB connection
const connectDB = async () => {
  try {
    //Try to connect to the DB
    await mongoose.connect(dbURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected`);
  } catch (error) {
    //if DB connection fails logging error and close the server
    console.error(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
