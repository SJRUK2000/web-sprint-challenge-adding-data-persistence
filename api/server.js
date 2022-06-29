const express = require('express');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router')

const server = express();
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use('*', (req, res) => { 
    res.json({ api: 'up' })
})

server.use((err, req, res) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;