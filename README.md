# Menu Text App
Automated menu texting app built with a MERN stack (MongoDB, Express, React, Node). Built for use at the University of Notre Dame ☘️

Users can securely login/signup and configure a detailed schedule for menu text notifications. Schedules can be made for each day of the week (*Sunday - Saturday*). For each day, the user will choose the **meal** (*Breakfast, Lunch, Dinner*), the **dining hall** (*North Dining Hall or South Dining Hall*), and the **notification time**. 

Admin can post, delete, and edit menus for a dining hall's meal on any given date.

## Installation
```bash
npm install
```

## MERN Technology Stack
- MongoDB
- Express.js
- React.js
- Node.js

## Running the backend (Express server)
Backend server will run on localhost port 5000
```bash
cd backend
node server.js
```

## Running the frontend (React)
React server will run on localhost port 3000
```bash
cd client
npm start
```

## Running the database (MongoDB)
MonogDB database will run on localhost port 27017
```bash
mongod
```

## User Authentication
User passwords are encrypted using the [bcrypt](https://www.npmjs.com/package/bcrypt) npm package

## User Sessions
User sessions are managed with tokens using [jswonwebtoken (jwt)](https://www.npmjs.com/package/jsonwebtoken) npm package