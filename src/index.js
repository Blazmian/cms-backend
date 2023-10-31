import app from './app';
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';
const dbConnection = require('./db');

var connection;

function callDb() {

    try {

        
        connection = dbConnectionManager.dbConnection();
        console.log("connected");

    } catch (err) {
        console.log(err);
    }

const server = http.createServer(app)
const httpServer = server.listen(3000)
const io = new WebsocketServer(httpServer)

console.log('Server is running on port 3000');

}

callDb();