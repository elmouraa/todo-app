import express from "express";

const app = express();

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    text: "Learn nodejs",
    isDone: false,
  },
];

// TODO: Sign up endpoint
// TODO: Login endpoint

// TODO: Create todo endpoint
// TODO: Update todo endpoint
// TODO: Delete todo endpoint

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

// TODO: Use env to store PORT
app.listen(3000, () => {
  console.log("Server running at localhost:3001");
});
