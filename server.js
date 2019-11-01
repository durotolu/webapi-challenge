const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const projectsRouter = require('./routes/projectsRoutes');
const actionsRouter = require('./routes/actionsRoutes');

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;