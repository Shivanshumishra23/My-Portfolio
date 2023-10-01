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
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   {
     name: "MYSQl",
     icon: mysql,

   },
  
    {
      name: "C++",
      icon:cpp,
    },
    
    {
      name: "Firebase",
      icon:firebase,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "IEMA Research & Development Private Limited",
      icon: iema,
      iconBg: "#383E56",
      date: "August 2023 -  Present",
      points: [
        "During my internship at IEMA, I've been actively contributing to the NCETL project. I specialize in React.js for crafting dynamic dashboards using Recharts and collaborate with Talend for ETL processes, ensuring efficient data extraction, transformation, and loading. This experience enhances my skills in both front-end development and data management.",
        "In parallel, I'm also engaged in the DAUS project, focused on developing a dynamic hospital management system. My role includes leveraging Firebase for real-time data management and using React.js to create an agile and responsive dashboard. This experience reinforces my proficiency in web application development and data-driven solutions."
      ],
    },
    // {
    //   title: "Full Stack Developer",
    //   company_name: "Future Gurukuls",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought Shivanshu is exceptional web developer, transformed our online presence, innovative solutions, highly recommend for web projects!",
      name: "Abhishek Mishra",
      designation: "CEO",
      company: "Future Gurukuls",
      image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/328580282_1145081989489748_1696133815309809344_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=xyiRlqU7kR0AX-5ioOr&_nc_ht=scontent.fccu3-1.fna&oh=00_AfANmQ9DIIjZPjXk_j133JEZG_sg31_H4H4ApZodGbUaOg&oe=651C58AD",
    },
    {
      testimonial:
        "Delivered outstanding results, highly skilled, exceeded expectations, reliable, great communicator, innovative solutions.",
      name: "Rishit chakraborty",
      designation: "Software Developer",
      company: "IEMA Research & Development",
      image: "https://media.licdn.com/dms/image/D5603AQHZIO_B1_JcDw/profile-displayphoto-shrink_800_800/0/1690710957417?e=1701302400&v=beta&t=KBuSCRxWsmIPIUR33m2fpbwmTRbzwZWFsNqfvfX-E8s",
    },
    {
      testimonial:
        "Exceptional web development skills, exceeded expectations, reliable, creative, problem solver, highly recommend, responsive communication.",
      name: "Avinash Mishra",
      designation: "CTO",
      company: "Future Gurululs",
      image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/370629867_2181877248673659_7479671336952899959_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=_BR11vtvwVAAX_Gdl0Z&_nc_ht=scontent.fccu3-1.fna&oh=00_AfAEzaWox8JjdrptVpVGJQ7S0h1hBpC-4mlSUlDr_P3LNg&oe=651DF03E",
    },
    
  ];
  
  const projects = [
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
      live_link:"https://bee-consistent.netlify.app/"
      
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
  