// Definindo interfaces
// tabelas => entidades: Usuário -> nome, email, senha
// back => front
// interface => mapear todos os campos
// Utilziar
const myUser = {
    id: 1,
    name: "John",
    isActive: false,
};
//Classes
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }
    greet(isNew) {
        console.log(`Olá ${this.name}`);
        if (isNew) {
            console.log("E sou novo por aqui");
        }
    }
}
const personData = new Person(13, "Alice", true);
console.log(personData);
personData.greet(true);
