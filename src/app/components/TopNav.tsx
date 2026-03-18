import { Bell, LogOut, Skull } from "lucide-react";
import { motion } from "motion/react";

interface TopNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  "OVERVIEW",
  "LEADERBOARD",
  "REGISTRATIONS",
  "EVENTS",
  "RAIDS",
  "ANALYTICS",
  "GOVERNANCE",
  "BREEDING VAULT",
  "OFFLINE PROTECTION",
  "WHITE FLAG STARTER",
  "ALLIANCES",
  "RIVAL ESPIONAGE",
  "MOD REGISTRY",
  "RCON CONSOLE",
  "WIPE SCHEDULER",
];

export function TopNav({ activeTab, onTabChange }: TopNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-md border-b border-[#00FF9D]/20 z-50">
      <div className="h-full flex items-center justify-between px-6 gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-[280px]">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <Skull className="w-10 h-10 text-[#00FF9D] drop-shadow-[0_0_10px_#00FF9D]" />
            <div className="absolute inset-0 blur-md">
              <Skull className="w-10 h-10 text-[#00FF9D]" />
            </div>
          </motion.div>
          <div>
            <div className="text-xl font-bold tracking-wider text-[#00FF9D] drop-shadow-[0_0_8px_#00FF9D]">
              TRIBE ALPHA
            </div>
            <div className="text-[10px] text-gray-400 tracking-widest font-mono">
              MEGA CLUSTER 17-MAP DOMINANCE
            </div>
          </div>
        </div>

        {/* Tabs - Scrollable */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 min-w-max px-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`relative px-3 py-2 text-xs tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "text-[#00FF9D] font-bold"
                    : "text-gray-500 hover:text-[#00FF9D]/70"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Status & Notifications */}
        <div className="flex items-center gap-4 min-w-[350px] justify-end">
          <div className="text-right">
            <div className="text-xs text-[#00FF9D] font-bold">ALL 17 MAPS ONLINE</div>
            <div className="text-[10px] text-gray-400 font-mono">
              2,847 Survivors • 45,291 Tames • 124K Element
            </div>
          </div>
          
          <div className="relative">
            <Bell className="w-5 h-5 text-[#FF0033]" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF0033] rounded-full shadow-[0_0_8px_#FF0033]"
            />
            <div className="absolute top-full right-0 mt-2 w-64 bg-black/95 border border-[#FF0033]/50 rounded p-2 text-xs opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-50">
              <div className="text-[#FF0033] font-bold mb-1">7 NEW ALERTS</div>
              <div className="text-gray-400 text-[10px] space-y-1">
                <div>• 7 New Raid Alerts</div>
                <div>• 3 White Flag Expiring</div>
                <div>• 2 Alliance Merge Requests</div>
              </div>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00FFFF] to-[#00FF9D] flex items-center justify-center shadow-[0_0_15px_#00FFFF]">
            <div className="text-black text-xs font-bold">TA</div>
          </div>

          <button className="text-gray-500 hover:text-[#FF0033] transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}
