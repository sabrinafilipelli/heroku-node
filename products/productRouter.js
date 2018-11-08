const express = require("express");

const router = express.Router();

//middleware

// endpoints

// /api/products/
router.get("/", (req, res) => {
  res.send("GET /products");
});

// /api/products/:id
router.get("/:id", (req, res) => {
  res.send(`Get /api/products/${req.params.id}`);
});

module.exports = router; //
