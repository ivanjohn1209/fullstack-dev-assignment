# Domain Lookup Application

This is a full-stack web application for looking up domain information using the [Whois API](https://whoisxmlapi.com/). The project includes both backend and frontend components, allowing users to input a domain name and fetch details such as registration and expiration dates, hostnames, and contact information.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment to Netlify](#deployment-to-netlify)

---

## Features

- Input a domain name to look up.
- Select data type: **Domain Information** or **Contact Information**.
- View results in a table format.
- Responsive UI styled with **Tailwind CSS**.
- Error handling for invalid domain names or API failures.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express
- Axios

---

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- NPM or Yarn

### Steps
1. Clone the repository:
   
```bash
   git clone https://github.com/ivanjohn1209/fullstack-dev-assignment.git
   cd fullstack-dev-assignment
```

2. Set up the backend:

```bash
    cd backend
    npm install
```

3. Set up the frontend:

```bash
    cd ../frontend
    npm install
```
## Environment Variables
Create a .env file in the backend directory and add the following variables:

    - PORT=5000
    - WHOIS_API_KEY=your_api_key_here

## Usage

### Run Backend

1. Navigate to the backend folder:

```bash
    cd backend
```
2. Start the server:

```bash
    npm start
```
The backend server will run at http://localhost:5000.


### Run Frontend

1. Navigate to the frontend folder:

```bash
    cd frontend
```
2. Start the server:

```bash
    npm start
```
The frontend server will run at http://localhost:3000.


# React App Deployment on Netlify

This guide explains how to deploy your React application to Netlify.

---

## Steps to Deploy

### 1. Build the React App
Ensure your app is production-ready:
```bash
npm run build
```
This command creates a `build` folder with optimized static files.

---

### 2. Deploy Using Netlify

#### Option 1: Drag and Drop
1. Go to [Netlify Dashboard](https://app.netlify.com/).
2. Click **"Add New Site"** → **"Deploy manually"**.
3. Drag and drop the `build` folder into the upload area.

#### Option 2: Connect a Git Repository
1. Push your React project to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2. In the Netlify dashboard, click **"Add New Site"** → **"Import from Git"**.
3. Choose your repository and configure the settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`
4. Click **"Deploy Site"**. Netlify will automatically build and deploy your app.

---

### 3. Configure Routing for Single-Page Applications
To handle React's client-side routing:
1. Add a `_redirects` file in the `public` folder with the following content:
   ```
   /* /index.html 200
   ```

OR

2. Use a `netlify.toml` file in the project root:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

---

### 4. Optional: Environment Variables
If your app requires environment variables:
1. In the Netlify dashboard, go to **Site Settings** → **Environment Variables**.
2. Add variables like:
   ```
   REACT_APP_API_URL=https://your-api-url.com
   ```

---

### 5. Verify and Test
Once deployed, Netlify provides a live URL (e.g., `https://your-site.netlify.app`). 
- Open the URL and test your app.
- Push changes to your repository to trigger automatic redeployment.

---

## Advanced CI/CD Setup

### Using a `netlify.toml` File
To customize your deployment, create a `netlify.toml` file in your project root:
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Using Netlify CLI
For manual or scripted deployments:
1. Install the CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Log in:
   ```bash
   netlify login
   ```
3. Deploy your app:
   ```bash
   netlify deploy
   ```
   - **Production**:
     ```bash
     netlify deploy --prod
     ```

---

### Troubleshooting
- **Routing Issues**: Ensure you’ve added a `_redirects` or `netlify.toml` file for SPA routing.
- **Build Errors**: Check your `package.json` for a valid `build` script.
- **Environment Variables**: Verify they are correctly configured in Netlify.


# Node.js Express App Deployment on Netlify

This guide explains how to deploy your Node.js Express application to Netlify.

---

## Steps to Deploy

### 1. Build the Express App

Make sure your Express app is ready for production. In most cases, you'll need to bundle your app using a tool like `webpack` or deploy it directly if you're using `serverless` functions.

---

### 2. Configure Your Project for Netlify

#### Add a `server.js` or `index.js` File
Ensure your `server.js` or `index.js` file starts the Express app. Here's an example of how the app might look:

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### Create a `netlify.toml` File
To configure Netlify to run your server as a Node.js function, create a `netlify.toml` file with the following content:

```toml
[build]
  command = "npm run build"
  publish = "dist"  # If you're using Webpack or another build tool

[[redirects]]
  from = "/*"
  to = "/.netlify/functions/server"
  status = 200
```

- This configuration redirects all requests to a Netlify serverless function (`/.netlify/functions/server`).

---

### 3. Use Netlify Functions (If Applicable)

If you're using serverless functions, create a function inside the `netlify/functions/` folder. Here's an example of a simple function for Express:

#### Create a `netlify/functions/server.js` File:
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from serverless function!' });
});

module.exports.handler = require('@netlify/functions').createServer(app);
```

- This file will create an Express server that runs as a serverless function on Netlify.

---

### 4. Optional: Add Environment Variables
In the Netlify dashboard, go to **Site Settings** → **Environment Variables** and add any variables your app needs. For example:
```
NODE_ENV=production
DATABASE_URL=your-database-url
```

---

### 5. Deploy Your App

#### Option 1: Drag and Drop

1. Go to [Netlify Dashboard](https://app.netlify.com/).
2. Click **"Add New Site"** → **"Deploy manually"**.
3. Drag and drop your project folder into the upload area.

#### Option 2: Connect a Git Repository

1. Push your Node.js Express project to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2. In the Netlify dashboard, click **"Add New Site"** → **"Import from Git"**.
3. Choose your repository and configure the settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: Leave empty if using serverless functions (it will publish the function automatically).
4. Click **"Deploy Site"**. Netlify will automatically build and deploy your app.

---

### 6. Verify and Test

Once deployed, Netlify provides a live URL (e.g., `https://your-site.netlify.app`).
- Open the URL and test your app.
- Push changes to your repository to trigger automatic redeployment.

---

## Advanced CI/CD Setup

### Using a `netlify.toml` File for Multiple Environments

If your app has multiple environments, configure deployment commands for each context:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[context.production]
  command = "npm run build"
  publish = "dist"

[context.deploy-preview]
  command = "npm run test && npm run build"
  publish = "dist"
```

---

### Using Netlify CLI

For manual or scripted deployments:
1. Install the CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Log in:
   ```bash
   netlify login
   ```
3. Deploy your app:
   ```bash
   netlify deploy
   ```
   - **Production**:
     ```bash
     netlify deploy --prod
     ```

---

### Troubleshooting

- **Serverless Function Not Working**: Ensure the handler is correctly exported and the function is in the right directory.
- **Routing Issues**: Ensure you’re redirecting all requests to `/index.html` or a serverless function in your `netlify.toml`.
- **Environment Variables**: Double-check that they’re correctly set in the Netlify dashboard.