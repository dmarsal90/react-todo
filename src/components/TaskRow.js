export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task);
          }}
        />
      </td>
    </tr>
  );
};
