import React from "react";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <span>
        <IconButton
          variant="contained"
          color="success"
          onClick={() => markTodo(index)}
        >
          <DoneIcon />
        </IconButton>{" "}
        <IconButton color="error" onClick={() => removeTodo(index)}>
          <DeleteIcon />
        </IconButton>
      </span>
    </div>
  );
}

export default Todo;
