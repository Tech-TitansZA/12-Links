import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Leaf, HeartPulse, Factory, BookOpen, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);

  const industries = [
    {
      title: "Fintech & Financial Services",
      gradient: "from-blue-800 via-blue-900 to-slate-900",
      icon: TrendingUp,
      bullets: ["Fraud detection", "Cashflow forecasting", "Credit scoring"],
      problem: "Low financial inclusion, high fraud rates, and fragmented payment systems across Africa limit economic participation for millions.",
      solutions: [
        "AI credit scoring using mobile money data",
        "Real-time fraud detection for digital payments",
        "Unified payment gateways combining multiple payment methods",
        "Automated cashflow forecasting for SMEs"
      ],
      impact: "Reduce fraud losses by up to 35% using ML-powered transaction scoring. Increase loan approval accuracy by 28% with alternative credit data."
    },
    {
      title: "Agriculture & AgriTech",
      gradient: "from-green-800 via-green-900 to-slate-900",
      icon: Leaf,
      bullets: ["Satellite monitoring", "Smart irrigation", "Crop intelligence"],
      problem: "African farmers face climate volatility, limited market access, and lack of real-time data tools — reducing crop yields and food security.",
      solutions: [
        "Satellite crop monitoring and yield forecasting",
        "IoT-based smart irrigation systems",
        "Agricultural marketplace platforms",
        "Soil health AI diagnostics"
      ],
      impact: "Increase crop yield prediction accuracy by 40%. Reduce water usage by up to 30% through precision irrigation algorithms."
    },
    {
      title: "Healthcare & MedTech",
      gradient: "from-red-800 via-red-900 to-slate-900",
      icon: HeartPulse,
      bullets: ["Workflow automation", "Equipment monitoring", "Diagnostics support"],
      problem: "Healthcare systems in Africa are overburdened with limited diagnostic capacity, poor inventory management, and inadequate telemedicine infrastructure.",
      solutions: [
        "Telemedicine platform development",
        "AI-powered diagnostic support tools",
        "Drug and medical supply inventory management",
        "Patient workflow automation"
      ],
      impact: "Reduce diagnostic wait times by 50%. Improve drug stockout prevention by 60% with predictive inventory management."
    },
    {
      title: "Manufacturing & Automation",
      gradient: "from-orange-800 via-orange-900 to-slate-900",
      icon: Factory,
      bullets: ["Predictive maintenance", "Quality inspection", "Process optimisation"],
      problem: "African manufacturers struggle with unplanned downtime, manual quality control, and inefficient supply chain visibility — costing millions in lost productivity.",
      solutions: [
        "Predictive maintenance using sensor data and ML",
        "Automated visual quality inspection",
        "Supply chain tracking and optimization",
        "Production line digital twin modeling"
      ],
      impact: "Reduce unplanned downtime by 45%. Improve quality inspection accuracy by 38% with computer vision systems."
    },
    {
      title: "Education & E-Learning",
      gradient: "from-purple-800 via-purple-900 to-slate-900",
      icon: BookOpen,
      bullets: ["Adaptive learning", "Assessment automation", "Content recommendation"],
      problem: "Africa's education sector faces quality gaps, teacher shortages, and lack of personalized learning tools — limiting student outcomes at scale.",
      solutions: [
        "Adaptive learning platforms tailored to individual needs",
        "Automated assessment and grading systems",
        "AI-driven content recommendation",
        "School management systems"
      ],
      impact: "Improve student engagement by 55% through personalized content delivery. Reduce teacher administrative burden by 40%."
    }
  ];

  const activeInd = selectedIndustry !== null ? industries[selectedIndustry] : null;

  const accentColors = ["bg-blue-400", "bg-green-400", "bg-red-400", "bg-orange-400", "bg-purple-400"];

  return (
    <div className="pb-24 bg-[#0A0A0F] min-h-screen">
      {/* Scrolling Ticker */}
      <div className="w-full bg-[#00FF88]/10 border-y border-[#00FF88]/20 overflow-hidden py-2 flex whitespace-nowrap">
        <motion.div
          className="flex gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#00FF88]"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {Array(4).fill("FINTECH · AGRITECH · HEALTHTECH · EDUCATION · MANUFACTURING · AUTOMATION SYSTEMS · DATA INTELLIGENCE · AI ENGINEERING · STUDENT-LED INNOVATION · AFRICAN SCALE · ").map((txt, i) => (
            <span key={i}>{txt}</span>
          ))}
        </motion.div>
      </div>

      {/* Page Hero */}
      <section className="pt-20 pb-16 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#00FF88] mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-8">
            Click a tile to read the problem summary, solutions, and expected impact for each sector.
          </p>
          <div className="w-24 h-1 bg-[#00FF88] mx-auto rounded-full shadow-[0_0_10px_#00FF88]" />
        </motion.div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedIndustry(idx)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-[#12141D] border border-white/10 hover:border-[#00FF88]/50 transition-colors shadow-lg"
            >
              <div className={`h-[200px] bg-gradient-to-b ${ind.gradient} relative overflow-hidden flex items-center justify-center`}>
                <ind.icon className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141D] to-transparent" />
              </div>
              <div className="p-6 relative z-10 -mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">{ind.title}</h3>
                <ul className="space-y-2">
                  {ind.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className={`flex items-center gap-2 text-sm text-gray-300 font-medium bg-white/5 rounded-full px-3 py-1 w-fit`}>
                      <span className={`w-2 h-2 rounded-full ${accentColors[idx]}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndustry !== null && activeInd && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0F111A] rounded-2xl border border-white/10 shadow-2xl shadow-black/80 overflow-hidden z-10"
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{activeInd.title}</h2>
                  <button onClick={() => setSelectedIndustry(null)} className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#00FF88] font-bold uppercase tracking-wider text-sm mb-2">Problem:</h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{activeInd.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[#00FF88] font-bold uppercase tracking-wider text-sm mb-2">Solutions:</h4>
                    <ul className="space-y-2">
                      {activeInd.solutions.map((sol, s) => (
                        <li key={s} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                          <span className="text-[#00FF88] mt-1 shrink-0">•</span> {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                    <h4 className="text-[#FFB800] font-bold uppercase tracking-wider text-sm mb-2">Impact:</h4>
                    <p className="text-white font-medium italic text-sm sm:text-base">{activeInd.impact}</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <Link href="/contact" className="bg-[#00FF88] text-black text-center px-6 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-[#00FF88]/90 transition-colors w-full sm:w-auto">
                    Request Proposal
                  </Link>
                  <button onClick={() => setSelectedIndustry(null)} className="border border-white/20 text-white px-6 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-white/5 transition-colors w-full sm:w-auto">
                    Dismiss
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Bottom section ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "5+",    label: "Industries Served",      color: "#00FF88" },
            { number: "15+",   label: "Solution Blueprints",    color: "#FFB800" },
            { number: "100%",  label: "African-Built",          color: "#00FF88" },
            { number: "24h",   label: "Proposal Turnaround",    color: "#FFB800" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/50 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors"
            >
              <div className="text-4xl font-black mb-2" style={{ color: stat.color }}>{stat.number}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Don't see your industry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#00FF88]/10 via-transparent to-[#FFB800]/10 border border-white/10 rounded-2xl p-10 md:p-14 text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't see your industry?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            We build custom solutions for any sector. Share your challenge and we'll design a blueprint specifically for your business context, regulatory environment, and growth goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00FF88] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#00FF88]/90 transition-all text-sm uppercase tracking-wider"
          >
            Request a Custom Proposal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Our approach */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Our Approach to Every Industry</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Industry Discovery",
                desc: "We begin every engagement with deep discovery — learning your sector's regulatory constraints, data environments, and competitive dynamics before touching any code."
              },
              {
                step: "02",
                title: "Blueprint Design",
                desc: "Our industry blueprints define the exact solution architecture, data requirements, integration points, and compliance checkpoints — unique to your sector."
              },
              {
                step: "03",
                title: "Measured Delivery",
                desc: "We track industry-specific KPIs throughout delivery and report on real metrics — fraud reduction rates, yield improvement percentages, diagnostic wait time changes — not just lines of code."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-card/50 border border-white/5 p-8 rounded-xl hover:border-[#00FF88]/20 transition-colors overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.04] select-none">{item.step}</div>
                <div className="text-[#00FF88] font-mono text-sm font-bold mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
