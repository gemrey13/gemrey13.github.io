import type { PersonalInfo, Certification } from "@/types";

export const personalInfo: PersonalInfo = {
  fullName: "Gem Rey Rañola",
  brand: "GEM",
  title: "Software Developer",
  subtitleRoles: ["Software Developer", "System Builder", "Full-Stack Developer", "Freelance Developer"],
  bio: [
    "I'm a Software Developer, focused on building responsive and user-friendly applications. I started with a love for coding and grew curious about how tech solves real-world problems. That curiosity led me to explore both frontend and backend development, where I found my passion for building efficient and scalable systems.",
    "I see myself as a community driven developer. I founded a student organization that trains others in tech and event support. I've also represented my region in national hackathons. Currently, I'm deepening my expertise in cloud infrastructure and exploring the cutting edge of agentic coding AI and spec-driven development. I'm always eager to learn, grow, and build meaningful projects.",
  ],
  education: {
    degree: "Bachelor of Science in Information Technology",
    institution: "Dalubhasaan ng Lungsod ng Lucena",
    award: "Most Promising IT Practitioner",
    specialization: "Software Development and Cloud Infrastructure",
  },
  philosophy:
    "As a developer, I like building things that are actually useful and easy for people to work with. I focus on writing clean, maintainable code and following SOLID principles when they make sense. I care about performance, usability, and building solutions that can grow over time. I’m comfortable working across the full stack, learning new technologies, and adapting when things change. Most of all, I enjoy solving real problems, working with others, and continuously improving as a developer.",
  heroTaglines: [
    "Nice to meet you!",
    "Powered by Milo ☕.",
    "It works on my PC 🤷‍♂️.",
    "Code. Sleep. Repeat.",
    "I Break, Then Fix.",
    "Code > Sleep! 🧑‍💻",
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/gemrey13",
      icon: "FaGithub",
      label: "GitHub profile",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/codewgem",
      icon: "FaLinkedin",
      label: "LinkedIn profile",
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/codewgem",
      icon: "FaFacebook",
      label: "Facebook profile",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/codewgem",
      icon: "FaInstagram",
      label: "Instagram profile",
    },
    {
      platform: "TikTok",
      url: "https://tiktok.com/@codewgem",
      icon: "FaTiktok",
      label: "TikTok profile",
    },
  ],
  emails: ["gemreyranola@gmail.com"],
};

export const storytellingBeats = [
  { text: "I build software.", emphasis: true },
  { text: "I solve complicated problems.", emphasis: true },
  { text: "I automate things.", emphasis: true },
  { text: "I learn.", emphasis: true },
  { text: "I experiment.", emphasis: true },
  {
    text: "I play volleyball. 🏐",
    emphasis: true,
    detail:
      "Middle blocker and MVP for BSIT Golden Huskies at DLL. We won the championship.",
  },
  {
    text: "I play guitar. 🎸",
    emphasis: true,
    detail: "Inspired by Radiohead, Oasis, and Green Day.",
  },
  { text: "I build again.", emphasis: true },
];



// Certifications array — local certificate images.
// To add a new certification:
//   { src: "/certification/image.jpg", name: "Cert Name", issuer: "Issuer", url: "optional-link" }
export const certifications: Certification[] = [
  {
    src: "/certification/Networking_Basics.jpg",
    name: "Networking Basics",
    issuer: "Cisco - Net Acad",
  },
  {
    src: "/certification/Intro_to_Cybersecurity.jpg",
    name: "Intro to Cybersecurity",
    issuer: "Cisco - Net Acad",
  },
  {
    src: "/certification/Packet_tracer.jpg",
    name: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco - Net Acad",
  },
];
