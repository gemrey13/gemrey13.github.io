import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a freelance software developer, my passion lies in creating reliable and scalable web applications. With junior-level skills in Python, Django, React, Node.js, MySQL, and PHP, I aim to deliver high-quality solutions that meet client needs and enhance user experiences. My goal is to contribute to the success of freelance projects by providing robust, efficient, and innovative software solutions.`;
export const HERO_CONTENT2 = `I am enthusiastic about expanding my skill set to include new technologies such as React Native for mobile development and C# .NET for desktop applications. Embracing continuous learning and growth, I am eager to leverage these technologies to deliver versatile and innovative solutions that cater to the evolving needs of my clients in both mobile and desktop environments.`;

export const ABOUT_TEXT = `I am an aspiring developer with junior-level experience in web development. I have intermediate skill in Python using Django for backend development, and I also work with React for frontend interfaces and Node.js for server-side applications. Additionally, I am familiar with PostgreSQL and MySQL for managing databases. I thrive in collaborative environments, where I enjoy tackling complex problems to deliver high-quality solutions that meet client needs. Outside of coding, I spend my free time teaching juniors at my college, contributing to their learning and growth in web development. I am also passionate about cybersecurity and have participated in the Hack for Gov, a national competition in the Philippines, both last year and this year. I was a regional qualifier in this cybersecurity-focused hackathon, where I had the opportunity to apply my skills and knowledge in real-world scenarios. Additionally, I maintain an active lifestyle and have a passion for exploring emerging technologies.`;

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Senior Full Stack Developer",
        company: "Google Inc.",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
    {
        year: "2022 - 2023",
        role: "Frontend Developer",
        company: "Adobe",
        description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    },
    {
        year: "2021 - 2022",
        role: "Full Stack Developer",
        company: "Facebook",
        description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
        technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    },
    {
        year: "2020 - 2021",
        role: "Software Engineer",
        company: "Paypal",
        description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
        technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    },
];

export const PROJECTS = [
    {
        title: "E-Commerce Website",
        image: project1,
        description:
            "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
        title: "Task Management App",
        image: project2,
        description:
            "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
        technologies: ["HTML", "CSS", "Angular", "Firebase"],
    },
    {
        title: "Portfolio Website",
        image: project3,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },
    {
        title: "Blogging Platform",
        image: project4,
        description:
            "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
];

export const CONTACT = {
    address: "767 Fifth Avenue, New York, NY 10153 ",
    phoneNo: "+12 4555 666 00 ",
    email: "me@example.com",
};