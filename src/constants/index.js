import {
  frontend,
  backend,
  cloud,
  ai,
  javascript,
  typescript,
  html,
  nextjs,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  docker,
  mongodb,
  mySql,
  azure,
  openai,
  lookseas,
  walledgarden,
  inspection_center,
  patient_copilot,
  codingNinja,
  vcLogo,
  freelancing,
  loyalistCollege,
  dce,
  cancer_copilot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
];

const services = [
  {
    title: "Generative AI and LLM Creator",
    icon: ai,
  },
  {
    title: "Full Stack Developer",
    icon: frontend,
  },
  {
    title: "Cloud Administrator",
    icon: cloud,
  },
  {
    title: "Devops Engineer",
    icon: backend,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mySql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "git",
    icon: azure,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "open ai",
    icon: openai,
  },
];

const experiences = [
  {
    title: "Full Stack Developer (Freelance)",
    company_name: "Dedicated Client",
    icon: freelancing,
    iconBg: "#333333",
    date: "Jan 2026 - Present",
  },
  {
    title: "Software Engineer Intern",
    company_name: "MortgEdge",
    icon: freelancing,
    iconBg: "#333333",
    date: "Sep 2025 - Dec 2025",
  },
  {
    title: "Associate Software Developer",
    company_name: "Valuecoders Software Services",
    icon: vcLogo,
    iconBg: "#333333",
    date: "Feb 2021 - Mar 2024",
  },
];

const projects = [
  {
    id: "cancer-copilot.ai",
    name: "Cancer Copilot",
    description:
      "Cancer Copilot is an AI-powered platform that leverages advanced machine learning models to help users understand their cancer lab reports, providing intelligent medicine suggestions and comprehensive cancer metadata. The platform uses OpenAI's GPT models for natural language processing and custom-trained AI models for medical report analysis, making cancer information more accessible and understandable.",
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
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: cancer_copilot,
    repo: "",
    demo: "https://cancer-copilot.ai/",
  },
  {
    id: "lookseas",
    name: "Lookseas",
    description:
      "It is a dynamic digital marketplace for survey and inspection documents.",
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
    image: lookseas,
    repo: "",
    demo: "https://lookseas.com/",
  },
  {
    id: "walledgardens",
    name: "Walled Gardens",
    description:
      "Walled Gardens is a versatile platform empowering users to curate, monetize, and share their educational and artistic content in diverse formats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
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
    image: walledgarden,
    repo: "",
    demo: "https://walledgardens.ai/",
  },
  {
    id: "my_inspection_center",
    name: "Inspection Center",
    description: `We provide you a tool to create a new House as well as new Boat Inspection for you. Register with us to look into all Inspections that are requested by our Users and can place your bids there.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: inspection_center,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://my-inspection-center.vercel.app/",
  },
];

const education = [
  {
    title: "Post Graduate",
    company_name: "Loyalist College In Toronto",
    icon: loyalistCollege,
    iconBg: "#333333",
    date: "May 2024 - Present",
  },
  {
    title: "Bachelors in Technology",
    company_name: "Dronacharya College of Engineering",
    icon: dce,
    iconBg: "#333333",
    date: "June 2017 - Aug 2021",
  },
];

export { services, technologies, experiences, projects, education };
