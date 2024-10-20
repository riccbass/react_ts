import { useMemo } from "react";

const CalculoPesado = ({ numero }) => {
  const resultadoCalculoPesado = useMemo(() => {
    return operacaoPesada(numero);
  }, [numero]);

  return <div> Resultado: {resultadoCalculoPesado}</div>;
};

const operacaoPesada = (num) => {
  console.log("Realizando operação pesada");
  return num * 1e3;
};

export default CalculoPesado;
