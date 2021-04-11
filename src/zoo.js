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

const { animals, employees } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === undefined) return [];
  return animals.filter((animal) => ids.includes(animal.id));

  // include esta verificando se animal.id
  // existe no no array passado por ids
}

function animalsOlderThan(animal, age) {
  const anima = animals.find((tipo) => tipo.name === animal);
  return anima.residents.every((idades) => idades.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const a = employees.find((pessoa) =>
    pessoa.firstName === employeeName || pessoa.lastName === employeeName);
  return a;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
  // spread para juntar os array
}

function isManager(id) {
  const existeId = data.employees.some((gerente) => gerente.managers.includes(id));
  return existeId;
  // seu código aqui, Some verifica se existe alguem array true
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addFuncionario = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(addFuncionario);
  // seu código aqui
}

function animalCount(species) {
  const coutAnimals = {};
  animals.forEach(({ name, residents }) => { (coutAnimals[name] = residents.length); });
  if (species === undefined) return coutAnimals;
  return coutAnimals[species];
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult, Child, Senior } = data.prices;
  const { Adult: pessoa = 0, Child: crianca = 0, Senior: senhor = 0 } = entrants;
  return Adult * pessoa + Child * crianca + Senior * senhor;
}

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

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
