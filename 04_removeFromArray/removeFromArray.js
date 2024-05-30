let myArray = [1, 2, 3, 4, 7, "tacos"];

const removeFromArray = (myArray, ...args) => {

    const newArray = [...myArray];
    const uniqueArray = [...new Set(args)];

    for(const value of uniqueArray){

        let index = newArray.indexOf(value);

        while(index !== -1){
            newArray.splice(index, 1);
            index = newArray.indexOf(value);
        }
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
