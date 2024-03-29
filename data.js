const data = [
  {
    id: 1,
    title: "Kick X Ecommerce Store",
    desc: "An e-commerce full stack app built with React for the front end and node.js for the back end with serverless functions along with MySQL for database, and ant-design for UI/UX ( Currently under development ).",
    stack: [
      "html",
      "css",
      "javascript",
      "es6",
      "react js",
      "react router",
      "axios",
      "node js",
      "express js",
      "netlify",
      "serverless",
      "mongoDB",
      "ant-design",
      "JWT",
    ],
    demo: "https://kickx.abidhassan.dev",
    source:
      "https://github.com/ghulamabidhassan/kickX-Ecom-Project/tree/master",
    image: "./images/vector.jpg",
  },
  {
    id: 2,
    title: "MSJ HRM Application",
    desc: "Developed an innovative Human Resource Management app using the MERN stack (MongoDB, Express.js, React.js, Node.js) with serverless functions. This comprehensive solution streamlines HR processes, offering features such as employee onboarding, performance tracking, and leave management. The incorporation of serverless functions ensures scalability and cost-efficiency, providing a modern, efficient HR management tool ( Currently under development ).",
    stack: [
      "html",
      "css",
      "sass",
      "javascript",
      "es6",
      "react js",
      "react router",
      "axios",
      "node js",
      "express js",
      "netlify",
      "serverless",
      "MongoDB",
      "ant-design",
      "JWT",
    ],
    demo: "https://hrm.abidhassan.dev/",
    source: "https://github.com/ghulamabidhassan/MSJ-HRM",
    image: "./images/vector.jpg",
  },
  {
    id: 3,
    title: "URL shortner",
    desc: "URL Shortener is a fullstack minimalist web application built with React, Node.js, Mysql and Netlify Functions. Easily shorten long URLs for efficient sharing, and seamlessly redirect users to the original links. Simple, fast, and open-source.",
    stack: [
      "html",
      "css",
      "javascript",
      "es6",
      "react js",
      "react router",
      "axios",
      "node js",
      "express js",
      "netlify",
      "serverless",
      "mysql",
    ],
    demo: "https://urlshortner.abidhassan.dev/",
    source: "https://github.com/ghulamabidhassan/urlshortner",
    image: "./images/vector.jpg",
  },
  {
    id: 4,
    title: "dev jobs search",
    desc: "DevJobs Web App is a minimalist job search platform, powered by React.js, Node.js, Express and Neltify functions. It allows users to explore job opportunities by fetching data from Jobs API. Simple, efficient, and developer-friendly.",
    stack: [
      "html",
      "css",
      "javascript",
      "es6",
      "react js",
      "react router",
      "axios",
      "node js",
      "express js",
      "netlify",
      "serverless",
    ],
    demo: "https://jobs.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/API-Projects/tree/master/Devjobs%20Web%20App",
    image: "./images/vector.jpg",
  },
  {
    id: 5,
    title: "github users",
    desc: "This project is a simple React application that fetches and displays user information from the Github Users API with light and dark mode for the UI.",
    stack: [
      "html",
      "css",
      "javascript",
      "es6",
      "reactjs",
      "axios",
      "moment js",
      "github api",
    ],
    demo: "https://githubusers.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/API-Projects/tree/master/Github%20Users%20API",
    image: "./images/vector.jpg",
  },
  {
    id: 6,
    title: "movie database",
    desc: "Explore the Movies Database project, a react project using OMDB api. This API-driven project allows you to discover and retrieve information about various movies, enhancing the development skills in working with external data sources.",
    stack: [
      "html",
      "css",
      "javascript",
      "es6",
      "reactjs",
      "react router",
      "axios",
      "omdb api",
    ],
    demo: "https://moviedb.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/API-Projects/tree/master/Movies-Database",
    image: "./images/vector.jpg",
  },
  {
    id: 7,
    title: "IP address tracker",
    desc: "This GitHub project, 'Ip-address-tracker', is a React-based challenge from Frontend Mentor. It empowers users to track user location, ISP using IP addresses efficiently. With a clean interface and robust functionality, it's a stellar example of front-end development prowess.",
    stack: ["html", "css", "javascript", "es6", "reactjs", "leaflet maps"],
    demo: "https://iptracker.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/frontend-mentor-react-projects/tree/master/20-Ip-address-tracker",
    image: "./images/vector.jpg",
  },
  {
    id: 8,
    title: "To-do list",
    desc: "This project is a simple Todo App built using React. It is part of the Frontend Mentor challenges and focuses on building and styling a responsive Todo application.",
    stack: ["html", "css", "javascript", "es6", "react js"],
    demo: "https://todoapp.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/frontend-mentor-react-projects/tree/master/16-Todo-App",
    image: "./images/vector.jpg",
  },
  {
    id: 9,
    title: "jobs list with filtering",
    desc: "This GitHub project showcases a React-based solution for Frontend Mentor's 'Jobs Listings with Filtering' challenge. It leverages React to create a dynamic and responsive job listings page, offering a practical example of front-end development skills in action.",
    stack: ["html", "css", "javascript", "es6", "reactjs"],
    demo: "https://jobfilter.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/frontend-mentor-react-projects/tree/master/15-Jobs-listings-with-filtering",
    image: "./images/vector.jpg",
  },
  {
    id: 10,
    title: "social media dashboard",
    desc: "This GitHub project, 'Social Media Dashboard,'' is a React-based solution for Frontend Mentor's challenge. It stylishly tackles the complexities of creating a responsive and dynamic social media dashboard, offering a sleek interface and smooth user interactions.",
    stack: ["html", "css", "javascript", "es6", "reactjs"],
    demo: "https://socialdashboard.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/frontend-mentor-react-projects/tree/master/9-Social-media-dashboard",
    image: "./images/vector.jpg",
  },
  {
    id: 11,
    title: "rock paper scissors game",
    desc: "This GitHub project, 'Rock-Paper-Scissors Game,' is a React-based implementation from the Frontend Mentor challenges. It showcases interactive and dynamic web development skills, providing a fun and engaging experience for users to play the classic rock-paper-scissors game.",
    stack: ["html", "css", "javascript", "es6", "reactjs"],
    demo: "https://rpsgame.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/frontend-mentor-react-projects/tree/master/21-Rock-paper-scissors-game",
    image: "./images/vector.jpg",
  },
  {
    id: 12,
    title: "calculator",
    desc: "This GitHub project showcases a responsive calculator app built with React, part of the Frontend Mentor challenges. Explore clean code and UI, with features like arithmetic operations and a dynamic display, perfect for honing React skills.",
    stack: ["html", "css", "javascript", "es6", "reactjs"],
    demo: "https://calci.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/frontend-mentor-react-projects/tree/master/14-Calculator-app",
    image: "./images/vector.jpg",
  },

  {
    id: 13,
    title: "loopstudios landing page",
    desc: "This GitHub project showcases a React implementation of the Loopstudios Landing Page challenge from Frontend Mentor. With a sleek grid layout, it skillfully organizes content, creating an aesthetically pleasing and responsive web design.",
    stack: ["html", "css", "javascript", "es6", "reactjs"],
    demo: "https://loopstudio.abidhassan.dev/",
    source:
      "https://github.com/ghulamabidhassan/frontend-mentor-react-projects/tree/master/5-Loopstudios-landing-page",
    image: "./images/vector.jpg",
  },
];

export default data;
