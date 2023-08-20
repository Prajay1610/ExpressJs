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
//fetch single post
app.get("/posts/:id", (req, res) => {
  res.send("Fetch Single Post Route!");
});
//create a post
app.post("/posts", (req, res) => {
  res.send("Create Posts Route");
});

//update a post
app.put("/posts/:id", (req, res) => {
  console.log(req.params);
  res.send("Update Post Route");
});

//Delete a Post
app.delete("/posts/:id", (req, res) => {
  console.log(req.params);
  res.send("Delete Post Route");
});
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port on port ${port}`);
});
