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

// leetcode 125
var isPalindrome = function(s) {
    const w = s.replace(/[^a-zA-Z0-9]/g, "")
    let left= 0;
    let right= w.length -1
    while(left < right){  
        if(w[left].toLowerCase() !== w[right].toLowerCase()){
            return false
        }else{
            left++
            right--
        }
    }
    return true
};

// leetcode 242
var isAnagram = function(s, t) {
       if(s.length !== t.length) return false;
    const sObject = {}
    const tObject = {}
    for(let i= 0 ; i < s.length ; i++){
     sObject[s[i]] = sObject[s[i]] ? sObject[s[i]] + 1 : 1 
     tObject[t[i]] = tObject[t[i]] ? tObject[t[i]] + 1 : 1
    }

    for (let key in sObject) {
    if (!tObject.hasOwnProperty(key) || sObject[key] !== tObject[key]) {
      return false;
    }
  }

    return true
};