//Basic operators
//task 1

const x = 8;
const y = 4;

console.log(x + y, x - y, x * y, x / y);

//task 2
let counter = 10;
counter++;
console.log(counter);
counter--;
console.log(counter);

//task 3
let num = 5;
num += 3;
num -= 2;
console.log(num);

//Mathematics
//task 1
let price = 19.99;
console.log(Math.round(price));

//task 2
let base = 3;
let exponent = 4;
console.log(Math.pow(base, exponent));

//task 3
const a = 5;
const b = 9;
const c = 3;
console.log('Min number: ' + Math.min(a, b, c), 'Max number: ' + Math.max(a, b, c));

//Comparison operators
//task 1
let number_1 = 10;
let number_2 = 20;
console.log(number_1 >= number_2);

//task 2
let firstName = 'John';
let lastName = 'John';
console.log(firstName === lastName);

let number = 0;
let str = '';
console.log(num == str);
// Такой результат получился, потому что оператор '==' преобразует операнды в число
//и у нас в переменной number что-то лежит значит это "1", а другой операнд пустой
//это значит "0", и при сравнении 0 с 1 то получим что они не равны , по этому и 0.

//task 3
let age = 18;
console.log(age !== 21);

//Logics operators
//task 1
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID);

//task 2
let isMember = false;
let isGuest = true;
console.log(isMember || isGuest);

//task 3
let isOnline = true;
console.log(!isOnline);
