import { TaskRow } from "./TaskRow";

<<<<<<< HEAD
export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

  const taskTableRows = (doneValue) => {    
      return (
        tasks
          .filter(task => task.done === doneValue)
          .map(task => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
          ))
      );
    }
  
=======
export const TaskTable = ({ tasks, toggleTask }) => {

  const taskTableRows = () => {
    {
      return (
        tasks
          .filter(task => task.done === false)
          .map((task) => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
          ))
      );

    }
  }
>>>>>>> e917bbea1a8665541e59d99911d914770543ee78

  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
<<<<<<< HEAD
      <tbody>{taskTableRows(showCompleted)}</tbody>
=======
      <tbody>
        taskTableRows(false);
      </tbody>
>>>>>>> e917bbea1a8665541e59d99911d914770543ee78
    </table>
  );
};
