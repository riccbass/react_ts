// Generics
// TS -> tipar
// f - tipo x
// f - tipo y --- error
// f - tipo genérico -> x, y

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["1", "2", "3", "4"]);
let mixedArray = getArray(["1", "2", 2, "4", 0.5]);

console.log(numberArray, stringArray, mixedArray);

// Restringir tipos

const merge = <T extends object, U extends object>(obj1: T, obj12: U) => {
  return { ...obj1, ...obj12 };
};

const result = merge({ name: "Rick", age: 33 }, { job: false });

console.log(result);

// Utilitários de tipo

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const updateTodo = (todo: Todo, fieldsToupdate: Partial<Todo>) => {
  return { ...todo, ...fieldsToupdate };
};

const meuTodo = {
  title: "Teste",
  description: "Alguma coisa",
  completed: false,
};

const todoAtualizado = updateTodo(meuTodo, { completed: true });

console.log(todoAtualizado);

// somente leitura
const meuSegundoTodo: Readonly<Todo> = {
  title: "Segundo",
  description: "Outra coisa",
  completed: false,
};

// meuSegundoTodo.title = "Segundo Segundo";
