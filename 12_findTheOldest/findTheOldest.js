const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear(); // Get the current year

  return people.reduce((oldest, person) => {
    // Calculate the age for each person
    const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    // Return the person with the greater age
    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
