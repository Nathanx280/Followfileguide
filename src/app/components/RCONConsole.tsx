import { Terminal, Send, History, Save } from "lucide-react";
import { useState } from "react";

const COMMAND_HISTORY = [
  { time: "20:45:12", command: "admincheat summon Rex_Character_BP_C", result: "Success: Rex spawned" },
  { time: "20:42:33", command: "admincheat forceplayertojoin TribeAlpha", result: "Success: Player added to tribe" },
  { time: "20:38:01", command: "admincheat GiveItemNum 1 100 0 0", result: "Success: Items granted" },
];

const MACRO_COMMANDS = [
  { name: "Spawn 10 Rex (Level 150)", command: "admincheat SpawnDino 'Blueprint'/Game/PrimalEarth/Dinos/Rex/Rex_Character_BP.Rex_Character_BP' 500 0 0 150" },
  { name: "Grant All Engrams", command: "admincheat GiveEngrams" },
  { name: "God Mode ON", command: "admincheat god" },
  { name: "Infinite Stats", command: "admincheat infinitestats" },
];

export function RCONConsole() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const executeCommand = () => {
    if (command.trim()) {
      setOutput([...output, `> ${command}`, "Command executed successfully"]);
      setCommand("");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <Terminal className="w-8 h-8" />
        RCON CONSOLE
      </h2>

      {/* Command Input */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4">COMMAND EXECUTOR</h3>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && executeCommand()}
            placeholder="Enter RCON command..."
            className="flex-1 px-4 py-3 bg-black/60 border border-[#00FF9D]/30 rounded text-gray-300 font-mono text-sm focus:outline-none focus:border-[#00FF9D]"
          />
          <button
            onClick={executeCommand}
            className="px-6 py-3 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded font-bold text-[#00FF9D] transition-all flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Execute
          </button>
        </div>

        {/* Output Terminal */}
        <div className="bg-black/80 border border-[#00FF9D]/20 rounded p-4 h-64 overflow-y-auto font-mono text-sm">
          <div className="text-[#00FF9D]">
            <div>ARK RCON Console v17.2</div>
            <div className="text-gray-500 mb-4">Ready for commands...</div>
            {output.map((line, idx) => (
              <div key={idx} className={line.startsWith(">") ? "text-[#00FFFF]" : "text-gray-400"}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Saved Macros */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-[#00FF9D] flex items-center gap-2">
            <Save className="w-5 h-5" />
            SAVED MACROS
          </h3>
          <button className="px-4 py-2 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded text-sm font-bold text-[#00FF9D] transition-all">
            Save New Macro
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {MACRO_COMMANDS.map((macro, idx) => (
            <button
              key={idx}
              onClick={() => setCommand(macro.command)}
              className="p-4 bg-black/40 hover:bg-[#00FF9D]/10 border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 rounded text-left transition-all group"
            >
              <div className="font-bold text-[#00FFFF] mb-2 group-hover:text-[#00FF9D]">{macro.name}</div>
              <code className="text-xs text-gray-500 font-mono block truncate">{macro.command}</code>
            </button>
          ))}
        </div>
      </div>

      {/* Command History */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4 flex items-center gap-2">
          <History className="w-5 h-5" />
          COMMAND HISTORY
        </h3>

        <div className="space-y-2">
          {COMMAND_HISTORY.map((entry, idx) => (
            <div key={idx} className="p-3 bg-black/40 border border-[#00FF9D]/10 rounded">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-mono">{entry.time}</span>
                <span className="text-xs text-[#00FF9D]">{entry.result}</span>
              </div>
              <code className="text-sm text-gray-400 font-mono">{entry.command}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
