import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Safari } from '@/components/ui/safari';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
  demoLink?: string;
  repoLink?: string;
  tags?: string[];
  isEven?: boolean;
  className?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  url,
  image, 
  demoLink, 
  repoLink, 
  tags = [], 
  isEven = false, 
  className 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative flex flex-col md:flex-row items-center gap-10 py-12",
        isEven && "md:flex-row-reverse", 
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-purple/5 via-purple/10 to-purple/5 rounded-xl opacity-40 transition-opacity duration-300",
        isHovered ? "opacity-70" : "opacity-40"
      )}></div>
      
      <div className="md:w-1/2 z-10 p-6 relative">
        <div className="mb-3">
          <span className="text-xs uppercase tracking-wider text-purple font-medium px-3 py-1 rounded-full bg-purple/10">Featured Project</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{title}</h3>
        
        <div className="relative mb-6">
          <div className="bg-[#1A1A2E]/80 backdrop-blur-lg rounded-xl p-6 shadow-lg ">
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1 rounded-full bg-purple/10 text-purple-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex space-x-4">
          {repoLink && (
            <a 
              href={repoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-dark border border-purple/20 flex items-center justify-center transition-colors hover:bg-purple/20"
            >
              <Github className="w-5 h-5 text-purple" />
            </a>
          )}
          
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-dark border border-purple/20 flex items-center justify-center transition-colors hover:bg-purple/20"
            >
              <Globe className="w-5 h-5 text-purple" />
            </a>
          )}
        </div>
      </div>
      
      <div className={cn(
        "md:w-1/2 overflow-visible transform transition-all duration-500 relative",
        isEven ? "md:pr-0" : "md:pl-0"
      )}>
        <div className={cn(
          "transform transition-all duration-500 hover:scale-105 hover:-translate-y-2",
          isHovered ? "scale-[1.03] -translate-y-1" : ""
        )}>
          <Safari 
            url={url} 
            src={image} 
            className="size-full rounded-xl shadow-lg overflow-hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent rounded-xl mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;