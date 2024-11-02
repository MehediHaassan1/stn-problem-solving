// Task: Array Filtering and Mapping
const people = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Carol", age: 27, gender: "female" },
  { name: "Dave", age: 22, gender: "male" },
];

function filterFemalesAndMapNames(people) {
  const result = people
    .filter(person => person.gender !== "female")
    .map(person => person.name);

  return result;
}

const result = filterFemalesAndMapNames(people);
console.log(result);

// Task: Object Manipulation
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

function getBookTitles(books) {
  const result = books.map(book => book.title);
  return result;
}

const titles = getBookTitles(books);
console.log(titles);

// Task: Sorting Objects
const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2015 },
];

function sortCarsByYear(cars) {
  return cars.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

// Task: Find and Modify
const persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 27 },
];

function findAndModifyAge(persons, name, newAge) {
  const person = persons.find(p => p.name === name);
  if (person) {
      person.age = newAge;
  }
  return persons;
}

const updatedPersons = findAndModifyAge(persons, "Bob", 28);
console.log(updatedPersons);

// Task: Leap Year Checker
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
  }
  return false;
}


const year = 2024;
if (isLeapYear(year)) {
  console.log(`${year} is a leap year. Happy New Year!`);
} else {
  console.log(`${year} is not a leap year.`);
}
