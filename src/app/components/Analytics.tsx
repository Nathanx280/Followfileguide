import { PVP_ACTIVITY_DATA, DINO_TAMES_DATA, MAP_CONTROL_DATA } from "../data/mockData";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Download } from "lucide-react";

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
          <TrendingUp className="w-8 h-8" />
          ANALYTICS & INSIGHTS
        </h2>
        
        <button className="px-6 py-3 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded font-bold text-[#00FF9D] transition-all flex items-center gap-2">
          <Download className="w-5 h-5" />
          Export All Charts
        </button>
      </div>

      {/* PvP Activity Chart */}
      <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#00FF9D] mb-6">PVP ACTIVITY & KILL/DEATH RATIO - LAST 30 DAYS</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={PVP_ACTIVITY_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#00FF9D20" />
            <XAxis dataKey="day" stroke="#00FF9D" style={{ fontSize: 12 }} />
            <YAxis stroke="#00FF9D" style={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0A0A0A",
                border: "1px solid #00FF9D",
                borderRadius: 8,
                color: "#00FF9D",
              }}
            />
            <Legend wrapperStyle={{ color: "#00FF9D" }} />
            <Line
              type="monotone"
              dataKey="kills"
              stroke="#00FF9D"
              strokeWidth={3}
              dot={{ fill: "#00FF9D", r: 5 }}
              activeDot={{ r: 8 }}
              name="Kills"
            />
            <Line
              type="monotone"
              dataKey="deaths"
              stroke="#FF0033"
              strokeWidth={2}
              dot={{ fill: "#FF0033", r: 4 }}
              name="Deaths"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dino Tames Chart */}
        <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#00FF9D] mb-6">TOP DINOS TAMED THIS CYCLE</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={DINO_TAMES_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00FF9D20" />
              <XAxis dataKey="name" stroke="#00FF9D" style={{ fontSize: 11 }} />
              <YAxis stroke="#00FF9D" style={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid #00FF9D",
                  borderRadius: 8,
                  color: "#00FF9D",
                }}
              />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {DINO_TAMES_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Map Control Chart */}
        <div className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#00FF9D] mb-6">CLUSTER CONTROL BY MAP</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={MAP_CONTROL_DATA}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ map, control }) => `${map}: ${control}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="control"
              >
                {MAP_CONTROL_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid #00FF9D",
                  borderRadius: 8,
                  color: "#00FF9D",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
