const express = require("express");
const app = express();

//set the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(9000, function () {
  console.log("Server started on port 9000");
});
