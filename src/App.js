import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [newTaskname, setNewTaskName] = useState();

  return (
    <div className="App">
      <form onSubmit={}>
        <input
          type="text"
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={() => alert(newTaskname)}>
          <FontAwesomeIcon icon={faPlus} /> Save task
        </button>
      </form>
    </div>
  );
}

export default App;
