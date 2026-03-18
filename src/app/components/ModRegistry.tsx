import { Package, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const MODS = [
  {
    name: "Structures Plus (S+)",
    version: "v3.8.2",
    status: "Active",
    creatures: 0,
    structures: 247,
  },
  {
    name: "ARK Additions: Domination Rex",
    version: "v2.1.4",
    status: "Active",
    creatures: 12,
    structures: 0,
  },
  {
    name: "Awesome SpyGlass!",
    version: "v1.9.1",
    status: "Active",
    creatures: 0,
    structures: 0,
  },
  {
    name: "Dino Storage v2",
    version: "v2.4.7",
    status: "Active",
    creatures: 0,
    structures: 15,
  },
];

const SPAWN_COMMANDS = [
  { name: "Domination Rex", command: "admincheat summon DomRex_Character_BP_C" },
  { name: "Alpha Rex", command: "admincheat summon MegaRex_Character_BP_C" },
  { name: "Tek Raptor", command: "admincheat summon BionicRaptor_Character_BP_C" },
];

export function ModRegistry() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <Package className="w-8 h-8" />
        MOD & CUSTOM DINO REGISTRY
      </h2>

      {/* Active Mods */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-[#00FF9D]/20">
          <h3 className="text-lg font-bold text-[#00FF9D]">ACTIVE MODS</h3>
        </div>

        <div className="divide-y divide-[#00FF9D]/10">
          {MODS.map((mod, idx) => (
            <div key={idx} className="p-6 hover:bg-[#00FF9D]/5 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-bold text-[#00FF9D] mb-1">{mod.name}</div>
                  <div className="text-xs text-gray-500">Version {mod.version}</div>
                </div>
                <span className="px-3 py-1 bg-[#00FF9D]/20 text-[#00FF9D] border border-[#00FF9D]/50 rounded-full text-xs font-bold">
                  {mod.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 text-xs">Custom Creatures</div>
                  <div className="text-[#8b5cf6] font-bold">{mod.creatures}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Custom Structures</div>
                  <div className="text-[#00FFFF] font-bold">{mod.structures}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spawn Commands */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4">SPAWN COMMANDS</h3>

        <div className="space-y-3">
          {SPAWN_COMMANDS.map((spawn, idx) => (
            <div key={idx} className="p-4 bg-black/40 border border-[#00FF9D]/10 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-[#00FFFF]">{spawn.name}</div>
                <button
                  onClick={() => copyToClipboard(spawn.command)}
                  className="px-3 py-1 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded text-xs font-bold text-[#00FF9D] transition-all flex items-center gap-2"
                >
                  {copiedCommand === spawn.command ? (
                    <>
                      <CheckCircle className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <code className="text-xs text-gray-400 font-mono block bg-black/60 p-2 rounded">
                {spawn.command}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
