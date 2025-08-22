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

const mergeSort = (array) => {

    if(array.length === 1 || array.length === 0) return array
    
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right)
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
    
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const quickSort = (array)  => {
    if(array.length <= 1) return array
    let left = []
    let right = []
    let base = array[0]
    for (let i = 1 ; i < array.length ; i++){
        if (array[i] <= base) {
            left.push(array[i])
        }else {
            right.push(array[i])
        }
    }

    return quickSort(left).concat(base, quickSort(right))
}