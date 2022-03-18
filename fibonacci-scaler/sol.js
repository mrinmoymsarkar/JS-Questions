function fib(n){
    if(n<=1){
        return n;
    }
    return console.log(fib(n-1) +fib(n-2))
}

fib(6)
