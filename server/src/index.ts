import express from "express";

const app = express();

app.use(express.json());

let id = 0;

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

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

const updateTodo = (
  id: number,
  { text, isDone }: { text?: string; isDone?: boolean }
) => {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  if (isDone) todo.isDone = isDone;
  if (text) todo.text = text;

  return { ...todo };
};

const deleteTodo = (id: number) => {
  if (!todos.some((todo) => todo.id === id)) return false;
  todos = todos.filter((todo) => todo.id !== id);
  return true;
};

app.post("/todos/create", (req, res) => {
  const body = req.body;

  if (!body?.text) {
    res.status(400).send("text property is undefined");
    return;
  }

  const todo = createTodo(body.text);
  res.json(todo);
});

app.patch("/todos/update/:id", (req, res) => {
  const id = +req.params.id;
  const body = req.body;
  const todo = updateTodo(id, body);

  res.json(todo);
});

app.delete("/todos/delete/:id", (req, res) => {
  const id = +req.params.id;

  const isDeleted = deleteTodo(id);

  res.json(isDeleted);
});

app.get("/todos", (_, res) => {
  res.json(todos);
});

app.listen(3000, () => {
  console.log("Server running at localhost:3001");
});
