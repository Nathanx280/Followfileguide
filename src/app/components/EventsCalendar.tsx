import { EVENTS } from "../data/mockData";
import { Calendar, Clock, Plus, Skull, Swords, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export function EventsCalendar() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#00FF9D] tracking-wider flex items-center gap-3">
          <Calendar className="w-8 h-8" />
          EVENTS CALENDAR
        </h2>
        
        <button className="px-6 py-3 bg-[#00FF9D]/20 hover:bg-[#00FF9D]/30 border border-[#00FF9D] rounded font-bold text-[#00FF9D] transition-all flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Create New Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {EVENTS.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>
    </div>
  );
}

interface EventCardProps {
  event: {
    name: string;
    description: string;
    timeRemaining: string;
    type: "boss" | "pvp" | "raid" | "warning";
  };
}

function EventCard({ event }: EventCardProps) {
  const getEventIcon = () => {
    switch (event.type) {
      case "boss":
        return <Skull className="w-6 h-6" />;
      case "pvp":
        return <Swords className="w-6 h-6" />;
      case "raid":
        return <Swords className="w-6 h-6" />;
      case "warning":
        return <AlertTriangle className="w-6 h-6" />;
    }
  };

  const getEventColor = () => {
    switch (event.type) {
      case "boss":
        return "#FFD700";
      case "pvp":
        return "#FF0033";
      case "raid":
        return "#00FF9D";
      case "warning":
        return "#ff8c42";
    }
  };

  const color = getEventColor();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-6 bg-gradient-to-br from-black/80 via-black/60 to-black/80 border rounded-lg overflow-hidden group"
      style={{ borderColor: `${color}40` }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(to bottom right, ${color}10, transparent)` }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4" style={{ color }}>
          {getEventIcon()}
          <div className="text-xs font-bold tracking-wider">{event.type.toUpperCase()}</div>
        </div>

        <h3 className="text-lg font-bold text-[#00FF9D] mb-2">{event.name}</h3>
        <p className="text-sm text-gray-400 mb-4">{event.description}</p>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" style={{ color }} />
          <div className="text-lg font-mono font-bold" style={{ color }}>
            {event.timeRemaining}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
