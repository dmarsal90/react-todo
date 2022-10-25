export const VisibilityControl = ({ setShowCompleted, cleanTasks }) => {
  const handleDelete = () => {
      if (window.confirm('Are you sure you want to delete it?')) {
          cleanTasks();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{""}
      <label>Show tasks done</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
