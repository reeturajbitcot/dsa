const firstLastOccurance = (arr, no) => {
    let index = [-1,-1]
    let left = 0; 
    let right = arr.length - 1
    while (left <= right){
        if(arr[left] === no && arr[right] === no){
            index[0] = left;
            index[1] = right;
            break;
        }
        if(arr[left] !== no) left++;
        if(arr[right] !== no) right--
    }
    return index
}

const findingIndexing = (arr) => {
    let index = [];
    for (let i = 0 ; i < arr.length ; i++){
        if(i + 1 === arr[i]) {
            index.push(arr[i])
        }
    }
    return index
}


const countSquares = (n) => {
    let count = 0;
    for (let i = 1 ; i < Math.round(n/2) ; i++){
        if(i**2 < n){count++}
    }
    return count
}

const countSquaresBetter = (n) => {
    return Math.floor(Math.sqrt(n - 1))
}

// Finding minimum in rotated Sorted Array
const minimumRotatedSortedArray = (arr) => {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let mid = left + Math.floor((right - left)/ 2)
        if(arr[mid] > arr[right]){
            left = mid + 1
        }else {
            right = mid
        }
    }
    return arr[left]
}