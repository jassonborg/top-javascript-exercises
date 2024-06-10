const palindromes = (string) => {
    let lowerCase = string.toLowerCase();
    let result = lowerCase.replace(/[^a-z0-9]/g, '');
    let reversed = result.split('').reverse().join('');

    return result === reversed;
};

// Do not edit below this line
module.exports = palindromes;
