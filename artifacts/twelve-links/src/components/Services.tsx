import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Brain, Database, Smartphone, BarChart3, Users, ChevronDown, ClipboardList, UserCheck, GitBranch, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const services = [
    {
      title: "Custom Software & AI Development",
      gradient: "from-blue-900 to-cyan-900",
      icon: Code2,
      detail: "We design and build custom software solutions powered by artificial intelligence. From intelligent automation to full-stack applications, our verified developers deliver production-ready software that solves real business problems. Our development process follows a blueprint-driven approach with milestone-based delivery and client approval gates.",
      features: ["AI-powered automation", "Full-stack web & mobile apps", "API development & integration", "Machine learning model deployment"]
    },
    {
      title: "Tech & AI Consulting",
      gradient: "from-purple-900 to-indigo-900",
      icon: Brain,
      detail: "Strategic technology consulting to help organizations navigate the AI landscape. We assess your current systems, identify automation opportunities, design AI roadmaps, and guide your team through implementation — from proof-of-concept to production deployment.",
      features: ["AI readiness assessment", "Technology roadmap design", "Proof-of-concept development", "Digital transformation strategy"]
    },
    {
      title: "Information Management Solutions",
      gradient: "from-teal-900 to-green-900",
      icon: Database,
      detail: "Comprehensive data engineering, analytics infrastructure, and information management systems. We help organizations collect, store, process, and derive actionable insights from their data — building pipelines, dashboards, and reporting systems that drive informed decision-making.",
      features: ["Data pipeline architecture", "Business intelligence dashboards", "Database design & optimization", "Real-time analytics"]
    },
    {
      title: "Mobile App Development",
      gradient: "from-orange-900 to-red-900",
      icon: Smartphone,
      detail: "High-performance native and cross-platform mobile applications for iOS and Android. Our mobile development team builds intuitive, scalable apps with beautiful UX — from MVP to enterprise-scale solutions — delivered with full source code and documentation.",
      features: ["iOS & Android development", "React Native cross-platform", "UI/UX design included", "App Store deployment support"]
    },
    {
      title: "AI Data Analysis",
      gradient: "from-cyan-900 to-blue-900",
      icon: BarChart3,
      detail: "Advanced data analysis powered by machine learning and statistical modeling. We turn raw data into predictive models, pattern recognition systems, and automated decision engines — giving your organization a competitive intelligence advantage driven by real evidence.",
      features: ["Predictive modeling", "Natural language processing", "Computer vision", "Fraud detection systems"]
    },
    {
      title: "Technology Partnership",
      gradient: "from-green-900 to-emerald-900",
      icon: Users,
      detail: "Long-term technology partnerships for businesses that need an accountable, embedded engineering capability. We provide ongoing development, maintenance, and strategic technology leadership — acting as your external CTO and delivery team in one.",
      features: ["Ongoing development & support", "Strategic tech leadership", "Product roadmap planning", "Team augmentation"]
    }
  ];

  const clientBenefits = [
    {
      icon: ClipboardList,
      title: "Scoped Blueprint",
      desc: "A detailed business requirements document, milestone plan, and success metrics before any work begins."
    },
    {
      icon: UserCheck,
      title: "Dedicated Lead",
      desc: "A single accountable project lead who manages your team, communicates daily, and is your one point of contact."
    },
    {
      icon: GitBranch,
      title: "Milestone Delivery",
      desc: "Work is delivered in approved milestones. You review and sign off before the next phase begins."
    },
    {
      icon: ShieldCheck,
      title: "Compliance Review",
      desc: "Every project includes a compliance and security review pathway to ensure your solution meets regulatory standards."
    },
    {
      icon: BarChart3,
      title: "Impact Dashboard",
      desc: "ROI and KPI dashboards track delivery metrics, performance, and business outcomes in real time."
    },
    {
      icon: Headphones,
      title: "Post-Launch Support",
      desc: "A dedicated support and performance audit window after deployment — we don't disappear after go-live."
    },
  ];

  return (
    <div className="pb-24 bg-[#0A0A0F] min-h-screen">
      {/* Page Hero */}
      <section className="pt-24 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#00FF88]/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-8">
            End-to-end technology delivery, consulting, and AI solutions — engineered for African business realities.
          </p>
          <div className="w-24 h-1 bg-[#00FF88] mx-auto rounded-full shadow-[0_0_10px_#00FF88]" />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#12141D] rounded-xl overflow-hidden border border-white/10 flex flex-col shadow-xl shadow-black/50 hover:border-white/20 transition-colors"
            >
              <div className={`h-40 bg-gradient-to-br ${srv.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                <srv.icon className="w-16 h-16 text-white opacity-90 relative z-10" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">{srv.title}</h3>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded === idx ? "max-h-[500px] mb-4 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{srv.detail}</p>
                  <ul className="space-y-2">
                    {srv.features.map((feat, fidx) => (
                      <li key={fidx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-1.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="text-[#00FF88] text-sm font-bold uppercase tracking-wider flex items-center gap-1 hover:text-white transition-colors"
                  >
                    Details <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded === idx ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Clients Get */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">What Every Client Gets</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Every engagement comes with these delivery standards — regardless of project size.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientBenefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card/50 border border-white/8 rounded-xl p-6 hover:border-[#00FF88]/25 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mb-5 group-hover:bg-[#00FF88]/15 transition-colors">
                <b.icon className="w-5 h-5 text-[#00FF88]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to work with a team that delivers?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00FF88] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#00FF88]/90 transition-all uppercase tracking-wider">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/industries" className="border border-white/20 text-white hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all">
            View Industries →
          </Link>
        </div>
      </section>
    </div>
  );
}
