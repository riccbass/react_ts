import { useState, useEffect } from "react";
import axios from "axios";

const AxiosPosts = () => {
  //JSON Placeholder
  //id, title, body

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const FetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );

        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    FetchPosts();
  }, []);

  return (
    <div>
      <h1>Post (Axios API)</h1>
      {error ? (
        <p>Erro: {error}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AxiosPosts;
