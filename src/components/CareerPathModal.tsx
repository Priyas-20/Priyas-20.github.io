import { X, CheckCircle2 } from "lucide-react";

interface CareerPathModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CareerPathModal = ({ isOpen, onClose }: CareerPathModalProps) => {
  if (!isOpen) return null;

  const careerMilestones = [
    {
      title: "Junior Developer",
      company: "Tech Startup",
      period: "2019 - 2020",
      completed: true,
      icon: "🎓",
    },
    {
      title: "Mid-Level Developer",
      company: "Software Agency",
      period: "2020 - 2022",
      completed: true,
      icon: "💻",
    },
    {
      title: "Senior Developer",
      company: "Enterprise Corp",
      period: "2022 - Present",
      completed: true,
      icon: "⚡",
    },
    {
      title: "Tech Lead",
      company: "Future Goal",
      period: "Coming Soon",
      completed: false,
      icon: "🚀",
    },
    {
      title: "CTO",
      company: "Dream Position",
      period: "Ultimate Goal",
      completed: false,
      icon: "👑",
    },
  ];

  const completedCount = careerMilestones.filter(m => m.completed).length;
  const progressPercentage = (completedCount / careerMilestones.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="coc-card w-full max-w-4xl max-h-[90vh] overflow-hidden animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="coc-header px-6 py-3 flex items-center justify-between -mx-[6px] -mt-[6px] rounded-t-[10px]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <h2 className="text-2xl font-display text-coc-brown-dark drop-shadow-sm">
              Career Path
            </h2>
          </div>
          <button onClick={onClose} className="coc-close-button">
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-coc-parchment-dark/30">
          <div className="flex items-center gap-4">
            <div className="flex-1 coc-progress-bar h-8 relative">
              <div 
                className="coc-progress-fill h-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white drop-shadow-md">
                {completedCount} / {careerMilestones.length} Milestones
              </span>
            </div>
            <div className="text-lg font-display text-coc-gold-dark">
              {Math.round(progressPercentage)}%
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-2 bg-gradient-to-b from-coc-button-green via-coc-button-green to-muted rounded-full" />

            {/* Milestones */}
            <div className="space-y-6">
              {careerMilestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start gap-4 pl-4 ${
                    milestone.completed ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {/* Checkpoint */}
                  <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                    milestone.completed 
                      ? 'bg-coc-button-green border-coc-brown shadow-lg' 
                      : 'bg-muted border-coc-brown/50'
                  }`}>
                    {milestone.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-lg">{milestone.icon}</span>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 p-4 rounded-xl border-4 transition-all ${
                    milestone.completed
                      ? 'bg-gradient-to-r from-coc-parchment to-coc-parchment-dark border-coc-brown shadow-md'
                      : 'bg-muted/50 border-coc-brown/30'
                  }`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{milestone.icon}</span>
                          <h3 className="font-display text-lg text-foreground">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {milestone.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          milestone.completed
                            ? 'bg-coc-button-green text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {milestone.period}
                        </span>
                        {milestone.completed && (
                          <button className="coc-button text-sm mt-2 px-4 py-1">
                            Claim
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathModal;
