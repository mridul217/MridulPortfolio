
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaYoutube, FaProductHunt } from 'react-icons/fa';

export const personalInfo = {
    name: "Mridul Sharma",
    title: "Software Engineer",
    email: "sharma.mridul217@gmail.com",
    location: "India",
    phone: "+91-8126026826",
    about: "Software Engineer with 4+ years of experience building scalable systems and intelligent products for the web.",
    social: [
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://linkedin.com/in/mridul217",
        },
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/mridul217",
        },
        {
            name: "YouTube",
            icon: FaYoutube,
            url: "https://www.youtube.com/@MridulsAIForge",
        },
        {
            name: "Product Hunt",
            icon: FaProductHunt,
            url: "https://www.producthunt.com/@mridul21",
        },
    ],
};

export const education = [
    {
        institution: "Graphic Era University",
        location: "Dehradun, Uttarakhand",
        degree: "B.Tech Computer Science 9.3 CGPA",
        year: "Graduated - 2022", // Year not explicitly in snippet, usually 2022 based on internship dates
    },
];

export const experience = [
    {
        company: "Apica (LogiqAI)",
        role: "Full Stack Engineer AI/ML",
        period: "Nov 2023 - Present",
        location: "Bengaluru",
        description: "Apica Ascent Data Monitoring and Observability Product.",
        achievements: [
            "Building personal projects focused on autonomous AI agents using OpenAI APIs, LangChain, and vector stores.",
            "Designed and implemented an end-to-end Audit Log Trail feature, utilizing ReactJS with TypeScript on the frontend and Go on the backend.",
            "Integrated Swagger documentation in Flask-RESTX framework and documented 100+ endpoints.",
            "Improved moving average performance by 99.9%.",
            "Developed proxy API for AI search and Integrated in the platform to search across documentation using NLP.",
            "Integrated a ChatGPT bot into the logs table to explain errors and suggest solutions.",
            "Developed backend APIs (Flask) for alerts, dashboards, and queries.",
            "Developed a bookmark time range feature on the platform to make timestamp reuse easier.",
            "Engineered React components for pattern comparison, bookmarks, and table interactions.",
        ],
    },
    {
        company: "EpochsAI",
        role: "Software Engineer",
        period: "June 2022 - Oct 2023",
        location: "Hyderabad",
        description: "Developed backend infrastructure for AI-powered products.",
        achievements: [
            "Developed backend infrastructure for AI-powered products, including a QR code generator, image stitching app, and ChatGPT-based chatbot (Fusion-AI).",
            "Implemented and fine-tuned Generative AI models (Stable Diffusion), and integrated MLFlow into PyCaret pipelines.",
            "Built data processing tools and scripts (Python) for creating training-ready annotation files from JSON and DICOM medical images.",
            "Designed and developed MedShare web app (Next.js) and mobile AI tools using React Native.",
            "Mentored intern during fullstack development of AI applications.",
            "Automated Docker service execution to streamline deployment processes.",
        ],
    },
    {
        company: "Cognizant",
        role: "Internship Programmer Analyst Trainee",
        period: "Jan 2022 - May 2022",
        location: "Coimbatore",
        description: "Developed automation test cases using Selenium + Java; learned core web dev foundations.",
        achievements: [],
    },
    {
        company: "Hackercode",
        role: "Intern",
        period: "Dec 2020 - Jan 2021",
        location: "Dehradun",
        description: "Image to text conversion using OpenCV.",
        achievements: ["Converted image text to actual text using OpenCV and provided synonyms and antonyms."],
    },
    {
        company: "ONGC",
        role: "Intern",
        period: "Aug 2020 - Sept 2020",
        location: "Dehradun",
        description: "Bookstore website frontend development.",
        achievements: ["Online platform with categorized books available for purchase. Worked on frontend part."],
    },
];

export const projects = [
    {
        name: "RefineCV - JD Matcher",
        description: "Contributed to a project for tailoring resumes with Job Descriptions.",
        link: "https://refinecv.netlify.app/",
        tech: ["Web", "AI", "Resume"],
    },
    {
        name: "PromptHub Extension",
        description: "Chrome extension for prompt management.",
        link: "https://sites.google.com/view/prompthub21/",
        tech: ["Extension", "Web"],
    },
    {
        name: "Mantra Counter App",
        description: "A digital mantra counter application.",
        link: "https://youtube.com/shorts/P4GkIlNuJo8?si=iWUeDAbCNAzMbiPG",
        tech: ["App", "Utility"],
    },
    {
        name: "csv2api",
        description: "Python package to convert CSV to API.",
        link: "https://pypi.org/project/csv2api/",
        tech: ["Python", "PyPi"],
    },
    {
        name: "who-edited",
        description: "Tool to track changes.",
        link: "https://github.com/mridul217/who-edited",
        tech: ["Python", "Git"],
    },
    {
        name: "Stock analyzer using AI agents",
        description: "Analyzing stocks using AI agents.",
        link: "https://github.com/mridul217/",
        tech: ["AI", "Python"],
    },

    {
        name: "BeyondBooks",
        description: "Educational platform and blogs.",
        link: "https://sites.google.com/view/beyondbooks1",
        tech: ["Web", "Content"],
    },
];

export const researchPapers = [
    {
        title: "Regression Analysis and Future Forecasting of COVID-19 Using Machine Learning Algorithms",
        link: "https://ieeexplore.ieee.org/document/9377065",
        publisher: "IEEE",
        description: "Analyzed and forecasted COVID-19 trends using various regression models to aid in future planning and resource allocation.",
    },
    {
        title: "IoT-Based Automated Health Care Monitoring System for Smart City",
        link: "https://ieeexplore.ieee.org/document/9418487",
        publisher: "IEEE",
        description: "Proposed an automated healthcare system leveraging IoT for smart cities to monitor patient health in real-time.",
    }
];

export const skills = {
    languages: ["Python", "JavaScript", "TypeScript", "C++/C", "Java", "Go"],
    libraries: ["Generative AI models", "LLMs", "Numpy", "Pandas", "Sklearn", "MLflow"],
    frameworks: ["FastAPI", "Flask", "Django", "Node.js", "React.js", "Next.js", "React Native"],
    databases: ["MySQL", "SQLAlchemy", "PostgresSQL", "Prometheus"],
    tools: ["Docker", "Kubernetes", "Linux/Unix", "Git"],
    ai_ml: [
        "Langchain",
        "Streamlit",
        "Huggingface",
        "OpenAI",
        "Automatic1111",
        "Stable Diffusion",
        "ComfyUI",]
};
