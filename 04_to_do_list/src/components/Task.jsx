import { useState } from "react";

const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <li>
      <span
        onClick={onToggleDone}
        style={{ textDecorationLine: task.done ? "line-through" : null }}
      >
        {task.text}
      </span>
      <button className={"btn-delete"} onClick={onDelete}>
        Remover
      </button>
    </li>
  );
};

export default Task;
