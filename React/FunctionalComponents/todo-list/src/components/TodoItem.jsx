const TodoItem = ({ task,index, removeTask, toggleComplete }) => {
    return (
      <li className='d-flex justify-content-between align-item-center' >
        <div style= {{ textDecoration: task.completed ? "none" : "line-through" }}>{task.text}</div>
        <div className='d-flex gap-3 px-4' >
        <input type="checkbox" onChange={() => toggleComplete(index)} checked={ !task.completed } />
        <button type="button" className="btn btn-dark" onClick={() => removeTask(index)}>Delete</button>
        </div>
      </li>
    );
  }
  
  export default TodoItem
  