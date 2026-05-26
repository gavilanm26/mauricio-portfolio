import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/layout/Footer';


export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#FAF8F5] text-[#1C1A17] overflow-x-hidden selection:bg-orange-700 selection:text-white">
      {/* Ambient background organic lights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="ambient-glow-1 absolute inset-0 w-full h-full" />
        <div className="ambient-glow-2 absolute inset-0 w-full h-full" />
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" /> 

      {/* Floating UI Navigation */}
      <Navbar />

      {/* Sections Wrapper */}
      <main className="relative w-full z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
