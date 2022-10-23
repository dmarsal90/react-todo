export const TaskRow = ({task}) => {
  return (
    <tr key={task.name}>
      <td>
        {task.name}
        <input type="checkbox" checked={task.done} onChange={() => {}} />
      </td>
    </tr>
  );
};
