import React from "react";

const Cachorro = ({ nome, raca }) => {
  return (
    <div>
      <p>
        O cachorro se chama {nome} e a raça é {raca}
      </p>
    </div>
  );
};

export default Cachorro;
