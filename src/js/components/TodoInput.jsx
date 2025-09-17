export default function TodoInput({ value, onChange, onSubmit }) {
  const onKeyDown = (e) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        aria-label="New task"
      />
      <button className="btn btn-primary" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
}
