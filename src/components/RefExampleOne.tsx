import { useRef, FormEvent } from "react";

const RefExampleOne = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const paraRef = useRef<HTMLParagraphElement>(null!);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.focus();
    paraRef.current.textContent = "Thank toy for your submission";
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit} className="mx-auto max-w-md">
        <div className="flex flex-col space-y-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref={inputRef}
            className="input input-bordered mb-2"
            id="name"
          />
          <button type="submit" className="btn">
            Submit
          </button>
          <p ref={paraRef}>Hello</p>
        </div>
      </form>
    </div>
  );
};
export default RefExampleOne;
