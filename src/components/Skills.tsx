
import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'languages', label: 'Programming Languages' },
  { id: 'frameworks', label: 'Frameworks & Libraries' },
  { id: 'hardware', label: 'Hardware & Systems' },
  { id: 'tools', label: 'Tools & Software' },
];

const skills = [
  { name: 'C/C++', category: 'languages', level: 90 },
  { name: 'Python', category: 'languages', level: 85 },
  { name: 'JavaScript', category: 'languages', level: 80 },
  { name: 'TypeScript', category: 'languages', level: 75 },
  { name: 'Java', category: 'languages', level: 70 },
  { name: 'VHDL', category: 'languages', level: 65 },
  { name: 'Assembly', category: 'languages', level: 60 },
  
  { name: 'React', category: 'frameworks', level: 85 },
  { name: 'Node.js', category: 'frameworks', level: 80 },
  { name: 'TensorFlow', category: 'frameworks', level: 70 },
  { name: 'Express.js', category: 'frameworks', level: 75 },
  { name: 'PyTorch', category: 'frameworks', level: 65 },
  
  { name: 'Microcontroller Programming', category: 'hardware', level: 90 },
  { name: 'FPGA Development', category: 'hardware', level: 80 },
  { name: 'PCB Design', category: 'hardware', level: 75 },
  { name: 'Embedded Systems', category: 'hardware', level: 85 },
  { name: 'Digital Signal Processing', category: 'hardware', level: 70 },
  { name: 'IoT Architecture', category: 'hardware', level: 80 },
  
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'Docker', category: 'tools', level: 80 },
  { name: 'Kubernetes', category: 'tools', level: 70 },
  { name: 'LTSpice', category: 'tools', level: 75 },
  { name: 'Xilinx Vivado', category: 'tools', level: 80 },
  { name: 'Altium Designer', category: 'tools', level: 65 },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading">
            My expertise across programming languages, hardware design, and engineering tools
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-background hover:bg-background/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%`, transitionDelay: `${index * 50}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
