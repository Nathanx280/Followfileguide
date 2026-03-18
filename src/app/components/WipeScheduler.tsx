import { Calendar, AlertTriangle, Database, Send } from "lucide-react";
import { useState } from "react";

export function WipeScheduler() {
  const [wipeDate, setWipeDate] = useState("2026-06-15");
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <Calendar className="w-8 h-8 text-[#FF0033]" />
        WIPE SCHEDULER
      </h2>

      {/* Warning Banner */}
      <div className="p-6 bg-[#FF0033]/10 border border-[#FF0033]/50 rounded-lg">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-[#FF0033] flex-shrink-0" />
          <div>
            <div className="text-lg font-bold text-[#FF0033] mb-2">CRITICAL OPERATION</div>
            <div className="text-sm text-gray-300">
              Cluster wipes will permanently delete all player progress, structures, and tamed dinosaurs across all 17 maps.
              This action cannot be undone. Always backup data before initiating a wipe.
            </div>
          </div>
        </div>
      </div>

      {/* Wipe Configuration */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4">WIPE CONFIGURATION</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs text-gray-400 mb-2">Proposed Wipe Date</label>
            <input
              type="date"
              value={wipeDate}
              onChange={(e) => setWipeDate(e.target.value)}
              className="w-full px-4 py-2 bg-black/60 border border-[#00FF9D]/30 rounded text-gray-300 focus:outline-none focus:border-[#00FF9D]"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Warning Period</label>
            <select className="w-full px-4 py-2 bg-black/60 border border-[#00FF9D]/30 rounded text-gray-300 focus:outline-none focus:border-[#00FF9D]">
              <option>48 hours</option>
              <option>72 hours</option>
              <option>1 week</option>
              <option>2 weeks</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-xs text-gray-400 mb-2">Pre-Wipe Announcement</label>
          <textarea
            rows={4}
            defaultValue="ATTENTION ALL SURVIVORS! The Mega Cluster will undergo a scheduled wipe on [DATE]. All progress will be reset. Thank you for an epic season!"
            className="w-full px-4 py-2 bg-black/60 border border-[#00FF9D]/30 rounded text-gray-300 focus:outline-none focus:border-[#00FF9D] resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button className="px-6 py-3 bg-[#00FFFF]/20 hover:bg-[#00FFFF]/30 border border-[#00FFFF] rounded font-bold text-[#00FFFF] transition-all flex items-center gap-2">
            <Send className="w-5 h-5" />
            Broadcast Announcement
          </button>
          <button className="px-6 py-3 bg-[#FFD700]/20 hover:bg-[#FFD700]/30 border border-[#FFD700] rounded font-bold text-[#FFD700] transition-all">
            Schedule Wipe
          </button>
        </div>
      </div>

      {/* Backup Settings */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4 flex items-center gap-2">
          <Database className="w-5 h-5" />
          BACKUP SETTINGS
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-black/40 border border-[#00FF9D]/10 rounded">
            <div>
              <div className="text-sm font-bold text-gray-300">Auto-Backup Before Wipe</div>
              <div className="text-xs text-gray-500">Create full cluster backup automatically</div>
            </div>
            <div className="relative w-16 h-8 bg-black/60 rounded-full border border-[#00FF9D]/50 cursor-pointer">
              <div className="absolute top-1 right-1 w-6 h-6 bg-[#00FF9D] rounded-full shadow-[0_0_15px_#00FF9D]" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-black/40 border border-[#00FF9D]/10 rounded">
            <div>
              <div className="text-sm font-bold text-gray-300">Keep Player Profiles</div>
              <div className="text-xs text-gray-500">Retain player stats and engrams</div>
            </div>
            <div className="relative w-16 h-8 bg-black/60 rounded-full border border-gray-500/50 cursor-pointer">
              <div className="absolute top-1 left-1 w-6 h-6 bg-gray-500 rounded-full" />
            </div>
          </div>

          <div className="p-4 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded">
            <div className="text-xs text-gray-400 mb-2">Last Backup</div>
            <div className="text-sm font-mono text-[#00FF9D]">2026-03-17 23:45:00 UTC</div>
            <div className="text-xs text-gray-500 mt-1">Size: 47.3 GB</div>
          </div>
        </div>
      </div>

      {/* Emergency Wipe */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#FF0033]/50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#FF0033] mb-4">EMERGENCY WIPE</h3>
        
        <p className="text-sm text-gray-400 mb-4">
          Only use this in case of critical server issues or exploits. This will immediately wipe all 17 maps without warning.
        </p>

        {!showConfirmation ? (
          <button
            onClick={() => setShowConfirmation(true)}
            className="px-6 py-3 bg-[#FF0033]/20 hover:bg-[#FF0033]/30 border border-[#FF0033] rounded font-bold text-[#FF0033] transition-all"
          >
            Initiate Emergency Wipe
          </button>
        ) : (
          <div className="space-y-3">
            <div className="p-4 bg-[#FF0033]/20 border border-[#FF0033] rounded">
              <div className="text-sm font-bold text-[#FF0033] mb-2">⚠️ CONFIRM EMERGENCY WIPE</div>
              <div className="text-xs text-gray-300">
                Type "WIPE CLUSTER" to confirm this irreversible action
              </div>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type confirmation..."
                className="flex-1 px-4 py-2 bg-black/60 border border-[#FF0033] rounded text-gray-300 focus:outline-none"
              />
              <button className="px-6 py-2 bg-[#FF0033]/30 border border-[#FF0033] rounded font-bold text-[#FF0033] hover:bg-[#FF0033]/50 transition-all">
                CONFIRM WIPE
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-6 py-2 bg-black/60 border border-gray-500 rounded font-bold text-gray-400 hover:bg-black/80 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
