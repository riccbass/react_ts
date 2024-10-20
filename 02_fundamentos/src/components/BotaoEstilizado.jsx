import React from "react";

const BotaoEstilizado = () => {
  //class => className
  //for => htmlFor

  const estiloDoBotao = {
    backgroundColor: "#333",
    color: "#FFF",
    padding: "15px 32px",
    cursor: "pointer",
  };

  return <button style={estiloDoBotao}>Clique em mim</button>;
};

export default BotaoEstilizado;
