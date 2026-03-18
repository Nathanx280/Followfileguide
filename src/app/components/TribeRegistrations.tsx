import { useState } from "react";
import { TRIBE_REGISTRATIONS } from "../data/mockData";
import { UserPlus, Check, X, FileText } from "lucide-react";

export function TribeRegistrations() {
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "denied">("pending");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
        <UserPlus className="w-8 h-8" />
        TRIBE REGISTRATIONS
      </h2>

      {/* Tabs */}
      <div className="flex gap-2">
        {(["pending", "approved", "denied"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-bold tracking-wider uppercase transition-all ${
              activeTab === tab
                ? "bg-[#00FF9D]/20 text-[#00FF9D] border border-[#00FF9D]"
                : "bg-black/40 text-gray-500 border border-[#00FF9D]/10 hover:border-[#00FF9D]/30"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Registrations List */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#00FF9D]/20">
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">TRIBE NAME</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">LEADER</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">REQUESTED MAPS</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#00FF9D] tracking-wider">SIZE</th>
              <th className="px-6 py-4 text-center text-xs font-bold text-[#00FF9D] tracking-wider">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {TRIBE_REGISTRATIONS.map((reg) => (
              <tr key={reg.id} className="border-b border-[#00FF9D]/10 hover:bg-[#00FF9D]/5 transition-all">
                <td className="px-6 py-4">
                  <div className="font-bold text-[#00FF9D]">{reg.tribeName}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-300">{reg.leader}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {reg.requestedMaps.map((map) => (
                      <span key={map} className="px-2 py-1 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded text-xs text-[#00FF9D]">
                        {map}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-gray-500/20 border border-gray-500/50 rounded text-xs text-gray-300">
                    {reg.size}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="px-4 py-2 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded text-xs font-bold text-[#00FF9D] transition-all flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Approve & Grant Pack
                    </button>
                    <button className="px-4 py-2 bg-[#FF0033]/20 hover:bg-[#FF0033]/30 border border-[#FF0033] rounded text-xs font-bold text-[#FF0033] transition-all flex items-center gap-2">
                      <X className="w-4 h-4" />
                      Deny
                    </button>
                    <button className="px-4 py-2 bg-[#00FFFF]/20 hover:bg-[#00FFFF]/30 border border-[#00FFFF] rounded text-xs font-bold text-[#00FFFF] transition-all flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Review
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Register New Tribe Form */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-4">REGISTER NEW TRIBE</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-2">Tribe Name</label>
            <input
              type="text"
              placeholder="Enter tribe name..."
              className="w-full px-4 py-2 bg-black/60 border border-[#00FF9D]/30 rounded text-gray-300 focus:outline-none focus:border-[#00FF9D]"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Leader Name</label>
            <input
              type="text"
              placeholder="Enter leader name..."
              className="w-full px-4 py-2 bg-black/60 border border-[#00FF9D]/30 rounded text-gray-300 focus:outline-none focus:border-[#00FF9D]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs text-gray-400 mb-2">Description</label>
            <textarea
              placeholder="Enter tribe description..."
              rows={3}
              className="w-full px-4 py-2 bg-black/60 border border-[#00FF9D]/30 rounded text-gray-300 focus:outline-none focus:border-[#00FF9D] resize-none"
            />
          </div>
        </div>
        <button className="mt-4 px-6 py-3 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded font-bold text-[#00FF9D] transition-all">
          Submit to Alpha Council
        </button>
      </div>
    </div>
  );
}
