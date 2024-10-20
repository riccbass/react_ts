import React from "react";

const Warning = ({ warning }) => {
  if (!warning) {
    return null;
  }

  console.log(warning);

  return <div>Aviso</div>;
};

export default Warning;
