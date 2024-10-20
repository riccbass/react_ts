import React from "react";

const NumberList = ({ numbers }) => {
  //estuturas de looop - for, while
  //métdos de array - filter, map, reduce

  //chaves - key
  //um identificador único para cada elemento
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;
