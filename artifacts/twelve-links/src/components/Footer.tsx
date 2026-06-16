import { Link } from "wouter";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            
            {/* ── Logo Block ── */}
            <div className="flex items-center gap-3 mb-4">
               <img 
            src="/Logo.jpg" 
              alt="12 Links Logo" 
              className="w-9 h-9 object-contain transition-transform group-hover:scale-105" 
            />
              <span className="text-3xl font-bold tracking-tighter text-white block">
                12<span className="text-[#00FF88]">Links</span>
              </span>
            </div>
            
            <p className="text-gray-400 max-w-sm mb-6">
              Connecting Africa's tech talent with global opportunities. The future of technology delivery.
            </p>
            
            {/* ── Real Social Icons ── */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition-all hover:scale-105"
              >
                <span className="sr-only">GitHub</span>
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* ── Navigation Links ── */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-[#00FF88] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#00FF88] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#00FF88] transition-colors">Services</Link></li>
              <li><Link href="/industries" className="hover:text-[#00FF88] transition-colors">Industries</Link></li>
              <li><Link href="/contact" className="hover:text-[#00FF88] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* ── Subscription Form ── */}
          <div>
            <h4 className="text-white font-bold mb-6">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">Get updates on our platform and opportunities.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF88]/50 w-full" 
              />
              <button 
                type="submit" 
                className="bg-[#00FF88] text-black px-4 py-2 rounded-md text-sm font-bold uppercase hover:bg-[#00FF88]/80 transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        {/* ── Bottom Info Bar ── */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>© 2026 12 Links. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#FFB800]">Proudly South African</span>
            <span className="hidden sm:inline">|</span>
            <span>Johannesburg, ZA</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
