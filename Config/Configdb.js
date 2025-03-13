const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://abi569561:iUON76vlf6Bp62GH@cluster0.ufx2r.mongodb.net/Recipe-app");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDB;