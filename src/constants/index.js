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
  jobit,
  tripguide,
  threejs,
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
    title: "Penetration testing",
    icon: web,
  },
  {
    title: "Information Secuirty",
    icon: mobile,
  },
  {
    title: "Software Development",
    icon: backend,
  },
  {
    title: "Web Development",
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
    title: "Secure Redundant Network Design and Configuration",
    company_name: "University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Packet Tracer | Eve-Ng",
    points: [
      "Designed secure redundant network using Cisco's hierarchical model.",
      "Implemented Cisco ASA for enhanced network security.",
      "Utilized knowledge from CCNA: Routing and Switching and CCNA Cyber Ops.",
      "Ensured reliable connectivity and protection of data, systems, and networks.",
    ],
  },
  {
    title: "Cyber Security Report and Analysis",
    company_name: "University",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Tenable Nessus® | CVE Database",
    points: [
      "Prepared comprehensive report on fundamental aspects of cyber security.",
      "Identified risks to data, systems, and networks.",
      "Critically analyzed and evaluated various threats.",
      "Assessed effectiveness of disaster recovery and risk prevention plans.",
    ],
  },
  {
    title: "MITRE ATT&CK Framework Integration and CTF-Based Penetration Testing",
    company_name: "University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nmap | Metasploit | Wireshark | John the Ripper | Burp Suite ",
    points: [
      "ntegrated MITRE ATT&CK framework into a Capture the Flag (CTF) based ethical hacking project.",
      "Demonstrated clear justifications and achieved accurate results using various scanning types for comprehensive analysis.",
      "Evaluated and implemented security techniques to protect systems and data during the CTF challenges.",
      "Effectively communicated the findings and solutions derived from the CTF-based ethical hacking activities.",
    ],
  },
  {
    title: "Web Application and Software Development",
    company_name: "University",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "ReactJS | SCSS (Sass) | Node.js | Express | MySQL | Java | HTML | CSS | JavaScript | NetBeans IDE",
    points: [
      "Empower Lanka Project: Created an all-in-one platform for Sri Lankan entrepreneurs using ReactJS, SCSS, Node.js, Express, and MySQL.",
      "Online Food Ordering Application: Developed a Java-based application with MySQL for convenient online food ordering using NetBeans IDE.",
      "Dehiwala Zoo Conceptual Website: Built a conceptual website using HTML, CSS, and JavaScript to gain practical web development experience..",
      "Experienced in developing RESTful APIs using technologies such as Express, Node.js, and MySQL, enabling seamless communication between front-end and back-end systems..",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Food Ordering",
    description:
      "This online food ordering application has been developed using Java and a MySQL database, utilizing the NetBeans IDE environment. Customers can browse food items and add them to the cart without logging in, but they need to be logged in to place an order. Logged-in users remain in a session until they log out..",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "netbeans",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Jayodya-Methmal/online-food-ordering-system.git",
  },
  {
    name: "Empower Lanka",
    description:
      "Agile Teamwork Project: Developed the Empower Lanka platform using ReactJS, Node.js, Express, and MySQL, delivering a comprehensive all-in-one solution for Sri Lankan entrepreneurs, equipping them with essential tools and resources for business success.  (Visit GitHub for more information about Developmet team)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Jayodya-Methmal/empower-lanka-lk.git",
  },
  {
    name: "Zoo Concept Website",
    description:
      "The conceptual website for Dehiwala Zoo was meticulously designed with a focus on capturing the essence of the wildlife sanctuary. Through the combination of HTML, CSS, and JavaScript, the website incorporated visually stunning elements, seamless navigation, and interactive features.",
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
    image: tripguide,
    source_code_link: "https://github.com/Jayodya-Methmal-Wishwasara/ZooWebAssignment.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
