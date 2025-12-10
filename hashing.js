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

const a = [12, 34, 11, 9, 3];
const b = [2, 1, 5];

areDisjoint(a, b)