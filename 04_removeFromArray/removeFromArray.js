const removeFromArray = function(arrays,...args) {
    for (let arg of args){
        arrays = arrays.filter(arr => arr !== arg);
    }
    return arrays;
};

// Do not edit below this line
module.exports = removeFromArray;
