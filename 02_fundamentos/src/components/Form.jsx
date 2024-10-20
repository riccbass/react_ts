import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    //e ou event vai independente de ter argumento
    //manipulação de dados
    //validação
    //envio ao servidor pela API
    //loading
    //chamada de função de erro/bem sucedido

    e.preventDefault();
    console.log("formulario enviado ", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Preencher o campo"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
