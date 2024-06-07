const sumAll = (start, end) => {
    //if values are negative
    if (start <= 0 || end <= 0) {
        return "ERROR";
    }

    //if values don't equal to a number
    if (typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR";
    }
    
    //swap start and end values
    if (start > end){
        [start, end] = [end, start];
    }

    // 1 to 100 has 100 numbers + 1 (to include the numbers 1 and 100) *
    // add start and end then / 2
    return (end - start + 1) * (start + end) / 2;
};

// Do not edit below this line
module.exports = sumAll;
