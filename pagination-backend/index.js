const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

var Router = require("./route/main");
app.use("/", Router);

app.listen(port, () => {
  console.log("Listining to port:", port);
});