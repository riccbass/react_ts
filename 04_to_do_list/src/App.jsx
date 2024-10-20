import { useState, useEffect } from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    //id, text, done

    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

    //localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskDone = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
      <h1>Lista de tarefas {tasks.length}</h1>
      <TaskInput onAddTask={addTask} />
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTaskDone={toggleTaskDone}
        />
      ) : (
        <p>Não tem tarefas</p>
      )}
    </>
  );
};

export default App;
