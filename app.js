const express = require("express");
const app = express();

app.use(express.json());

let posts = [];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const post = {
    id: posts.length + 1,
    content: req.body.content
  };
  posts.push(post);
  res.json({ status: "Post created", post });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
