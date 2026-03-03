'use strict';
/*
//Default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', 5);
*/ /*
//How passing arguments works: value vs reference
const flight = 'LH234';
const isaac = {
  name: 'Isaac mwaura',
  passport: 34335910,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 34335910) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, isaac);
// console.log(flight);
// console.log(isaac);

// const flightNum = flight;
// const passenger = isaac;

//Javascript only has passing by values no passing by reference
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(isaac);
checkIn(flight, isaac);*/

//first class and higher order functions
//Functions accepting callback functions//
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('🙌');
};

document.body.addEventListener('click', high5);
['Isaac', 'Sharon', 'Mwaura'].forEach(high5);*/
//Functions returning functions//
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Isaac');
greeterHey('Sharon');
greet('Hello')('Isaac');
//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Isaac');
*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Isaac Mwaura');
lufthansa.book(635, 'Sharon Wawira');

console.log(lufthansa);

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};
//call method
const book = lufthansa.book;
// book(23, 'Karen Wanjiru');//DOES NOT work
book.call(euroWings, 23, 'Karen Wanjiru');
console.log(euroWings);

book.call(lufthansa, 239, 'Ruth Wanjiru');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 435, 'Abigael Muthoni');

//apply method
const flightData = [583, 'John Njoroge'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData); //used mostly nowadays

//The bind method//
// book.call(euroWings, 23, 'Karen Wanjiru');
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(24, 'Joyce Njoki');

const bookEW23 = book.bind(euroWings, 23); //partial application
bookEW23('Isaac Nyoike');
bookEW23('Josphine Waithera');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application//
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(300));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(300));*/
/*

//Challenge//
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  //This generates [0,0,0,0]
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`,
      ),
    );
    console.log(answer);
    //Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
//§ Data 1: [5, 2, 3]
//§ Data 2: [1, 5, 3, 9, 6, 1]*/
/*

//Immediately invoked function expressions//
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();
//IIFE
(function () {
  console.log('This will never run again');
})();
(() => console.log('This also will never run again'))();
*/
/*
//Closures//
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);*/
/*

//More closure examples
//example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//re-assigning f function
h();
f();

console.dir(f);
//example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// const perGroup = 1000;
boardPassenger(180, 3);*/
