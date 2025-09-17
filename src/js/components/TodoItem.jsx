export default function TodoItem({ item, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center todo-item">
      <span>{item.text}</span>
      <button
        className="btn btn-sm btn-outline-danger delete-btn"
        onClick={() => onDelete(item.id)}
        aria-label={`Delete ${item.text}`}
      >
        &times;
      </button>
    </li>
  );
}
