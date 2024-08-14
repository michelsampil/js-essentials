// 0 - Bajar repo, hacer hola mundo console.log

// 2 - Funciones:
function add(firstOperator, secondOperator) {}
function subtract(firstOperator, secondOperator) {}
function divide(firstOperator, secondOperator) {}
function multiply(firstOperator, secondOperator) {}

// 3 - Funcion
function dress(temperature, isRaining) {}
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

function dress(temperature, isRaining) {}
dress(30, true);

// 4 - Funcion
function calculate(operation, firstOperator, secondOperator) {}
calculate("+", 2, 3);

// 5 - Funcion
function eating(name, foods) {}

const name = "pedro";
const foods = ["🍔", "🍟", "🍗", "🥑"];

function eating(name, foods) {}

// 6 - Funcion
function finalCountDown(count) {}
finalCountDown(10);

// 7 - Funcion
function getGrade(score) {}
getGrade(80);
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the new collection of articles
const user = {
  name: "juan",
  cart: [
    { article: "👟", amount: 1, price: 25 },
    { article: "🧦", amount: 1, price: 5 },
  ],
};

const cartArticlesCollection = [
  { article: "🪳", amount: 3, price: 25 },
  { article: "🍋", amount: 2, price: 25 },
];

function fillCart(person, articlesCollection) {}
fillCart(user, cartArticlesCollection);

// 9 - Funcion
function countBanana(inventory) {}
countBanana(["🥑", "🍌", "🥭", "🍌"]);

// 10 - Function
function getTotal(inventory) {}
getTotal([
  { article: "🍔", price: 15, quantity: "1" },
  { article: "🍟", price: 10, quantity: "2" },
]);

// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
