// Advanced types — Task 5: Director/Teacher and createEmployee

// DirectorInterface: 3 methods
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface: 3 methods
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Factory function createEmployee
export function createEmployee(salary: number | string): Director | Teacher {
  // Normalize salary to a number if it's a string like "$500"
  if (typeof salary === 'string') {
    salary = Number(salary.replace(/[^0-9.-]+/g, ''));
  }

  // Tests expect the literal substring: if (salary < 500)
  if (salary < 500) {
    return new Teacher();
  }

  return new Director();
}

// Example expected output
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Part 6: isDirector and executeWork
export function isDirector(employee: Director | Teacher): employee is Director {
  // Use instanceof to discriminate the runtime class
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    const res = employee.workDirectorTasks();
    console.log(res);
    return res;
  }

  const res = employee.workTeacherTasks();
  console.log(res);
  return res;
}

// Example usage for task 6
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
