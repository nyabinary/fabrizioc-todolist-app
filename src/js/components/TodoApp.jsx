import { useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), text: trimmed }]);
    setTask("");
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="container py-5" style={{ maxWidth: 640 }}>
      <h1 className="display-6 text-center mb-4">todos</h1>

      <TodoInput value={task} onChange={setTask} onSubmit={addTask} />

      <TodoList items={tasks} onDelete={removeTask} />

      {tasks.length > 0 && (
        <div className="text-muted small mt-2">{tasks.length} task(s)</div>
      )}
    </div>
  );
}
