function countUniqueValues(params) {

    let counter = 0, count = {}

    for (let i of params) {
        count[i] =  count[i] ? count[i] +=1 : 1
    }
    return Object.keys(count).length
}

console.log(countUniqueValues([1,2,2,5,7,7,99]))
