// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); // Import user routes

dotenv.config(); // Load environment variables from .env file

const app = express();

// Enable CORS for all origins (you can specify more restrictive rules here)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Wrap the DB connection and server startup in an async function
async function startServer() {
  try {
    console.log("Attempting to connect to MongoDB...");
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }

    await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log("Connected to MongoDB");

    // Use user routes under /api path
    app.use('/api', userRoutes);

    // Example route to check if the API is running
    app.get('/', (req, res) => {
      res.send('API is running...');
    });

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Terminate the process in case of critical error
  }
}

// Call the async function to start the server
startServer();
