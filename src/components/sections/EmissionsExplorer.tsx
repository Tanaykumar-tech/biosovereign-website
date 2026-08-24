import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  Factory,
  Plane,
  Car,
  Home,
  Leaf,
  Globe2,
  BarChart3,
  GitCompare,
  Play,
  Pause,
  ArrowRight,
  TrendingUp,
  Activity,
  Zap,
} from 'lucide-react';

const tabs = [
  { id: 'emissions', label: 'Emissions', icon: Activity },
  { id: 'map', label: 'Map', icon: Globe2 },
  { id: 'sectors', label: 'Sectors', icon: BarChart3 },
  { id: 'comparison', label: 'Comparison', icon: GitCompare },
  { id: 'what-now', label: 'What Now', icon: Zap },
];

const sectorColors = ['#2ecc71', '#3498db', '#f39c12', '#e74c3c', '#9b59b6'];

const sectorData = [
  { name: 'Energy', value: 73.2, icon: Zap },
  { name: 'Transport', value: 16.2, icon: Plane },
  { name: 'Industry', value: 5.2, icon: Factory },
  { name: 'Buildings', value: 3.1, icon: Home },
  { name: 'Agriculture', value: 2.3, icon: Leaf },
];

const comparisonData = [
  { year: 2020, businessAsUsual: 50, regenerative: 48 },
  { year: 2025, businessAsUsual: 53, regenerative: 45 },
  { year: 2030, businessAsUsual: 57, regenerative: 40 },
  { year: 2035, businessAsUsual: 61, regenerative: 34 },
  { year: 2040, businessAsUsual: 65, regenerative: 28 },
  { year: 2045, businessAsUsual: 69, regenerative: 22 },
  { year: 2050, businessAsUsual: 73, regenerative: 15 },
];

const regionData = [
  { name: 'Asia Pacific', value: 53, color: '#2ecc71' },
  { name: 'North America', value: 18, color: '#3498db' },
  { name: 'Europe', value: 15, color: '#f39c12' },
  { name: 'Latin America', value: 8, color: '#e74c3c' },
  { name: 'Africa', value: 4, color: '#9b59b6' },
  { name: 'Oceania', value: 2, color: '#1abc9c' },
];

const formatNumber = (n: number) => {
  return Math.floor(n).toLocaleString('en-US');
};

export default function EmissionsExplorer() {
  const [activeTab, setActiveTab] = useState('emissions');
  const [year, setYear] = useState(2025);
  const [isPlaying, setIsPlaying] = useState(false);
  const [emissionsCounter, setEmissionsCounter] = useState(0);
  const [yearCounter, setYearCounter] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const playRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Live ticking emissions counter
  useEffect(() => {
    const basePerSecond = 2400; // tons of GHG per second (approx)
    const tick = () => {
      setEmissionsCounter((prev) => prev + basePerSecond * 0.1);
    };
    intervalRef.current = setInterval(tick, 100);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Year-to-date counter
  useEffect(() => {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const now = new Date();
    const elapsed = (now.getTime() - startOfYear.getTime()) / 1000;
    setYearCounter(elapsed * 2400 * 0.001 * 1000000); // scaled
  }, []);

  // Play/pause timeline
  useEffect(() => {
    if (isPlaying) {
      playRef.current = setInterval(() => {
        setYear((prev) => {
          if (prev >= 2050) {
            setIsPlaying(false);
            return 2050;
          }
          return prev + 1;
        });
      }, 300);
    } else {
      if (playRef.current) clearInterval(playRef.current);
    }
    return () => {
      if (playRef.current) clearInterval(playRef.current);
    };
  }, [isPlaying]);

  const projectedForYear = useCallback(() => {
    const baseline = 50;
    const growth = (year - 2020) * 0.8;
    return (baseline + growth) * 1e9;
  }, [year]);

  return (
    <section id="emissions" className="py-24 md:py-32 px-6 lg:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#061d14] to-[#04140e]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-[#2ecc71] uppercase tracking-widest">
            Interactive Data
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4">
            <span className="gradient-text">Global Emissions Explorer</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore real-time emissions data, sectoral breakdowns, and future scenarios — from
            business-as-usual to regenerative pathways.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl overflow-hidden"
        >
          {/* Tab bar */}
          <div className="flex items-center gap-1 p-2 overflow-x-auto scrollbar-hide border-b border-emerald-500/10 bg-[#04140e]/40">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#2ecc71] text-[#04140e]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel content */}
          <div className="p-6 md:p-10 min-h-[500px]">
            <AnimatePresence mode="wait">
              {/* EMISSIONS TAB */}
              {activeTab === 'emissions' && (
                <motion.div
                  key="emissions"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                  <div className="lg:col-span-2">
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                      Projected tons of GHG emissions in {year}
                    </p>
                    <div className="text-5xl md:text-7xl font-bold gradient-text text-glow-emerald mb-2 font-display tabular-nums">
                      {formatNumber(projectedForYear())}
                    </div>
                    <p className="text-lg text-gray-300">tons of CO₂ equivalent</p>

                    <div className="mt-10 p-5 rounded-2xl bg-[#04140e]/60 border border-emerald-500/10">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                        Emissions so far this year
                      </p>
                      <div className="text-2xl md:text-3xl font-bold text-[#34d97b] tabular-nums">
                        {formatNumber(yearCounter)}
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <TrendingUp size={16} className="text-red-400" />
                        <span className="text-sm text-gray-400">
                          Live counter · updating in real time
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-[#04140e]/60 border border-emerald-500/10">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                        Live Ticker
                      </p>
                      <div className="text-3xl font-bold text-[#2ecc71] tabular-nums">
                        {formatNumber(emissionsCounter)}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">tons since you opened this page</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#04140e]/60 border border-emerald-500/10">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                        Per Capita
                      </p>
                      <div className="text-3xl font-bold text-amber-400 tabular-nums">4.7t</div>
                      <p className="text-xs text-gray-500 mt-2">CO₂ per person / year (avg)</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2ecc71]/10 to-transparent border border-[#2ecc71]/20">
                      <p className="text-xs text-[#2ecc71] uppercase tracking-wider mb-2">
                        Regenerative Path
                      </p>
                      <p className="text-sm text-gray-300">
                        Switching to the regenerative scenario could reduce 2050 emissions by{' '}
                        <span className="text-[#2ecc71] font-bold">79%</span>.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* MAP TAB */}
              {activeTab === 'map' && (
                <motion.div
                  key="map"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative aspect-square rounded-2xl bg-[#04140e]/60 border border-emerald-500/10 overflow-hidden flex items-center justify-center">
                      {/* Stylized globe placeholder */}
                      <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0f3322] to-[#04140e] border-2 border-[#2ecc71]/30" />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                          className="absolute inset-0 rounded-full"
                        >
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute rounded-full bg-[#2ecc71]/20"
                              style={{
                                width: `${30 + i * 10}%`,
                                height: `${20 + i * 8}%`,
                                top: `${10 + i * 12}%`,
                                left: `${5 + i * 14}%`,
                              }}
                            />
                          ))}
                        </motion.div>
                        <div className="absolute inset-0 rounded-full shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.5)]" />
                      </div>
                      <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                        Interactive globe — replace with map component
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white mb-4">Emissions by Region</h3>
                      {regionData.map((region, idx) => (
                        <motion.div
                          key={region.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-4"
                        >
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm text-gray-300">{region.name}</span>
                              <span className="text-sm font-semibold text-white">
                                {region.value}%
                              </span>
                            </div>
                            <div className="h-2 rounded-full bg-[#04140e] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${region.value}%` }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: region.color }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SECTORS TAB */}
              {activeTab === 'sectors' && (
                <motion.div
                  key="sectors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Emissions by Sector</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sectorData} layout="vertical" margin={{ left: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#0f3322" />
                          <XAxis
                            type="number"
                            stroke="#4a7c65"
                            fontSize={12}
                            unit="%"
                          />
                          <YAxis
                            type="category"
                            dataKey="name"
                            stroke="#4a7c65"
                            fontSize={12}
                            width={80}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#04140e',
                              border: '1px solid rgba(46,204,113,0.3)',
                              borderRadius: '12px',
                              color: '#e0f2e9',
                            }}
                            formatter={(value) => [`${value}%`, 'Share']}
                          />
                          <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                            {sectorData.map((_, idx) => (
                              <Cell key={idx} fill={sectorColors[idx]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Sector Distribution</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sectorData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            innerRadius={60}
                            paddingAngle={3}
                          >
                            {sectorData.map((_, idx) => (
                              <Cell key={idx} fill={sectorColors[idx]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#04140e',
                              border: '1px solid rgba(46,204,113,0.3)',
                              borderRadius: '12px',
                              color: '#e0f2e9',
                            }}
                            formatter={(value) => [`${value}%`, 'Share']}
                          />
                          <Legend
                            wrapperStyle={{ fontSize: '12px', color: '#a0b8a8' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* COMPARISON TAB */}
              {activeTab === 'comparison' && (
                <motion.div
                  key="comparison"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    Business as Usual vs. Regenerative Pathway
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Projected global GHG emissions (GtCO₂e) — two futures, one choice.
                  </p>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={comparisonData} margin={{ top: 10, right: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#0f3322" />
                        <XAxis dataKey="year" stroke="#4a7c65" fontSize={12} />
                        <YAxis stroke="#4a7c65" fontSize={12} unit=" Gt" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#04140e',
                            border: '1px solid rgba(46,204,113,0.3)',
                            borderRadius: '12px',
                            color: '#e0f2e9',
                          }}
                          formatter={(value) => [`${value} GtCO₂e`, '']}
                        />
                        <Legend wrapperStyle={{ fontSize: '13px' }} />
                        <Bar
                          dataKey="businessAsUsual"
                          name="Business as Usual"
                          fill="#e74c3c"
                          radius={[6, 6, 0, 0]}
                        />
                        <Bar
                          dataKey="regenerative"
                          name="Regenerative"
                          fill="#2ecc71"
                          radius={[6, 6, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {/* WHAT NOW TAB */}
              {activeTab === 'what-now' && (
                <motion.div
                  key="what-now"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-3xl bg-[#2ecc71]/10 border border-[#2ecc71]/30 flex items-center justify-center mb-8">
                    <Zap size={40} className="text-[#2ecc71]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                    The Future Is Still Choosable
                  </h3>
                  <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
                    Every degree matters. Every decision compounds. The regenerative pathway is not
                    just possible — it is already being built by communities, innovators, and
                    ecosystems worldwide.
                  </p>
                  <a
                    href="#pillars"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2ecc71] text-[#04140e] font-semibold hover:bg-[#34d97b] transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] group"
                  >
                    Discover the Pathway
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Timeline slider */}
          <div className="p-6 md:p-8 border-t border-emerald-500/10 bg-[#04140e]/40">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Showing the future: Scenario — Business as Usual
                </p>
                <p className="text-lg font-semibold text-white mt-1">
                  Currently showing: <span className="text-[#2ecc71]">{year}</span>
                </p>
              </div>
              <button
                onClick={() => setIsPlaying((v) => !v)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2ecc71]/10 border border-[#2ecc71]/30 text-[#2ecc71] hover:bg-[#2ecc71]/20 transition-all duration-300"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>

            <input
              type="range"
              min={2020}
              max={2050}
              value={year}
              onChange={(e) => {
                setIsPlaying(false);
                setYear(Number(e.target.value));
              }}
              className="emissions-slider w-full"
            />

            <div className="flex items-center justify-between mt-3">
              {[2020, 2025, 2030, 2035, 2040, 2045, 2050].map((marker) => (
                <button
                  key={marker}
                  onClick={() => {
                    setIsPlaying(false);
                    setYear(marker);
                  }}
                  className={`text-xs transition-colors ${
                    year === marker ? 'text-[#2ecc71] font-bold' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {marker}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
