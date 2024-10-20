import React, { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostManager = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSuccess = (post, operation) => {
    if (operation === "add") {
      setPosts((currentPosts) => [post, ...currentPosts]);
    } else if (operation === "update") {
      setPosts((currentPosts) =>
        currentPosts.map((p) => (p.id === post.id ? post : p))
      );
      setIsEditing(false);
    } else if (operation === "delete") {
      setPosts((currentPosts) => currentPosts.filter((p) => p.id !== post.id));
      setSelectedPost(null);
      setIsEditing(false);
    }
    setIsEditing(false);
  };

  useEffect(() => {
    const FetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );

        setPosts(response.data.slice(0, 5));
      } catch (error) {
        setError(error.message);
      }
    };

    FetchPosts();
  }, []);

  const handleEdit = (post) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handelCancelEdit = () => {
    setSelectedPost(null);
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Gerenciar post</h1>
      <PostForm
        post={isEditing ? selectedPost : null}
        onSuccess={handleSuccess}
      />
      {isEditing && <button onClick={handelCancelEdit}>Cancelar edição</button>}
      <h2>Postagens:</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleEdit(post)}>Editar</button>
        </div>
      ))}
    </div>
  );
};

export default PostManager;
