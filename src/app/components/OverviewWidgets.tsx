import { motion } from "motion/react";
import { Gauge, Activity, Radar, Shield, Gift, Trophy, Users, Zap } from "lucide-react";

export function OverviewWidgets() {
  return (
    <div className="space-y-6">
      {/* Top Row - Main Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <DominanceMeter />
        <LiveStats />
        <ThreatRadar />
        <OfflineProtection />
        <WhiteFlagOverview />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon={<Trophy />}
          title="BOSS KILLS THIS CYCLE"
          value="17"
          subtitle="4 Dragon • 3 Broodmother • 2 Overseer"
          color="#FFD700"
        />
        <StatCard
          icon={<Zap />}
          title="ELEMENT HARVESTED"
          value="124,000"
          subtitle="This wipe cycle"
          color="#00FFFF"
        />
        <StatCard
          icon={<Users />}
          title="SURVIVORS ONLINE"
          value="2,847"
          subtitle="Peak: 3,412 yesterday"
          color="#00FF9D"
        />
      </div>
    </div>
  );
}

function DominanceMeter() {
  const dominance = 98.7;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Gauge className="w-5 h-5 text-[#00FF9D]" />
          <div className="text-xs font-bold text-[#00FF9D] tracking-wider">
            ALPHA DOMINANCE
          </div>
        </div>

        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Spinning outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-[#00FF9D]/20"
            style={{
              borderTopColor: "#00FF9D",
              borderRightColor: "#00FF9D",
            }}
          />
          
          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-black to-[#00FF9D]/20 border border-[#00FF9D]/50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00FF9D] drop-shadow-[0_0_10px_#00FF9D]">
                {dominance}%
              </div>
              <div className="text-[10px] text-gray-400">CONTROL</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm font-bold text-[#FFD700] mb-1">GOD-TIER #1</div>
          <div className="text-xs text-gray-400">CLUSTER DOMINANCE</div>
        </div>
      </div>
    </motion.div>
  );
}

function LiveStats() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-[#00FFFF]" />
          <div className="text-xs font-bold text-[#00FFFF] tracking-wider">
            LIVE CLUSTER STATS
          </div>
        </div>

        <div className="space-y-3">
          <StatItem label="Survivors Online" value="2,847" trend="+12%" color="#00FF9D" />
          <StatItem label="Total Tames" value="45,291" trend="+234" color="#8b5cf6" />
          <StatItem label="Boss Kills" value="17" trend="This cycle" color="#FFD700" />
          <StatItem label="Element" value="124K" trend="+8.5K" color="#00FFFF" />
        </div>
      </div>
    </motion.div>
  );
}

function ThreatRadar() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#FF0033]/30 rounded-lg overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Radar className="w-5 h-5 text-[#FF0033]" />
          <div className="text-xs font-bold text-[#FF0033] tracking-wider">
            THREAT RADAR
          </div>
        </div>

        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Radar circles */}
          <div className="absolute inset-0 rounded-full border border-[#FF0033]/20" />
          <div className="absolute inset-4 rounded-full border border-[#FF0033]/20" />
          <div className="absolute inset-8 rounded-full border border-[#FF0033]/20" />
          
          {/* Scanning line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-[#FF0033] to-transparent origin-left" />
          </motion.div>
          
          {/* Threat dots */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-8 right-12 w-3 h-3 bg-[#FF0033] rounded-full shadow-[0_0_10px_#FF0033]"
          />
          <div className="absolute bottom-12 left-8 w-2 h-2 bg-[#FFD700] rounded-full shadow-[0_0_8px_#FFD700]" />
          <div className="absolute top-12 left-10 w-2 h-2 bg-[#00FF9D] rounded-full shadow-[0_0_8px_#00FF9D]" />
        </div>

        <div className="text-center text-xs text-gray-400">
          <div className="text-[#FF0033] font-bold mb-1">ACTIVE THREATS: 3</div>
          <div className="text-[10px]">BloodReign near Desert Cave</div>
        </div>
      </div>
    </motion.div>
  );
}

function OfflineProtection() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/30 rounded-lg overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-[#00FF9D]" />
          <div className="text-xs font-bold text-[#00FF9D] tracking-wider">
            OFFLINE PROTECTION
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          <div className="relative w-16 h-8 bg-black/60 rounded-full border border-[#00FF9D]/50">
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 bg-[#00FF9D] rounded-full shadow-[0_0_15px_#00FF9D]"
              animate={{ x: 32 }}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm font-bold text-[#00FF9D] mb-1">ENABLED</div>
          <div className="text-xs text-gray-400 mb-2">24h window active</div>
          <div className="text-lg font-mono text-[#00FFFF]">23:47:12</div>
          <div className="text-[10px] text-gray-500">remaining</div>
        </div>
      </div>
    </motion.div>
  );
}

function WhiteFlagOverview() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#FFD700]/30 rounded-lg overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Gift className="w-5 h-5 text-[#FFD700]" />
          <div className="text-xs font-bold text-[#FFD700] tracking-wider">
            WHITE FLAG STARTER
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-[#FFD700] mb-1">23</div>
          <div className="text-xs text-gray-400">Starter packs distributed</div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between text-gray-400">
            <span>Protection:</span>
            <span className="text-[#00FF9D]">14 days</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>This cycle:</span>
            <span className="text-[#FFD700]">23 tribes</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface StatItemProps {
  label: string;
  value: string;
  trend: string;
  color: string;
}

function StatItem({ label, value, trend, color }: StatItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="flex items-center gap-2">
        <div className="text-sm font-bold" style={{ color }}>
          {value}
        </div>
        <div className="text-[10px] text-gray-500">{trend}</div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

function StatCard({ icon, title, value, subtitle, color }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-[#00FF9D]/20 rounded-lg overflow-hidden group"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
        background: `linear-gradient(to bottom right, ${color}10, transparent)`
      }} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3" style={{ color }}>
          <div className="w-5 h-5">{icon}</div>
          <div className="text-xs font-bold tracking-wider">{title}</div>
        </div>
        
        <div className="text-3xl font-bold mb-2" style={{ color, textShadow: `0 0 20px ${color}` }}>
          {value}
        </div>
        
        <div className="text-xs text-gray-400">{subtitle}</div>
      </div>
    </motion.div>
  );
}
