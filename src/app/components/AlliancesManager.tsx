import { ALLIANCES } from "../data/mockData";
import { Handshake, Users, Zap, Plus } from "lucide-react";

export function AlliancesManager() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
          <Handshake className="w-8 h-8" />
          ALLIANCES MANAGER
        </h2>
        
        <button className="px-6 py-3 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded font-bold text-[#00FF9D] transition-all flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Form New Alliance
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ALLIANCES.map((alliance, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border rounded-lg p-6 hover:border-[#00FF9D]/50 transition-all"
            style={{
              borderColor:
                alliance.relationship === "Trusted"
                  ? "#00FF9D40"
                  : alliance.relationship === "Allied"
                  ? "#00FFFF40"
                  : "#FFD70040",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-lg font-bold"
                style={{
                  color:
                    alliance.relationship === "Trusted"
                      ? "#00FF9D"
                      : alliance.relationship === "Allied"
                      ? "#00FFFF"
                      : "#FFD700",
                }}
              >
                {alliance.name}
              </h3>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor:
                    alliance.relationship === "Trusted"
                      ? "#00FF9D20"
                      : alliance.relationship === "Allied"
                      ? "#00FFFF20"
                      : "#FFD70020",
                  color:
                    alliance.relationship === "Trusted"
                      ? "#00FF9D"
                      : alliance.relationship === "Allied"
                      ? "#00FFFF"
                      : "#FFD700",
                  border: `1px solid ${
                    alliance.relationship === "Trusted"
                      ? "#00FF9D50"
                      : alliance.relationship === "Allied"
                      ? "#00FFFF50"
                      : "#FFD70050"
                  }`,
                }}
              >
                {alliance.relationship}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  Members
                </div>
                <div className="text-[#00FF9D] font-bold">{alliance.members}</div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Zap className="w-4 h-4" />
                  Shared Element
                </div>
                <div className="text-[#00FFFF] font-mono">
                  {alliance.sharedElement > 0 ? alliance.sharedElement.toLocaleString() : "N/A"}
                </div>
              </div>

              <div className="pt-3 border-t border-[#00FF9D]/10">
                <div className="text-xs text-gray-500 mb-2">Status: {alliance.status}</div>
                {alliance.status === "Pending Merge" && (
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded text-xs font-bold text-[#00FF9D] transition-all">
                      Accept
                    </button>
                    <button className="flex-1 px-3 py-2 bg-[#FF0033]/20 hover:bg-[#FF0033]/30 border border-[#FF0033] rounded text-xs font-bold text-[#FF0033] transition-all">
                      Decline
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Joint Raid Planning */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4">JOINT RAID PLANNING</h3>
        <div className="text-center text-gray-500 py-8">
          <div className="text-4xl mb-2">🗓️</div>
          <div>No joint raids scheduled</div>
          <button className="mt-4 px-6 py-3 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded font-bold text-[#00FF9D] transition-all">
            Schedule Joint Raid
          </button>
        </div>
      </div>
    </div>
  );
}
