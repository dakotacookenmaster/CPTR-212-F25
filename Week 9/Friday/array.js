const numbers = [6, 10, 1, 100, 3, 4, 2]
numbers.push(5)
numbers.pop()

numbers[4] // 2
numbers[numbers.length - 1]

const numberCopy = [...numbers]
const safeCopyForNonPrimitives = structuredClone(numbers)

safeCopyForNonPrimitives.sort(() => {
    // whatever
})

numbers.sort(function(a, b) {
    if(a < b) {
        return -1
    } else if(a === b) {
        return 0
    } else {
        return 1
    }
    // return -(a < b) || +(a > b) advanced way to do the same thing
})

console.log(numbers)
