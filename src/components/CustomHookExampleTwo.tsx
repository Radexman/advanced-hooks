import { FormEvent } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CustomHookExampleTwo = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <form className="container w-24" onSubmit={onSubmit}>
      <div className="mb-3">
        <label>Task</label>
        <input
          className="input input-bordered input-sm"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-priamry btn">
        Submit
      </button>
    </form>
  );
};
export default CustomHookExampleTwo;
