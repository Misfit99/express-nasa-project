# express-nasa-project
NASA Mission Control Project
The completed version of our NASA project from Complete Node.js Developer: Zero to Mastery.

## Packages Used
   - **cors**: Node.js CORS middleware.
   - **csv-parse**: CSV parsing implementing the Node.js `stream.Transform` API.
   - **express**: Fast, unopinionated, minimalist web framework.
   - **mongoose**: Mongoose MongoDB ODM.
   - **pm2**: Production process manager for Node.JS applications with a built-in load balancer.
   - **jest**: Delightful JavaScript Testing.
   - **nodemon**: Simple monitor script for use during development of a node.js app.
   - **supertest**: SuperAgent driven library for testing HTTP servers
## Getting Started
1. Ensure you have Node.js installed.
2. Create a free Mongo Atlas database online or start a local MongoDB database.
3. Create a server/.env file with a MONGO_URL property set to your MongoDB connection string.
4. In the terminal, run: npm install

## Running the Project
1. In the terminal, run: ```npm run deploy```
2. Browse to the mission control frontend at localhost:8000 and schedule an interstellar launch!

## Running the Tests
To run any automated tests, run npm test. This will:

- Run all the client-side tests: npm test --prefix client
- Run all the server-side tests: npm test --prefix server
