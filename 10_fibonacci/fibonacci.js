const fibonacci = function (length) {
    length = Number(length);

    if (length < 0) return 'OOPS';
    if (length == 0) return 0;
    if (length == 1) return 1;

    let a0 = 0;
    let a1 = 1;
    let an;

    for (let n = 1; n < length + 1; n++) {
        if (n > 1) {
            an = a1 + a0;
            a0 = a1;
            a1 = an;
        }
    }
    return an;
};

// Do not edit below this line
module.exports = fibonacci;
