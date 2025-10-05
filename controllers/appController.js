
// controllers/appController.js

/**
 * Controller for the /validate-app endpoint.
 * On successful validation, it returns a 200 OK response with a JSON message.
 */
const validateApp = (req, res) => {
  const { appName } = req.params;
  const allowedApps = process.env.ALLOWED_APPS.split(',');

  if (!allowedApps.includes(appName)) {
    return res.status(400).json({ error: false });
  }

  res.status(200).json({ message: true });
};

module.exports = {
  validateApp,
};
