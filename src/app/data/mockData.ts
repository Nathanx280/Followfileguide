export const ARK_MAPS = [
  { name: "The Island", control: 94, players: 187, dominantDino: "Rex", color: "#4a9eff" },
  { name: "Scorched Earth", control: 89, players: 143, dominantDino: "Wyvern", color: "#ff8c42" },
  { name: "Ragnarok", control: 94, players: 201, dominantDino: "Griffin", color: "#a855f7" },
  { name: "Extinction", control: 98, players: 234, dominantDino: "Corrupted Giga", color: "#ff0033" },
  { name: "Aberration", control: 100, players: 156, dominantDino: "Rock Drake", color: "#00ffff" },
  { name: "Genesis Part 1", control: 92, players: 178, dominantDino: "Astrocetus", color: "#10b981" },
  { name: "Genesis Part 2", control: 96, players: 189, dominantDino: "Shadowmane", color: "#8b5cf6" },
  { name: "Valguero", control: 87, players: 167, dominantDino: "Deinonychus", color: "#f59e0b" },
  { name: "Crystal Isles", control: 91, players: 192, dominantDino: "Crystal Wyvern", color: "#ec4899" },
  { name: "Fjordur", control: 88, players: 145, dominantDino: "Andrewsarchus", color: "#06b6d4" },
  { name: "Lost Island", control: 93, players: 171, dominantDino: "Sinomacrops", color: "#84cc16" },
  { name: "The Center", control: 90, players: 154, dominantDino: "Giganotosaurus", color: "#ef4444" },
  { name: "Primitive Plus", control: 85, players: 98, dominantDino: "Mammoth", color: "#78716c" },
  { name: "Scorched Earth+", control: 86, players: 112, dominantDino: "Phoenix", color: "#fb923c" },
  { name: "Genesis Sim", control: 95, players: 167, dominantDino: "Ferox", color: "#22d3ee" },
  { name: "Fjordur Realms", control: 89, players: 134, dominantDino: "Fenrir", color: "#3b82f6" },
  { name: "Crystal Abyss", control: 97, players: 142, dominantDino: "Reaper King", color: "#c026d3" },
];

export const LEADERBOARD_DATA = [
  {
    rank: 1,
    tribeName: "Tribe Alpha",
    emblem: "Rex",
    score: 1245890,
    pvpKills: 8743,
    tames: 45291,
    members: 124,
    mapControl: 98.7,
    status: "Dominating",
  },
  {
    rank: 2,
    tribeName: "BloodReign",
    emblem: "Giga",
    score: 987654,
    pvpKills: 6521,
    tames: 34567,
    members: 98,
    mapControl: 76.3,
    status: "Under Siege",
  },
  {
    rank: 3,
    tribeName: "ShadowLegion",
    emblem: "Shadowmane",
    score: 876543,
    pvpKills: 5432,
    tames: 28934,
    members: 87,
    mapControl: 68.9,
    status: "Defending",
  },
  {
    rank: 4,
    tribeName: "TeK Titans",
    emblem: "Mek",
    score: 765432,
    pvpKills: 4987,
    tames: 25678,
    members: 76,
    mapControl: 61.2,
    status: "Raiding",
  },
  {
    rank: 5,
    tribeName: "Void Walkers",
    emblem: "Reaper",
    score: 654321,
    pvpKills: 4123,
    tames: 21456,
    members: 65,
    mapControl: 54.7,
    status: "Neutral",
  },
];

export const RAID_LOG = [
  {
    timestamp: "2026-03-18 20:41",
    attacker: "Tribe Alpha",
    defender: "BloodReign",
    location: "Desert Cave, Extinction",
    result: "Victory",
    rexLost: 12,
    gigaTamed: 47,
    elementGained: 87000,
    cryopods: 12,
  },
  {
    timestamp: "2026-03-18 18:23",
    attacker: "ShadowLegion",
    defender: "TeK Titans",
    location: "Crystal Cave, Aberration",
    result: "Defeated",
    rexLost: 34,
    gigaTamed: 0,
    elementGained: 0,
    cryopods: 0,
  },
  {
    timestamp: "2026-03-18 15:47",
    attacker: "Tribe Alpha",
    defender: "Void Walkers",
    location: "Floating Island, Ragnarok",
    result: "Victory",
    rexLost: 8,
    gigaTamed: 23,
    elementGained: 45000,
    cryopods: 7,
  },
];

export const EVENTS = [
  {
    name: "Wednesday Boss Rush",
    description: "All 17 Maps — Dragon, Broodmother, Overseer",
    timeRemaining: "47h 12m",
    type: "boss",
  },
  {
    name: "Friday Tribe vs Tribe Tournament",
    description: "6-man bracket elimination",
    timeRemaining: "71h 34m",
    type: "pvp",
  },
  {
    name: "Weekend Raid Window",
    description: "72h PvP free-for-all across cluster",
    timeRemaining: "95h 18m",
    type: "raid",
  },
  {
    name: "White Flag Expiry Alert",
    description: "3 tribes losing protection",
    timeRemaining: "18h 42m",
    type: "warning",
  },
];

export const TRIBE_REGISTRATIONS = [
  {
    id: 1,
    tribeName: "Dragon Slayers",
    leader: "DragonHunter42",
    requestedMaps: ["Ragnarok", "Genesis 2"],
    size: "6-man",
    status: "pending",
  },
  {
    id: 2,
    tribeName: "Primal Fury",
    leader: "AlphaWarrior",
    requestedMaps: ["The Island", "Extinction", "Aberration"],
    size: "unlimited",
    status: "pending",
  },
  {
    id: 3,
    tribeName: "Tek Empire",
    leader: "TekMaster99",
    requestedMaps: ["Genesis Part 1"],
    size: "6-man",
    status: "pending",
  },
];

export const PVP_ACTIVITY_DATA = [
  { day: "Day 1", kills: 234, deaths: 45 },
  { day: "Day 5", kills: 456, deaths: 67 },
  { day: "Day 10", kills: 567, deaths: 78 },
  { day: "Day 15", kills: 789, deaths: 89 },
  { day: "Day 20", kills: 891, deaths: 56 },
  { day: "Day 25", kills: 1023, deaths: 34 },
  { day: "Day 30", kills: 1245, deaths: 23 },
];

export const DINO_TAMES_DATA = [
  { name: "Rex", count: 12487, color: "#00FF9D" },
  { name: "Shadowmane", count: 8912, color: "#8b5cf6" },
  { name: "Wyvern", count: 4567, color: "#ff8c42" },
  { name: "Corrupted Giga", count: 2341, color: "#FF0033" },
  { name: "Mek", count: 1876, color: "#00FFFF" },
];

export const MAP_CONTROL_DATA = [
  { map: "Extinction", control: 98, color: "#FF0033" },
  { map: "Aberration", control: 100, color: "#00FFFF" },
  { map: "Ragnarok", control: 94, color: "#a855f7" },
  { map: "Genesis 2", control: 96, color: "#8b5cf6" },
  { map: "Others", control: 89, color: "#00FF9D" },
];

export const BREEDING_VAULT = [
  {
    dinoType: "Rex",
    mutations: "12 melee + 7 health",
    lineage: "Alpha Rex Line 47",
    fertility: "Breeding",
    location: "Main Base, The Island",
    melee: 1245,
  },
  {
    dinoType: "Shadowmane",
    mutations: "15 melee + 10 stamina",
    lineage: "Shadow Line 23",
    fertility: "Ready",
    location: "Cave Base, Aberration",
    melee: 987,
  },
  {
    dinoType: "Giganotosaurus",
    mutations: "20 melee + 5 health",
    lineage: "Giga Destroyer Line 89",
    fertility: "Cooldown",
    location: "Desert FOB, Extinction",
    melee: 1876,
  },
];

export const ALLIANCES = [
  {
    name: "Steel Brotherhood",
    members: 43,
    sharedElement: 234567,
    status: "Active",
    relationship: "Trusted",
  },
  {
    name: "Primal Order",
    members: 38,
    sharedElement: 156789,
    status: "Active",
    relationship: "Allied",
  },
  {
    name: "Void Covenant",
    members: 52,
    sharedElement: 0,
    status: "Pending Merge",
    relationship: "Negotiating",
  },
];

export const RIVAL_INTEL = [
  {
    tribeName: "BloodReign",
    baseLocation: "Desert Cave, Scorched Earth",
    threat: 87,
    estimatedLoot: 145000,
    lastActivity: "Moved 47 Gigas to cave base",
    intelligence: "High priority target - vulnerable at night",
  },
  {
    tribeName: "ShadowLegion",
    baseLocation: "Crystal Cave, Aberration",
    threat: 72,
    estimatedLoot: 98000,
    lastActivity: "Lost 34 Rex in failed raid",
    intelligence: "Weakened defenses, good raid opportunity",
  },
];
