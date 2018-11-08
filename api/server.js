const express = require("express");

// npm i express helmet morgan
// yarn add express helmet morgan

const gatekeeper = require("../gatekeeper/gatekeeperMiddleware.js");
const productRouter = require("../products/productRouter.js");
const orderRouter = require("../orders/ordersRouter");
const clientsRouter = require("../clients/clientsRouter");
const configureMiddleware = require("../config/middleware.js");

const server = express();

// configure middleware
configureMiddleware(server);

// custom

// server.use(gatekeeper); // using middleware globally

// configure endpoints (route handlers are middleware!!)
server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/secret", gatekeeper, (req, res) => {
  res.send(req.welcomeMessage);
});

server.use("/api/products", productRouter);
server.use("/api/clients", clientsRouter);
server.use("/api/orders", orderRouter);

module.exports = server;

// products, clients, orders

// we can organize our files by type, by feature or hybrid

// writing code? nope, creating value.

// what is code? is a communication device
// reveals intent to the next developer (might be you)
// it should be clear, reveal intent and have no surprises

// validateAndAddProduct(product) <<<< makes me nervous
