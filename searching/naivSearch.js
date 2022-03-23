function search(sentence, subString) {
    let count = 0;
    for (let i = 0; i<sentence.length; i++){

        for (let j = 0; j< subString.length; j++){
            if(subString[j] !==sentence[i+j]){
                break
            }
            if(j === subString.length-1){
                count++
            }
        }
    }
    console.log(count)
}


search("lorie loled lol", "lol")
