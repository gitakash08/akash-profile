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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    imagex,
    jobit,
    tripguide,
    threejs,
    MLInfo,
    datavizpvt,
    samana,
    avinash,
    anil,
    jai,
    pragya,
    swati,
  } from "../assets";

  //import projectimage from "../assets/projects/projectimage.png";
  
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
    {
      id: "resume",
      title: "Download Resume",
      isDownload: true, 
    }
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "SAAS (Software as a Service)",
      icon: creator,
    },
    {
      title: "REST API's",
      icon: mobile,
    },
    {
      title: "DevOps Solutions",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "DBA Louge",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2020 - Dec 2020",
      points: [
        "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "SQL Developer",
      company_name: "Dataviz Technologies Pvt Ltd",
      icon: datavizpvt,
      iconBg: "#383E56",
      date: "March 2020 - Jan 2021",
      points: [
        "Developing and maintaining databases using SQL and microsoft SQL server and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Writing SQL queries and establishing databases. making api with development teams.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full stack Developer",
      company_name: "ML INFOMAP PVT LTD",
      icon: MLInfo,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js, NodeJs and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Akash proved me wrong.",
      name: "Samana Butool Mirza",
      designation: "Software Programmer",
      company: "ML Infomap Pvt. Ltd.",
      image: samana,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Akash does.",
      name: "C.A. Avinash Tripathi",
      designation: "Charter Accountant",
      company: "DEF Corp",
      image: avinash,
    },
    {
      testimonial:
        "After Akash optimized our website, our traffic increased by 70%. We can't thank them enough!",
      name: "Anil Rathore",
      designation: "Lead Business Development",
      company: "MlOps",
      image: anil,
    },
    {
      testimonial:
        "Akash excels technically and inspires his team. highly recommend him for both individual contributor roles and leadership positions due to his exceptional skills!",
      name: "Swati Dubey",
      designation: "Software Engineer",
      company: "IOPEX",
      image: swati,
    },
    {
      testimonial:
        "He is an exceptional leader and team player with a passion for problem-solving. his time management skills are on next level!",
      name: "Jai Shanker Dwivedi",
      designation: "Senior Business Intelligence Consultant",
      company: "Icon Resources & Technologies",
      image: jai,
    },
    {
      testimonial:
        "Akash is a highly energetic and motivated person with a unique ability to learn new things by being flexible and willing to experiment new things!",
      name: "Pragya Pandey",
      designation: "Production Software Engineer",
      company: "Oracle",
      image: pragya,
    },
  ];
  
  const projects = [
    {
      name: "Image-X",
      description:
        "Web-based SAAS platform that allows users to uplaod images and enchange them with the features like Image Restoration, Generative fill, object Remove and Recolor and with background Remove.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imagex,
      source_code_link: "https://image-x-web.vercel.app/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/gitakash08/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/gitakash08/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/gitakash08/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };