import * as net from "net";

let server = net.createServer();
server.listen({host:'127.0.0.1',port:1234})