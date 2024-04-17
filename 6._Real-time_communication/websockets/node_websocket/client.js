import { WebSocket } from "ws";

const client = new WebSocket("ws://localhost:8080");

client.on("open", () => {
    client.send("This is a message from the client from Node.js");

    client.on("message", (message) => {
        console.log(`Received message from server: ${message}`);
        client.close();
    });
});