import { useState } from "react";

export default function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handelTask(event) {
    setNewTask(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
      alert("Please enter a valid task.");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function upTask(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index - 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index - 1],
      ];
      setTasks(newTasks);
    }
  }

  function downTask(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [
        newTasks[index + 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }

  return (
    <div className="todolist">
      <header>
        <h1>To-Do List</h1>
      </header>

      <div className="main">
        <form>
          <input
            type="text"
            placeholder="Enter a task... "
            value={newTask}
            onChange={handelTask}
          />
          <button className="add-btn" onClick={addTask}>
            Add task
          </button>
        </form>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="btn delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="btn up-btn" onClick={() => upTask(index)}>
                Up
              </button>
              <button className="btn down-btn" onClick={() => downTask(index)}>
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
