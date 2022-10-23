export const TaskRow = ({task}) => {
  return (
    <tr>
      <td>
        {task.name}
        <input type="checkbox" checked={task.done} onChange={() => {}} />
      </td>
    </tr>
  );
};
