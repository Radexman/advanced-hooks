import { useState } from "react";
import ToDo from "./ToDo";

const RefExampleTree = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <ToDo />}
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
};
export default RefExampleTree;
