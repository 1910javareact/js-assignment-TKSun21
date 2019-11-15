/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {

  let n = sumNum;
  {
    if (n === 0) {
        return 1;
    }
    else if (n < 0) {
      console.log("Can't be negative, gotta be positive")
    }
    else {
      return n*factorial(n-1);
    }
  }
}

console.log(factorial(8));
