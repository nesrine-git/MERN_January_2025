import { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// Initial state (empty array)
const initialState = [];

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false } // Use unique ID
      ];

    case "REMOVE_TODO":
      return state.filter((task) => task.id !== action.payload); 

    case "TOGGLE_TODO":
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container text-center p-2">
      <h1>Todo List</h1>
      <TodoForm addTodo={(taskText) => dispatch({ type: "ADD_TODO", payload: taskText })} />
      <TodoList
        todos={state}
        removeTodo={(id) => dispatch({ type: "REMOVE_TODO", payload: id })}
        toggleTodo={(id) => dispatch({ type: "TOGGLE_TODO", payload: id })}
      />
    </div>
  );
};

export default App;
