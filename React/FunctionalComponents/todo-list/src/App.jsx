import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
   const [tasks, setTasks] = useState([]);

   const addTask = (taskText) => {
     setTasks(prevTasks => [...prevTasks, { text: taskText, completed: false }]);
   };

   const removeTask = (index) => {
     setTasks(prevTasks => prevTasks.filter((item, id) => id !== index));
   };

   const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, id) =>
        id === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container text-center p-2">
      <h1>Todo List</h1>
      <TodoForm addTask = {addTask} />
      <TodoList tasks= {tasks} removeTask= {removeTask}  toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;
