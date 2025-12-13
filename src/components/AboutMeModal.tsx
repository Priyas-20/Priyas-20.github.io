import { X } from "lucide-react";
import warriorAvatar from "@/assets/warrior-new.png";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMeModal = ({ isOpen, onClose }: AboutMeModalProps) => {
  if (!isOpen) return null;

  const stats = [
    { icon: "⚔️", label: "Damage per second:", value: "Expert Coder", barWidth: "85%" },
    { icon: "❤️", label: "Hitpoints:", value: "Endless Motivation", barWidth: "90%" },
    { icon: "💰", label: "Training Cost:", value: "Years of Practice", barWidth: "75%" },
    { icon: "⏱️", label: "Training Time:", value: "Still Learning!", barWidth: "60%" },
  ];

  const details = [
    { label: "Favorite target:", value: "Clean Code" },
    { label: "Damage type:", value: "Full Stack" },
    { label: "Targets:", value: "Web & Mobile" },
    { label: "Housing Space:", value: "Remote Friendly" },
    { label: "Movement speed:", value: "Agile" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="coc-card w-full max-w-2xl animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="coc-header px-6 py-3 flex items-center justify-between -mx-[6px] -mt-[6px] rounded-t-[10px]">
          <h2 className="text-2xl font-display text-coc-brown-dark drop-shadow-sm">
            Your Name (Level 10)
          </h2>
          <button onClick={onClose} className="coc-close-button">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0 flex justify-center">
            <img 
              src={warriorAvatar} 
              alt="Warrior Avatar" 
              className="w-48 h-48 object-contain drop-shadow-lg animate-float"
            />
          </div>

          {/* Stats */}
          <div className="flex-1 space-y-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <div className="flex-1">
                  <div className="coc-stat-bar h-7 relative overflow-hidden">
                    <div 
                      className="coc-progress-fill h-full absolute left-0 top-0"
                      style={{ width: stat.barWidth }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white drop-shadow-md">
                      {stat.label} {stat.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Details Table */}
            <div className="mt-4 pt-4 border-t-2 border-coc-brown/30">
              {details.map((detail, index) => (
                <div key={index} className="flex justify-between py-1 text-sm">
                  <span className="text-muted-foreground">{detail.label}</span>
                  <span className="font-bold text-foreground">{detail.value}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-4 p-3 bg-coc-parchment-dark/50 rounded-lg border-2 border-coc-brown/20">
              <p className="text-sm text-foreground italic">
                This fearless developer relies on their extensive knowledge and 
                striking problem-solving skills to create amazing web applications. 
                Deploy a team of these and watch the bugs disappear!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;
