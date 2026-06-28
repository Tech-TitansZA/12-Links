import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { User, CheckCircle2, Target, Layers, TrendingUp, ChevronDown, ArrowRight } from "lucide-react";

export default function About() {
  const [storyExpanded, setStoryExpanded] = useState(false);

  const team = [
    { name: "Mohohoma M.", role: "Data Scientist & CEO", bio: "Visionary leader driving Africa's tech revolution, leveraging data science to bridge the gap between potential and opportunity.", color: "from-green-500 to-emerald-700" , image: "/team/tebello.jpg" },
    { name: "Ngwenya N.", role: "AI Engineer & CTO", bio: "Architect of scalable systems, designing the intelligent models and technical backbone of the 12 Links platform.", color: "from-yellow-400 to-orange-600" , image: "/team/nkosinathi-ngwenya.jpeg" },
    { name: "Mpoka J.", role: "Software Engineer & Project Lead", bio: "Guiding the development lifecycle and crafting intuitive, high-performance user interfaces that bring product vision to life.", color: "from-blue-500 to-indigo-700" , image: "/team/jacky-mpoka.jpeg" },
    { name: "Mageza L.", role: "Cybersecurity Engineer & CFO", bio: "Fortifying platform infrastructure against modern vulnerabilities while strategically managing financial resources, funding initiatives, and company compliance.", color: "from-purple-500 to-violet-700" , image: "/team/lesego-mageza.jpeg" },
    { name: "George L.", role: "Security Architect & COO", bio: "Designing robust security frameworks to protect platform integrity, while orchestrating internal operations and processes to ensure flawless day-to-day execution.", color: "from-pink-500 to-rose-700" , image: "/team/ghost.jpeg" },
    { name: "Mpayipheli S.", role: "Software Developer & HOP", bio: "Building highly interactive, seamless client-side applications while forging strategic external partnerships and affiliate networks to drive platform expansion", color: "from-red-500 to-orange-600" , image: "/team/sairo.jpg" },
    { name: " Aphane S.", role: "Data Scientist & CMO", bio: "Leveraging complex datasets and predictive models to engineer data-driven marketing campaigns, accelerating user acquisition and brand growth", color: "from-teal-500 to-green-700" , image: "/team/zila.jpg" }
  ];

  const keyFacts = [
    { label: "Founded", value: "2026" },
    { label: "Headquartered", value: "Pretoria" },
    { label: "Co-Founders", value: "7 Students" },
    { label: "Mission", value: "Pan-African" },
  ];

  const deepDive = [
    {
      title: "Our Verification Standard",
      body: "Every engineer on a 12 Links delivery team has completed real project deliverables, not just passed assessments. We verify by output, not by CV."
    },
    {
      title: "Our Delivery Blueprint",
      body: "We scope every engagement with a business requirements checklist, a milestone plan with success metrics, and delivery artifact templates before a single line of code is written."
    },
    {
      title: "Our Economics",
      body: "We operate on a transparent, milestone-based pricing model. Clients know exactly what they're paying for at every stage. No hidden costs."
    },
    {
      title: "Our Commitment",
      body: "We stand behind every delivery with a post-deployment performance audit and a support window — because we measure success by your outcomes, not ours."
    },
  ];

  return (
    <div className="pb-24">
      {/* Top Hero */}
      <section className="pt-24 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#00FF88]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="relative inline-block">
                12 Links
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#00FF88] rounded-full shadow-[0_0_10px_#00FF88]" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Building the future of technology delivery from the heart of Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-white/5 bg-card/30 py-6 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-mono text-[#00FF88]">
          <span>7 Co-Founders</span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span>5+ Industries</span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span>15+ AI Solutions</span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span>End-to-End Delivery</span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span>Pretoria, SA</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* ── Our Story ── */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10">Our Story</h2>
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Key facts sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {keyFacts.map((f) => (
                <div key={f.label} className="flex items-stretch gap-4 bg-card/40 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors">
                  <div className="w-1 bg-[#00FF88] rounded-l-xl shrink-0" />
                  <div className="py-4 pr-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF88] mb-1">{f.label}</p>
                    <p className="text-white font-bold text-lg">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Story text */}
            <div className="lg:col-span-3">
              <div className="space-y-5 text-gray-300 leading-relaxed font-light text-lg">
                <p>
                  12 Links was founded on a single conviction: Africa's technology sector deserves world-class software delivery — built here, for here. Seven students from a South African university set out to create something different: an end-to-end technology delivery company that combines verified engineering talent with structured, accountable delivery.
                </p>
                <p>
                  The name '12 Links' is not accidental. A chain is only as strong as each individual link. We approach every client engagement the same way — with every discipline, from engineering to project management to quality assurance, pulling together with equal commitment.
                </p>
                <p>
                  Today, 12 Links operates as a full-service technology delivery company. We do not just write code — we solve problems, deliver outcomes, and measure impact. Our clients receive a dedicated team, a structured delivery blueprint, and complete transparency from day one.
                </p>
              </div>

              {/* Learn More toggle */}
              <button
                onClick={() => setStoryExpanded(!storyExpanded)}
                className="mt-8 inline-flex items-center gap-2 border border-[#00FF88]/40 text-[#00FF88] px-6 py-2.5 rounded-lg hover:bg-[#00FF88]/8 transition-all text-sm font-bold uppercase tracking-wider"
              >
                {storyExpanded ? "Show Less" : "Learn More"}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${storyExpanded ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {storyExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 grid sm:grid-cols-2 gap-5">
                      {deepDive.map((d, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="bg-card/60 border border-white/8 rounded-xl p-6 hover:border-[#00FF88]/20 transition-colors"
                        >
                          <h4 className="text-white font-bold mb-2 text-sm">{d.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{d.body}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── Our Mission ── */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">We exist to deliver measurable technology outcomes for our clients — not to sell software, but to solve problems.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Target,
                title: "Client-Driven Delivery",
                body: "Every project starts with your goals. We don't sell packages — we listen, scope, and build exactly what your business needs with measurable success criteria."
              },
              {
                Icon: Layers,
                title: "End-to-End Accountability",
                body: "From first consultation to post-deployment audit, we manage the entire delivery. You get a single point of accountability for the whole engagement."
              },
              {
                Icon: TrendingUp,
                title: "Measurable Business Impact",
                body: "We don't just deliver code. We deliver dashboards, reports, and ROI metrics so you can see — and prove — the value of every investment."
              },
            ].map(({ Icon, title, body }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-xl border border-white/5 hover:border-[#00FF88]/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00FF88]/5 rounded-full blur-2xl group-hover:bg-[#00FF88]/10 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 text-[#00FF88] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Why Choose 12 Links ── */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white">Why Choose 12 Links?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Results-Guaranteed Delivery",
                body: "Our milestone-based model means you only approve and pay for work that meets agreed criteria. No surprises, no scope creep."
              },
              {
                title: "Industry-Specific Expertise",
                body: "We've built solutions for Fintech, AgriTech, HealthTech, Education, and Manufacturing. Our blueprints are designed for African data realities and regulatory environments."
              },
              {
                title: "Full-Stack Capability",
                body: "From AI model development to mobile apps to data pipelines — we cover the full technology stack. One partner. Complete capability."
              },
              {
                title: "Dedicated Project Lead",
                body: "Every client gets a dedicated lead who manages the team, communicates progress, and is accountable to you — not just a Slack channel."
              },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 p-8 rounded-xl border border-white/5 hover:border-[#00FF88]/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00FF88] shrink-0" /> {item.title}
                </h3>
                <p className="text-gray-400 pl-8">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Builders</h2>
            <p className="text-gray-400">7 students. 1 mission. Built from Johannesburg, South Africa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 border border-white/5 p-6 rounded-xl text-center hover:border-[#00FF88]/30 transition-colors group"
              >
                {/* ── Updated Photo Circle Container ── */}
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.color} mb-6 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden relative`}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-white/50" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#00FF88] text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
            <div className="bg-card/20 border border-white/5 border-dashed p-6 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-sm text-center italic">"7 passionate students. 1 mission. Infinite potential."</p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center bg-card border border-white/10 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to solve your biggest technology challenge?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="neon-border bg-[#00FF88]/10 text-[#00FF88] hover:bg-[#00FF88]/20 px-8 py-4 rounded-md font-bold uppercase tracking-widest transition-all w-full sm:w-auto flex items-center justify-center gap-2 group">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="border border-white/20 text-white hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-md font-bold uppercase tracking-widest transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              Explore Services →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
