import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";
import PostManager from "./components/PostManager";
import PostLoader from "./components/PostLoader";
import PostViewer from "./components/PostViewer";

const App = () => {
  return (
    <BrowserRouter>
      {/* 1 - Get com fetch e axios */}
      <h1>GET com fetch e axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch posts</Link>
        <Link to="/axios-posts">Axios posts</Link>
      </div>
      {/* 2 - continuando com requisições - POST/UPDATE */}
      <div>
        <Link to="/posts">Gerenciar posts</Link>
      </div>
      {/* 3 - tratamento de erros*/}
      <div>
        <Link to="post/1">Carregar Post 1</Link>
      </div>
      <div>
        <Link to="post/999">Carregar Post 999</Link>
      </div>
      {/* 4 - Custom hook com API */}
      <div>
        <Link to="post/view/2">Carregar Post 2</Link>
      </div>
      <Routes>
        {/* 1 - Get com fetch e axios */}
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />
        {/* 2 - continuando com requisições - POST/UPDATE */}
        <Route path="/posts" element={<PostManager />} />
        {/* 3 - tratamento de erros*/}
        <Route path="/post/:postId" element={<PostLoader />} />
        {/* 4 - Custom hook com API */}
        <Route path="/post/view/:postId" element={<PostViewer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
