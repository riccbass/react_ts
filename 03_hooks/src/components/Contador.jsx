import { useReducer } from "react";

// Definição de estado inicial
const estadoInicial = { contador: 0 };

//função reducer que definie como as ações atualizam o estado
function reducer(estado, acao) {
  switch (acao.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };
    case "triplicar":
      return { contador: estado.contador * 3 };
    case "decrementar":
      return { contador: estado.contador - 1 };
    case "resetar":
      return { contador: 0 };
    default:
      throw new Error("Ação não suportada");
  }
}

const Contador = () => {
  //inicializar o useReducer com o estado inicial e função modificadora
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <p>Contagem: {estado.contador}</p>
      <button onClick={() => dispatch({ tipo: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ tipo: "triplicar" })}>Triplicar</button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ tipo: "resetar" })}>Resetar</button>
    </div>
  );
};

export default Contador;
