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
