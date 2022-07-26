const sumAll = function (val1, val2) {
    if ((val1 < 0 || val2 < 0) ||
        (typeof val1 === "object" || typeof val2 === "object") ||
        (typeof val1 === "string" || typeof val2 === "string")) {
        return 'ERROR';
    } else {
        if (val1 > val2) {
            let counter = val2;
            let sum = val2;
            while (++counter < val1+1) sum += counter;
            console.log(sum);
            return sum;
        } else {
            let counter = val1;
            let sum = val1;
            while (++counter < val2+1) sum += counter;
			console.log(sum);
            return sum;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
