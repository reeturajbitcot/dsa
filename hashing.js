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

let a = [1, 2, 3, 2, 1];



mostFreqEle(a)