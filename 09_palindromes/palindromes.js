const palindromes = function (string) {
    if (string != '') {

        string = string.toLowerCase();
        const regex = /[a-z]/g;
        const array = string.match(regex);
        const length = array.length;
        const middle = Math.floor(length / 2);
        
        for (let index in array) {
            if (index == middle + 1) return true;
            if (array[index] != array[length - index - 1]) return false;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
