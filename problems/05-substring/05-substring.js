/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    
    console.log(someStr.substring(startIndex,endIndex))

    if (endIndex < startIndex){
        throw "Incorrect input is entered"
    }
}

console.log(substring("YEET 2035", 5, 9))