const removeFromArray = function(args,...values) {
    for (let value of values){
        args = args.filter(arg => arg !== value);
    }
    return args;
};

// Do not edit below this line
module.exports = removeFromArray;
