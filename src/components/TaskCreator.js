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
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
          <input
              type="text"
              value={newTaskName}
              placeholder="Enter a new task"
              onChange={(e) => setNewTaskName(e.target.value)}
              className='form-control'
          />
      </div>
      <button className='btn btn-primary btn-sm col-3'>
        <FontAwesomeIcon icon={faPlus} /> Save task
      </button>
    </form>
  );
};
