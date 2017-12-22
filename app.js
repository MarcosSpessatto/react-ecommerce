const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.use((request, response, next) => {
    const err = new Error('Not found!');
    err.status = 404;
    next(err);
});

app.use((err, request, response) => {
    response.status(err.status || 500).json({ err: err.message });
});

module.exports = app;
