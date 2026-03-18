import { motion } from "motion/react";
import { useState } from "react";
import {
  Megaphone,
  Trash2,
  Share2,
  Lock,
  Skull,
  Swords,
  MessageSquare,
  Gift,
  Download,
  Gamepad2,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const ACTIONS = [
  { icon: Megaphone, label: "Broadcast Global Message", color: "#00FF9D" },
  { icon: Trash2, label: "Initiate Cluster Wipe", color: "#FF0033" },
  { icon: Share2, label: "Mass Transfer Dinos", color: "#00FFFF" },
  { icon: Lock, label: "Lock Rival Bases", color: "#ff8c42" },
  { icon: Skull, label: "Spawn Admin Rex Army", color: "#FFD700" },
  { icon: Swords, label: "Open Raid Window", color: "#FF0033" },
  { icon: MessageSquare, label: "Sync Discord Bot", color: "#8b5cf6" },
  { icon: Gift, label: "Distribute Starter Packs", color: "#FFD700" },
  { icon: Download, label: "Export Cluster Data", color: "#00FF9D" },
  { icon: Gamepad2, label: "Enable Mini-Games", color: "#00FFFF" },
  { icon: Shield, label: "Force Offline Protection", color: "#00FF9D" },
  { icon: Users, label: "Purge Inactive Tribes", color: "#FF0033" },
  { icon: Zap, label: "Grant Element to Allies", color: "#00FFFF" },
];

export function QuickActions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Action Buttons Circle */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute bottom-0 right-0"
        >
          {ACTIONS.map((action, idx) => {
            const angle = (idx * 360) / ACTIONS.length;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: -x, y: -y }}
                transition={{ delay: idx * 0.03 }}
                className="absolute bottom-0 right-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 group"
                style={{
                  backgroundColor: `${action.color}20`,
                  borderColor: action.color,
                }}
                title={action.label}
              >
                <action.icon className="w-5 h-5" style={{ color: action.color }} />
                
                {/* Tooltip */}
                <div
                  className="absolute bottom-full mb-2 px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-xs font-bold"
                  style={{
                    backgroundColor: action.color,
                    color: "#0A0A0A",
                  }}
                >
                  {action.label}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#00FFFF] flex items-center justify-center shadow-[0_0_30px_#00FF9D] hover:shadow-[0_0_50px_#00FF9D] transition-all relative z-10"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-black"
        >
          {isOpen ? (
            <div className="text-2xl font-bold">✕</div>
          ) : (
            <Zap className="w-8 h-8" />
          )}
        </motion.div>
      </motion.button>

      {/* Label */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-full mb-2 right-0 px-4 py-2 bg-black/90 border border-[#00FF9D] rounded text-sm font-bold text-[#00FF9D] whitespace-nowrap"
        >
          QUICK ACTIONS
        </motion.div>
      )}
    </div>
  );
}
