// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should 
// calculate the maximum sum of n consecutive elements in the array.

function sum(arr, n) {

    let max = 0,
        temp =0
    if(arr.length<n) return  null
    for(let i = 0; i<n; i++){
        max += arr[i]
    }
    temp = max
    for(let i = n; i< arr.length; i++){
        temp = temp - arr[i-n] + arr[i]
        max = Math.max(temp, max)
    }


    return console.log(max)
}
sum([1,2,5,2,8,1,5],2)
sum([1,2,5,2,8,1,5],4) // 17
sum([4,2,1,6],1) // 6
sum([4,2,1,6,2],4) // 13
sum([],4) // null
