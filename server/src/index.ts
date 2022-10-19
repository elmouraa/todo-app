import express from "express";

const app = express();

app.use(express.json());

let id = 0;

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

// TODO: use a Map
let todos: Todo[] = [
  {
    id: 0,
    text: "Learn nodejs",
    isDone: false,
  },
];

const createTodo = (text: string) => {
  const todo: Todo = {
    id: ++id,
    text,
    isDone: false,
  };

  todos.push(todo);

  return { ...todo };
};

const deleteTodo = (id: number) => {
  if (!todos.some((todo) => todo.id === id)) return false;
  todos = todos.filter((todo) => todo.id !== id);
  return true;
};

// TODO: Sign up endpoint
// TODO: Login endpoint

app.post("/todos/create", (req, res) => {
  const body = req.body;

  if (!body?.text) {
    res.status(400).send("text property is undefined");
    return;
  }

  const todo = createTodo(body.text);
  res.json(todo);
});
// TODO: Update todo endpoint
// TODO: Delete todo endpoint
app.delete("/todos/delete/:id", (req, res) => {
  const id = +req.params.id;

  const isDeleted = deleteTodo(id);

  res.json(isDeleted);
});

app.get("/todos", (_, res) => {
  res.json(todos);
});

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

// TODO: Use env to store PORT
app.listen(3000, () => {
  console.log("Server running at localhost:3001");
});
