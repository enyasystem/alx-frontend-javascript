//Example object using the interface
var teacher3 = {
    firstName: 'Bernard',
    fullTimeEmployee: false,
    lastName: 'Igiri',
    location: 'Ekureku',
    contract: false,
};
console.log(teacher3);
// Example director object
export var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Implementation of printTeacher
export var printTeacher = function (firstName, lastName) { return firstName.charAt(0) + ". " + lastName; };
// Example usage
console.log(printTeacher('John', 'Doe'));
//# sourceMappingURL=main.js.map