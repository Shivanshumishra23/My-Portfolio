import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  c,
  cpp,
  python,
  firebase,
  mysql,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  iema,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  be_consistent,
  pizza,
  simon,
  aarambh,
  blog,
  todolist,
  portfolio,
  html2,
  css2,
  javascript2,
  reactjs2,
  tailwind2,
  nodejs2,
  mongodb2,
  threejs2,
  git2,
  figma2,
  mysql2,
  cpp2,
  firebase2,
  streamease,
  mailblast,
  carrercef
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Problem Solving",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    icon2: html2,
  },
  {
    name: "CSS 3",
    icon: css,
    icon2: css2,
  },
  {
    name: "JavaScript",
    icon: javascript,
    icon2: javascript2,
  },
  {
    name: "React JS",
    icon: reactjs,
    icon2: reactjs2,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
    icon2: tailwind2,
  },
  {
    name: "Node JS",
    icon: nodejs,
    icon2: nodejs2,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    icon2: mongodb2,
  },
  {
    name: "Three JS",
    icon: threejs,
    icon2: threejs2,
  },
  {
    name: "git",
    icon: git,
    icon2: git2,
  },
  {
    name: "figma",
    icon: figma,
    icon2: figma2,
  },
  {
    name: "MYSQl",
    icon: mysql,
    icon2: mysql2,
  },

  {
    name: "C++",
    icon: cpp,
    icon2: cpp2,
  },

  {
    name: "Firebase",
    icon: firebase,
    icon2: firebase2,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Future Gurukuls",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2024 - April 2024",
    points: [
      "Contributed to developing a web platform for job creation through skill-building courses using the PAP mode",
      "Led the project, developed both front-end (React) and back-end (Nodejs, MongoDB) components from scratch.",
      "Designed a user-friendly UI for course enrollment, personalized student dashboards, and structured course plans.",
      "Built admin and teacher dashboards for verifying teachers, managing events, and uploading courses videos on AWS S3.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "IEMA Research & Development Private Limited",
    icon: iema,
    iconBg: "#383E56",
    date: "August 2023 -  Present",
    points: [
      "During my internship at IEMA, I've been actively contributing to the NCETL project. I specialize in React.js for crafting dynamic dashboards using Recharts and collaborate with Talend for ETL processes, ensuring efficient data extraction, transformation, and loading. This experience enhances my skills in both front-end development and data management.",
      "In parallel, I'm also engaged in the DAUS project, focused on developing a dynamic hospital management system. My role includes leveraging Firebase for real-time data management and using React.js to create an agile and responsive dashboard. This experience reinforces my proficiency in web application development and data-driven solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought Shivanshu is exceptional web developer, transformed our online presence, innovative solutions, highly recommend for web projects!",
    name: "Abhishek Mishra",
    designation: "CEO",
    company: "Future Gurukuls",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFnN2tS-OfNUg/profile-displayphoto-shrink_400_400/0/1721060839217?e=1726704000&v=beta&t=rPCJgxwQoVLsyHIY_Wniw96z1W5-_9DwSHk5yM0cHoc",
  },
  {
    testimonial:
      "Delivered outstanding results, highly skilled, exceeded expectations, reliable, great communicator, innovative solutions.",
    name: "Rishit chakraborty",
    designation: "Software Developer",
    company: "IEMA Research & Development",
    image:
      "https://media.licdn.com/dms/image/D5603AQHZIO_B1_JcDw/profile-displayphoto-shrink_800_800/0/1690710959467?e=1726704000&v=beta&t=VRftRhxX_UA5sOfgovKQ37sT_PIVqKJEEGZGwW3DOjI",
  },
  {
    testimonial:
      "Exceptional web development skills, exceeded expectations, reliable, creative, problem solver, highly recommend, responsive communication.",
    name: "Avinash Mishra",
    designation: "CTO",
    company: "Future Gurululs",
    image:
      "https://media.licdn.com/dms/image/D5603AQEfWDhGVlL6kg/profile-displayphoto-shrink_800_800/0/1714475160762?e=1726704000&v=beta&t=3TKZLhupKBjX5JbTxsiiOx9ZAMTKTvh6Vzv6TJWGaNs",
  },
];

const projects = [
  {
    name: "StreamEase",
    description:
      "Developed a Multi-Platform streaming solution allowing users to stream to YouTube, Facebook, and Instagram simultaneously or selectively. Designed a personal dashboard for managing stream keys and controlling camera operations. Implemented secure user authentication with JWT",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "FFmpeg",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.Io",
        color: "green-text-gradient",
      },
      {
        name: "Amazon EC2",
        color: "blue-text-gradient",
      },
      {
        name: "FFmpeg",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: streamease,
    source_code_link: "https://github.com/Shivanshumishra23/streamease-server",
    live_link: "https://streamease-ten.vercel.app/",
  },
  {
    name: "StreamEase",
    description:
      "Able to send customized emails to over 100+ people at a time using an Excel sheet. Created for company use, allowing users to create their customized templates, send follow-up emails, and attach files. Included admin control to add users and Forgot & Change Password functionality using email OTP-verification",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "pink-text-gradient",
      },
      {
        name: "Amazon S3",
        color: "green-text-gradient",
      },
      {
        name: "Nodemailer",
        color: "blue-text-gradient",
      },
    ],
    image: mailblast,
    source_code_link:
      "https://github.com/Shivanshumishra23/BulkEmailSender-server",
    live_link: "https://bulk-email-sender-client.vercel.app/",
  },
  {
    name: "Carrercef",
    description:
      "Designed a user-friendly UI for course enrollment, personalized student dashboards, and structured course plans. Built admin and teacher dashboards for verifying teachers, managing events, and uploading courses videos on AWS S3",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Amazon S3",
        color: "green-text-gradient",
      },
      
    ],
    image: carrercef,
    live_link: "https://careercef.vercel.app/",
  },

  {
    name: "Contest Reminder",
    description:
      "I've developed a React-based web application that centralizes information on upcoming coding contests across platforms like CodeChef, Codeforces, LeetCode, GeeksforGeeks, etc. This project showcases my skills in web development, API integration, and data presentation, making it easier for enthusiasts to stay updated on competitive programming events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: be_consistent,
    source_code_link: "https://github.com/Shivanshumishra23/be-consistent",
    live_link: "https://bee-consistent.netlify.app/",
  },
  {
    name: "Real time Pizza ",
    description:
      "I've crafted a real-time pizza delivery web app featuring robust user authentication. Developed with HTML, CSS, JS, Node.js, Express.js, and MongoDB, it empowers customers to place orders seamlessly, notifying admins instantly. The dynamic pizza tracking feature adds to the user experience, reflecting my expertise in full-stack web development and user-driven solutions.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/Shivanshumishra23/Real-time-pizza",
    live_link: "https://github.com/Shivanshumishra23/Real-time-pizza",
  },
  {
    name: "My Portfolio",
    description:
      "I've designed an engaging portfolio website, combining React and Three.js for stunning 3D animations. Beyond showcasing my creative work, it exemplifies my expertise in web development and interactive design. This immersive platform reflects a commitment to innovation and the seamless integration of cutting-edge technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "3js",
        color: "green-text-gradient",
      },
      {
        name: "aos",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Shivanshumishra23/My-Portfolio",
    live_link: "https://github.com/Shivanshumishra23/My-Portfolio",
  },
  {
    name: "Post Your Blogs",
    description:
      "I've developed a dynamic blog website using HTML, CSS, and JavaScript, powered by Node.js and Express for the backend and MongoDB for data storage. Explore my coding skills in action!",
    tags: [
      {
        name: "monogodb",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expresjs",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Shivanshumishra23/Blog-website",
    live_link: "https://blog-with-shivanshu.onrender.com/",
  },
  {
    name: "Simon Game",
    description:
      "The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order. It's fast-paced play, with lights and sounds that can challenge you.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/Shivanshumishra23/Simon-Game/",
    live_link: "https://shivanshumishra23.github.io/Simon-Game/",
  },
  {
    name: "Aarambh Edutech",
    description:
      "Developed a dynamic website for Aarambh Edutech using React, offering an engaging user experience. Demonstrates my proficiency in web development and commitment to delivering effective digital solutions.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aarambh,
    source_code_link: "https://aarambh-edutech.netlify.app/",
    live_link: "https://aarambh-edutech.netlify.app/",
  },

  {
    name: "Todo List",
    description:
      "In my portfolio, I showcase my TodoList app, a dynamic web application built with MongoDB, Node.js, HTML, CSS, and JavaScript. It demonstrates my proficiency in full-stack development, database integration, and front-end design.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/Shivanshumishra23/TodoList",
    live_link: "https://todolist-bm2b.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
