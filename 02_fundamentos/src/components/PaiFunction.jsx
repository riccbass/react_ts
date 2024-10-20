import React from "react";
import FilhoFunction from "./FilhoFunction";

const PaiFunction = () => {
  const handleChildClick = () => {
    console.log("clicou o botão do elemto filho");
  };

  return (
    <div>
      <FilhoFunction onChildClick={handleChildClick} />
    </div>
  );
};

export default PaiFunction;
