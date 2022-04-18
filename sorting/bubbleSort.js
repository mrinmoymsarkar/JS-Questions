function bsort(array){
  let sorted = [], temp
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[j]> array[j+1]){
        temp = array[j];
        array[j] = array[j+1]; 
        array[j+1] =temp;
      }
  }
  }
  return array;
}

bsort([5,1,5,3])
