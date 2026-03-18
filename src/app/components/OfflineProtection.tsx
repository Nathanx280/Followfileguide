import { Shield, Clock, AlertTriangle } from "lucide-react";
import { ARK_MAPS } from "../data/mockData";

export function OfflineProtection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <Shield className="w-8 h-8" />
        OFFLINE RAID PROTECTION
      </h2>

      {/* Warning Banner */}
      <div className="p-4 bg-[#ff8c42]/10 border border-[#ff8c42]/50 rounded-lg flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#ff8c42] flex-shrink-0 mt-1" />
        <div className="text-sm text-gray-300">
          <div className="font-bold text-[#ff8c42] mb-1">WARNING</div>
          If disabled, alpha bases become vulnerable to offline raids. Confirm all changes with RCON.
        </div>
      </div>

      {/* Map Protection Settings */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4">MAP-SPECIFIC PROTECTION</h3>
        
        <div className="space-y-4">
          {ARK_MAPS.slice(0, 8).map((map, idx) => (
            <div key={idx} className="p-4 bg-black/40 border border-[#00FF9D]/10 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]"
                    style={{ backgroundColor: map.color }}
                  />
                  <div className="font-bold text-[#00FF9D]">{map.name}</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      defaultChecked={idx < 6}
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-gray-400">Enabled</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="w-4 h-4 text-gray-500" />
                <input
                  type="range"
                  min="0"
                  max="72"
                  defaultValue="24"
                  className="flex-1"
                />
                <div className="text-sm font-mono text-[#00FFFF] w-16 text-right">24h</div>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                Protection window: 22:00 - 22:00 UTC
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Settings */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4">GLOBAL SETTINGS</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-black/40 border border-[#00FF9D]/10 rounded">
            <div>
              <div className="text-sm font-bold text-gray-300">Enable Cluster-Wide Protection</div>
              <div className="text-xs text-gray-500">Apply protection to all 17 maps</div>
            </div>
            <div className="relative w-16 h-8 bg-black/60 rounded-full border border-[#00FF9D]/50 cursor-pointer">
              <div className="absolute top-1 right-1 w-6 h-6 bg-[#00FF9D] rounded-full shadow-[0_0_15px_#00FF9D]" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-black/40 border border-[#00FF9D]/10 rounded">
            <div>
              <div className="text-sm font-bold text-gray-300">Default Protection Duration</div>
              <div className="text-xs text-gray-500">Applied to new maps added to cluster</div>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="72"
                defaultValue="24"
                className="w-32"
              />
              <div className="w-16 text-right font-mono text-[#00FF9D] font-bold">24h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
