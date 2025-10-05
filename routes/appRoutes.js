
// routes/appRoutes.js

const express = require('express');
const router = express.Router();
const { validateApp } = require('../controllers/appController');

/**
 * Defines the POST /validate-app route.
 * This route is protected by the API key authentication middleware.
 */
router.post('/validate-app/:appName', validateApp);

module.exports = router;
