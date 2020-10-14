import express, { request, response } from "express";
import "./database/connection";
import routes from "./routes"

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333);

