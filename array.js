const reverseArray = (array) => {
    for (let i = 0 ; i < Math.ceil(array.length / 2); i++){
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i] , array[i]]
        
    }
return array
}


const minMax = (array) => {
    if(array.length){
        let min = array[0]
        let max = array[0]
        for (let i = 0 ; i < array.length ; i++){
            if(array[i] > max) max = array[i]
            if(array[i] < min) min = array[i]
        }
        return [min , max]
    }
}

const rotateArray = (array, target) => {
    for (let i = 0 ; i < target ; i++){
        array.unshift(array.pop())
    }
    return array
}

////////////////////////////// OR///////////////////////////////

const rotateArrayBetter = (array, target) => {
    let rotatedArray = array.slice(array.length - target).concat(array.slice(0, array.length- target - 1))
    return rotatedArray
}

const UnionArraysDuplicates = (array, array2) => {
    const uniEleCounter = {};
    for (let i = 0; i < array.length; i++){
        uniEleCounter[array[i]] = (uniEleCounter[array[i]] || 0) + 1;
    }
    for (let i = 0; i < array2.length; i++){
        uniEleCounter[array2[i]] = (uniEleCounter[array2[i]] || 0) + 1;
    }
return uniEleCounter
}




// 3028. Ant on the Boundary
var returnToBoundaryCount = function(nums) {
    let count = 0
    let account = 0
    for (let i = 0 ; i < nums.length ; i ++){
        account += nums[i]
        if (account === 0){
            count++
        }
    }
    return count
};

// kadane's algorithm
const kadaneAlgo = (array) => { 
    let maxSum = array[0];
    let currentSum = 0;
    for (let i = 0 ; i < array.length ; i++){ 
        currentSum = Math.max(array[i], currentSum + array[i]); 
        maxSum = Math.max(currentSum, maxSum) 
    } 
    return maxSum 
}


// boyer-moore voting algorithm
// https://www.youtube.com/watch?v=gY-I8uQrCkk

const element = (nums) => {
    let candidate = nums[0]
    let count = 0 
    for (let i = 0 ; i < nums.length;  i++){
        if(count === 0){
            candidate = nums[i]
        }
        if(candidate == nums[i]){
            count++
        }
        else count--
    }
    return candidate
};

const kthSmallest = (arr, k) => {
    return  arr.sort((a,b) => a - b)[k - 1]
}


// interver question
const peakInInterval = (array) => {
    const output = [];
    let peak = array[0];
    let index = 0;
    for (let i = 1; i <= array.length; i++){
        if(array[i] * array[i-1] > 0){
             if(peak < 0 && peak > array[i]){
                 peak = array[i];
                 index = i
             }
            
             if(peak > 0 && peak < array[i]){
                 peak = array[i];
                 index = i
             }
        } else {
            output.push([peak, index])
            peak = array[i]
            index = i
        }
    }
    return output
}

const sort012 =(arr) => {
        // code here
        // Three counter for low mid and high for 0,1 and 2 respectively.
        //  let low and mid to 0 and high to be arr.length-1
        //  while loop  mid < high
        //  if (0) increment low and mid and swap mid with low + 1
        // if (1) increment mid 
        //  if(2) decrement high and swap mid with high
        let low = 0;
        let mid = 0;
        let high = arr.length -1;
        while (mid <= high){
            if(arr[mid] === 0){
                 [arr[mid], arr[low]] = [arr[low], arr[mid]]
                low++;
                mid++;
            }else if(arr[mid] === 1){
                mid++
            }else {
                [arr[mid], arr[high]] = [arr[high], arr[mid]]
                high--;
            }
        }
    return arr
}

// https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1

const findUnion = (arr1, arr2) => {
    const counter = {}
    for (let i = 0 ; i < arr1.length; i++){
        counter[arr1[i]]= counter[arr1[i]] ? counter[arr1[i]] + 1 : 1
    }
    for (let j = 0 ; j < arr2.length; j++){
        counter[arr2[j]]= counter[arr2[j]] ? counter[arr2[j]] + 1 : 1
    }
    return Object.keys(counter).sort((a,b) => a - b)
}

const rotateSingleElement = (arr) => {
    let lastElement = arr.pop();
    arr.unshift(lastElement)
}

// leetcode 22 merge two sorted array
function mergeSortedArray (list1,list2) {
      let i = 0;
    let j = 0;
    const returnArray = []
    while (i < list1.length || j< list2.length){
        if(list1[i] < list2[j]){
            returnArray.push(list1[i])
            i++
        }else if(list1[i] > list2[j]){
            returnArray.push(list2[j])
            j++
        }else {
            if(i < arr1.length){
                returnArray.push(list1[i])
                i++
            }else if(j < list2.length){
                returnArray.push(list2[j])
                j++
            }
        }
    }
    console.log(returnArray) 
}

