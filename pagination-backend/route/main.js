var express = require("express");
var router = express.Router();
var { results, cities } = require("../controller/result");

router.post("/get/max", (req, res) => {
  cities(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/get", (req, res) => {
  results(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/", (req, res) => {
  res.send("Backend is running.");
});

module.exports = router;