import { useState } from "react";

const Ex1Greeting = ({ nome }) => {
  return <h3>Olá {nome}</h3>;
};

const Ex2Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Diminuir</button>
      <h3>Clicou {count} vezes</h3>
    </div>
  );
};

const Ex3Counter = ({ lista }) => {
  if (lista.length === 0) {
    return <div>Lista zerada</div>;
  }

  return (
    <ul>
      {lista.map((elemento) => {
        return <li key={elemento.id}>{elemento.text}</li>;
      })}
    </ul>
  );
};

const Exercicios = ({ nome, lista }) => {
  return (
    <div>
      <h2>Exercício 1</h2>
      <Ex1Greeting nome={nome} />
      <Ex2Counter />
      <Ex3Counter lista={lista} />
    </div>
  );
};

export default Exercicios;
