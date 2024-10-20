// Definindo interfaces
// tabelas => entidades: Usuário -> nome, email, senha
// back => front
// interface => mapear todos os campos

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Utilziar

const myUser: User = {
  id: 1,
  name: "John",
  isActive: false,
};

//Classes

class Person implements User {
  id: number;
  name: string;
  isActive: boolean;

  constructor(id: number, name: string, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.isActive = isActive;
  }

  greet(isNew: boolean) {
    console.log(`Olá ${this.name}`);
    if (isNew) {
      console.log("E sou novo por aqui");
    }
  }
}

const personData = new Person(13, "Alice", true);

console.log(personData);

personData.greet(true);
