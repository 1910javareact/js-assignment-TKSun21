/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {

    let x = numArray.length

    for (let i = 0; i < x; i++)
        for (let j = 0; j < x; j++){
            if (numArray[j] > numArray[j + 1]){
                let temp = numArray[j]
                numArray[j] = numArray[j + 1]
                numArray[j + 1] = temp
            }
        }
    return numArray
}

console.log(bubbleSort([3,2,1,5,7,8,6,4]))