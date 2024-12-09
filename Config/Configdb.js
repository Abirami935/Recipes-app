const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://guvi:JYtBdHOxFojJ9EAX@cluster0.azwsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDB;