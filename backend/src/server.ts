import express from "express";
import "express-async-errors";
import path from "path";
import "./database/connection";
import routes from "./routes"
import errorHandler from "./errors/handler";

const server = express();

server.use(express.json());
server.use(routes);
server.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
server.use(errorHandler);

server.listen(3333);

