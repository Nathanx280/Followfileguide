import { useState } from "react";
import { LEADERBOARD_DATA } from "../data/mockData";
import { Crown, Search, Download, ChevronDown, Shield, Sword } from "lucide-react";
import { motion } from "motion/react";

export function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const filteredData = LEADERBOARD_DATA.filter(
    (tribe) =>
      tribe.tribeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tribe.emblem.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
          <Crown className="w-8 h-8 text-[#FFD700]" />
          TRIBE LEADERBOARD
        </h2>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tribes..."
              className="pl-10 pr-4 py-2 bg-black/60 border border-[#00FF9D]/30 rounded text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#00FF9D]"
            />
          </div>
          
          <button className="px-4 py-2 bg-black/60 hover:bg-[#00FF9D]/10 border border-[#00FF9D]/30 hover:border-[#00FF9D] rounded text-sm text-[#00FF9D] transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#00FF9D]/20">
                <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">RANK</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">TRIBE</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-[#00FF9D] tracking-wider">SCORE</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-[#00FF9D] tracking-wider">PVP KILLS</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-[#00FF9D] tracking-wider">TAMES</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-[#00FF9D] tracking-wider">MEMBERS</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-[#00FF9D] tracking-wider">CONTROL</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">STATUS</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-[#00FF9D] tracking-wider">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tribe) => (
                <motion.tr
                  key={tribe.rank}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: tribe.rank * 0.05 }}
                  className={`border-b border-[#00FF9D]/10 hover:bg-[#00FF9D]/5 transition-all ${
                    tribe.rank === 1 ? "bg-gradient-to-r from-[#FFD700]/10 to-transparent" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {tribe.rank === 1 && (
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Crown className="w-5 h-5 text-[#FFD700] drop-shadow-[0_0_10px_#FFD700]" />
                        </motion.div>
                      )}
                      <span className={`text-lg font-bold ${tribe.rank === 1 ? "text-[#FFD700]" : "text-gray-400"}`}>
                        #{tribe.rank}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded border ${
                        tribe.rank === 1 ? "border-[#FFD700] bg-[#FFD700]/10" : "border-[#00FF9D]/30 bg-[#00FF9D]/10"
                      } flex items-center justify-center`}>
                        {tribe.emblem === "Rex" && <Shield className="w-5 h-5 text-[#00FF9D]" />}
                        {tribe.emblem === "Giga" && <Sword className="w-5 h-5 text-[#FF0033]" />}
                        {tribe.emblem === "Shadowmane" && <Shield className="w-5 h-5 text-[#8b5cf6]" />}
                        {tribe.emblem === "Mek" && <Shield className="w-5 h-5 text-[#00FFFF]" />}
                        {tribe.emblem === "Reaper" && <Shield className="w-5 h-5 text-[#c026d3]" />}
                      </div>
                      <div>
                        <div className={`font-bold ${tribe.rank === 1 ? "text-[#FFD700]" : "text-[#00FF9D]"}`}>
                          {tribe.tribeName}
                        </div>
                        <div className="text-xs text-gray-500">{tribe.emblem} Emblem</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className={`font-mono font-bold ${tribe.rank === 1 ? "text-[#FFD700]" : "text-[#00FF9D]"}`}>
                      {tribe.score.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-gray-300 font-mono">{tribe.pvpKills.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-gray-300 font-mono">{tribe.tames.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-gray-300 font-mono">{tribe.members}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-1.5 bg-black/60 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            tribe.rank === 1 ? "bg-[#FFD700]" : "bg-[#00FF9D]"
                          } shadow-[0_0_8px_currentColor]`}
                          style={{ width: `${tribe.mapControl}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-300 font-mono">{tribe.mapControl}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        tribe.status === "Dominating"
                          ? "bg-[#00FF9D]/20 text-[#00FF9D] border border-[#00FF9D]/50"
                          : tribe.status === "Under Siege"
                          ? "bg-[#FF0033]/20 text-[#FF0033] border border-[#FF0033]/50"
                          : "bg-gray-500/20 text-gray-400 border border-gray-500/50"
                      }`}
                    >
                      {tribe.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => setExpandedRow(expandedRow === tribe.rank ? null : tribe.rank)}
                      className="text-[#00FF9D] hover:text-[#00FFFF] transition-colors"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedRow === tribe.rank ? "rotate-180" : ""}`} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tribe Alpha Special Banner */}
        {filteredData[0]?.rank === 1 && (
          <div className="px-6 py-3 bg-gradient-to-r from-[#FFD700]/10 to-transparent border-t border-[#FFD700]/30">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.div>
              <span className="text-sm font-bold text-[#FFD700]">
                TRIBE ALPHA — UNDEFEATED THIS WIPE CYCLE
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
