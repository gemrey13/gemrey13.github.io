import capstone from "../assets/projects/capstone-project.png";
import voting from "../assets/projects/voting.png";
import inventory from "../assets/projects/inventory.jpg";

export const HERO_CONTENT = `As a freelance software developer, my passion lies in creating reliable and scalable web applications. With junior-level skills in Python, Django, React, Node.js, MySQL, and PHP, I aim to deliver high-quality solutions that meet client needs and enhance user experiences. My goal is to contribute to the success of freelance projects by providing robust, efficient, and innovative software solutions.`;
export const HERO_CONTENT2 = `I am enthusiastic about expanding my skill set to include new technologies such as React Native for mobile development and C# .NET for desktop applications. Embracing continuous learning and growth, I am eager to leverage these technologies to deliver versatile and innovative solutions that cater to the evolving needs of my clients in both mobile and desktop environments.`;

export const ABOUT_TEXT = `I am an aspiring developer with junior-level experience in web development. I have intermediate skill in Python using Django for backend development, and I also work with React for frontend interfaces and Node.js for server-side applications. Additionally, I am familiar with PostgreSQL and MySQL for managing databases. I thrive in collaborative environments, where I enjoy tackling complex problems to deliver high-quality solutions that meet client needs. Outside of coding, I spend my free time teaching juniors at my college, contributing to their learning and growth in web development. I am also passionate about cybersecurity and have participated in the Hack for Gov, a national competition in the Philippines, both last year and this year. I was a regional qualifier in this cybersecurity-focused hackathon, where I had the opportunity to apply my skills and knowledge in real-world scenarios. Additionally, I maintain an active lifestyle and have a passion for exploring emerging technologies.`;

export const EXPERIENCES = [
    {
        year: "March 2024 - Present",
        role: "Software Developer Intern",
        company: "Cooperative Bank of Quezon Province",
        description: `Led a team in developing and maintaining web applications using Django, Postgresql, and TailwindCSS. Developed two systems: an FFE inventory system and a voting system for the cooperative. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Django", "TailwindCSS", "Postgresql", "HTML"],
    },
    {
        year: "December 2020 - February 2021",
        role: "IT Support Intern",
        company: "RA Insurance Services",
        description: `I managed printing tasks, fixed computers, and assisted co-workers with technical issues. I provided troubleshooting support to identify and resolve hardware and software problems. This role enhanced my problem-solving skills and deepened my understanding of IT support in a professional setting.`,
        technologies: ["WindowsOS", "Microsoft Office Suite", "Computers", "TeamViewer"],
    },
];

export const PROJECTS = [
    {
        title: "DLL Alumni Portal Web App",
        image: capstone,
        description:
            "An online portal for alumni in DLL featuring tracer study and curriculum analysis.",
        technologies: ["React", "Tailwind", "REST API", "Django", "MySQL"],
    },
    {
        title: "CBQP Voting System",
        image: voting,
        description:
            "A voting application designed for Cooperative Bank of Quezon Province to facilitate cooperative decision-making processes.",
        technologies: ["HTML", "Tailwind", "Django", "MySQL"],
    },
    {
        title: "CBQP FFE Invetory System",
        image: inventory,
        description:
            "An inventory management system developed for Cooperative Bank of Quezon Province to track Fixed Furniture and Equipment (FFE) within the organization.",
        technologies: ["HTML", "Tailwind", "Django", "Postgresql"],
    },
];

export const CONTACT = {
    address: "767 Fifth Avenue, New York, NY 10153 ",
    phoneNo: "+12 4555 666 00 ",
    email: "me@example.com",
};