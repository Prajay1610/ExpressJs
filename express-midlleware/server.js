const express = require("express");

const app = express();
const morgan = require("morgan");

//use morgan middleware
app.use(morgan("dev"));

//create a middleware outside app.use method 1
// const logger = (req, res, next) => {
//   console.log("i am a logger middleware");
//   next();
// };

//use middleware and create it in app.use itself method 2

// app.use((req, res, next) => {
//   console.log("i am a middleware");

//   next();
// });
// -----------------------------------------
//chaining middleware
// app
//   .use((req, res, next) => {
//     console.log("First Middleware");
//     next();
//   })
//   .use((req, res, next) => {
//     console.log("Second Middleware");
//     next();
//   })
//   .use((req, res, next) => {
//     console.log("Third Middleware");
//     next();
//   });

// -----------------------------------------
//middleware 1
const protected = (req, res, next) => {
  let userLoginDetails = {
    isLogin: true,
    username: "John",
  };
  if (userLoginDetails.isLogin) {
    next();
  } else {
    return res.json({
      message: "You must login first",
    });
  }
};

//middleware isAdmin
const isAdmin = (req, res, next) => {
  let userLoginDetails = {
    isLogin: false,
    username: "John",
    isAdmin: true, //change this for hitting route successfully
    id: req.params.id,
  };
  if (userLoginDetails.isAdmin && userLoginDetails.id == 134) {
    next();
  } else {
    return res.json({
      message: "You are not Admin",
    });
  }
};

//Home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Login route
app.post("/login", (req, res) => {
  res.send("Login Successful");
});

//@Role:Authenticated user
//create a post
app.post("/create-post", protected, (req, res) => {
  res.json({
    message: "Post Created",
  });
});

//@Role:Public User
//Fetch all Posts
app.get("/posts", (req, res) => {
  res.json({
    message: "Posts Fetched",
  });
});

//@Role:Admin
//delete post
app.delete("/posts/:id", protected, isAdmin, (req, res) => {
  res.json({
    message: "post Deleted",
  });
});

app.listen(9000, function () {
  console.log("Server is up and running");
});
