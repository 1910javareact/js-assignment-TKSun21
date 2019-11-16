/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    let x = n;
        if (x === 0) {
            return 0;
        }
        else if (x === 1){
            return 1;
        }
        else if (x < 0) {
            console.log("Can't be negative")
        }
        else {
            return fib(x-1) + fib(x-2);
        }
}

console.log(fib(8))