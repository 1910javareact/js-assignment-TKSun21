/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {

    let wordRes = ""

    for(let i = someStr.length - 1; i >= 0; i--){
        wordRes += someStr[i]
    }
    return wordRes
}

console.log(reverseStr("Infinite8"))