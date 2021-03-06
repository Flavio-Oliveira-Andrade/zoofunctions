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

const { animals, employees, hours } = data;

function animalsByIds(...ids) {
  // 01seu código aqui
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
  // 04spread para juntar os array
}

function isManager(id) {
  const existeId = data.employees.some((gerente) => gerente.managers.includes(id));
  return existeId;
  // 05seu código aqui, Some verifica se existe alguem array true
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addFuncionario = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(addFuncionario);
  // 06seu código aqui
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
//   // 09seu código aqui
// }

function schedule(dayName) {
  // 10seu código aqui
  const objAgenda = {};
  const keys = Object.keys(hours);
  const values = Object.values(hours);
  keys.forEach((element, index) => {
    objAgenda[element] = `Open from ${values[index].open}am until ${values[index].close - 12}pm`;
    if (element === 'Monday') {
      objAgenda[element] = 'CLOSED';
    }
  });

  if (dayName) {
    const day = objAgenda[dayName];
    return {
      [dayName]: day,
    };
  }
  return objAgenda;
}

function oldestFromFirstSpecies(idEmployee) {
  const funcionario = data.employees.find(({ id }) => idEmployee === id);
  const idAnimals = funcionario.responsibleFor[0];
  const especies = data.animals.find(({ id }) => id === idAnimals);
  const animalOld = especies.residents.reduce((animal1, animal2) =>
    ((animal1.age > animal2.age) ? animal1 : animal2));
  return Object.values(animalOld);
}

function increasePrices(percentage) {
  // seu código aqui
  const { prices } = data;
  let { Adult, Child, Senior } = prices;
  Adult = Math.ceil(Adult * (100 + percentage)) / 100;
  Child = Math.ceil(Child * (100 + percentage)) / 100;
  Senior = Math.ceil(Senior * (100 + percentage)) / 100;

  data.prices = { Adult, Senior, Child };
}

// function employeeCoverage(idOrName) {
//   // 13seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
