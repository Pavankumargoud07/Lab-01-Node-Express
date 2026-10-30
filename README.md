# Lab 01: Node.js and Express Server

**Student Name:**Eesam Pavan Kumar Goud  
**Registration Number:** 252U1R5041  
**Section:** 106 AIDE-S10
**Course:** Backend Development Fundamentals  

## Deployment and Repository Links

**Live Application (Render):** https://lab-01-node-express-u62f.onrender.com

**GitHub Repository:** https://github.com/Pavankumargoud07/Lab-01-Node-Express

The Express application has been deployed using Render and is accessible through the public deployment URL.

## 1. Aim

To create a basic web server using Node.js and learn how to build, manage, and test routes using Express.js.

## 2. Introduction

Node.js is a JavaScript runtime environment that allows JavaScript code to execute outside a web browser. It provides built-in modules, such as the `http` module, which can be used to create web servers.

Express.js is a web framework built on Node.js that simplifies server development, routing, and HTTP request handling.

In this lab, I first created a basic HTTP server using Node.js. Then, I developed an Express application with multiple routes. These routes display a welcome message, return student details in JSON format, provide the current date and time, and handle requests to undefined routes using a 404 response.

Finally, I deployed the Express application using Render to make it accessible through a public URL.

## 3. Technologies and Tools Used

- **Node.js:** Used to execute JavaScript code on the server.
- **Express.js:** Used to create the web server and define application routes.
- **JavaScript:** Used to implement the server-side logic.
- **npm:** Used to initialize the project and manage dependencies.
- **Visual Studio Code:** Used to write and manage the source code.
- **GitHub:** Used to store and manage the project source code.
- **Render:** Used to deploy the Express application and make it publicly accessible.

## 4. Project Structure

```text
Lab-01-Node-Express/
│
├── basic-server.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
│
└── screenshots/
    ├── home.png
    ├── about.png
    ├── time.png
    └── not-found.png
```

### File Descriptions

- `basic-server.js` – Contains the basic HTTP server created using Node.js.
- `server.js` – Contains the Express application and its route definitions.
- `package.json` – Stores project information, scripts, and dependencies.
- `package-lock.json` – Records the resolved versions of installed dependencies.
- `.gitignore` – Specifies files and folders that should not be tracked by Git.
- `README.md` – Contains the project documentation and execution instructions.
- `screenshots/` – Stores screenshots of the tested application endpoints.

The `node_modules/` directory contains the installed packages required by the application. It is excluded from GitHub because the dependencies can be installed again using `npm install`.

## 5. Installation and Execution

### Prerequisites

- Node.js must be installed.
- npm must be available.
- Visual Studio Code or another code editor is recommended.

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate to the Project Directory

```bash
cd Lab-01-Node-Express
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

The browser displays the welcome message returned by the basic Node.js server.

Stop the server by pressing `Ctrl + C` in the terminal before starting the Express server.

### Step 5: Run the Express Server

```bash
npm start
```

Alternatively, run:

```bash
node server.js
```

The Express server starts on port 3000 by default.

Open the following address in your browser:

`http://localhost:3000`

Keep the terminal running while testing the application routes.

## 6. API Endpoints

The Express application contains the following GET routes:

| HTTP Method | Endpoint | Description | Expected Status |
|---|---|---|---|
| GET | `/` | Displays a welcome message. | 200 OK |
| GET | `/about` | Returns the student's name and section in JSON format. | 200 OK |
| GET | `/time` | Returns the current date and time. | 200 OK |
| GET | `/test` | Demonstrates handling of an undefined route. | 404 Not Found |

The application also returns a 404 response for other undefined routes.

### Live Endpoint URLs

Replace `https://lab-01-node-express-u62f.onrender.com` with your actual Render deployment address.

- Home: `https://lab-01-node-express-u62f.onrender.com`
- About: `https://lab-01-node-express-u62f.onrender.com/about`
- Time: `https://lab-01-node-express-u62f.onrender.com/time`
- Not Found: `https://lab-01-node-express-u62f.onrender.com/test`

## 7. Screenshots and Testing Results

The following screenshots demonstrate the responses received while testing the deployed Express application through its public Render URL.

### 7.1 Home Route

Displays the welcome message returned by the Express server.

<img width="1917" height="1078" alt="Lab-01 Home" src="https://github.com/user-attachments/assets/f5795192-9a6b-4184-a3f2-051e8d79cbc1" />


### 7.2 About Route

Displays the student's name and section in JSON format.

![About Route](screenshots/about.png)

### 7.3 Time Route

Displays the current date and time generated using JavaScript's `new Date()` method.

![Time Route](screenshots/time.png)

### 7.4 Unknown Route

Displays the 404 error message when an undefined route is accessed.

![404 Not Found](screenshots/not-found.png)

## 8. Understanding package.json and node_modules

**package.json:** Contains project information, including the project name, version, scripts, and dependencies. It also defines the command used to start the Express server.

**package-lock.json:** Records the resolved versions of installed dependencies to help maintain consistent installations.

**node_modules:** Contains Express.js and other installed packages required to run the application. This directory is excluded from the GitHub repository because the dependencies can be recreated using `npm install`.

## 9. Learning Outcomes

By completing this lab, I learned how to:

- Initialize a Node.js project using `npm init -y`.
- Install Express.js and manage dependencies using npm.
- Create a basic server using the built-in Node.js `http` module.
- Build an Express application and define GET routes.
- Handle HTTP requests and send text and JSON responses.
- Generate the current date and time using JavaScript's `new Date()` method.
- Handle undefined routes using the HTTP status code 404.
- Test server responses through a web browser.
- Deploy a Node.js and Express application using Render.
- Store and manage project files using GitHub.

## 10. Conclusion

Through this lab, I gained practical experience in creating web servers using Node.js and Express.js. I learned how to define routes, send different types of responses, and handle requests to undefined URLs. Testing the endpoints helped me understand how HTTP status codes indicate the results of client requests.

Deploying the application on Render also provided practical experience in making a backend application accessible through a public URL. Overall, this lab helped me develop a foundation in backend development, server-side programming, and application deployment.

## 11. Submission Notes

- The project source code and endpoint screenshots are included in the GitHub repository.
- The `node_modules/` directory and environment files are excluded from version control.
- The README file contains the project description, setup instructions, API endpoints, and deployment information.
- The live application is deployed using Render.
- The GitHub repository link and deployment URL are included above for reference.
- The repository link will be submitted through the ERP portal and the faculty's designated GitHub submission form, as required.
