import express from "express";
import path from "path";
import "./database/connection";
import routes from "./routes"

const server = express();

server.use(express.json());
server.use(routes);
server.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

server.listen(3333);

