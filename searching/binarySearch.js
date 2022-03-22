//binary  search

function search(array, word) {
    let left = 0,
        right = array.length-1,
    midPoint = Math.floor((left + right)/2)

    while(array[midPoint] !== word && left <= right){
        if(word < array[midPoint]){
            right =  midPoint--
        }
        else if (word > array[midPoint]) {
            left = midPoint++
        }
        midPoint = Math.round((left + right)/2)
    }
    return console.log(array[midPoint] === word ? midPoint : -1)
}

search([ 5, 8, 1, 100, 12, 3, 12 ],100)
