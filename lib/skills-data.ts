export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 75 },
      { name: "Vue.js", level: 70 },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "GraphQL", level: 72 },
      { name: "Python", level: 65 },
      { name: "Django", level: 60 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Jest", level: 78 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 65 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    id: "design",
    name: "Design",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Photoshop", level: 70 },
      { name: "Illustrator", level: 65 },
      { name: "UI/UX Design", level: 78 },
    ],
  },
];

export const getAllSkills = (): Skill[] => {
  return skillsData.flatMap(category => category.skills);
};

export const getSkillsByCategory = (categoryId: string): Skill[] => {
  const category = skillsData.find(cat => cat.id === categoryId);
  return category ? category.skills : [];
};

export const getTopSkills = (count: number = 5): Skill[] => {
  return getAllSkills()
    .sort((a, b) => b.level - a.level)
    .slice(0, count);
};