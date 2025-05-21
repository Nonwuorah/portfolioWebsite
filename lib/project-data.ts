export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured?: boolean;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart, and secure checkout.",
    image:
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image:
      "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://nedtask.netlify.app/",
    githubUrl: "https://github.com/Nonwuorah/to-doApplication.git",
    category: "web",
    featured: true,
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "An analytics dashboard for tracking financial data and visualizing trends.",
    image:
      "https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Chart.js", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    category: "mobile",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills with a modern design.",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://myportfolio-nedu.netlify.app/",
    githubUrl: "https://github.com/Nonwuorah/portfolio2.0.git",
    category: "design",
  },
  {
    id: 5,
    title: "Travel Blog",
    description:
      "A blog platform for sharing travel experiences with a rich content editor.",
    image:
      "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Contentful", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "A weather application providing forecasts and current conditions for locations worldwide.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "OpenWeather API", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "#",
    category: "mobile",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills with a modern design.",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["HTML5", "CSS3", "Framer Motion"],
    liveUrl: "https://myportfolio-nedu.netlify.app/",
    githubUrl: "https://github.com/Nonwuorah/portfolio2.0.git",
    category: "design",
  },
  {
    id: 8,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart, and secure checkout.",
    image:
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["HTML5", "Valina.js", "Bootstrap CSS"],
    liveUrl: "https://nonwuorah.github.io/oasisCouture-EcommerceStore/",
    githubUrl: "https://github.com/Nonwuorah/oasisCouture-EcommerceStore.git",
    category: "web",
    featured: true,
  },
  {
    id: 9,
    title: "Travel Agency",
    description:
      "A travel agency platform for sharing travel destinations, tour packages, experiences with a rich warm hospitality.",
    image:
      "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Vanilla.js", "HTML5", "Bootstrap CSS"],
    liveUrl: "https://nonwuorah.github.io/travelAgencyPage/",
    githubUrl: "https://github.com/Nonwuorah/travelAgencyPage.git",
    category: "web",
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projectData.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') {
    return projectData;
  }
  return projectData.filter(project => project.category === category);
};

export const getProjectById = (id: number): Project | undefined => {
  return projectData.find(project => project.id === id);
};