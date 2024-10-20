import { useState, useEffect } from "react";

const PerfilDeUsuario = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    //função async para buscar dados

    const buscarUsario = async () => {
      //resposta assíncrona
      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`
      );

      const dadosUsarios = await resposta.json();

      setUsuario(dadosUsarios);
    };

    if (usuarioId) {
      buscarUsario();
    }
  }, [usuarioId]);

  return (
    <div>
      {usuario ? (
        <div>
          <h1>{usuario.name}</h1>
          <p>{usuario.email}</p>
        </div>
      ) : (
        <p>Carregando perfil do usuário...</p>
      )}
    </div>
  );
};

export default PerfilDeUsuario;
