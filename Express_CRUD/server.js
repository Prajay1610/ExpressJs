const express = require("express");

const app = express();

//routing

//home route
app.get("/", (req, res) => {
  res.send("Home Route!");
});

//fetch all posts
app.get("/posts", (req, res) => {
  res.send("Fetch all Posts Route!");
});
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port on port ${port}`);
});
