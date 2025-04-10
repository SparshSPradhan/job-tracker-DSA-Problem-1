


# 📋 Job Tracker Sorting (JavaScript)

This is a simple Node.js script that sorts an array of job applications by the `appliedDate` in **descending order** (latest first). It demonstrates working with arrays, objects, and date sorting in JavaScript.



## 🧩 Problem Statement

Given an array of job application objects:


{
  company: "Google",
  role: "SDE Intern",
  appliedDate: "2025-04-01"
}


### 🎯 Task

Sort the job applications based on the `appliedDate`, showing the most recently applied job **first**.



## 🛠️ Folder Structure


job-tracker-sort/
├── index.js         // Main sorting logic
├── package.json     // Node.js project configuration
└── README.md        // Documentation




## 🚀 How to Run

### 1. Clone this repo or download the folder.


git clone <repo-url>
cd job-tracker-sort


### 2. Install dependencies (optional step, no packages used here)


npm install


### 3. Run the program


node index.js




## ✅ Example Output


Sorted Job Applications:
[
  { company: 'Meta', role: 'Backend Intern', appliedDate: '2025-04-05' },
  { company: 'Google', role: 'SDE Intern', appliedDate: '2025-04-01' },
  { company: 'Microsoft', role: 'Full Stack Intern', appliedDate: '2025-03-30' },
  { company: 'Amazon', role: 'Frontend Intern', appliedDate: '2025-03-28' }
]




## 🧠 Concepts Used

- JavaScript Array `.sort()` method
- Date parsing using `new Date()`
- Sorting objects in arrays
- Node.js scripting



## 📦 Dependencies

This project uses **no external libraries**.



## 📌 Author

Made with ❤️ by [Sparsh S. Pradhan](mailto:sparshmillion11@gmail.com)

