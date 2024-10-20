const RenderCondicional = ({ user }) => {
  //se houver usuário, exiba uma mensagem de boas vindas

  return <div>{user && <h1>Seja bem viado, {user}</h1>}</div>;
};

export default RenderCondicional;
