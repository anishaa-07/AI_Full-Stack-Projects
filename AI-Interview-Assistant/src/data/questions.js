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
      },
      {
        question: "What is a Constructor?",
        hint: "Special method used to initialize objects."
      },
      {
        question: "What is the difference between == and equals()?",
        hint: "Reference comparison vs content comparison."
      }
    ],

    medium: [
      {
        question: "Difference between ArrayList and LinkedList?",
        hint: "Compare storage, insertion and access time."
      },
      {
        question: "What is Method Overloading?",
        hint: "Same method name with different parameters."
      },
      {
        question: "What is Method Overriding?",
        hint: "Redefining a parent class method in child class."
      }
    ],

    hard: [
      {
        question: "Explain JVM, JRE and JDK.",
        hint: "Focus on their roles in Java execution."
      },
      {
        question: "What is Garbage Collection?",
        hint: "Automatic memory management in Java."
      },
      {
        question: "Explain Multithreading in Java.",
        hint: "Running multiple threads concurrently."
      }
    ]
  },

  dsa: {
    easy: [
      {
        question: "What is an Array?",
        hint: "Collection of elements stored in contiguous memory."
      },
      {
        question: "What is a Linked List?",
        hint: "Nodes connected using pointers."
      },
      {
        question: "What is a Stack?",
        hint: "LIFO data structure."
      }
    ],

    medium: [
      {
        question: "Difference between Stack and Queue?",
        hint: "LIFO vs FIFO."
      },
      {
        question: "What is Binary Search?",
        hint: "Search in sorted array with O(log n)."
      },
      {
        question: "What is Recursion?",
        hint: "Function calling itself."
      }
    ],

    hard: [
      {
        question: "Explain Time Complexity.",
        hint: "Discuss Big O notation."
      },
      {
        question: "What is Dynamic Programming?",
        hint: "Store subproblem results to avoid recomputation."
      },
      {
        question: "What is a Balanced Binary Tree?",
        hint: "Height difference should be minimal."
      }
    ]
  },

  frontend: {
    easy: [
      {
        question: "What is HTML?",
        hint: "Structure of a web page."
      },
      {
        question: "What is CSS?",
        hint: "Used for styling web pages."
      },
      {
        question: "What is JavaScript?",
        hint: "Adds interactivity to websites."
      }
    ],

    medium: [
      {
        question: "Difference between Flexbox and Grid?",
        hint: "One-dimensional vs two-dimensional layout."
      },
      {
        question: "What is DOM?",
        hint: "Document Object Model."
      },
      {
        question: "What are ES6 Features?",
        hint: "Arrow functions, let/const, template literals."
      }
    ],

    hard: [
      {
        question: "What is Virtual DOM?",
        hint: "React optimization technique."
      },
      {
        question: "Explain React Hooks.",
        hint: "Functions that let you use state and lifecycle features."
      },
      {
        question: "What is State Management?",
        hint: "Managing application data efficiently."
      }
    ]
  },

  backend: {
    easy: [
      {
        question: "What is Node.js?",
        hint: "JavaScript runtime environment."
      },
      {
        question: "What is Express.js?",
        hint: "Backend framework for Node.js."
      },
      {
        question: "What is a Server?",
        hint: "Handles requests and responses."
      }
    ],

    medium: [
      {
        question: "What is REST API?",
        hint: "Client-server communication using HTTP."
      },
      {
        question: "What are HTTP Methods?",
        hint: "GET, POST, PUT, DELETE."
      },
      {
        question: "What is Middleware?",
        hint: "Functions executed between request and response."
      }
    ],

    hard: [
      {
        question: "Explain Authentication vs Authorization.",
        hint: "Identity vs Permissions."
      },
      {
        question: "What is JWT?",
        hint: "JSON Web Token used for authentication."
      },
      {
        question: "What is Database Indexing?",
        hint: "Improves query performance."
      }
    ]
  }
};

export default questions;