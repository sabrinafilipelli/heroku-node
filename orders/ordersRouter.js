const express = require("express");

const router = express.Router();

//middleware

// endpoints

// /api/orders/
router.get("/", (req, res) => {
  res.send("GET /orders");
});

// /api/orders/:id
router.get("/:id", (req, res) => {
  res.send(`Get /api/orders/${req.params.id}`);
});

module.exports = router; //
