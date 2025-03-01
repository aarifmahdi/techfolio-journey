
import { useState } from 'react';
import ProjectCard from './ui/ProjectCard';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'embedded', label: 'Embedded Systems' },
  { id: 'software', label: 'Software' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'ai', label: 'AI & Machine Learning' },
];

const projects = [
  {
    id: 1,
    title: 'IoT Smart Home System',
    description: 'A complete IoT solution for home automation, including hardware sensors, microcontroller programming, and a React dashboard.',
    tags: ['IoT', 'C++', 'React', 'Hardware'],
    imageSrc: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1600&q=80',
    projectUrl: '#',
    githubUrl: '#',
    category: 'embedded',
    isHighlighted: true,
  },
  {
    id: 2,
    title: 'FPGA-Based Image Processor',
    description: 'A hardware accelerated image processing system implemented on FPGA with real-time capabilities.',
    tags: ['VHDL', 'FPGA', 'DSP', 'Computer Vision'],
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    projectUrl: '#',
    githubUrl: '#',
    category: 'hardware',
  },
  {
    id: 3,
    title: 'Neural Network Accelerator',
    description: 'Custom hardware architecture for accelerating neural network inference with optimized energy consumption.',
    tags: ['Deep Learning', 'Hardware', 'ASIC', 'System Architecture'],
    imageSrc: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1600&q=80',
    projectUrl: '#',
    githubUrl: '#',
    category: 'ai',
  },
  {
    id: 4,
    title: 'Real-time Operating System',
    description: 'A lightweight RTOS designed for resource-constrained embedded systems with deterministic behavior.',
    tags: ['C', 'RTOS', 'Embedded', 'Low-level'],
    imageSrc: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&q=80',
    projectUrl: '#',
    githubUrl: '#',
    category: 'software',
  },
  {
    id: 5,
    title: 'Autonomous Drone Control System',
    description: 'End-to-end system for autonomous drone navigation using computer vision and sensor fusion algorithms.',
    tags: ['Robotics', 'Python', 'Computer Vision', 'Control Systems'],
    imageSrc: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1600&q=80',
    projectUrl: '#',
    githubUrl: '#',
    category: 'embedded',
  },
  {
    id: 6,
    title: 'Cybersecurity Vulnerability Scanner',
    description: 'Advanced tool for identifying security vulnerabilities in networked embedded systems and IoT devices.',
    tags: ['Security', 'Python', 'Networking', 'Penetration Testing'],
    imageSrc: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80',
    projectUrl: '#',
    githubUrl: '#',
    category: 'software',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-wrapper">
      <div className="text-center mb-16">
        <h2 className="section-heading">My Projects</h2>
        <p className="section-subheading">
          Explore my portfolio of hardware and software engineering projects
        </p>
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category.id
                ? "bg-primary text-white"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className={cn(
              project.isHighlighted && "md:col-span-2"
            )}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageSrc={project.imageSrc}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
              isHighlighted={project.isHighlighted}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
