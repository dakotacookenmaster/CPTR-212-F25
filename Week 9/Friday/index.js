const names = ["Vilina", "Omar", "Jon", "Jonah"]


names[1]

const person = {
    name: "Austin",
    age: 22,
    // height: "72 in"
}

person.name // Austin
person["name"] // Austin

const variable = "height"

person[variable] = "72 in"
person.address = "123 Main Street"
person.name = "Joe"

delete person.height 
