// Check if an array is subset of another array

const isSubset = (a,b) => {
    const hashSet = new Set(a)

    for(const ele of b){
        if(!hashSet.has(ele)){
            console.log(false)
            return false}
    }
    console.log(true)
    return true
}

const areDisjoint = (a, b) => {
    const hashSet = new Set(a)

    for(const ele of b){
        if(hashSet.has(ele)){
            console.log(false)
            return false}
    }
    console.log(true)
    return true
}

const checkEqual = (a,b) =>{
    const hashSet = new Set(a)

    for(ele of b){
        if(!hashSet.has(ele)){
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}

const intersection = (a,b) => {
    const hashSetA = new Set(a)
    const hashSetB = new Set(b)
    const intArr = []
    for (ele of hashSetB){
        if(hashSetA.has(ele)){
            intArr.push(ele)
        }
    }
    console.log(intArr)
    return intArr
}

const mostFreqEle = (a) => {
    const contEle = new Map()
    let max = 0 
    for(let i = 0 ; i < a.length ; i++){
        if(contEle.has(a[i])){
            contEle.set(a[i],contEle.get(a[i]) + 1)
        }else {
            contEle.set(a[i], 1)
        }
    }
    console.log(contEle)
    for(el of Object.keys(contEle)){
        max = Math.max(contEle[el], max)
    }
    console.log(max)
    return max
}

// Check If Array Pair Sums Divisible by k

const canPairs = (nums, k) => {
    const numsMap = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        const val = nums[i] % k
        numsMap.set(val, numsMap.get(val) ? numsMap.get(val) + 1 : 1)
    }
    for(const ele of numsMap.keys()){
        if(ele === 0){
            if(numsMap.get(ele) % 2 !== 0) {
                return false
            }
        }else if( k % 2 === 0 && ele === k / 2)  {
            if(numsMap.get(ele) % 2 !== 0) {
                return false
            }
        }else {
            let complimentary = k - ele 
            if(numsMap.has(complimentary)){
                if(numsMap.get(ele) !== numsMap.get(complimentary)){
                   return false
                }
            } else {
                return false
            }
        }
    }
    return true
}

const sumOfPairs = (arr, k) => {
    const hashMap = new Map()
    let counter = 0
    for(let i = 0 ; i < arr.length ; i++){

        if(hashMap.has(k - arr[i])){
            counter += hashMap.get(k -arr[i])
        }

        hashMap.set(arr[i], (hashMap.get(arr[i]) || 0 ) + 1)
    }
    return counter
}

sumOfPairs([1,5,7,-1,5], 6)

// 3 Sum - Count all triplets with given sum

// loop over the array 
// fix first element of the triple pair with arr[index]
// run another function 
// argument will be arr and  argu = (no - arr[index])
// for above function we have to find sum of pair that's equal to argu
    // create map 
    // if no is 0 then value should be even
    // if no is value / 2 then value should be even
    // complementary no should present and value of complementary no should be equal to the value of no
    // have counter and return the no of pair
//  keep couter for triplet
// return counter
const getTriplePairsCount = (arr, no) => {

    const sumPair = (idx ,val) => {
        let counter = 0;
        const uniqueCounter = new Map()
        for(let i = idx ; i < arr.length ; i++){
            if(uniqueCounter.has(val - arr[i])){
                counter+= uniqueCounter.get(val - arr[i])
            }
            uniqueCounter.set(arr[i], (uniqueCounter.get(arr[i]) || 0) + 1)
        }
        return counter
    }

    let finalCounter  = 0;
    for(let i = 0 ; i < arr.length - 2 ; i++){
        const secArg = no - arr[i]
      const counter = sumPair(i+1, secArg)
      finalCounter += counter
    }

    console.log(finalCounter)
    return finalCounter
}

const findItinerary =(arr) => {
    // create hashmap using from (dep) -> to(des) 
    // again create hashmap (reverseHashmap) using to (des) -> from (dep)
    // loop over and check which key is not on reverseHashmap
    // that is the starting point of the topology sorting
    // create an arr for return
    // loop over until we have start element
        // start -> get data from hashmap and add that data to retuArr 
        // update the start to the end value of prev
        // if no previous then update the start to null or undefined
    // return arr

     const hashMap = new Map()
     for (const ele of arr){
        hashMap.set(ele[0], ele[1])
     }
     
     const reverseHashmap = new Map() 
     for(const ele of arr){
        reverseHashmap.set(ele[1], ele[0])
     }

     let start 
     for(const ele of arr){
        if(!reverseHashmap.has(ele[0])){
            start = ele[0]
            break
        }
     }

     const retuArr = []
     while (start){
        const destination = hashMap.get(start)
        if(destination){
            retuArr.push([start, destination])
            start = destination
        }else {
            start = null
        }
     }
     console.log(retuArr)
     return retuArr
}

findItinerary([["Chennai", "Bangalore"], ["Bombay", "Delhi"], 
           ["Goa", "Chennai"], ["Delhi", "Goa"]])