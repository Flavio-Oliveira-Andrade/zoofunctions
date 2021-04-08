/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals } = data;

function animalsByIds(ids) {
  // seu código aqui
  if (ids.length === undefined) return [];
  return animals.filter((animal) => ids.includes(animal.id));

  // include esta verificando se animal.id
  // existe no no array passado por ids
}

function animalsOlderThan(animal, age) {
  const anima = animals.find((tipo) => tipo.name === animal);
  return anima.every((idades) => idades.age > age);
}

// function employeeByName(employeeName) {
//   // seu código aqui
// }

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function animalCount(species) {
//   // seu código aqui
// }

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

// module.exports = {
//   entryCalculator,
//   schedule,
//   animalCount,
//   animalMap,
//   animalsByIds,
//   employeeByName,
//   employeeCoverage,
//   addEmployee,
//   isManager,
//   animalsOlderThan,
//   oldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
// };
