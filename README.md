# Lab 01: Node.js and Express Server

**Student Name:**eesam Pavan Kumar Goud  
**Registration Number:** [Your Registration Number]  
**Section:** [Your Section]  
**Course:** Backend Development Fundamentals  


## Deployment Link

**Live Application:** [Add your public deployment URL here]

*If deployment is not possible, follow the alternative submission instructions provided by the faculty.*

## 1. Aim

To create a basic web server using Node.js and learn how to build and manage routes using Express.js.

## 2. Introduction

Node.js is a JavaScript runtime that allows us to execute JavaScript outside the browser. It provides built-in modules, such as `http`, which can be used to create a web server. Express.js is a framework built for Node.js that makes it easier to create web applications and handle HTTP requests.

In this lab, I created a basic server using Node.js and then developed an Express server with different routes. I implemented a welcome page, a route that returns student details in JSON format, a route that displays the current date and time, and a 404 response for unknown routes.

## 3. Technologies Used

- **Node.js:** Used to run JavaScript on the server.
- **Express.js:** Used to create the server and define routes.
- **JavaScript:** Used to implement the server logic.
- **npm:** Used to initialize the project and install dependencies.
- **Visual Studio Code:** Used to write and manage the source code.

## 4. Project Structure

```text
Lab-01-Node-Express/
├── basic-server.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── screenshots/
    ├── home.png
    ├── about.png
    ├── time.png
    └── not-found.png
```

**File descriptions:**

- `basic-server.js` – Contains the basic HTTP server using Node.js.
- `server.js` – Contains the Express server and its routes.
- `package.json` – Stores project information, scripts, and dependencies.
- `package-lock.json` – Records the installed dependency versions.
- `.gitignore` – Specifies files and folders that should not be uploaded to GitHub.
- `screenshots/` – Stores screenshots of the tested endpoints.

The `node_modules/` directory contains installed packages. It is excluded from GitHub because the dependencies can be installed again using `npm install`.

## 5. Installation and Execution

### Prerequisites

- Node.js and npm must be installed.
- A code editor, such as Visual Studio Code, is recommended.

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the Project Directory

```bash
cd YOUR_REPOSITORY_NAME
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the Basic Node.js Server

```bash
node basic-server.js
```

Open the following address in your browser:

`http://localhost:3000`

The server displays a welcome message. Stop the server by pressing `Ctrl + C` in the terminal before starting the Express server.

### Step 5: Run the Express Server

```bash
node server.js
```

Open `http://localhost:3000` in your browser and test the endpoints listed below.

Keep the terminal running while testing the application.

## 6. API Endpoints

The Express application contains the following routes:

| HTTP Method | Endpoint | Purpose | Expected Status |
|---|---|---|---|
| GET | `/` | Displays a welcome message. | 200 OK |
| GET | `/about` | Returns the student's name and section as JSON. | 200 OK |
| GET | `/time` | Returns the current date and time. | 200 OK |
| GET | `/test` | Demonstrates handling of an unknown route. | 404 Not Found |

The application also returns a 404 response for other undefined routes.

## 7. Screenshots and Testing Results

The following screenshots show the responses received while testing the application in the browser.

### 7.1 Home Route

Displays the welcome message returned by the Express server.

![Home Route](screenshots/home.png)

### 7.2 About Route

Displays the student's name and section in JSON format.

![About Route](screenshots/about.png)

### 7.3 Time Route

Displays the current date and time generated using JavaScript's `new Date()`.

![Time Route](screenshots/time.png)

### 7.4 Unknown Route

Displays the 404 error message when an undefined route is accessed.

![404 Not Found](screenshots/not-found.png)

## 8. Understanding package.json and node_modules

**package.json:** Contains details about the project, including its name, version, scripts, and dependencies.

**package-lock.json:** Stores the exact resolved versions of installed dependencies to help maintain consistent installations.

**node_modules:** Contains Express.js and other installed packages required to run the application. This folder is not included in the GitHub repository because it can be recreated using `npm install`.

## 9. Learning Outcomes

By completing this lab, I learned how to:

- Initialize a Node.js project using `npm init -y`.
- Install Express.js and manage project dependencies using npm.
- Create a server using the built-in Node.js `http` module.
- Build an Express application and define GET routes.
- Send text and JSON responses to client requests.
- Generate the current date and time using `new Date()`.
- Handle unknown routes using HTTP status code 404.
- Test server responses through a web browser.

## 10. Conclusion

Through this lab, I gained practical experience in creating web servers using Node.js and Express.js. I learned how to define routes, return different types of responses, and handle invalid URLs. Testing the endpoints helped me understand how HTTP status codes indicate whether a request was successful or unsuccessful. This lab provided a foundation for learning backend development.

## 11. Submission Notes

- The source code and endpoint screenshots are included in the project repository.
- The `node_modules/` directory and environment files are excluded from version control.
- The GitHub repository link will be included in the lab report submitted through the ERP portal.
- The repository link will also be submitted through the faculty's designated GitHub submission form.
- The deployment URL or the alternative specified by the faculty will be provided before final submission.
