import { useState } from "react";
import { TopNav } from "./TopNav";
import { Sidebar } from "./Sidebar";
import { OverviewWidgets } from "./OverviewWidgets";
import { Leaderboard } from "./Leaderboard";
import { TribeRegistrations } from "./TribeRegistrations";
import { EventsCalendar } from "./EventsCalendar";
import { RaidsSection } from "./RaidsSection";
import { Analytics } from "./Analytics";
import { GovernanceEditor } from "./GovernanceEditor";
import { BreedingVault } from "./BreedingVault";
import { OfflineProtection } from "./OfflineProtection";
import { WhiteFlagManager } from "./WhiteFlagManager";
import { AlliancesManager } from "./AlliancesManager";
import { RivalEspionage } from "./RivalEspionage";
import { ModRegistry } from "./ModRegistry";
import { RCONConsole } from "./RCONConsole";
import { WipeScheduler } from "./WipeScheduler";
import { QuickActions } from "./QuickActions";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("OVERVIEW");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "OVERVIEW":
        return <OverviewWidgets />;
      case "LEADERBOARD":
        return <Leaderboard />;
      case "REGISTRATIONS":
        return <TribeRegistrations />;
      case "EVENTS":
        return <EventsCalendar />;
      case "RAIDS":
        return <RaidsSection />;
      case "ANALYTICS":
        return <Analytics />;
      case "GOVERNANCE":
        return <GovernanceEditor />;
      case "BREEDING VAULT":
        return <BreedingVault />;
      case "OFFLINE PROTECTION":
        return <OfflineProtection />;
      case "WHITE FLAG STARTER":
        return <WhiteFlagManager />;
      case "ALLIANCES":
        return <AlliancesManager />;
      case "RIVAL ESPIONAGE":
        return <RivalEspionage />;
      case "MOD REGISTRY":
        return <ModRegistry />;
      case "RCON CONSOLE":
        return <RCONConsole />;
      case "WIPE SCHEDULER":
        return <WipeScheduler />;
      default:
        return <OverviewWidgets />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#00FF9D] overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Rain streaks */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#00FF9D] to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 100}%`,
                height: `${50 + Math.random() * 100}px`,
                animation: `fall ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Lava glow bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF0033]/10 to-transparent" />
        
        {/* Volumetric lighting top-left */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#00FF9D]/5 to-transparent blur-3xl" />
        
        {/* Dino silhouettes */}
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M50,150 L60,120 L80,110 L100,120 L110,140 L100,160 L80,170 L60,160 Z" fill="#00FF9D" />
            <circle cx="85" cy="115" r="8" fill="#00FF9D" />
          </svg>
        </div>
      </div>

      <TopNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex pt-16">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-80'} p-6 relative z-10`}>
          {renderContent()}
        </main>
      </div>

      <QuickActions />

      {/* Watermark */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 text-[#00FF9D]/20 text-xs tracking-wider font-mono">
        Powered by Tribe Alpha Engine v17.2 — Built for Dominance
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
}
