import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("formulário enviado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange}></input>
      <p>{text}</p>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default TextInput;
