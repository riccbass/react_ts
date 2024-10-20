// Generics
// TS -> tipar
// f - tipo x
// f - tipo y --- error
// f - tipo genérico -> x, y
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["1", "2", "3", "4"]);
let mixedArray = getArray(["1", "2", 2, "4", 0.5]);
console.log(numberArray, stringArray, mixedArray);
// Restringir tipos
const merge = (obj1, obj12) => {
    return Object.assign(Object.assign({}, obj1), obj12);
};
const result = merge({ name: "Rick", age: 33 }, { job: false });
console.log(result);
const updateTodo = (todo, fieldsToupdate) => {
    return Object.assign(Object.assign({}, todo), fieldsToupdate);
};
const meuTodo = {
    title: "Teste",
    description: "Alguma coisa",
    completed: false,
};
const todoAtualizado = updateTodo(meuTodo, { completed: true });
console.log(todoAtualizado);
// somente leitura
const meuSegundoTodo = {
    title: "Segundo",
    description: "Outra coisa",
    completed: false,
};
// meuSegundoTodo.title = "Segundo Segundo";
