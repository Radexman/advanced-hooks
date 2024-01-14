import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "Some Tasks"]);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTask }: { addTask: () => void }) => {
  console.log("Button rendered");

  return (
    <div>
      <button className="btn btn-primary btn-sm" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
