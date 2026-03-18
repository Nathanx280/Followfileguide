import { ARK_MAPS } from "../data/mockData";
import { ChevronLeft, ChevronRight, MapPin, Users, Database, Syringe, FileCode, MessageSquare } from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 bg-gradient-to-b from-black/95 to-black/90 border-r border-[#00FF9D]/20 transition-all duration-300 z-40 ${
        collapsed ? "w-16" : "w-80"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-6 w-6 h-6 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded-full flex items-center justify-center transition-colors"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-[#00FF9D]" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-[#00FF9D]" />
        )}
      </button>

      <div className="h-full overflow-y-auto scrollbar-thin">
        {!collapsed ? (
          <div className="p-4 space-y-6">
            {/* Map List */}
            <div>
              <div className="text-xs font-bold text-[#00FF9D] mb-3 tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                CLUSTER MAPS
              </div>
              <div className="space-y-2">
                {ARK_MAPS.map((map, idx) => (
                  <div
                    key={idx}
                    className="bg-black/40 border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 rounded p-2 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-xs font-bold text-[#00FF9D]/90 group-hover:text-[#00FF9D]">
                        {map.name}
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono">
                        {map.players} online
                      </div>
                    </div>
                    
                    {/* Control Bar */}
                    <div className="relative h-1.5 bg-black/60 rounded-full overflow-hidden mb-1">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00FF9D] to-[#00FFFF] shadow-[0_0_8px_#00FF9D]"
                        style={{ width: `${map.control}%` }}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-[#00FF9D]/70">{map.control}% control</span>
                      <span className="text-gray-500">{map.dominantDino}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="border-t border-[#00FF9D]/10 pt-4">
              <div className="text-xs font-bold text-[#00FF9D] mb-3 tracking-wider">
                QUICK LINKS
              </div>
              <div className="space-y-2">
                <QuickLink icon={<Users />} label="Tribe Roster Live Sync" status="online" />
                <QuickLink icon={<MapPin />} label="Base Locator GPS" status="online" />
                <QuickLink icon={<Database />} label="Rival Intel Database" status="online" />
                <QuickLink icon={<Syringe />} label="Breeding Mutation Export" status="online" />
                <QuickLink icon={<FileCode />} label="Cryopod Vault Transfer" status="online" />
                <QuickLink icon={<MessageSquare />} label="Discord Bot Status" status="synced" />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-2 space-y-4">
            <div className="flex flex-col items-center gap-3 pt-4">
              <MapPin className="w-5 h-5 text-[#00FF9D]" />
              <div className="w-full h-px bg-[#00FF9D]/20" />
              <Users className="w-5 h-5 text-[#00FF9D]/50" />
              <Database className="w-5 h-5 text-[#00FF9D]/50" />
              <Syringe className="w-5 h-5 text-[#00FF9D]/50" />
            </div>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(0, 255, 157, 0.05);
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 157, 0.2);
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 157, 0.3);
        }
      `}</style>
    </aside>
  );
}

interface QuickLinkProps {
  icon: React.ReactNode;
  label: string;
  status: "online" | "synced";
}

function QuickLink({ icon, label, status }: QuickLinkProps) {
  return (
    <button className="w-full flex items-center gap-2 p-2 bg-black/40 hover:bg-[#00FF9D]/10 border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 rounded transition-all text-left group">
      <div className="text-[#00FF9D]/70 group-hover:text-[#00FF9D] w-4 h-4">
        {icon}
      </div>
      <div className="flex-1 text-xs text-gray-400 group-hover:text-[#00FF9D]/80">
        {label}
      </div>
      <div
        className={`w-2 h-2 rounded-full ${
          status === "synced" ? "bg-[#00FF9D]" : "bg-[#00FFFF]"
        } shadow-[0_0_8px_currentColor]`}
      />
    </button>
  );
}
