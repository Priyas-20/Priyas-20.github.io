import { useState } from "react";
import { Sword, Store, Trophy, Shield, Gem, Coins } from "lucide-react";
import grassBg from "@/assets/grass-bg.jpg";
import townhall from "@/assets/townhall-new.png";
import goldMine from "@/assets/gold-mine.png";
import barracks from "@/assets/barracks.png";
import lab from "@/assets/lab.png";
import AboutMeModal from "@/components/AboutMeModal";
import CareerPathModal from "@/components/CareerPathModal";
import ProjectsModal from "@/components/ProjectsModal";

const Index = () => {
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${grassBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Resource Bar */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Left - Level Badge */}
          <div className="flex items-center gap-2">
            <div className="coc-card px-3 py-2 flex items-center gap-2">
              <Shield className="w-6 h-6 text-coc-gold" />
              <div>
                <div className="text-xs text-muted-foreground">Level</div>
                <div className="font-display text-lg text-foreground leading-none">10</div>
              </div>
            </div>
            <div className="coc-card px-3 py-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-coc-gold" />
              <span className="font-display text-foreground">2847</span>
            </div>
          </div>

          {/* Right - Resources */}
          <div className="flex items-center gap-2">
            <div className="coc-card px-3 py-2 flex items-center gap-2">
              <Coins className="w-5 h-5 text-yellow-500" />
              <span className="font-display text-foreground">5+ Years</span>
            </div>
            <div className="coc-card px-3 py-2 flex items-center gap-2">
              <Gem className="w-5 h-5 text-pink-400" />
              <span className="font-display text-foreground">∞ Skills</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Village Area */}
      <main className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="relative">
          {/* Surrounding Buildings */}
          
          {/* Gold Mine - Top Left */}
          <div className="absolute -top-20 -left-32 md:-left-48 w-28 md:w-36 opacity-90 hover:opacity-100 transition-opacity cursor-pointer animate-float" style={{ animationDelay: '0.3s' }}>
            <img src={goldMine} alt="Gold Mine - Experience" className="w-full h-full object-contain drop-shadow-xl" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-coc-parchment px-2 py-0.5 rounded border-2 border-coc-brown text-xs font-display text-foreground whitespace-nowrap">
              Experience
            </div>
          </div>

          {/* Barracks - Top Right */}
          <div className="absolute -top-16 -right-32 md:-right-48 w-28 md:w-36 opacity-90 hover:opacity-100 transition-opacity cursor-pointer animate-float" style={{ animationDelay: '0.6s' }}>
            <img src={barracks} alt="Barracks - Skills" className="w-full h-full object-contain drop-shadow-xl" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-coc-parchment px-2 py-0.5 rounded border-2 border-coc-brown text-xs font-display text-foreground whitespace-nowrap">
              Skills
            </div>
          </div>

          {/* Lab - Bottom Right */}
          <div className="absolute -bottom-8 -right-28 md:-right-40 w-24 md:w-32 opacity-90 hover:opacity-100 transition-opacity cursor-pointer animate-float" style={{ animationDelay: '0.9s' }}>
            <img src={lab} alt="Lab - Learning" className="w-full h-full object-contain drop-shadow-xl" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-coc-parchment px-2 py-0.5 rounded border-2 border-coc-brown text-xs font-display text-foreground whitespace-nowrap">
              Learning
            </div>
          </div>

          {/* Townhall - Click for About Me */}
          <button
            onClick={() => setAboutMeOpen(true)}
            className="group relative cursor-pointer transition-transform hover:scale-110 focus:outline-none z-10"
          >
            <div className="relative w-56 md:w-64 h-56 md:h-64 flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(145deg, hsl(95 70% 55%) 0%, hsl(95 70% 42%) 100%)' }}>
              <img 
                src={townhall} 
                alt="Town Hall - About Me"
                className="w-full h-full object-contain drop-shadow-2xl animate-float scale-110"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-coc-gold/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Label */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="coc-card px-4 py-2 text-center animate-pulse-glow">
                <span className="font-display text-sm text-foreground">Town Hall</span>
                <div className="text-xs text-muted-foreground">Click for About Me</div>
              </div>
            </div>
          </button>

          {/* Decorative elements */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce">🏴</div>
          <div className="absolute top-1/3 -left-20 text-2xl animate-float hidden md:block" style={{ animationDelay: '1.5s' }}>💎</div>
          <div className="absolute top-1/3 -right-20 text-2xl animate-float hidden md:block" style={{ animationDelay: '1.2s' }}>⚔️</div>
        </div>
      </main>

      {/* Bottom Action Buttons */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {/* Career Button (Attack replacement) */}
          <button
            onClick={() => setCareerOpen(true)}
            className="coc-button flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4"
          >
            <Sword className="w-5 h-5 md:w-6 md:h-6" />
            <div className="text-left">
              <div className="text-lg md:text-xl leading-none">Career!</div>
              <div className="text-[10px] md:text-xs opacity-80 normal-case hidden sm:block">View My Journey</div>
            </div>
          </button>

          {/* Center decoration */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-coc-gold rounded-full" />
            <div className="coc-card p-3">
              <span className="text-2xl">🏰</span>
            </div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-coc-gold rounded-full" />
          </div>

          {/* Projects Button (Shop replacement) */}
          <button
            onClick={() => setProjectsOpen(true)}
            className="coc-button coc-button-gold flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4"
          >
            <Store className="w-5 h-5 md:w-6 md:h-6" />
            <div className="text-left">
              <div className="text-lg md:text-xl leading-none">Projects</div>
              <div className="text-[10px] md:text-xs opacity-80 normal-case hidden sm:block">Browse My Work</div>
            </div>
          </button>
        </div>
      </footer>

      {/* Modals */}
      <AboutMeModal isOpen={aboutMeOpen} onClose={() => setAboutMeOpen(false)} />
      <CareerPathModal isOpen={careerOpen} onClose={() => setCareerOpen(false)} />
      <ProjectsModal isOpen={projectsOpen} onClose={() => setProjectsOpen(false)} />
    </div>
  );
};

export default Index;
