import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul className="d-flex flex-column gap-2">
      {todos.map((task) => (
        <TodoItem 
          key={task.id} 
          text={task.text} 
          completed={task.completed} 
          onRemove={() => removeTodo(task.id)} 
          onToggle={() => toggleTodo(task.id)} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
