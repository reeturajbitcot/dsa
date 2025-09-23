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