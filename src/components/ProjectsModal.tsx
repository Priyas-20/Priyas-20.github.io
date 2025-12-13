import { X, ExternalLink, Github } from "lucide-react";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectsModal = ({ isOpen, onClose }: ProjectsModalProps) => {
  if (!isOpen) return null;

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping experience with React & Node.js",
      icon: "🛒",
      tags: ["React", "Node.js", "MongoDB"],
      featured: true,
      price: "Featured",
    },
    {
      title: "Task Manager App",
      description: "Productivity app with real-time collaboration",
      icon: "✅",
      tags: ["TypeScript", "Firebase", "Tailwind"],
      featured: false,
      price: "Open Source",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather visualization with API integration",
      icon: "🌤️",
      tags: ["React", "D3.js", "REST API"],
      featured: false,
      price: "Demo",
    },
    {
      title: "Portfolio Website",
      description: "This very website you're looking at!",
      icon: "🎮",
      tags: ["React", "Tailwind", "Clash Theme"],
      featured: true,
      price: "Special",
    },
    {
      title: "Chat Application",
      description: "Real-time messaging with WebSocket",
      icon: "💬",
      tags: ["Socket.io", "Express", "React"],
      featured: false,
      price: "Live",
    },
    {
      title: "AI Image Generator",
      description: "Generate images using machine learning",
      icon: "🎨",
      tags: ["Python", "TensorFlow", "FastAPI"],
      featured: false,
      price: "Beta",
    },
  ];

  const categories = [
    { name: "All", icon: "🏪", active: true },
    { name: "Featured", icon: "⭐", active: false },
    { name: "Web", icon: "🌐", active: false },
    { name: "Mobile", icon: "📱", active: false },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="coc-card w-full max-w-5xl max-h-[90vh] overflow-hidden animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="coc-header px-6 py-3 flex items-center justify-between -mx-[6px] -mt-[6px] rounded-t-[10px]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏪</span>
            <h2 className="text-2xl font-display text-coc-brown-dark drop-shadow-sm">
              Project Shop
            </h2>
          </div>
          <button onClick={onClose} className="coc-close-button">
            <X size={20} />
          </button>
        </div>

        {/* Categories */}
        <div className="px-6 py-3 bg-coc-parchment-dark/30 flex gap-2 overflow-x-auto">
          {categories.map((cat, index) => (
            <button 
              key={index}
              className={`coc-button text-sm px-4 py-2 whitespace-nowrap ${
                cat.active ? '' : 'coc-button-gold opacity-80'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`relative p-4 rounded-xl border-4 transition-all hover:scale-105 cursor-pointer ${
                  project.featured
                    ? 'bg-gradient-to-br from-coc-gold/20 to-coc-parchment border-coc-gold shadow-lg animate-pulse-glow'
                    : 'bg-coc-parchment border-coc-brown hover:border-coc-gold'
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-2 -right-2 bg-coc-gold px-2 py-1 rounded-lg border-2 border-coc-brown text-xs font-display text-coc-brown-dark shadow-md">
                    ⭐ Featured
                  </div>
                )}

                {/* Icon */}
                <div className="text-4xl mb-3">{project.icon}</div>

                {/* Title */}
                <h3 className="font-display text-lg text-foreground mb-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-0.5 bg-coc-brown/20 rounded text-xs font-bold text-coc-brown-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price/Status & Actions */}
                <div className="flex items-center justify-between">
                  <span className="coc-stat-bar px-3 py-1 text-sm font-bold text-white">
                    {project.price}
                  </span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center bg-coc-brown/20 rounded-lg hover:bg-coc-brown/40 transition-colors">
                      <Github size={16} className="text-foreground" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-coc-brown/20 rounded-lg hover:bg-coc-brown/40 transition-colors">
                      <ExternalLink size={16} className="text-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-coc-parchment-dark/50 border-t-4 border-coc-brown/30 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {projects.length} projects
          </div>
          <div className="flex gap-2">
            <button className="coc-button coc-button-gold text-sm px-4 py-2">
              <span className="flex items-center gap-2">
                <Github size={16} />
                View GitHub
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
