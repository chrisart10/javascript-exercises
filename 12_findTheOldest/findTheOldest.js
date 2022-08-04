const findTheOldest = function (array) {

    const oldest = array.sort((previus, current) => {

        previus.yearofDeath = previus.yearofDeath || Number((new Date()).getFullYear());
        current.yearOfDeath = current.yearOfDeath || Number((new Date()).getFullYear());
        
        const previusRange = previus.yearOfDeath - previus.yearOfBirth;
        const currentRange = current.yearOfDeath - current.yearOfBirth;
        
        return previusRange > currentRange ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
