// Import stylesheets
import "./style.css";

interface Person {
  age: number;
  name: string;
  id: number;
}

const persons: Person[] = [
  {
    id: 1,
    age: 25,
    name: "Peter"
  },
  {
    id: 2,
    age: 28,
    name: "Sarah"
  },
  {
    id: 3,
    age: 25,
    name: "Josh"
  },
  {
    id: 4,
    age: 25,
    name: "Adam"
  },
  {
    id: 5,
    age: 28,
    name: "Paulette"
  }
];

console.log("people: ", persons);

function groupBy(objectArray, property) {
  return objectArray.reduce((aggr, elm) => {
    const key = elm[property];
    aggr[key] = [...(aggr[key] || []), elm];
    return aggr;
  }, {});
}

const groupedPeople: Map<number, Person[]> = groupBy(persons, "age");
console.log("groupedPeople: ", groupedPeople);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

for (let [age, people] of Object.entries(groupedPeople)) {
  appDiv.innerHTML += `<p>${age}</p>`;
  people.forEach((person: Person) => {
    appDiv.innerHTML += `<span>${person.name}</span><br>`;
  });
}
