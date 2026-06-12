# Data Structures and Algorithms in JavaScript

A comprehensive repository for learning and mastering **Data Structures and Algorithms (DSA) using JavaScript**. This project covers fundamental to advanced concepts with practical implementations, problem-solving techniques, complexity analysis, and coding interview preparation.

---

## Overview

This repository is designed to help developers strengthen their problem-solving skills and build a solid foundation in Data Structures and Algorithms using modern JavaScript.

Whether you are preparing for coding interviews, competitive programming, or improving your software engineering skills, this repository provides structured learning paths with real-world examples and exercises.

---

## Topics Covered

### JavaScript Fundamentals

* Variables and Data Types
* Functions
* ES6+ Features
* Closures
* Scope
* Hoisting

### Complexity Analysis

* Big O Notation
* Time Complexity
* Space Complexity

### Data Structures

* Arrays
* Strings
* Linked Lists
* Stacks
* Queues
* Hash Tables
* Sets
* Trees
* Binary Search Trees
* Heaps
* Graphs
* Tries

### Algorithms

* Searching Algorithms
* Sorting Algorithms
* Recursion
* Backtracking
* Greedy Algorithms
* Dynamic Programming
* Graph Algorithms
* Tree Traversal Algorithms

### Problem Solving Patterns

* Sliding Window
* Two Pointers
* Fast & Slow Pointers
* Prefix Sum
* Binary Search
* Merge Intervals
* Monotonic Stack
* Breadth First Search (BFS)
* Depth First Search (DFS)

### Coding Interview Preparation

* LeetCode Problems
* Interview Questions
* Company-Wise Questions
* Optimization Techniques

---

## Repository Structure

```text
javascript-data-structures-and-algorithms/
│
├── 01-Basics
├── 02-Time-And-Space-Complexity
├── 03-Arrays
├── 04-Strings
├── 05-Recursion
├── 06-Searching
├── 07-Sorting
├── 08-Linked-List
├── 09-Stack
├── 10-Queue
├── 11-Hashing
├── 12-Trees
├── 13-Heap
├── 14-Graphs
├── 15-Greedy-Algorithms
├── 16-Dynamic-Programming
├── 17-Backtracking
├── 18-Sliding-Window
├── 19-Two-Pointers
├── 20-Bit-Manipulation
├── 21-Math-And-Number-Theory
├── 22-LeetCode-Problems
├── 23-Interview-Questions
│
└── README.md
```

---

## Getting Started

### Prerequisites

* Node.js (v18 or later recommended)
* JavaScript Fundamentals
* VS Code or any code editor

### Clone Repository

```bash
git clone https://github.com/thisismantu/javascript-data-structures-and-algorithms.git
```

```bash
cd javascript-data-structures-and-algorithms
```

---

## Running Examples

Execute any JavaScript file using Node.js:

```bash
node 03-Arrays/array-traversal.js
```

Example:

```bash
node 07-Sorting/bubble-sort.js
```

---

## Learning Roadmap

### Beginner

* JavaScript Fundamentals
* Arrays
* Strings
* Complexity Analysis
* Searching
* Sorting

### Intermediate

* Linked Lists
* Stacks
* Queues
* Hash Tables
* Recursion
* Trees

### Advanced

* Graphs
* Heaps
* Dynamic Programming
* Greedy Algorithms
* Backtracking
* Advanced Interview Problems

---

## Example Topics

### Array Traversal

```javascript
const numbers = [10, 20, 30, 40];

for (const number of numbers) {
  console.log(number);
}
```

### Binary Search

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

---

## Goals

* Build strong algorithmic thinking
* Improve coding interview performance
* Understand time and space complexity
* Learn industry-standard problem-solving techniques
* Master JavaScript-based DSA implementation

---

## Recommended Platforms

* LeetCode
* HackerRank
* CodeChef
* Codeforces
* GeeksforGeeks
* InterviewBit

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## Author

**Mantu Kumar**

Full Stack Developer | Backend Engineer | Problem Solver

---

## License

This project is licensed under the MIT License.

---

## Star the Repository

If you find this repository useful, consider giving it a ⭐ to support the project and help others discover it.
