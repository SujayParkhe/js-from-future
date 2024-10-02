const calcAge = (birthYear) => 2024 - birthYear;
const skyAge = calcAge(2020);
console.log(skyAge);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirementAge = 65 - age;
  return `${firstName} retires in ${retirementAge} years`;
};

const sujayYearsUntilRetirement = yearsUntilRetirement(1995, "Sujay");
console.log(sujayYearsUntilRetirement);
const skyYearsUntilRetirement = yearsUntilRetirement(2020, "Sky");
console.log(skyYearsUntilRetirement);
