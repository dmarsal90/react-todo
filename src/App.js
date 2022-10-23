import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [newTaskname, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('tasks', newTaskname);
    setNewTaskName('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTaskname}
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>
          <FontAwesomeIcon icon={faPlus} /> Save task
        </button>
      </form>
    </div>
  );
}

export default App;
