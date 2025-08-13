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
    let itration = array.length
    for (let i = 0; i < itration ; i++){
         for (let j = 0 ; j < array.length ; j++){
             if(array[j - 1] > array[j]){
                 [array[j-1], array[j]] = [array[j], array[j - 1]]
             }
         }
        itration--
    }
    return array
}
