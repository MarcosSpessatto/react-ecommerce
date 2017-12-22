const app = require('../app');

const server = app.listen(3031, () => {
    const port = server.address().port;
    console.log('Server running on port ' + port + '...');
});
