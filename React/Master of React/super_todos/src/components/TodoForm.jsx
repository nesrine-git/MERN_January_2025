import { useState } from "react";

function TodoForm(props) {
  const {addTodo} = props
  
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    
    //* Trim() checks if the input is empty or contains only spaces before adding the task,
    // preventing the addition of blank tasks. 

    if (taskText.trim() === "") { 
       setError("❌ Task cannot be empty!");
       return;
     }
     addTodo(taskText);
     setTaskText("");
     setError("");
   };

  return (
    <div className="container mb-3" >
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-1">
          <input type="text" value={taskText} className="form-control border-3" placeholder="Enter a task ..."
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button className="btn btn-primary" >ADD</button> 
        </div>
          {/* Show error message */} 
          {error ? <div className="text-start" style={{ color: "red" }}>{error}</div> : " " }
      </form>
    </div>
  );
}

export default TodoForm
