import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow task={task} key={task.name} />
        ))}
      </tbody>
    </table>
  );
};
