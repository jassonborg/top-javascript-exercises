/*
Steps
iterate through all the objects
calculate each (yearofdeath or this year) minus yearofbirth 
display date result for each object
get the largest number
*/

const findTheOldest = (people) => {
    const currentYear = new Date().getFullYear(); // Get the current year
    let oldestPerson = null; // Variable to store the oldest person
    let maxAge = 0; // Variable to store the maximum age

    // Iterate through all objects in the people array
    for (let i = 0; i < people.length; i++) {
        const person = people[i]; // Get the current person
        const year = person.yearOfDeath || currentYear; // Use the year of death or the current year
        const age = year - person.yearOfBirth; // Calculate the age

        console.log(`${person.name} is ${age} years old.`); // Display the age

        // Check if the current person is the oldest
        if (age > maxAge) {
            maxAge = age; // Update the maximum age
            oldestPerson = person; // Update the oldest person
        }
    }

    return oldestPerson; // Return the oldest person
};

// Do not edit below this line
module.exports = findTheOldest;
