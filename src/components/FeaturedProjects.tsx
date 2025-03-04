
import ProjectCard from './ProjectCard';
import { SparklesText } from './ui/sparkles-text';

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-6 overflow-hidden relative" id="projects">
      {/* Background glow effects */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-purple/10 rounded-full filter blur-[120px] opacity-70"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-purple/5 rounded-full filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex space-x-2 justify-center items-center">
            <SparklesText text="Featured" />
            <SparklesText text="Projects" className="text-purple" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            A collection of my recent work and explorations in design and development.
          </p>
        </div>


        <div className="animate-fade-in space-y-24">
          <ProjectCard
            url=''
            title="Spotify Analytics Dashboard"
            description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
            image="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000"
            demoLink="https://example.com"
            repoLink="https://github.com/example"
            tags={["React", "Tailwind CSS", "Spotify API"]}
          />

          <ProjectCard
            url=''
            title="Portfolio Website"
            description="A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and a custom theme implementation. The site showcases projects, skills, and professional experience."
            image="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000"
            demoLink="https://example.com"
            repoLink="https://github.com/example"
            tags={["React", "Three.js", "GSAP"]}
            isEven={true}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
