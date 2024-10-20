import { useState } from "react";

const Counter = () => {
  //consultar e alterar valo
  const [count, setCount] = useState(0);
  //variáveis não re-renderizam o componente

  let x = 10;

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
};

export default Counter;
