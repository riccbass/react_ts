import React, { useCallback, useState } from "react";

//memo memoriza componentes
//useMemo memoriza valores

const Botao = React.memo(({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
});

const ContadorCallback = () => {
  const [contador, setContador] = useState(0);
  const incrementar = useCallback(() => {
    setContador((contadorAnterior) => contadorAnterior + 1);
  }, []);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <Botao onClick={incrementar}>Incrementar</Botao>
    </div>
  );
};

export default ContadorCallback;
