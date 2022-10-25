import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { useState, useEffect } from "react";
import { TaskTable } from "./components/TaskTable";

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState(false);

  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert("The task already exist");
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

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
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
      <div>
        <input
          type="checkbox"
          onChange={(e) => setshowCompleted(!showCompleted)}
        />
        <label>Show tasks done</label>
      </div>
      {showCompleted === true && (
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
}

export default App;
