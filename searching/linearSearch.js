//linear search

function search(array, word) {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] === word) {
            console.log(array[i])
            return i
        }
    }
    return -1
}

search([ 5, 8, 1, 100, 12, 3, 12 ],100)
