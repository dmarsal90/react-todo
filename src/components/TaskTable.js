import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask }) => {

  const taskTableRows = (doneValue) => {
    {
      return tasks
        .filter((task) => task.done === false)
        .map((task) => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        ));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(false)}</tbody>
    </table>
  );
};
