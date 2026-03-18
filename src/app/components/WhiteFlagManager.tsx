import { Gift, Package, History } from "lucide-react";

const STARTER_PACKS = [
  { id: 1, tribe: "Dragon Slayers", granted: "2026-03-15", expiresIn: "11d 4h" },
  { id: 2, tribe: "Primal Fury", granted: "2026-03-14", expiresIn: "10d 8h" },
  { id: 3, tribe: "Tek Empire", granted: "2026-03-12", expiresIn: "8d 12h" },
];

export function WhiteFlagManager() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <Gift className="w-8 h-8 text-[#FFD700]" />
        WHITE FLAG STARTER PACK MANAGER
      </h2>

      {/* Pack Editor */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#FFD700]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#FFD700] mb-4 flex items-center gap-2">
          <Package className="w-5 h-5" />
          CUSTOMIZE STARTER PACK
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs text-gray-400 mb-2">Rex Level</label>
            <input
              type="number"
              defaultValue="150"
              className="w-full px-4 py-2 bg-black/60 border border-[#FFD700]/30 rounded text-gray-300 focus:outline-none focus:border-[#FFD700]"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Cryopods</label>
            <input
              type="number"
              defaultValue="10"
              className="w-full px-4 py-2 bg-black/60 border border-[#FFD700]/30 rounded text-gray-300 focus:outline-none focus:border-[#FFD700]"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Element</label>
            <input
              type="number"
              defaultValue="5000"
              className="w-full px-4 py-2 bg-black/60 border border-[#FFD700]/30 rounded text-gray-300 focus:outline-none focus:border-[#FFD700]"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Protection Hours</label>
            <input
              type="number"
              defaultValue="336"
              className="w-full px-4 py-2 bg-black/60 border border-[#FFD700]/30 rounded text-gray-300 focus:outline-none focus:border-[#FFD700]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <PackItem item="Level 150 Rex" included={true} />
          <PackItem item="Tek Saddle" included={true} />
          <PackItem item="10 Cryopods" included={true} />
          <PackItem item="5,000 Element" included={true} />
          <PackItem item="Metal Tools Set" included={true} />
          <PackItem item="Tek Armor Set" included={false} />
          <PackItem item="Ascendant Weapons" included={false} />
          <PackItem item="Building Materials" included={true} />
        </div>

        <button className="mt-6 px-6 py-3 bg-[#FFD700]/20 hover:bg-[#FFD700]/30 border border-[#FFD700] rounded font-bold text-[#FFD700] transition-all">
          Save Pack Configuration
        </button>
      </div>

      {/* Active Packs */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-[#00FF9D]/20 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#00FF9D]">ACTIVE STARTER PACKS</h3>
          <button className="px-4 py-2 bg-[#FFD700]/20 hover:bg-[#FFD700]/30 border border-[#FFD700] rounded text-sm font-bold text-[#FFD700] transition-all">
            Grant New Pack
          </button>
        </div>

        <div className="divide-y divide-[#00FF9D]/10">
          {STARTER_PACKS.map((pack) => (
            <div key={pack.id} className="p-6 hover:bg-[#00FF9D]/5 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#FFD700] mb-1">{pack.tribe}</div>
                  <div className="text-xs text-gray-500">
                    Granted: {pack.granted}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-[#00FF9D]">{pack.expiresIn}</div>
                  <div className="text-xs text-gray-500">remaining</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4 flex items-center gap-2">
          <History className="w-5 h-5" />
          DISTRIBUTION HISTORY
        </h3>
        <div className="text-center text-gray-500 py-8">
          <div className="text-4xl mb-2">📦</div>
          <div>23 starter packs distributed this cycle</div>
        </div>
      </div>
    </div>
  );
}

function PackItem({ item, included }: { item: string; included: boolean }) {
  return (
    <div
      className={`p-3 rounded text-xs text-center ${
        included
          ? "bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]"
          : "bg-gray-500/10 border border-gray-500/30 text-gray-500"
      }`}
    >
      {included ? "✓" : "✗"} {item}
    </div>
  );
}
