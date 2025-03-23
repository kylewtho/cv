import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { WebIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { link } from "fs";

export const RESUME_DATA = {
  name: "Kyle Ho",
  initials: "KH",
  location: "Sydney, Australia, AEST",
  locationLink: "https://www.google.com/maps/place/Sydney",
  about:
    "Software Engineer | Cybersecurity | Project Manager",
  summary:
    "As a Full Stack Engineer & Cybersecurity Student, I blend a deep technical skill set with a passion for secure, scalable solutions. With a background as an IT Project Manager and a journalist, I bring a unique perspective to every project - whether it's crafting robust code, designing secure infrastructures, or leading teams to deliver innovative technology solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/55761838?v=4",
  personalWebsiteUrl: "https://kyleho.net",
  contact: {
    email: "hello@kyleho.net",
    tel: "+61402822250",
    social: [
      {
        name: "Website",
        url: "https://kyleho.net",
        icon: WebIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/kylewtho",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kylewtho",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kylewtho",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of New South Wales",
      degree: "MSc Information Technology / Cyber Security Engineering",
      start: "09/2023",
      end: "12/2025",
      description: "Distiction; Elected as Student Representative",
    },
    {
      school: "Goldsmiths, University of London",
      degree: "MA Promotional Media: Public Relations, Advertising and Marketing",
      start: "09/2018",
      end: "09/2019",
      description: "Graduate with Merit; Student Representative",
    },
    {
      school: "Fu Jen Catholic University",
      degree: "BA Journalism & Communication Studies / BA Japanese Langauge & Literature",
      start: "09/2013",
      end: "07/2017",
      description: "Academic Excellence Rewards & Scholarships; SA Director & Course Representative",
    },
  ],
  volunteering: [
    {
      organisation: "Rural Fire Service (Schofields Rural Fire Brigade)",
      start: "02/2025",
      end: "Present",
    },
    {
      organisation: "St John Ambulance NSW - Responder",
      start: "02/2024",
      end: "Present",
    },
    {
      organisation: "UNSW/MHFA Australia - Mental Health First Aider",
      start: "07/2024",
      end: "Present",
    },
    {
      organisation: "UNSW Student Health Advisory Committee",
      start: "03/2024",
      end: "Present",
    },
    {
      organisation: "UNSW Student Health & Wellbeing - Senior Amabassador",
      start: "02/2024",
      end: "Present",
    },
    {
      organisation: "UNSW/Computer Science & Engineering Society - Mentor",
      start: "02/2024",
      end: "Present",
    },
  ],
  work: [
    {
      company: "University of New South Wales",
      link: "https://www.unsw.edu.au",
      badges: ["Casual", "Scheduled"],
      title: "Casual Academic - Project Management",
      start: "Starting 09/2025",
      description:
        "Scheduled role demonstrating for GSOE9820 Engineering Project Management (Term 3)",
    },
    {
      company: "University of New South Wales",
      link: "https://www.unsw.edu.au",
      badges: ["Casual"],
      title: "Workshop Assistant / Facilitator",
      start: "02/2024",
      end: "Present",
      description:
        "Hosting and Assisting in workshops for students in students' development and wellbeing",
    },
    {
      company: "Ying Ju Technology",
      link: "http://in853.net",
      badges: ["Full-time"],
      title: "IT Project Manager",
      start: "08/2021",
      end: "08/2023",
      description:
        "Managed development projects including ERP system, web design and game development; Functioned as the primary coordinator, fostering collaboration among teams and clients; Developed and implemented project plans and strategies for SaaS products",
    },
    {
      company: "November Games",
      badges: ["Contract", "Remote"],
      title: "Project Operation Specialist",
      start: "09/2021",
      end: "01/2022",
      description:
        "Organised and implemented campaigns to engage and retain players from global markets; Analysed and reported on statistical performance metrics to enhance promotional strategies",
    },
    {
      company: "Galaxy Entertainment Group",
      link: "https://www.galaxyentertainment.com",
      badges: ["Full-time"],
      title: "Editor, Media Relations - Public Relations",
      start: "02/2020",
      end: "08/2021",
      description:
        "Wrote bilingual PR materials, incl. press releases, advertorials and executive speeches; Liaised with local/overseas media, PR agencies and company subsidiaries",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Python",
    "Java",
    "C",
    "PHP",
    "SQL",
    "Burp Suite",
    "Wireshark",
    "Nmap",
    "Snort",
    "Cloud Computing (AWS, GCP)",
    "Agile/Scrum",
  ],
  projects: [
    {
      title: "Security Testing Project",
      techStack: [
        "Industry Project",
        "Team Leaer",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Report Writing",
      ],
      description: "A comprehensive security testing project for Pearler, an Australian startup, for COMP6841 Extended Security Engineering & Cyber Security. Achieved excellent result (93/100)",
      link: {
        label: "pearler.com",
        href: "https://pearler.com/",
      },
    },
    {
      title: "Professional Project",
      techStack: [
        "Professional Development",
        "AI",
        "Environment Sustainability",
        "Report Writing",
        "Public Speaking",
      ],
      description: "An analysis focusing on AI and Environmental Sustainability with UNSW Finance System team. Interviewed industry professionals and conducted research to provide insights",
    },
    {
      title: "Industry Research Project",
      techStack: [
        "Industry Project",
        "Team Leaer",
        "Strategic Research",
        "Market Analysis",
        "Report Writing",
      ],
      description: "A strategic market research project for an Australian client in tourism industry. Conducted research, analysed data and provided recommendations",
    },
  ],
} as const;
