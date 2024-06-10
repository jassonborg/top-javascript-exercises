const fibonacci = (n) => {
    //accept strings
    n = Number(n);
    //0 to display 0
    if(n === 0) return (0);
    //negative numbers
    if(n < 0) return ("OOPS");

    //start of fibonacci numbers defined
    let a = 0, b = 1, c = 1;

    //index starts at 2, since 0 and 1 already set on variables a and b
    //loop as long as i is less than or equal to n
    //adds a + b, then a becomes b then b becomes c
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }

    return c;
};

// Do not edit below this line
module.exports = fibonacci;
