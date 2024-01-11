import { useState, useEffect } from "react";

// This Error no longer occurs

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ToDo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();

      setTimeout(() => {
        setTodo(data);
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error fetching todo:", error);
      setLoading(false);
    }
  };

  return <div>{loading ? <h3>Loading...</h3> : <h3>{todo!.title}</h3>}</div>;
};
export default ToDo;
