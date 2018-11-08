const express = require("express");

const router = express.Router();

//middleware

// endpoints

// /api/clients/
router.get("/", (req, res) => {
  res.send("GET /clients");
});

// /api/clients/:id
router.get("/:id", (req, res) => {
  res.send(`Get /api/clients/${req.params.id}`);
});

module.exports = router; //
