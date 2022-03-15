// function countUniqueValues(params) {

//     let counter = 0, count = {}

//     for (let i of params) {
//         count[i] =  count[i] ? count[i] +=1 : 1
//     }
//     return Object.keys(count).length
// }

// console.log(countUniqueValues([1,2,2,5,7,7,99]))

//tutorial way

function countUniqueValues(params) {

    let i = 0
    for(let j = 1; j <params.length; j++) {
        if(params[i] !== params[j]){
            i++
            params[i] = params[j]
        }
    }
    return i+1
}

console.log(countUniqueValues([1,2,2,5,7,7,99]))
