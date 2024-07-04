import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

// Connect to the MongoDB database
(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
})();

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const todo = new Todo({
      title: "Sample Title",    
      desc: "Description of this todo",
      isDone: false,
      days: Math.floor(Math.random() * 45 + 5 * Math.random())
    });
    await todo.save();
    res.send('Hello World!');
  } catch (error) {
    console.error("Error creating todo:", error); // Log the error
    res.status(500).send('Error creating todo');
  }
});

app.get('/a', async (req, res) => {
  try {
    let todo = await Todo.findOne({});
    console.log(todo);
    res.json({ title: todo.title, desc: todo.desc });
  } catch (error) {
    console.error("Error fetching todo:", error); // Log the error
    res.status(500).send('Error fetching todo');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
