const getTheTitles = function(array) {
    const titles  = array.reduce((arr,obj) => {
        arr.push(obj.title);
        return arr;
    }
    ,[]);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
