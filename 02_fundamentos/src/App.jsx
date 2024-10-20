import "./App.css";
import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Pai from "./components/Pai";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";
import Counter from "./components/Counter";
import UserInfoForm from "./components/UserInfoForm";
import Button from "./components/Button";
import PaiFunction from "./components/PaiFunction";
import Form from "./components/Form";
import RenderCondicional from "./components/RenderCondicional";
import LoginButton from "./components/LoginButton";
import Warning from "./components/Warning";
import NumberList from "./components/NumberList";
import BotaoEstilizado from "./components/BotaoEstilizado";
import BotaoAzul from "./components/BotaoAzul";
import Exercicios from "./components/Exercicios";

function App() {
  const lista = [
    { id: 1, text: "ABABABABABABABABABABABABABABABABA" },
    { id: 2, text: "CACACACACACACACACACACACACAC" },
    { id: 3, text: "DXDXDXDXDX" },
  ];

  return (
    <>
      {/*6.1 - Criação de componente*/}
      <Welcome />
      {/*6.2 - Expressões de JSX*/}
      <BomDia />
      {/*6.3 - Componente dentro de componente*/}
      <Pai />
      {/*6.4 - Props*/}
      <Descricao nome="Ricardo" anos={30} />
      {/*6.5 = Deestruturação de props*/}
      <Cachorro nome="Dido" raca="SRD" />
      {/*6.6 - UseState -> hook*/}
      <Counter />
      {/*6.7 - múltiplos estados*/}
      <UserInfoForm />
      {/*6.8 - eventos*/}
      <Button />
      {/*6.9 - passar funções de manipulação de eventos com props*/}
      <PaiFunction />
      {/*6.10 - evento de form8*/}
      <Form />
      {/*6.11 - renderização condicional*/}
      <RenderCondicional user={"Ric"} />
      {/*6.12 - expressão ternária*/}
      <LoginButton loggedIn={false} />
      {/*6.13 - render nulo*/}
      <Warning warning={null} />
      {/*6.14 - Listas e Chaves*/}
      <NumberList numbers={[1, 2, 3, 4]} />
      {/*6.15 - Estilos por atributos*/}
      <BotaoEstilizado />
      {/*6.16 - Estilos globais*/}
      <BotaoAzul />
      {/*6.17 - Exercícios*/}
      <Exercicios nome={"Rick"} lista={lista} />
    </>
  );
}

export default App;
