import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { useState, useEffect } from "react";

function App() {
  const [tasksItems, setTaskItems] = useState([]);

  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert("The task already exist");
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
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
