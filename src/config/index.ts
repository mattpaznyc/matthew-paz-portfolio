import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Matthew Paz — Data Analyst & Data Scientist",
  author: "Matthew Paz",
  description:
    "Data Analyst and Data Scientist based in New York City. I specialize in statistical analysis, data visualization, and machine learning to extract insights and drive business decisions.",
  lang: "en",
  siteLogo: "/matthew-small.png",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/matthew-paz/" },
    { text: "Github", href: "https://github.com/mattpaznyc" },
    { text: "Email", href: "mailto:paz.matthew@me.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://mattpaznyc.github.io/matthewp",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Matthew Paz",
    specialty: "Data Analyst & Data Scientist",
    summary:
      "Data professional based in New York City with a Master’s in Business Analytics with a concentration in Data Analytics. I specialize in data visualization, statistical modeling, and machine learning to uncover insights and support data-driven decisions.",
    email: "paz.matthew@me.com",
  },

  // Projects now appear first
  projects: [
    {
      name: "Amazon Review Analysis",
      summary:
        "Analyzed over 200,000 Amazon reviews using Python and NLP to classify verified vs. unverified purchases. Applied machine learning and sentiment analysis techniques to uncover behavioral patterns and product perception insights.",
      linkPreview: "https://github.com/mattpaznyc/review-trust-nlp",
      linkSource: "https://github.com/mattpaznyc/review-trust-nlp",
      image: "/project-amazon.png",
    },
    {
      name: "Airbnb Analytics Dashboard",
      summary:
        "Developed an interactive dashboard with Streamlit and Plotly to visualize pricing trends, occupancy rates, and neighborhood data. Demonstrated skills in data cleaning, exploratory analysis, and visualization for decision support.",
      linkPreview: "https://nyc-airbnb-dashboard.streamlit.app",
      linkSource: "https://nyc-airbnb-dashboard.streamlit.app",
      image: "/airbnb-dashboard.png",
    },
    {
    name: "Marketing Binary Classification Project",
    summary:
      "Built and evaluated binary classification models in R to predict whether consumers would accept or decline marketing offers. Conducted EDA, feature engineering, and model evaluation using precision as the key metric.",
    linkPreview: "https://github.com/mattpaznyc/Marketing-Classification-ML",
    linkSource: "https://github.com/mattpaznyc/Marketing-Classification-ML",
    image: "/project-marketing.png",
  },
  ],

  experience: [
    {
      company: "City University of New York, Baruch College",
      position: "Graduate Teaching Assistant",
      startDate: "Aug 2024",
      endDate: "Jan 2025",
      summary: [
        "Assisted instruction in Database Management Systems and Big Data Technologies, focusing on SQL, PySpark, and data modeling.",
        "Supported students with hands-on data projects, strengthening their analytical and programming skills.",
        "Enhanced instructional materials with applied examples in distributed data processing and visualization.",
      ],
    },
    {
      company: "Tayside Group",
      position: "Researcher — Executive Search",
      startDate: "Nov 2021",
      endDate: "Apr 2023",
      summary: [
        "Conducted market research using quantitative and qualitative data to support senior-level recruitment projects.",
        "Leveraged CRM and LinkedIn data to identify candidate trends and optimize sourcing strategies.",
        "Collaborated with leadership to deliver data-informed insights that improved client placement outcomes.",
      ],
    },
    {
      company: "Valent, Inc",
      position: "Recruiting Coordinator",
      startDate: "Aug 2019",
      endDate: "Nov 2021",
      summary: [
        "Conducted market research using quantitative and qualitative data to support senior-level recruitment projects.",
        "Leveraged CRM and LinkedIn data to identify candidate trends and optimize sourcing strategies.",
        "Collaborated with leadership to deliver data-informed insights that improved client placement outcomes.",
      ],
    },
  ],

  education: [
  {
    institution: "CUNY Baruch College, Zicklin School of Business",
    degree: "Master of Science in Business Analytics",
    year: "2024",
    details: [
      "Focused on predictive modeling, data visualization, and big data technologies.",
      "Completed projects in natural language processing, feature engineering, and dashboard design using Python and Power BI.",
    ],
  },
  {
    institution: "CUNY Queens College",
    degree: "Bachelor of Arts in Sociology",
    year: "2019",
    details: [
      "Developed a strong foundation in research methods, quantitative analysis, and behavioral interpretation.",
      "Explored the intersection of social science and data to understand real-world patterns.",
    ],
  },
],

  about: {
    description: `
      Hi, I’m Matthew Paz — a data analyst and data scientist with a passion for transforming complex datasets into meaningful insights. I enjoy exploring how data can explain human behavior, optimize decision-making, and tell stories that matter.

      With a strong technical foundation in Python, R, SQL, Power BI, Tableau, and Excel, I’ve worked on projects involving text classification, predictive modeling, and interactive dashboards. My background in sociology complements my analytical work by grounding my approach in real-world context and interpretation.

      I’m currently based in New York City and always eager to connect with professionals who share an interest in data analytics, visualization, and applied machine learning.
    `,
    image: "/matthew-big.png",
  },
};
