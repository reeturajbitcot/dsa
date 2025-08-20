// Bubble Sort
// Insertion Sort
// Selection Sort
// Merge Sort
// quick sort

// Quick Sort
// Heap Sort
// Cycle Sort
// 3-way Merge Sort



// bubble sort

const bubbleSort = (array) => {
    for (let i = 0; i < array.length ; i++){
         for (let j = 0 ; j < array.length - i - 1 ; j++){
             if(array[j] > array[j + 1]){
                 [array[j], array[j + 1]] = [array[j + 1], array[j]]
             }
         }
    }
    return array
}

const insertionSort = (array) => {
    let n = array.length
    for (let i = 0; i < n ; i++){
        for (let j = i; j > 0 ; j--){
            if(array[j-1] > array[j]){
                [array[j], array[j-1]] = [array[j-1], array[j]]
            }
        }
    }
    return array
}


const selectionSort = (array) => {
    // first loop and the nested loop
    // taking the first element form the array
    // in nested loop compare with the rest of the elements
    // if the element is smaller to the selected element than selected element get that position
    // at the end of the nested loop swap the elements

    for (let i = 0 ; i < array.length ; i++){
        let element = i
        for(let j = i ; j < array.length ; j++){
            if(array[element] > array[j]){
                element = j
            }
        }
        [array[element], array[i]]=[array[i], array[element]]
    }
    return array
}