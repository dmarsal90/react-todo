export const VisibilityControl = () => {
  const handleDelete = () => {
    alert("cleaning");
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setshowCompleted(!showCompleted)}
      />
      <label>Show tasks done</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
