
//https://www.geeksforgeeks.org/sort-string-characters/
function countSort(str){

  let n = str.length;

  let arr = new Array(26).fill(0), ans='';

  console.log(arr)

  for(let i = 0; i<n;i++){
    arr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  
  for(let i = 0; i< n; i++)
  {
  for (let j = 0; j< arr[i]; j++){
  ans += String.fromCharCode(i + 'a'.charCodeAt(0));
  }
  }
  
    console.log(ans)
    
    
}

countSort('aaabcbc')
