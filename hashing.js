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
canPairs([20,25,10,3,15,27,4,5], 10)