const express = require("express");
const app = express();

//set the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
//profile page
app.get("/profile", (req, res) => {
  let user = {
    name: "Prajay",
    age: 20,
    city: "Nashik",
  };
  res.render("profile.ejs", {
    user,
  });
});

app.get("/posts", (req, res) => {
  const posts = [
    {
      title: "HTML",
      desc: "The best post ever HTML",
    },
    {
      title: "CSS",
      desc: "The best post ever CSS",
    },
    {
      title: "JS",
      desc: "The best post ever JS",
    },
  ];
  res.render("posts.ejs", { posts });
});

app.listen(9000, function () {
  console.log("Server started on port 9000");
});
