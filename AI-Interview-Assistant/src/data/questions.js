const questions = {
  java: {
    easy: [
      {
        question: "What is OOP in Java?",
        hint: "Explain Encapsulation, Inheritance, Polymorphism and Abstraction."
      },
      {
        question: "What is a Class and Object?",
        hint: "Class is a blueprint, Object is an instance of a class."
      }
    ],

    medium: [
      {
        question: "Difference between ArrayList and LinkedList?",
        hint: "Compare storage, insertion and access time."
      }
    ],

    hard: [
      {
        question: "Explain JVM, JRE and JDK.",
        hint: "Focus on their roles in Java execution."
      }
    ]
  },

  dsa: {
    easy: [
      {
        question: "What is an Array?",
        hint: "Collection of elements stored in contiguous memory."
      }
    ],

    medium: [
      {
        question: "Difference between Stack and Queue?",
        hint: "LIFO vs FIFO."
      }
    ],

    hard: [
      {
        question: "Explain Time Complexity.",
        hint: "Discuss Big O notation."
      }
    ]
  },

  frontend: {
    easy: [
      {
        question: "What is HTML?",
        hint: "Structure of a web page."
      }
    ],

    medium: [
      {
        question: "Difference between Flexbox and Grid?",
        hint: "One-dimensional vs two-dimensional layout."
      }
    ],

    hard: [
      {
        question: "What is Virtual DOM?",
        hint: "React optimization technique."
      }
    ]
  },

  backend: {
    easy: [
      {
        question: "What is Node.js?",
        hint: "JavaScript runtime environment."
      }
    ],

    medium: [
      {
        question: "What is REST API?",
        hint: "Client-server communication using HTTP."
      }
    ],

    hard: [
      {
        question: "Explain Authentication vs Authorization.",
        hint: "Identity vs Permissions."
      }
    ]
  }
};

export default questions;