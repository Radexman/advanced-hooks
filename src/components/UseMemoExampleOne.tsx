import { useState, useEffect, useMemo, useRef, ChangeEvent } from "react";

const UseMemoExampleOne = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  const handleClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);

      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        className="input input-bordered"
      />

      <h2 className="my-3">
        The sqrt of {number} is: {sqrt}
      </h2>

      <button className="btn btn-primary btn-sm block" onClick={handleClick}>
        Re Render
      </button>
      <h1 className="text-2xl">Renders: {renders.current}</h1>
    </div>
  );
};

const getSqrt = (n) => {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log("Expensive Function Called!");

  return Math.sqrt(n);
};

export default UseMemoExampleOne;
