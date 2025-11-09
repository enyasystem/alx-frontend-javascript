# Task 1: Teacher Interface

## Description

This task introduces **TypeScript interfaces**, demonstrating how to define object structures with **readonly**, **optional**, and **dynamic properties**.

The goal is to model a `Teacher` object with required, optional, and flexible attributes.

---

## Interface Requirements

The `Teacher` interface includes the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `firstName` | `string` | Must be defined and **readonly** |
| `lastName` | `string` | Must be defined and **readonly** |
| `fullTimeEmployee` | `boolean` | Must always be defined |
| `yearsOfExperience` | `number` | Optional |
| `location` | `string` | Must always be defined |
| `[key: string]: any` | `any` | Allows additional dynamic properties like `contract`, `subject`, etc. |

---

## Example Code
```typescript
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
```

**Output:**
```javascript
{
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false
}
```

---

## Key Concepts Learned

- Using interfaces to define object shapes in TypeScript
- Making properties `readonly` to prevent reassignment
- Adding optional properties with `?`
- Allowing extra attributes dynamically using index signatures
- Strong type-checking during object creation

---

## Setup Instructions

1. **Navigate to the task directory:**
```bash
   cd 0x04-TypeScript/task_1
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Build the project:**
```bash
   npm run build
```

4. **Run the output:**
```bash
   npm start
```

---

## Commit Message
```
Build Teacher interface with readonly, optional, and dynamic properties
```

---

## Files

- `js/main.ts`
- `webpack.config.js`
- `tsconfig.json`
- `package.json`