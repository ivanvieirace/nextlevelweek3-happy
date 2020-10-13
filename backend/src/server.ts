import express, { request, response } from "express";

const server = express();

server.listen(3333);

server.get("/", (request, response) => {
  return response.json({message: "Server Backend API no Ar."});
})