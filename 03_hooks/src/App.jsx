import "./App.css";
import ExUseEffect from "./components/ExUseEffect";
import Timer from "./components/Timer";
import ComponenteFIlho from "./components/ComponenteFIlho";
import { MeuContextoProvider } from "./contexts/MeuContexto";
import ValorDoContexto from "./components/ValorDoContexto";
import Contador from "./components/Contador";
import DisplayWindowSize from "./components/DisplayWindowSize";
import Cointainer from "./components/Cointainer";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import CalculoPesado from "./components/CalculoPesado";
import ContadorCallback from "./components/ContadorCallback";
import Exercicios from "./components/Exercicios";

function App() {
  return (
    <>
      {/* 8.1 - UseEffect */}
      <ExUseEffect />
      <Timer />
      {/* 8.2 - useContext */}
      {/* aplicações de pqn e médio porte que precisam transferir o estado entre componentes*/}
      <MeuContextoProvider>
        <ComponenteFIlho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/* 8.3 - useReducer */}
      {/* estados mais complexos */}
      <Contador />
      {/* 8.4 - custom hooks */}
      <DisplayWindowSize />
      {/* 8.5 - slots e children props */}
      <Cointainer>
        <h1>Título da cessão</h1>
        <p>Este é o meu subtítulo</p>
        <Contador />
      </Cointainer>
      {/* 8.6 - Sincronizar o estado com propos */}
      {/* props => componente = > chamada de API => resulta em um dado */}
      <PerfilDeUsuario usuarioId={1} />
      <PerfilDeUsuario usuarioId={2} />
      {/* 8.7 - useMemo e useCallback */}
      <CalculoPesado numero={5} />
      <ContadorCallback />
      <Exercicios usuario={"Ric"} />
    </>
  );
}

export default App;
