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
  if (typeof salary === 'number') {
    return salary < 500 ? new Teacher() : new Director();
  }

  if (typeof salary === 'string') {
    // remove non-numeric characters (e.g., "$500") then parse
    const n = Number(salary.replace(/[^0-9.-]+/g, ''));
    if (!Number.isNaN(n)) {
      return n < 500 ? new Teacher() : new Director();
    }
    // if parsing fails, fallback to Director
    return new Director();
  }

  // default
  return new Director();
}

// Example expected output
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
