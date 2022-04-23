//selection sort

 function selection(array) {

  const swap = (array, idx1, idx2) =>{
   ([array[idx1], array[idx2]] = [array[idx2], array[idx1]])
  }
  
  for (let i = 0; i < array.length; i++) {
   let min = i;
   for (let j = i+1; j < array.length; j++) {
    if(array[j] < array[min]){
     min = j
    }
   }
   if(i !== min) swap(array, i , min)
    }
  return array;
 }


selection([2, 5, 7, 3, 10, 1])

// i, j, min
// 0, 1, 1
// 0, 2, 1
// 0, 3, 1
