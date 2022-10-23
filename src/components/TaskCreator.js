import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const TaskCreator = ({ createTask }) => {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskName}
        placeholder="Enter a new task"
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>
        <FontAwesomeIcon icon={faPlus} /> Save task
      </button>
    </form>
  );
};
