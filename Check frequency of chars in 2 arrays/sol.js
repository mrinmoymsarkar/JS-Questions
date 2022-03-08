//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
//two arrays check square of each other
// function check(arr1, arr2) {
  // if(arr1.length != arr2.length){
  //   return false
  // }

//   for(let i = 0; i<arr1.length; i++){
//     let correctIndex = arr2.indexOf((arr1[i]**2))
//     console.log('correctIndex',correctIndex)
//     if((correctIndex) === -1){
//       return false
//     }
//     arr2.splice(correctIndex, 1)
//   }
//   return true
// }

function check(arr1, arr2){
    if(arr1.length != arr2.length){
    return false
  }

  let frequencyCount1 = {};
  let frequencyCount2 = {};

  for (let val of arr1) {
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1 
  }

   for (let val of arr2) {
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1 
  }
console.log('frequencyCount1',frequencyCount1)
  console.log('frequencyCount2',frequencyCount2)
  for (let key in frequencyCount1) {
    if(!(key ** 2) in frequencyCount2){
      false
    }
    if(frequencyCount2[key ** 2] !== frequencyCount1[key]){
      return false
    }
  }
  return true
}

check([1, 2, 3], [4,1 ,9])
