/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {

    let x = someNum

    if ((x & 1) === 0){
        console.log ("The someNum is an even number")
        return true
    }
    else {
        console.log ("The someNum is an odd number")
        return false
    }
}

console.log(isEven(8))