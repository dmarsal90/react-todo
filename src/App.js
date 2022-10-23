import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { useState, useEffect } from "react";

function App() {
  const [tasksItems, setTaskitems] = useState([
    { name: "Mi primera tarea", done: false },
    { name: "Mi segunda tarea", done: false },
    { name: "Mi tercera tarea", done: false },
  ]);

  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskitems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert("The task already exist");
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
      <TaskCreator createTask={createTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
