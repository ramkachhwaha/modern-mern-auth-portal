import { Server } from "socket.io";

let io;

export default function InitSocket(server) {

    io = new Server(server, {
        cors: {
            origin: "*"
        }
    })
}
export const getIo = () => io;

// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors()); 