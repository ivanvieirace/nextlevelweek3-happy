import express, { request, response } from "express";
import "./database/connection";

const server = express();

server.use(express.json());

server.listen(3333);

server.get("/users", (request, response) => {
  return response.json({message: "Server Backend API no Ar."});
})