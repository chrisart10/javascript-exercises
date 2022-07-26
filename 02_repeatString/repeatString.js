const repeatString = function(str,num) {
    aux = str;
    str = '';
    if (num < 0){
        return 'ERROR';
    } else if(str != ''){

    } else{
        let i = 0;
        while(i++< num){
            str+=aux;
        }
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
