//collect odd values

//helper
function oddValues(array) {
    let odd = [];

    function helper(array) {
        if(array.length === 0) return;
        else if(array[0]% 2 !== 0){
            odd.push(array[0])
        }
        helper(array.slice(1))
    }
    helper(array)

    return odd;
}

oddValues([1,2,3,4,5,6,7,8,9])


//pure recursion
//collect odd values
function oddValues(array) {
    let odd = [];
    if(array.length === 0) return odd;
        if(array[0]% 2 !== 0){
            odd.push(array[0])
        }
        

    odd = odd.concat(oddValues(array.slice(1)));

    return odd;
}

oddValues([1,2,3,4,5,6,7,8,9])
