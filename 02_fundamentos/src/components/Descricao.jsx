import React from "react";

const Descricao = (props) => {
  //props
  //propriedades dos valores
  //props.nome = "Matheus"

  return (
    <div>
      <p>Seu nome é {props.nome}</p>
      <p>E você tem {props.anos} anos</p>
    </div>
  );
};

export default Descricao;
