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

const findingIndexing = () => {
    let index = [];
    for (let i = 0 ; i < arr.length ; i++){
        if(i + 1 === arr[i]) {
            index.push(arr[i])
        }
    }
    return index
}