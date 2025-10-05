# Node.js Validation Backend Service

A simple, scalable, and production-ready backend service built with Node.js and Express. This service provides a basic API endpoint for validating an application name against a predefined list.

## Features

- **Express Server**: A robust and minimal web framework for Node.js.
- **Clean Architecture**: The code is structured with a clear separation of concerns (routes, controllers, middleware, utils).
- **Environment-based Configuration**: Uses a `.env` file to manage environment-specific variables.
- **Request Logging**: Logs all incoming API requests to `access.log` using the `morgan` middleware.
- **Dynamic Route Validation**: Validates an `appName` passed as a URL parameter.

---

## Folder Structure

The project follows a clean and scalable architecture, separating different parts of the application into distinct folders.

```
/
├── controllers/
│   └── appController.js    # Handles the business logic for routes.
|
├── middleware/
│   └── (empty)             # For middleware functions (e.g., authentication, error handling).
|
├── routes/
│   └── appRoutes.js        # Defines the API routes and connects them to controllers.
|
├── utils/
│   └── (empty)             # For utility functions (e.g., formatters, helpers).
|
├── .env                    # Stores environment variables (not version controlled).
├── .gitignore              # Specifies files to be ignored by Git.
├── access.log              # Log file for all API requests (not version controlled).
├── package.json            # Project metadata and dependencies.
├── README.md               # This documentation file.
└── server.js               # The main entry point for the application.
```

---

## API Endpoints

### Validate Application

Validates if a given application name is on the allowed list.

- **URL**: `/api/validate-app/:appName`
- **Method**: `POST`
- **URL Params**:
  - `appName`=[string] (Required) - The name of the app to validate.

#### Success Response (200 OK)

```json
{
    "message": "App 'diperi-app' validated successfully"
}
```

#### Error Response (400 Bad Request)

```json
{
    "error": "App 'invalid-app' is not a valid app."
}
```

#### Example `curl` Requests

**Valid App:**
```bash
curl -X POST http://localhost:3000/api/validate-app/diperi-app
```

**Invalid App:**
```bash
curl -X POST http://localhost:3000/api/validate-app/invalid-app
```

---

## Configuration

Configuration for the application is managed through a `.env` file in the root of the project.

1.  Create a file named `.env`.
2.  Add the following variables:

```
# The port the server will run on.
PORT=3000

# A comma-separated list of allowed application names. No spaces.
ALLOWED_APPS=diperi-app,another-app,yet-another-app
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository (or download the source code).
2.  Navigate to the project directory and install the dependencies:
    ```bash
    npm install
    ```

### Running the Server

1.  Make sure you have created and configured your `.env` file as described above.
2.  Start the server with the following command:
    ```bash
    node server.js
    ```
3.  The server will be running at `http://localhost:3000`.

---

## Logging

All incoming requests to the API are logged to the `access.log` file in the project root. This is handled by the `morgan` middleware.

Example log entry:
```
::1 - - [05/Oct/2025:12:00:00 +0000] "POST /api/validate-app/diperi-app HTTP/1.1" 200 58 "-" "curl/7.88.1"
```
