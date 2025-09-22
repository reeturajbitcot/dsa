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

const serarchInRotatedArray = (nums, target) => {
    let left = 0;
    let right = nums.length -1 ;
    let minimum_element = 0
    while (left < right){
        let mid = left + Math.floor((right - left)/2)
        if(nums[right] < nums[mid]){
            left = mid + 1    
        }else {
            right = mid
        }
    }
    minimum_element = left;

    if(minimum_element === 0){
        left = 0 ;
        right = nums.length - 1;
    }else if(target >= nums[0] && target <= nums[minimum_element - 1]){
        left = 0 ;
        rigth = minimum_element - 1
    }else { 
        left = minimum_element
        right = nums.length - 1
    }

    while (left <= right){
        let mid = left + Math.floor((right - left) / 2)
        if(nums[mid] ===  target){
            return mid 
        }else if (nums[mid] > target){
            right = mid-1
        }else {
            left = mid + 1
        }
    }
   return -1
}

const minNMax = (arr) => {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1 ; i< arr.length; i++){
        if(arr[i] > max) {max = arr[i]}
        if(arr[i] < min) {min = arr[i]}
    }
    return {min, max}
}

const findTwoElement = (arr) => {
    const n = arr.length;
    let arrSum = 0;
    let sqArrSum = 0;

    const realSum = (n * (n + 1)) / 2;
    const sqRealSum = (n * (n + 1) * (2 * n + 1)) / 6;

    for (let i = 0; i < n; i++) {
        arrSum += arr[i];
        sqArrSum += arr[i] * arr[i];
    }

    const value1 = realSum - arrSum;             // missing - repeating
    const value2 = (sqRealSum - sqArrSum) / value1; // missing + repeating

    const missing = (value1 + value2) / 2;
    const repeating = missing - value1;

    return [repeating, missing];
}