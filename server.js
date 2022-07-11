require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/auth");
const app = express();

app.use(express.json());

//database


const posts = [
  {
    userId: 1,
    post: "post phong",
  },
  {
    userId: 2,
    post: "post nobi",
  },
  {
    userId: 2,
    post: "post nobi 2",
  },
];
//app
app.get("/posts", verifyToken, (req, res) => {
  res.json(posts.filter((posts) => posts.userId === req.userId));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
