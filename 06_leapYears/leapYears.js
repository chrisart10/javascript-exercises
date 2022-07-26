const leapYears = function (year) {
    const answer = ((year % 4 == 0) && !(year % 100 == 0)) ? true : (year % 400 == 0) ? true : false;
    return answer;
};

// Do not edit below this line
module.exports = leapYears;
