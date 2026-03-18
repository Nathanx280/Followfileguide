import { RAID_LOG } from "../data/mockData";
import { Swords, MapPin, Trophy, Skull } from "lucide-react";
import { motion } from "motion/react";

export function RaidsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <Swords className="w-8 h-8 text-[#FF0033]" />
        RAIDS & BATTLES
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Raid Map */}
        <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#FF0033]/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#FF0033] mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            LIVE RAID IN PROGRESS
          </h3>

          <div className="relative h-64 bg-black/60 rounded border border-[#FF0033]/30 overflow-hidden">
            {/* Simplified map visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <Skull className="w-16 h-16 text-[#FF0033] drop-shadow-[0_0_20px_#FF0033]" />
                </motion.div>
                <div className="text-lg font-bold text-[#FF0033]">Desert Cave FOB</div>
                <div className="text-sm text-gray-400">Extinction</div>
                <div className="mt-4 text-xs text-gray-500">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[#FF0033]"
                  >
                    ⚔️ ACTIVE COMBAT ⚔️
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Explosion particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [0, 1.5],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="absolute w-4 h-4 bg-[#FF0033] rounded-full"
                style={{
                  left: `${40 + Math.random() * 20}%`,
                  top: `${40 + Math.random() * 20}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Raid Stats Summary */}
        <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#00FF9D] mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            RAID STATISTICS
          </h3>

          <div className="space-y-4">
            <StatRow label="Total Raids This Cycle" value="47" color="#00FF9D" />
            <StatRow label="Victories" value="42" color="#FFD700" />
            <StatRow label="Defeats" value="5" color="#FF0033" />
            <StatRow label="Total Element Looted" value="2.4M" color="#00FFFF" />
            <StatRow label="Dinos Captured" value="1,234" color="#8b5cf6" />
            <StatRow label="Bases Destroyed" value="23" color="#ff8c42" />
          </div>
        </div>
      </div>

      {/* Raid Log */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-[#00FF9D]/20 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#00FF9D]">RAID LOG</h3>
          <div className="text-xs text-gray-500 font-mono">Real-time updates</div>
        </div>

        <div className="divide-y divide-[#00FF9D]/10">
          {RAID_LOG.map((raid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 hover:bg-[#00FF9D]/5 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${raid.result === "Victory" ? "bg-[#00FF9D]" : "bg-[#FF0033]"} shadow-[0_0_8px_currentColor]`} />
                  <div>
                    <div className="text-xs text-gray-500 font-mono mb-1">{raid.timestamp}</div>
                    <div className="text-sm">
                      <span className="text-[#00FF9D] font-bold">{raid.attacker}</span>
                      <span className="text-gray-500 mx-2">vs</span>
                      <span className="text-[#FF0033] font-bold">{raid.defender}</span>
                    </div>
                  </div>
                </div>
                
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  raid.result === "Victory"
                    ? "bg-[#00FF9D]/20 text-[#00FF9D] border border-[#00FF9D]/50"
                    : "bg-[#FF0033]/20 text-[#FF0033] border border-[#FF0033]/50"
                }`}>
                  {raid.result}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3 h-3 text-gray-500" />
                <span className="text-xs text-gray-400">{raid.location}</span>
              </div>

              {raid.result === "Victory" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-xs">
                  <div>
                    <div className="text-gray-500">Rex Lost</div>
                    <div className="text-[#FF0033] font-bold">{raid.rexLost}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Giga Tamed</div>
                    <div className="text-[#00FF9D] font-bold">{raid.gigaTamed}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Element</div>
                    <div className="text-[#00FFFF] font-bold">{raid.elementGained.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Cryopods</div>
                    <div className="text-[#FFD700] font-bold">{raid.cryopods}</div>
                  </div>
                </div>
              )}

              <button className="mt-4 text-xs text-[#00FF9D] hover:text-[#00FFFF] transition-colors">
                View Replay Video →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface StatRowProps {
  label: string;
  value: string;
  color: string;
}

function StatRow({ label, value, color }: StatRowProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-xl font-bold font-mono" style={{ color }}>
        {value}
      </div>
    </div>
  );
}
