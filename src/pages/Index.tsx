
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";
import { Achievements } from "@/components/Achievements";
import Chat from "@/components/ChatBubble";

const Index = () => {
  // Add smooth scroll functionality
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen custom-scrollbar">
      <Header />
      
      <main className="bg-[#0a0215]">
        <Hero />
        <Experience />
        <Skills />
        <FeaturedProjects />
        <Achievements/>
        <ContactForm/>
      </main>
      
      <Footer />
      <Chat/>
    </div>
  );
};

export default Index;
