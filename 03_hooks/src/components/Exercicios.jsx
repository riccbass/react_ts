import { useEffect, useState, useMemo } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Ex1UserEffect = ({ usuario }) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador é ${contador} e usuário é ${usuario}`;
  }, [contador]);

  return (
    <div>
      <p>Ex. 1 User Effect</p>
      <p>Contador é {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
};

const fibonacciSeries = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n).join(",");
};

const Ex2UseMemo = ({ numero }) => {
  const resultadoCalculoPesado = useMemo(
    () => fibonacciSeries(numero),
    [numero]
  );

  return <div>Finnobacci é {resultadoCalculoPesado}</div>;
};

const Ex3CustomHook = ({}) => {
  const status = useOnlineStatus();

  console.log(`status é ${status}`);

  return <div>Status é: {status ? "Online" : "Offline"}</div>;
};

const Exercicios = ({ usuario }) => {
  return (
    <div>
      <Ex1UserEffect usuario={usuario} />
      <Ex2UseMemo numero={15} />
      <Ex3CustomHook />
    </div>
  );
};

export default Exercicios;
