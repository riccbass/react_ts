const LoginButton = ({ loggedIn }) => {
  //Entrar -> deslogado
  //Sair -> desligado

  return (
    <div>{loggedIn ? <button>Sair</button> : <button>Entrar</button>}</div>
  );
};

export default LoginButton;
