const express = require("express");
const { createFile, createFolder } = require("./utils");
const postsData = require("./data/post.json");

const app = express();
//create folder
createFolder("data");
//create File
createFile("data/post.json", "content here");

//Routing
//home route
app.get("/", (req, res) => {
  res.send("Home Route!");
});

//fetch all posts
app.get("/posts", (req, res) => {
  res.json({
    message: "Posts Fetched Successfully!",
    postsData,
  });
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
