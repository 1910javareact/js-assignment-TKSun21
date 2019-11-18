/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    
    let newStr = someStr.replace(/[^0-9a-z]/gi, "").toLowerCase().split("");

    for (let i = 0; i < (newStr.length)/2; i++){
        if(newStr[i] == newStr[newStr.length-i-1]){
        }
        else {
            return false
        }
    }
    return true
}

console.log(isPalindrome("Anna"))