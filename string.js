var reverseString = function(s) {
    for(let i = 0 ; i < Math.ceil(s.length / 2 ) ; i++){
        [s[i], s[s.length - 1 -i]] = [s[s.length - 1 - i], s[i]]
    }
    return s
};

var palindromeString = function(string) {
    for(let i = 0 ; i < Math.ceil(string.length / 2) ; i++){
        if(string[i] !== string[string.length - 1 - i]) return false
    }
    return true
}

var dublicateCharacters = function (string)  {
    const characterCount = {};
    for(let i = 0 ; i < string.length ; i++){
        characterCount[string[i]] ? characterCount[string[i]] = characterCount[string[i]] + 1 : characterCount[string[i]] = 1
    }
    return characterCount
}


const checkStringShifting = (str,rotatedStr) => {
    if(str.length === rotatedStr.length){
        let firstChar = rotatedStr[0]
        let positionInStr
        let updateString 
        for(let i = 0; i< str.length ; i++){
            if(firstChar === str[i]) {
                positionInStr = i
            }
        }
        updateString =  str.split('').slice(positionInStr).concat(str.split('').slice(0,positionInStr)).join('')
        
        for(let j = 0 ; j < str.length ; j++){
            if(updateString[j] !== rotatedStr[j])return false
        }
        return true
    }
    return false
}


//////////////////////////////// OR ////////////////////////////////

const checkStringShift = (str, rotatedStr) => {
  if (str.length !== rotatedStr.length) return false;
  return (str + str).includes(rotatedStr);
};
