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

console.log(dublicateCharacters("geeksforgeeks"))