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