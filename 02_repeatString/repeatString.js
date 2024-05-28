const repeatString = function(str, count) {
    let result = ''
    let error = 'ERROR'
    for(let i = 0; i < count; i++){
        result += str;
    }
    if(count < 0) {
        return error;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
