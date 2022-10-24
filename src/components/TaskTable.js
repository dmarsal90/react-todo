import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask }) => {
  
  const taskTableRows = () => {
    {
      return (
        tasks.map((task) => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        ))
      );
      
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        taskTableRows();
      </tbody>
    </table>
  );
};
