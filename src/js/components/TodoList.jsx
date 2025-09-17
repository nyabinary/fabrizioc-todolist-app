import TodoItem from "./TodoItem.jsx";
import EmptyState from "./EmptyState.jsx";

export default function TodoList({ items, onDelete }) {
  if (items.length === 0) {
    return (
      <ul className="list-group shadow-sm">
        <EmptyState />
      </ul>
    );
  }

  return (
    <ul className="list-group shadow-sm">
      {items.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}
