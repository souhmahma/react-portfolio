const settings = {
  isSplash: false, 
};

//SEO Related settings
const seo = {
  title: "Souhail's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Souhail HMAHMA Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Souhail Hmahma",
  logo_name: "SouhailHmahma",
  nickname: "Full Stack Developer",
  subTitle:
    "Full Stack Developer passionate about modern web applications and artificial intelligence. I design robust and scalable solutions combining performance, clean code, and intelligent data processing.",
  resumeLink:
    "https://drive.google.com/file/d/16wia-t7stoPE43VKSCXKZz5i_ayrXAdM/view?usp=sharing",
  portfolio_repository: "https://github.com/souhmahma/react-portfolio",
  githubProfile: "https://github.com/souhmahma",
};
const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/souhmahma",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/souhail-hmahma/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:souhailhmahma@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Python & Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building robust and scalable REST APIs using Django, FastAPI, and Flask",
        "⚡ Implementing secure Authentication & Authorization (JWT, OAuth2, Knox)",
        "⚡ Designing secure backend architectures and cloud-ready infrastructures",
        "⚡ Database management, performance optimization, and API integration",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
      ],
    },
    {
      title: "Frontend Development",
      fileName: "FrontImg",
      skills: [
        "⚡ Building modern and responsive user interfaces using React",
        "⚡ Integrating frontend with backend APIs",
        "⚡ Creating clean and user-friendly web applications",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
      ],
    },
    {
      title: "Artificial Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing Machine Learning and Deep Learning models",
        "⚡ Using LLMs and NLP for data extraction and classification",
        "⚡ Anomaly detection and data analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying applications on AWS, GCP, and Azure",
        "⚡ Containerization using Docker",
        "⚡ Testing, CI/CD pipelines, and environment management",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
      ],
    },
    {
      title: "Cybersecurity",
      fileName: "CyberImg",
      skills: [
        "⚡ Securing web applications and APIs (authentication, authorization, secure access)",
        "⚡ Understanding of common vulnerabilities (OWASP Top 10)",
        "⚡ Implementing secure coding practices and data protection",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
        {
          skillName: "Security",
          fontAwesomeClassname: "simple-icons:shield",
          style: { color: "#4CAF50" },
        },
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "INSA Centre Val de Loire",
      subtitle: "Engineering Degree in Computer Security and Information Technologies",
      logo_path: "insa_logo.png",
      alt_name: "Insa CVL",
      duration: "2020 - 2025",
      descriptions: [
        "⚡ Engineering program in computer science with a specialization in cybersecurity and software development",
        "⚡ Projects in artificial intelligence, web development, and software architecture",
      ],
      website_link: "https://www.insa-centrevaldeloire.fr/en",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Meta Full Stack Developer: Front-End & Back-End from Scratch",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/3b5b43e01e383d8ba08337cbe051cbee",
      alt_name: "META",
      color_code: "#1fc1bc",
    },
    {
      title: "Meta Back-End Developer",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/6f7cde054e1ee191205d547d14ffd7f5",
      alt_name: "META",
      color_code: "#1fc1bc",
    },{
      title: "Agile with Atlassian Jira",
      subtitle: "",
      logo_path: "jira_logo.png",
      certificate_link:
        "https://coursera.org/share/8a7eefe76f4b56d2617b877bfc8b0f42",
      alt_name: "JIRA",
      color_code: "#1f70c1",
    },
    {
      title: "IBM AI Professional Certificate",
      subtitle: "",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/7cad0ea200ae3e5b3ab362caa14c2c06",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Deep Learning",
      subtitle: "",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/3d3a86d67138fd1f5fa6e3d5baf16922",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "AWS Fundamentals",
      subtitle: "",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://coursera.org/share/1bf924167ca1a18201e711bcedb94996",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Cybersecurity Professional Certificate",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/72d737c44359f2d06da46b98433cb5cc",
      alt_name: "IBM",
      color_code: "#1F70C199",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships",
  description:
    "Experience in backend, full-stack, and artificial intelligence development with deployment of complete solutions",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Backend & AI Developer (Python)",
          company: "CEA LIST",
          company_url: "https://list.cea.fr/en/",
          logo_path: "cea_logo.png",
          duration: "March 2025 - September 2025",
          location: "Paris",
          description: "Built a REST Api for resource management and file sharing, implementing secure backend logic, integrating a deep learning model for abuse detection, with deployment, testing, and endpoint documentation using Python, FastAPI, Pydantic, pytest, JavaScript, Deep Learning, and Docker.",
          color: "#000000",
        },
        {
          title: "Full Stack Developer (Python / React)",
          company: "LOGIGROUP",
          company_url: "https://www.logigroup.com/en-fr",
          logo_path: "logigroup.png",
          duration: "April 2024 - August 2024",
          location: "Paris",
          description: "Enhanced company web platform with React, Tailwind CSS, Python, Django, DRF, LLM, and GCP, integrating APIs, automating CV data extraction, and deploying cloud-tested solutions.",
          color: "#0879bf",
        },
        {
          title: "Intern",
          company: "RATP",
          company_url: "https://www.ratp.fr/",
          logo_path: "ratp_logo.png",
          duration: "July 2021",
          location: "Paris",
          description:
            "Explored various software used to identify RATP equipment and added new parts to the company's database.",
          color: "#9b1578",
        }
      ],
    }
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I mainly work with Python to build projects in web development, artificial intelligence, and cybersecurity. I use modern tools and frameworks to design efficient, scalable solutions, and I have experience deploying applications on cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "If you’re working on a Python project related to web, AI, or cybersecurity, feel free to reach out. I’m available on almost every social media platform and usually reply within 24 hours.",
  },
  blogSection: {
   
  },
  addressSection: {
    title: "Address",
    subtitle: "7 rue René Robert Cavelier de la salle 91300 Massy",
    locality: "Massy",
    country: "France",
    region: "Essone",
    postalCode: "91300",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Ueb7Q6ys5L4h7vBs6",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "0767058828",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
