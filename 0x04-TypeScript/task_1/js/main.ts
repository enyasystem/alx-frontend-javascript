// Define the Teacher interface
interface Teacher {
    readonly firstName: string; // readonly - can't change after initialization
    readonly lastName: string;  // same here also
    fullTimeEmployee: boolean;  // must always exist
    yearsOfExperience?: number; // Optional
    location: string;           // must always exist
    [key: string]: any;         // index signature => allows extra properties like "contract"
}

// Example object using the interface
const teacher3: Teacher = {
    firstName: 'Bernard',
    fullTimeEmployee: false,
    lastName: 'Igiri',
    location: 'Ekureku',
    contract: false,            // allowed because of the [key: string]: any
};

console.log(teacher3);

// Director interface extends Teacher and adds numberOfReports
export interface Director extends Teacher {
    numberOfReports: number;
}

// Example director object
export const director1: Director = {
    firstName: 'John',
    lastName: 'Igiri',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Function type for printing teacher name
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementation of printTeacher
export const printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string
): string => `${firstName.charAt(0)}. ${lastName}`;

// Example usage
console.log(printTeacher('John', 'Igiri'));
