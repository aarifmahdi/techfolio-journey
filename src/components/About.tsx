
import { Cpu, Server, Code, Lock } from 'lucide-react';

const specializations = [
  {
    title: 'Hardware Design',
    description: 'Creating efficient and powerful computing systems with a focus on performance and reliability.',
    icon: Cpu,
  },
  {
    title: 'System Architecture',
    description: 'Designing scalable architectures that seamlessly integrate hardware and software components.',
    icon: Server,
  },
  {
    title: 'Software Development',
    description: 'Building robust applications using modern programming languages and frameworks.',
    icon: Code,
  },
  {
    title: 'Cybersecurity',
    description: 'Implementing secure systems to protect against vulnerabilities and threats.',
    icon: Lock,
  },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="text-center mb-16">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">
          Computer Engineer with a passion for innovation and problem-solving
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I am a dedicated Computer Engineer with a strong foundation in both hardware and software technologies. 
              My expertise spans across system architecture, embedded systems, software development, and networking.
            </p>
            <p>
              Throughout my career, I've worked on complex projects that required innovative thinking and technical precision. 
              I thrive in collaborative environments where I can contribute my unique blend of hardware knowledge and 
              software development skills.
            </p>
            <p>
              My approach combines analytical thinking with creative problem-solving, allowing me to develop 
              elegant solutions to challenging engineering problems.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll">
          {specializations.map((specialization, index) => (
            <div 
              key={specialization.title}
              className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <specialization.icon className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">{specialization.title}</h4>
              <p className="text-sm text-muted-foreground">{specialization.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
