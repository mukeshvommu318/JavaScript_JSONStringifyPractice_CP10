let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let container = document.createElement("div")
container.classList.add("containerId")
document.body.appendChild(container)

let paraBike = document.createElement("p")
paraBike.id="paraBikeId"
container.appendChild(paraBike)

let bikesStringify = JSON.stringify(bikes)
localStorage.setItem("bike",bikesStringify)


paraBike.textContent=localStorage.getItem("bike")


let paraPerson = document.createElement("p")
paraPerson.id = "paraPersonId"
container.appendChild(paraPerson)

let PersonStringify = JSON.stringify(person)
localStorage.setItem("person",PersonStringify)

paraPerson.textContent=localStorage.getItem("person")



let paraTodo = document.createElement("p")
paraTodo.id = "paraTodoId"
container.appendChild(paraTodo)

let todoStringify = JSON.stringify(todos)
localStorage.setItem("todo",todoStringify)

paraTodo.textContent=localStorage.getItem("todo")