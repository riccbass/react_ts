import { useState, useEffect } from "react";

const FormularioLoginRB = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Login efetuado, para: ${usuario} e ${senha}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usuario">Nome do usuário:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default FormularioLoginRB;
