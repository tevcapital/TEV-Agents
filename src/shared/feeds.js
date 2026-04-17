const GN = (q) => `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-US&gl=US&ceid=US:en`;

const FEEDS = {
  GERSTNER: [GN('"Brad Gerstner" Altimeter'), GN('Altimeter Capital')],
  SAYLOR: [GN('"Michael Saylor" Bitcoin'), GN('Strategy MSTR Bitcoin treasury')],
  DRUCK: [GN('"Stanley Druckenmiller" macro'), GN('Duquesne Family Office')],
  MUSK: [GN('"Elon Musk" Tesla xAI'), GN('SpaceX Starship')],
  HUANG: [GN('"Jensen Huang" NVIDIA'), GN('NVIDIA GPU data center')],
  PATEL: [GN('"Dylan Patel" SemiAnalysis'), GN('semiconductor supply chain TSMC')],
  KARPATHY: [GN('"Andrej Karpathy" AI'), GN('Eureka Labs LLM')],
  MARKS: [GN('"Howard Marks" Oaktree memo'), GN('Oaktree Capital credit')],
  RUBIN: [GN('"Rick Rubin" producer'), GN('"The Creative Act" Rubin')]
};

module.exports = { FEEDS };
