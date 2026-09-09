/**
 * Static site content — the parts of the homepage that are not the projects
 * grid. Edit these values to update the About / Skills / Experience /
 * Certifications / Education / Contact sections.
 *
 * (Projects live in lib/projects.ts and, from build-plan step 3 onward, in
 * the Supabase database.)
 */
import type { ContactType } from "./types";

export const profile = {
  name: "Mohamed Shamik",
  kicker: "SINGAPORE INSTITUTE OF TECHNOLOGY · SOFTWARE ENGINEER",
  tagline:
    "I'm a Software Engineer who builds end-to-end systems. From architecting data pipelines and training deep-learning models to crafting seamless, AI-driven user experiences, I solve complex problems across the entire stack.",
  openToWork: true,
  openToWorkText:
    "Open to work — internships & graduate roles",
  /** Drop the file at public/resume.pdf for this link to resolve. */
  resumeUrl: "/resume.pdf",

  /**
   * Hero images. Put the files in the `public/` folder and point these at
   * them, e.g. "/banner.jpg" and "/headshot.jpg". Leave "" to show the
   * wireframe placeholder box instead.
   *   - banner: wide, roughly 2400×700
   *   - headshot: portrait, roughly 800×1000
   */
  bannerUrl: "/banner.png",
  headshotUrl: "/headshot.jpg",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const ticker = [
  "PyTorch",
  "U-Net",
  "CNN",
  "AWS",
  "Docker",
  "React",
  "FastAPI",
  "SQL",
  "Python",
  "Git",
  "Streamlit",
  "OpenCV",
];

export const aboutParagraphs = [
  "I'm an ICT (Software Engineering) undergraduate at the Singapore Institute of Technology. Most of my time goes into machine learning — convolutional networks, image restoration, and the unglamorous work of getting data clean enough to train on.",
  "Outside of models, I build the systems around them: APIs, cloud deployments, and front-ends that make a model usable by someone who has never opened a notebook.",
  "Looking for internship and graduate roles in machine learning engineering, cloud, or full-stack development.",
];

export const skillGroups = [
  { name: "Programming", items: ["Python", "Java", "JavaScript", "SQL"] },
  { name: "AI / ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "NumPy / Pandas"] },
  { name: "Cloud / DevOps", items: ["AWS", "Vercel", "GitHub Actions CI/CD", "Nginx"] },
  { name: "Web / Full-stack", items: ["React", "Next.js", "FastAPI", "Streamlit", "SQL"] },
  { name: "Tools / Platforms", items: ["Git", "Docker", "VS Code", "Jupyter", "SQL"] },
];

export const experience = [
  {
    dates: "Dec 2021 — Apr 2022",
    duration: "4 months",
    role: "IT Support & Web Developer",
    kind: "Internship",
    org: "Zicom Holdings Pte Ltd",
    desc: "Worked on a React and FastAPI service, added CI checks to the deployment pipeline, and moved batch jobs onto containerised workers.",
  },
];

export const certifications = [
  {
    dates: "Issued Feb 2026",
    duration: "Valid 3 years",
    role: "AWS Certified Cloud Practitioner",
    kind: "Foundational",
    org: "Amazon Web Services · Credential ID placeholder",
    desc: "Core AWS services, billing and the shared responsibility model.",
  },
  {
    dates: "Issued Nov 2025",
    duration: "No expiry",
    role: "Certification name",
    kind: "Associate",
    org: "Issuing body · Credential ID placeholder",
    desc: "One line on what the certification covers.",
  },
];

export const education = [
  {
    current: true,
    badge: "Degree",
    dates: "2024 — 2028",
    degree:
      "BEng (Hons) Information & Communications Technology — Software Engineering",
    school: "Singapore Institute of Technology",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Cloud Computing",
      "Software Engineering",
      "Databases",
    ],
  },
  {
    current: false,
    badge: "Diploma",
    dates: "2019 - 2022",
    degree: "Diploma In Infocomm & Security",
    school: "Nanyang Polytechnic",
    coursework: ["Network Designing", "Databases", "Web Development", "Data Structure & Algorithms"],
  },
];

export const contacts: {
  label: string;
  value: string;
  href: string;
  type: ContactType;
}[] = [
  {
    label: "Email",
    value: "mdshamik@outlook.com",
    href: "mailto:mdshamik@outlook.com",
    type: "email",
  },
  {
    label: "GitHub",
    value: "github.com/Mohdshamik11",
    href: "https://github.com/Mohdshamik11",
    type: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamedshamik",
    href: "https://www.linkedin.com/in/mohamedshamik/",
    type: "linkedin",
  },
];
