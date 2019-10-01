  
// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app.js'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, console.log('App listening on port ${port}!'));