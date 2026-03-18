import { RIVAL_INTEL } from "../data/mockData";
import { Eye, MapPin, AlertTriangle, Target } from "lucide-react";

export function RivalEspionage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <Eye className="w-8 h-8 text-[#FF0033]" />
        RIVAL ESPIONAGE INTEL
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {RIVAL_INTEL.map((rival, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#FF0033]/30 rounded-lg p-6 hover:border-[#FF0033]/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#FF0033]">{rival.tribeName}</h3>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#ff8c42]" />
                <span className="text-lg font-bold text-[#ff8c42]">{rival.threat}%</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-400">Base Location</div>
                  <div className="text-[#00FF9D]">{rival.baseLocation}</div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <Target className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-400">Estimated Loot</div>
                  <div className="text-[#00FFFF] font-mono">{rival.estimatedLoot.toLocaleString()} Element</div>
                </div>
              </div>

              <div className="p-3 bg-black/40 border border-[#FF0033]/20 rounded">
                <div className="text-xs text-gray-500 mb-1">Latest Intelligence</div>
                <div className="text-sm text-gray-300">{rival.lastActivity}</div>
              </div>

              <div className="p-3 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded">
                <div className="text-xs text-[#FFD700] font-bold mb-1">STRATEGIC NOTE</div>
                <div className="text-sm text-gray-300">{rival.intelligence}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-3 bg-[#FF0033]/20 hover:bg-[#FF0033]/30 border border-[#FF0033] rounded font-bold text-[#FF0033] transition-all">
                Mark for Next Raid
              </button>
              <button className="px-4 py-3 bg-black/60 hover:bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded font-bold text-[#00FF9D] transition-all">
                View Full Intel
              </button>
            </div>

            {/* Threat Meter */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Threat Level</span>
                <span>{rival.threat}%</span>
              </div>
              <div className="relative h-2 bg-black/60 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FFD700] via-[#ff8c42] to-[#FF0033] shadow-[0_0_8px_#FF0033]"
                  style={{ width: `${rival.threat}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap Placeholder */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4">CLUSTER HEATMAP</h3>
        <div className="h-64 bg-black/60 rounded border border-[#00FF9D]/20 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <div>Interactive cluster map with rival base locations</div>
          </div>
        </div>
      </div>
    </div>
  );
}
