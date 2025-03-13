const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./Config/Configdb");
const recipeRoutes = require("./Routes/RecipeRoutes");


const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/recipes", recipeRoutes);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});