import projectThumbnail from "../assets/ProjectThumbnail.png";

export const learningProjects = {
  "Core Frontend": {
    description:
      "Projects built using HTML, CSS, and JavaScript focusing on DOM manipulation, responsive design, API integration, and browser-based application development.",

    projects: [
      {
        id: "todo-app",
        title: "TO-DO App",
        description:
          "A simple and responsive Task Management Application built using HTML, CSS, and JavaScript that allows users to add, edit, delete, and mark tasks as complete. The project demonstrates CRUD operations through DOM manipulation and uses Local Storage to persist tasks, ensuring data remains available even after the browser is refreshed.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: projectThumbnail,
        githubLink: "https://github.com/prathameshcode360/TO-DO-APP.git",
        liveDemo: "https://prathameshcode360.github.io/TO-DO-APP/",
      },

      {
        id: "password-analyzer",
        title: "Password Analyzer",
        description:
          "A simple Password Strength Analyzer Chrome Extension built using HTML, CSS, and JavaScript that allows users to analyze password strength in real time, generate secure passwords, estimate crack time, check passwords against known data breaches using the Have I Been Pwned API, and receive personalized security suggestions. The project demonstrates DOM manipulation, asynchronous API integration, the Web Crypto API for secure SHA-1 hashing, and a privacy-first approach where passwords are never stored or transmitted in full.",
        tech: ["HTML", "CSS", "JavaScript", "Web Crypto API"],
        image: projectThumbnail,
        githubLink:
          "https://github.com/prathameshcode360/Password-Strength-Analyzer.git",
        liveDemo:
          "https://prathameshcode360.github.io/Password-Strength-Analyzer/",
      },

      {
        id: "portfolio-website",
        title: "Portfolio Website",
        description:
          "A simple and responsive Single Page Portfolio Website built using HTML, CSS, and JavaScript. This beginner-friendly project demonstrates the fundamental structure of a web application by implementing sections like Navigation, Hero, About, Services, Skills, Education, Contact, and Footer. It also showcases responsive design using Flexbox and CSS Grid, along with basic JavaScript features such as a mobile navigation menu, typing effect, smooth scrolling, and button click events.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: projectThumbnail,
        githubLink: "https://github.com/prathameshcode360/Portfolio.git",
        liveDemo: "https://prathameshcode360.github.io/Portfolio/",
      },

      {
        id: "crypto-tracker",
        title: "Crypto Tracker",
        description:
          "Crypto Tracker is a responsive web application built with HTML, CSS, and JavaScript that fetches real-time cryptocurrency market data from the CoinGecko API. Users can search, sort, and save their favorite cryptocurrencies using Local Storage, providing a simple and interactive way to track the crypto market.",
        tech: ["HTML", "CSS", "JavaScript", "API Integration"],
        image: projectThumbnail,
        githubLink:
          "https://github.com/prathameshcode360/Crypto-Tracker-App.git",
        liveDemo: "https://prathameshcode360.github.io/Crypto-Tracker-App/",
      },
    ],
  },

  React: {
    description:
      "Projects built using the React ecosystem including Context API, Redux Toolkit, Firebase integration, and advanced state management.",

    projects: [
      {
        id: "next-cart",
        title: "NextCart",
        description:
          "NextCart is a modern and responsive e-commerce web application built using React, Redux Toolkit, and Firebase. It enables users to browse products, search and filter items, manage their cart and wishlist, securely authenticate, and place orders. The application focuses on delivering a seamless shopping experience with efficient state management, real-time database integration, and a clean, user-friendly interface.",
        tech: ["React", "Redux Toolkit", "Firebase"],
        image: projectThumbnail,
        githubLink: "https://github.com/prathameshcode360/NextCart.git",
        liveDemo: "https://prathameshcode360.github.io/NextCart/",
      },

      {
        id: "blog-app",
        title: "Blog App",
        description:
          "A simple and responsive Blog Application built with React Hooks and Firebase Firestore. Users can add, edit, update, and delete blogs with real-time data handling. The app focuses on clean UI, proper state management, and modern React best practices.",
        tech: ["React", "React Hooks", "Firebase"],
        image: projectThumbnail,
        githubLink: "https://github.com/prathameshcode360/BLOG-APP.git",
        liveDemo: "https://prathameshcode360.github.io/BLOG-APP",
      },

      {
        id: "expense-tracker",
        title: "Expense Tracker",
        description:
          "A modern Expense Tracker App built using React Hooks and Firebase Firestore. It allows users to add, update, and delete transactions with real-time balance tracking. The app is fully responsive and deployed using GitHub Pages. Perfect for learning React and Firebase integration.",
        tech: ["React", "React Hooks", "Firebase"],
        image: projectThumbnail,
        githubLink:
          "https://github.com/prathameshcode360/EXPENSE-TRACKER-APP.git",
        liveDemo: "https://prathameshcode360.github.io/EXPENSE-TRACKER-APP",
      },

      {
        id: "photo-folio",
        title: "Photo Folio",
        description:
          "PhotoFolio is a simple photo gallery app developed using React. It allows users to organize images into albums and edit them easily. Firebase Firestore is used for real-time data management.",
        tech: ["React", "Firebase", "React Hooks"],
        image: projectThumbnail,
        githubLink: "https://github.com/prathameshcode360/PHOTO-FOLIO-APP.git",
        liveDemo: "https://prathameshcode360.github.io/PHOTO-FOLIO-APP",
      },

      {
        id: "shopping-cart",
        title: "Shopping Cart",
        description:
          "A simple shopping cart application built using React and Context API. It allows users to add, remove, and manage cart items globally. The project focuses on clean state management without Redux.",
        tech: ["React", "Context API"],
        image: projectThumbnail,
        githubLink: "https://github.com/prathameshcode360/SHOPPING-CART.git",
        liveDemo: "https://prathameshcode360.github.io/SHOPPING-CART",
      },
    ],
  },

  Backend: {
    description:
      "Backend development projects focused on REST APIs, authentication, database management, real-time communication, and scalable server architecture.",

    projects: [
      {
        id: "job-portal",
        title: "Easily Job Portal",
        description:
          "Easily-Job Portal is a web application built with Node.js, Express.js, and the MVC architecture. It enables job seekers to search, view, and apply for jobs, while recruiters can register, log in, post, update, and manage job listings. The project includes recruiter authentication, job application management, and server-side form validation using Express Validator, demonstrating core backend concepts such as CRUD operations, authentication, and MVC design.",
        tech: ["Node.js", "Express.js"],
        image: projectThumbnail,
        githubLink:
          "https://github.com/prathameshcode360/Easily--Job-Portal.git",
        liveDemo: "https://easily-job-portal-co44.onrender.com",
      },

      {
        id: "product-management-system",
        title: "Product Management System",
        description:
          "A Product Management System built with Node.js, Express.js, and EJS following the MVC architecture. The application supports complete CRUD operations with server-side validation using Express Validator. It demonstrates routing, middleware, templating, and clean separation of concerns through the Model-View-Controller design pattern.",
        tech: ["Node.js", "Express.js", "EJS", "MVC"],
        image: projectThumbnail,
        githubLink:
          "https://github.com/prathameshcode360/Product-Management-System.git",
        liveDemo: "https://product-management-system-attv.onrender.com",
      },

      {
        id: "chat-application",
        title: "Chat Application",
        description:
          "Real-time chat platform supporting instant messaging, user authentication, and persistent conversations using socket programming.",
        tech: ["Node.js", "Socket.io", "MongoDB", "Mongoose"],
        image: projectThumbnail,
      },
    ],
  },

  MERN: {
    description:
      "Full-stack applications combining React, Node.js, Express.js, and MongoDB to build complete production-ready solutions.",

    projects: [
      {
        id: "learning-management-system",
        title: "Learning Management System",
        description:
          "Comprehensive LMS platform featuring course management, student enrollment, progress tracking, assessments, and content delivery.",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        image: projectThumbnail,
      },
    ],
  },

  "Generative AI": {
    description:
      "Projects integrating Large Language Models, Retrieval-Augmented Generation (RAG), vector search, and AI-powered workflows.",

    projects: [
      {
        id: "personal-ai-doc-system",
        title: "Personal AI DOC System",
        description:
          "AI-powered document assistant that enables users to upload documents, perform semantic search, and chat with their content using RAG architecture and Gemini AI.",
        tech: [
          "MERN",
          "RAG",
          "Gemini AI",
          "LLM",
          "Vector Search",
          "MongoDB Atlas",
        ],
        image: projectThumbnail,
      },
    ],
  },

  "Machine Learning": {
    description:
      "Machine Learning projects involving data analysis, model training, prediction systems, and intelligent automation.",

    projects: [],
  },
};
