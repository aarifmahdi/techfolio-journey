
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  projectUrl?: string;
  githubUrl?: string;
  isHighlighted?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  projectUrl,
  githubUrl,
  isHighlighted = false,
}: ProjectCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "group relative rounded-lg overflow-hidden hover-card-effect transition-all duration-300 h-full",
        "bg-card border border-border",
        isHighlighted && "md:col-span-2 md:row-span-2"
      )}
    >
      <div className="h-full flex flex-col">
        {/* Project Image */}
        <div className="relative w-full aspect-video bg-muted overflow-hidden">
          {/* Loading skeleton */}
          <div className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            isImageLoaded ? "opacity-0" : "opacity-100"
          )} />
          
          <img
            src={imageSrc}
            alt={title}
            onLoad={() => setIsImageLoaded(true)}
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              "group-hover:scale-105 origin-center",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
          />
          
          {/* Links overlay */}
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {projectUrl && (
              <a 
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label={`Visit ${title} project`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label={`View ${title} source code on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        {/* Project Info */}
        <div className="flex flex-col grow p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 grow">{description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
