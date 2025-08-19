// Bubble Sort
// quick sort
// Selection Sort
// Insertion Sort
// Merge Sort
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

