class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        // console.log(this);
    }
}
// const honda = new Car("Honda", "Civic", 1998);
const honda = {
    make: "Honda",
    model: "Civic",
    year: 1990,
};
const describeVehicle = (vehicle) => {
    console.log("Veículo é:");
    console.log(vehicle);
    console.log(`Marca é ${vehicle.year}`);
};
describeVehicle(honda);
const getFirst = (items) => {
    return items[0];
};
let value1 = getFirst(["A", "B", "C", "D"]);
let value2 = getFirst([1, 2, 3, 4]);
console.log(value1);
console.log(value2);
const freezeProduct = (product) => {
    //dá pra reforçar usando o objectFreeze javascript
    return Object.freeze(product);
};
let myProduct1 = {
    id: 666,
    name: "Rick",
    price: 600,
};
console.log(myProduct1);
myProduct1.price = 700;
console.log(myProduct1.price);
let myProduct2 = freezeProduct(myProduct1);
console.log(myProduct2);
// myProduct2.price = 700;
const updateProductPrice = (product, newPrice) => {
    return Object.assign(Object.assign({}, product), newPrice);
};
const updatedBread = updateProductPrice(myProduct1, { price: 1e6 });
console.log(updatedBread);
