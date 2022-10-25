export const VisibilityControl = ({ setShowCompleted }) => {
  const handleDelete = () => {
    alert("cleaning");
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
