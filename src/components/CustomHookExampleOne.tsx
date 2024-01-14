import useFetch from "../hooks/useFetch";

const CustomHookExampleOne = () => {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {},
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {data.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </div>
  );
};

export default CustomHookExampleOne;
