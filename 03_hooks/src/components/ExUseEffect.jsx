import { useEffect, useState } from "react";

const ExUseEffect = () => {
  const [contador, setContador] = useState(0);

  //executar algo baseado algo
  //a mudança de um valor, carregamento da página

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;
  });

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clicar</button>
    </div>
  );
};

export default ExUseEffect;
