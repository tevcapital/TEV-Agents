const AGENTS = [
  { id: 'GERSTNER', name: 'Brad Gerstner', type: 'research', company: 'Altimeter Capital' },
  { id: 'SAYLOR', name: 'Michael Saylor', type: 'research', company: 'Strategy (MSTR)' },
  { id: 'DRUCK', name: 'Stanley Druckenmiller', type: 'research', company: 'Duquesne Family Office' },
  { id: 'MUSK', name: 'Elon Musk', type: 'research', company: 'Tesla / SpaceX / xAI' },
  { id: 'HUANG', name: 'Jensen Huang', type: 'research', company: 'NVIDIA' },
  { id: 'PATEL', name: 'Dylan Patel', type: 'research', company: 'SemiAnalysis' },
  { id: 'KARPATHY', name: 'Andrej Karpathy', type: 'research', company: 'Eureka Labs' },
  { id: 'MARKS', name: 'Howard Marks', type: 'research', company: 'Oaktree Capital' },
  { id: 'RUBIN', name: 'Rick Rubin', type: 'research', company: 'Shangri-La / Def Jam' },
  { id: 'CHIEF', name: 'Chief', type: 'chief', company: 'TEV Agents' },
  { id: 'DEPUTY', name: 'Deputy', type: 'tension', company: 'TEV Agents' }
];

const RESEARCH_IDS = AGENTS.filter((a) => a.type === 'research').map((a) => a.id);

module.exports = { AGENTS, RESEARCH_IDS };
