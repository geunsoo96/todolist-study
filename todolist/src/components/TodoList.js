import TodoListItem from "./TodoListItem";
export default function TodoList({ todos }) {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
