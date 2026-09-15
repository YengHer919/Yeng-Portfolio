// Data Interfaces
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Full Stack' | 'Backend' | 'Web Apps';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

// TODO: Fill in your personal bio, projects, skills, and work experience data below
export const PORTFOLIO_DATA = {
  personal: {
    name: "Yeng Her",
    title: "Software Engineer",
    status: "Open to new opportunities",
    bio: "TODO: Write your personal introduction bio here.",
    location: "United States",
    email: "your.email@example.com",
    github: "https://github.com/YengHer919",
    linkedin: "https://linkedin.com/in/your-profile",
    stats: [
      // TODO: Add your custom stats (e.g. Years Experience, Projects Completed)
      { label: "Years Experience", value: "3+" },
      { label: "Projects Completed", value: "10+" },
    ]
  },

  skillCategories: [
    // TODO: Define your skill categories and items
    {
      title: "Frontend Engineering",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "React", level: 90 },
      ]
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", level: 85 },
      ]
    }
  ] as SkillCategory[],

  projects: [
    // TODO: Add your portfolio projects here
    {
      id: "project-1",
      title: "Sample Project Title",
      shortDescription: "TODO: Add a short summary of your project.",
      fullDescription: "TODO: Add a detailed explanation of your project architecture and goals.",
      category: "Full Stack",
      tags: ["TypeScript", "React"],
      githubUrl: "https://github.com/YengHer919",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "TODO: Add key feature bullet point 1",
        "TODO: Add key feature bullet point 2"
      ]
    }
  ] as Project[],

  experience: [
    // TODO: Add your work experience items here
    {
      period: "2023 - Present",
      role: "Software Engineer",
      company: "Company Name",
      description: "TODO: Describe your responsibilities and accomplishments.",
      tech: ["TypeScript", "React", "Node.js"]
    }
  ] as ExperienceItem[]
};
