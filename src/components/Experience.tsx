
import { Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    type: 'work',
    title: 'Senior Computer Engineer',
    organization: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Leading the development of next-generation embedded systems for industrial applications. Designing hardware architectures and integrating with software systems.',
  },
  {
    type: 'education',
    title: 'MSc in Computer Engineering',
    organization: 'University of Technology',
    period: '2019 - 2021',
    description: 'Specialized in advanced computer architecture and embedded systems. Thesis on energy-efficient computing for IoT applications.',
  },
  {
    type: 'work',
    title: 'Computer Engineering Specialist',
    organization: 'InnovateSys Solutions',
    period: '2017 - 2021',
    description: 'Designed and implemented embedded systems for automotive applications. Developed firmware for microcontrollers and integrated with sensor systems.',
  },
  {
    type: 'education',
    title: 'BSc in Computer Engineering',
    organization: 'State Technical University',
    period: '2013 - 2017',
    description: 'Graduated with honors. Focused on digital systems design, computer architecture, and software engineering.',
  },
  {
    type: 'work',
    title: 'Engineering Intern',
    organization: 'NextGen Electronics',
    period: '2016 - 2017',
    description: 'Assisted in the development of circuit designs and PCB layouts. Gained hands-on experience with hardware testing and validation.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Experience & Education</h2>
          <p className="section-subheading">
            My professional journey and academic background
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((item, index) => (
            <div 
              key={index} 
              className="relative pl-10 pb-12 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-0 w-0.5 h-full bg-border z-0" />
              )}
              
              {/* Icon */}
              <div className={cn(
                "absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center z-10",
                item.type === 'work' ? "bg-primary/20" : "bg-accent/20"
              )}>
                {item.type === 'work' ? (
                  <Briefcase className="h-4 w-4 text-primary" />
                ) : (
                  <GraduationCap className="h-4 w-4 text-accent" />
                )}
              </div>
              
              {/* Content */}
              <div className="group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-md relative">
                <div className="absolute -left-2 top-6 w-2 h-2 bg-card border-l border-t border-border transform rotate-45" />
                
                <span className={cn(
                  "inline-block px-3 py-1 rounded-full text-xs font-medium mb-2",
                  item.type === 'work' ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                )}>
                  {item.period}
                </span>
                
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.organization}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
