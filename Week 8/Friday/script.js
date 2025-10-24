const evaluation = require('./data.json');

console.log(evaluation.major)

const x = 5.5

function add(a, b) {
    // console.log(a, b)
    return a + b
}

function subtract(a, b) {
    // console.log(a, b)
    return a + b
}

// console.log(add === subtract)

// console.log(add(5))
// console.log(isNaN(NaN))






// const joseph = ["Joseph", 24, "Web Design & New Media"]

const joseph = {
    name: "Joseph",
    age: 24,
    major: "Web Design & New Media",
    address: {
        line1: "123 Main Street",
        line2: "Apt 105",
        city: "Ooltewah",
        state: "TN",
        zip: 37363,
        county: "Hamilton"
    }
}

// console.log(joseph.name, joseph.age, joseph.major)
// console.log(joseph.address.line2.blah?.hello)