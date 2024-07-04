import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  days: { type: Number, default: 0 }
});

export const Todo = mongoose.model("Todo", todoSchema);
