// routes/userRoutes.js

const express = require('express');
const protect = require('../middleware/authMiddleware');
const userController = require('../controllers/userController'); // Import the user controller
const router = express.Router();

// Register a new user
router.post('/register', userController.registerUser);

// Login a user
router.post('/login', userController.loginUser);

// Example route to get all users (for testing purposes)
router.get('/users', userController.getUsers);  // Ensure `getUsers` is defined in userController.js

// Example protected profile route
router.get('/profile', protect, userController.getProfile);  // Ensure `getProfile` is defined in userController.js

module.exports = router;
