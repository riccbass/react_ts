//tipos básicos
let isActive;
isActive = true;
let total = 150;
let myName = "Ricardo";
console.log(typeof isActive);
console.log(typeof total);
console.log(typeof myName);
//inferência de tipos
let isComplete = false;
// isComplete = "banana";
let amount = 200;
let username = "Rick";
console.log(typeof amount);
console.log(typeof username);
let money;
console.log(typeof money);
money = 200;
//Array e objectos
let numbers = [1, 2, 3];
console.log(typeof numbers);
let user = {
    name: "Matheus",
    age: 18,
    //   batata: "666",
};
//Tuplas
// [n, n, n]
let rgb = [255, 0, 0];
console.log(typeof user);
console.log(typeof rgb);
//funções
function greet(nome) {
    return `Olá ${nome}`;
}
console.log(greet("Ric"));
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "Movendo para cima";
        case Direction.Down:
            return "Movendo para baixo";
        case Direction.Left:
            return "Movendo para esquerda";
        case Direction.Right:
            return "Movendo para direita";
        default:
            return "Ficou parado";
    }
}
console.log(getDirectionMessage(Direction.Up));
console.log(getDirectionMessage(Direction.Left));
// console.log(getDirectionMessage("teste"));
