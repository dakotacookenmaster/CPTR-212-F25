const person1 = {
    name: "Jon",
    age: 26,
    signedUp: true,
}

const person2 = {
    name: "David",
    age: 14,
    signedUp: false,
}

const person3 = {
    name: "Bill",
    age: 56,
    signedUp: true,
}

const people = [person3, person1, person2]

// sort ascending by age
// destructive operation - modifies in place
// use structuredClone to create a deep copy
structuredClone(people).sort((a, b) => {
    if(a.age < b.age) {
        return -1
    } else if(a.age === b.age) {
        return 0
    } else {
        return 1
    }
})

structuredClone(people).sort((a, b) => -(a.age < b.age) || +(a.age > b.age))

// console.log(people)


const badPerson = "Bill" // maybe prompt()?

// Yay, creates a copy!
const noBill = people.filter((value) => {
    return value.name !== badPerson
    // if(value.name !== "Bill") {
    //     return true;
    // } else {
    //     return false;
    // }
})



const peopleWithOrganDonor = people.map((value) => {
    return {
        ...value,
        organDonor: false,
    }
})

console.log(people)
console.log(peopleWithOrganDonor)

const ages = people.map((person) => {
    return {
        age: person.age
    }
})

console.log(ages)




const total = people.reduce((accumulator, person) => {
    return accumulator + person.age
}, 0)

const names = people.reduce((accumulator, person) =>{
    accumulator.push(person.name)
    return accumulator
}, [])

console.log(names)








