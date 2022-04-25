const app = require('./app');

const http = require('http');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const {mongoConnect} = require('../src/services/mongo');

const {
    loadPlanetsData
} = require('./model/planets.model');


async function startLoading() {
    await mongoConnect();
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}

startLoading();