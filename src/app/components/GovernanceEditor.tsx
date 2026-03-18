import { Shield, Users, Settings } from "lucide-react";

const RANKS = [
  { name: "Owner", permissions: ["Full RCON Access", "All Permissions"], color: "#FFD700" },
  { name: "Admin", permissions: ["Structure Control", "Dino Management"], color: "#FF0033" },
  { name: "Officer", permissions: ["Raid Leadership", "Member Management"], color: "#00FFFF" },
  { name: "Member", permissions: ["Inventory Access", "Basic Taming"], color: "#00FF9D" },
  { name: "Recruit", permissions: ["View Only", "Limited Access"], color: "#8b5cf6" },
];

export function GovernanceEditor() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <Shield className="w-8 h-8" />
        GOVERNANCE EDITOR
      </h2>

      {/* Tribe Hierarchy */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" />
          TRIBE HIERARCHY
        </h3>

        <div className="space-y-4">
          {RANKS.map((rank, idx) => (
            <div
              key={idx}
              className="p-4 bg-black/40 border rounded-lg hover:bg-[#00FF9D]/5 transition-all"
              style={{ borderColor: `${rank.color}40` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded border flex items-center justify-center font-bold"
                    style={{ borderColor: rank.color, backgroundColor: `${rank.color}20`, color: rank.color }}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-bold" style={{ color: rank.color }}>
                      {rank.name}
                    </div>
                    <div className="text-xs text-gray-500">Rank {idx + 1}</div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-black/60 hover:bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded text-xs text-[#00FF9D] transition-all">
                  Edit Permissions
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {rank.permissions.map((perm, permIdx) => (
                  <span
                    key={permIdx}
                    className="px-3 py-1 rounded text-xs"
                    style={{ backgroundColor: `${rank.color}20`, color: rank.color, border: `1px solid ${rank.color}40` }}
                  >
                    {perm}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tribe-Wide Settings */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          TRIBE-WIDE SETTINGS
        </h3>

        <div className="space-y-4">
          <SettingRow label="Max Tames Per Player" value="150" />
          <SettingRow label="Offline Protection Hours" value="24" />
          <SettingRow label="White Flag Duration (Days)" value="14" />
          <SettingRow label="Starter Pack Level" value="100" />
        </div>
      </div>
    </div>
  );
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-black/40 border border-[#00FF9D]/10 rounded">
      <div className="text-sm text-gray-300">{label}</div>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min="0"
          max="200"
          defaultValue={value}
          className="w-32"
        />
        <div className="w-16 text-right font-mono text-[#00FF9D] font-bold">{value}</div>
      </div>
    </div>
  );
}
