import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import TaskDetails from "./components/TaskDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      {/* 1 -  Setup e configuração incial */}
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          {/* 2 - Navlinks */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contact"
            >
              Contato
            </NavLink>
          </li>
          {/* 3 - useNavigate */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* 5 rotas aninhadas */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        {/* 4 rotas dinâmicas */}
        <div>
          <h2>Tarefas</h2>
          <Link to="/tasks/1">Tarefa 1</Link>
          <Link to="/tasks/2">Tarefa 2</Link>
          <Link to="/tasks/3">Tarefa 3</Link>
        </div>

        {/* 6 rotas 404 */}
        <div>
          <h2>Items</h2>
          <Link to="/items/1">Item 1</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 3 - useNavigate */}
        <Route path="/login" element={<Login />} />
        {/* 4 - rotas dinâmicas */}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        {/* 5 - rotas aninhadas */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* 6 - 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <p>Rodapé</p>
    </>
  );
};

export default App;
