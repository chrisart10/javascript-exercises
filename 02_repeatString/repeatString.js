const repeatString = function (word, times) {
    aux = word;
    word = '';
    if (times < 0) return 'ERROR';
    let i = 0;
    while (i++ < times) word += aux;
    return word;
};

// Do not edit below this line
module.exports = repeatString;
