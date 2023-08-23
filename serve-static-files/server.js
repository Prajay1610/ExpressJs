const express = require("express");
const app = express();

//serve static files from the public folder

app.use(express.static("public"));
//configure express to pass data from form
app.use(express.urlencoded({ extended: true }));
//home
app.get("/", (req, res) => {
  //display html page
  res.sendFile(__dirname + "/public/pages/index.html");
});

//about page
app.get("/about", (req, res) => {
  //display html page
  res.sendFile(__dirname + "/public/pages/about.html");
});

//add post
app.post("/addPost", (req, res) => {
  //we have access to data from client or browser
  const jsonData = [
    {
      title: req.body.title,
      url: req.body.url,
      desc: req.body.body,
    },
  ];
  console.log(jsonData);
  res.send(jsonData);
});

//get post form
app.get("/get-form", (req, res) => {
  //display html page
  res.sendFile(__dirname + "/public/pages/addPost.html");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
