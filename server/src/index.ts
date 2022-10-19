import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.listen(3001, () => {
  console.log("Server running at localhost:3001");
});
