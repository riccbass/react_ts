import { useState } from "react";

const ListaDeComprasRB = () => {
  type Item = {
    id: number;
    nome: string;
  };

  const [itens, setItens] = useState<Item[]>([]);
  const [novoItem, setNovoItem] = useState<string>("");

  const adicionarItem = () => {
    const item: Item = {
      id: itens.length + 1,
      nome: novoItem,
    };

    setItens([...itens, item]);
    setNovoItem("");
  };

  return (
    <div>
      <input
        type="text"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar item</button>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeComprasRB;
