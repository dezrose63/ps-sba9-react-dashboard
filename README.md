<img width="250" height="50" alt="image" src="https://github.com/user-attachments/assets/38f3794e-58c4-4b3d-a31e-4ef089121296" />

#  Per Scholas Software Engineer Bootcamp SBA 9

## Do you want to get ***free*** tech training from Per Scholas? 

## [Click Here to find out how!](https://perscholas.referralrock.com/l/7MIDHLPB/) 

*************************************************************************************************************
SBA React Dashboard Application

Overview

In this assessment, you will apply the skills you have developed throughout your React training to build a functional, real-world dashboard application. This project will test your understanding of React components, state management, TypeScript integration, form handling, and component composition.

You will create a Task Management Dashboard using React and TypeScript. The final deliverable will include a GitHub repository with your project and a written reflection on your approach and the challenges you faced.

Time Allotment
Time: 5.5 hours

Instructions

Initialize Your Project
Create a new React TypeScript project using Vite:

```bash
npm create vite@latest task-dashboard -- --template react-ts
cd task-dashboard
npm install
```

Install additional dependencies as needed:
```bash
npm install @heroicons/react tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Above is simply an example, you will need to install the dependencies you need for your project.

Organize Your Folder Structure

Your project should have the following structure:
```bash
task-dashboard/
    ├── src/
    │   ├── components/
    │   │   ├── TaskList/
    │   │   │   ├── TaskList.tsx
    │   │   │   └── TaskItem.tsx
    │   │   ├── TaskForm/
    │   │   │   └── TaskForm.tsx
    │   │   ├── TaskFilter/
    │   │   │   └── TaskFilter.tsx
    │   │   └── Dashboard/
    │   │       └── Dashboard.tsx
    │   ├── types/
    │   │   └── index.ts
    │   ├── utils/
    │   │   └── taskUtils.ts
    │   ├── App.tsx
    ├── main.tsx
    └── package.json
```

## Project Planning

Requirements Analysis
Review the requirements below and plan your implementation approach.
Create a project plan outlining the components, state management strategy, and TypeScript interfaces you’ll need.
Consider how you’ll handle form validation, state updates, and component communication.

## Component Planning

Plan the hierarchy and communication between components.
Design the TypeScript interfaces for your components and data structures.
Consider how you’ll implement the filtering and sorting functionality.
Implementation
Type Definitions (types/index.ts)
Define TypeScript interfaces for:

## Task data structure

Component props
Form data
Filter options
Task Management Components

## TaskList Component:

Implement list rendering with proper key management
Handle task status updates
Implement task addition
Implement task deletion
Add sorting functionality
Add a search bar to search for tasks

## TaskForm Component:

Create a controlled form for adding/editing tasks
Implement form validation
Handle form submission
Show validation feedback

## TaskFilter Component:

Implement filtering by status and priority
Add search functionality
Show active filter indicators

## Dashboard Component:

Compose all components into a cohesive dashboard

## Implement responsive layout

Add task statistics
Handle component communication
Utility Functions

## Implement task filtering logic

Add sorting functions
Create validation helpers
Add date formatting utilities

## Data Persistence

Add localStorage integration
Implement data export/import

## Enhanced UI

Implement task reordering
Integrating a drag and drop library could be a fun challenge for this feature
Add support for both light and dark mode
Add a toggle switch to the UI for changing the theme
Pass the theme state down to the components that need it
Add animations and/or transitions for state changes

## Testing and Finalizing

## Test Your Application:

Test all form validations
Verify filtering and sorting functionality
Check responsive design
Test component interactions
Code Review:

## Ensure TypeScript types are properly implemented

Check for proper component composition
Verify state management approach
Review error handling

## Documentation:

Add comments to components and functions
Create a README.md with setup instructions
Document component props and usage
Deliverables
You must submit the following items via Canvas:

## GitHub Repository:

Link to your GitHub repository with the complete project code
Ensure your repository is publicly accessible

## Reflection Document:

Write a reflection addressing:
How you implemented React and TypeScript features
The challenges you encountered and how you overcame them
Your approach to component composition and state management

## Submission Guidelines

GitHub Repository: Submit the link to your repository on Canvas.
Reflection Document: Upload your written reflection as a separate file or include it in your repository as a Markdown file.
Ensure that your submission is complete and follows all instructions.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
