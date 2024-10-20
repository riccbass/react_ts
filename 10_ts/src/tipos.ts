//tipos básicos

let isActive: boolean;

isActive = true;

let total: number = 150;
let myName: string = "Ricardo";

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

let numbers: number[] = [1, 2, 3];

console.log(typeof numbers);

let user: { name: string; age: number } = {
  name: "Matheus",
  age: 18,
  //   batata: "666",
};

//Tuplas
// [n, n, n]
let rgb: [number, number, number] = [255, 0, 0];

console.log(typeof user);

console.log(typeof rgb);

//funções

function greet(nome: string): string {
  return `Olá ${nome}`;
}

console.log(greet("Ric"));

//Enum

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function getDirectionMessage(direction: Direction): string {
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
