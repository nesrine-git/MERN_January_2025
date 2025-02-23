import TodoItem from "./TodoItem";

const TodoList = ({ tasks, removeTask, toggleComplete }) => {
  return (
    <ul className="d-flex flex-column gap-2">
       { tasks.map((task, index) => (
        <TodoItem key={index}  task={task} index={index} removeTask={removeTask} toggleComplete={toggleComplete}/>
      ))} 
    </ul>
  );
}

export default TodoList
