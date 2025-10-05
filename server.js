
// server.js

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const appRoutes = require('./routes/appRoutes');

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4030;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(morgan('combined', { stream: accessLogStream })); // Log requests to a file

// Routes
app.use('/api', appRoutes); // Mount the app routes under the /api prefix

// Root endpoint
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
