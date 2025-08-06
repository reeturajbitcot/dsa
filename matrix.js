const spiralTraversal = (matrix) => {
    let a = 0  
    let b = 0 ;
    let c = matrix[0].length - 1;
    let d = matrix.length - 1;

    let array = []

    while ( d >= b && a <= c ){
        for(let i = a ; i <= c ; i++){
            array.push(matrix[a][i])
        }
        b++
        for(let j = b ; j <= d ; j++){
            array.push(matrix[j][c])
        }
        c--
        for(let k = c ; k >= a ; k--){
            array.push(matrix[d][k])
        }
        d--
        for(let l = d;  l >= b ; l--){
            array.push(matrix[l][a])
        }
        a++
    }
    console.log(array)
}

const searchMatrix = function(matrix, target) {
    
    // loop over the matrix
    // compare the first element of row with target
    // if it is greater then move to next row first element
    // if it is smaller 
        // element is inside the row
        // three variables to track for lowest, highest and middle
        // if middle is greater than target then move higest to middle -1
        // if middle is smaller than tagreet then move lowest to middle + 1
    // if lowest is greater than highest then return false
};
