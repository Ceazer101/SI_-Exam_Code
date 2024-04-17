import { WebSocketServer } from "ws";

const PORT = process.env.PORT ?? 8080;
const server = new WebSocketServer({ port: PORT });

server.on('connection', (ws) => {
    console.log('A new client connected', server.clients.size);

    ws.on('message', (message) => {
        console.log('Received: %s', message);
    });

    ws.send('Hello, client! Welcome to the WebSocket server.');
});