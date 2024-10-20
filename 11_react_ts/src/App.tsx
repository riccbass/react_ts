import "./App.css";
import ContadorIntervalo from "./components/ContadorIntervalo";
import Counter from "./components/Counter";
import FormularioLoginRB from "./components/FormularioLoginRB";
import Greeting from "./components/Greeting";
import ListaDeComprasRB from "./components/ListaDeComprasRB";
import TextInput from "./components/TextInput";
import useLocalStorage from "./hooks/useLocalStorage";
import Contador from "./components/Contador";
import { TemaProvider } from "./contexts/TemaContext";
import BarraFerramentas from "./components/BarraFerramentas";
import ExibirPostagens from "./components/ExibirPostagens";

function App() {
  const [nome, setNome] = useLocalStorage("nome", "");

  return (
    <>
      <h1>React com TS</h1>
      {/* 1 -  Componete funcional com TS */}
      <Greeting name={"Ricardo"} />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
      {/* 4 - Custom hooks com TS */}
      <ContadorIntervalo />
      <FormularioLoginRB />
      <ListaDeComprasRB />
      <div>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <p>O nome armazenado é: {nome}</p>
      </div>
      {/* 5 - useReducer com TS */}
      <Contador />
      {/* 6 - context API com TS */}
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>
      {/* 8 - Requisição de APIs com axios e TS */}
      <ExibirPostagens />
    </>
  );
}

export default App;
