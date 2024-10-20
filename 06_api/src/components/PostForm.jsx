import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const PostForm = ({ post, onSuccess }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  useEffect(() => {
    setTitle(post?.title || "");
    setBody(post?.body || "");
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, body, userId: 1 };

    try {
      if (post) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          newPost
        );

        //adicionar post na lista
        onSuccess(response.data, "update");
      } else {
        const response = await axios.post(
          `https://jsonplaceholder.typicode.com/posts`,
          newPost
        );

        //adicionar post na lista
        onSuccess(response.data, "add");
      }

      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handeDelete = async () => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`
      );
      onSuccess(post, "delete");
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Digite o títuli"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          value={body}
          placeholder="Digite o conteúdo"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
      {post && (
        <button type="button" onClick={handeDelete}>
          Excluir
        </button>
      )}
    </form>
  );
};

export default PostForm;
