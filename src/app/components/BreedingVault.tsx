import { BREEDING_VAULT } from "../data/mockData";
import { Dna, TrendingUp, MapPin, Download } from "lucide-react";

export function BreedingVault() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
          <Dna className="w-8 h-8" />
          BREEDING VAULT
        </h2>
        
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded font-bold text-[#00FF9D] transition-all">
            Breed Optimizer
          </button>
          <button className="px-6 py-3 bg-black/60 hover:bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded font-bold text-[#00FF9D] transition-all flex items-center gap-2">
            <Download className="w-5 h-5" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Mutations" value="4,872" color="#8b5cf6" />
        <StatCard title="Best Rex Melee" value="1,245" color="#FF0033" />
        <StatCard title="Breeding Lines" value="47" color="#00FFFF" />
      </div>

      {/* Breeding Table */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#00FF9D]/20">
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">DINO TYPE</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">MUTATIONS</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">LINEAGE</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">FERTILITY</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">LOCATION</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-[#00FF9D] tracking-wider">MELEE</th>
            </tr>
          </thead>
          <tbody>
            {BREEDING_VAULT.map((dino, idx) => (
              <tr key={idx} className="border-b border-[#00FF9D]/10 hover:bg-[#00FF9D]/5 transition-all">
                <td className="px-6 py-4">
                  <div className="font-bold text-[#00FF9D]">{dino.dinoType}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="text-sm text-gray-300">{dino.mutations}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-[#00FFFF]/10 border border-[#00FFFF]/30 rounded text-xs text-[#00FFFF]">
                    {dino.lineage}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded text-xs font-bold ${
                      dino.fertility === "Breeding"
                        ? "bg-[#00FF9D]/20 text-[#00FF9D] border border-[#00FF9D]/50"
                        : dino.fertility === "Ready"
                        ? "bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/50"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/50"
                    }`}
                  >
                    {dino.fertility}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-3 h-3" />
                    {dino.location}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="text-lg font-mono font-bold text-[#FF0033]">{dino.melee}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="p-6 bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/20 rounded-lg">
      <div className="text-xs text-gray-400 mb-2">{title}</div>
      <div className="text-3xl font-bold font-mono" style={{ color }}>
        {value}
      </div>
    </div>
  );
}
