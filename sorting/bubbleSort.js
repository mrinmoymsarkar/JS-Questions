//bubble sort optimised

function sort(array){
  let sorted = [], temp,
    noSwap;
  for (let i = array.length; i >0 ; i--) {
    noSwap = true
    for (let j = 0; j < i-1; j++) {
      if(array[j]> array[j+1]){
        temp = array[j];
        array[j] = array[j+1]; 
        array[j+1] = temp;
      }
      console.count()
  }
    if (noSwap) break;
  }
  return array;
}

sort([5,1,5,3])
