import { motion } from "framer-motion";

const TodoItem = ({ text, completed, onRemove, onToggle }) => {
  return (
    <motion.li
      className="d-flex justify-content-between align-items-center p-2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      layout
    >
      <span style={{ textDecoration: completed ? "none" : "line-through" }}>{text}</span>
      <div className="d-flex gap-3 px-4">
        <input type="checkbox" onChange={onToggle} checked={!completed} />
        <button type="button" className="btn btn-dark" onClick={onRemove}>
          Delete
        </button>
      </div>
    </motion.li>
  );
};

export default TodoItem;
