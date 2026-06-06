import React, { useEffect, useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkle, 
  Download,
  Github,
  Linkedin,
  Globe,
  Mail,
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Database,
  Brain,
  TrendingUp,
  MapPin,
  ChevronRight,
  ExternalLink,
  Layers,
  Terminal,
  Cpu,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [terminalTab, setTerminalTab] = useState<'profile' | 'skills' | 'goals'>('profile');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.title = "Farwa Khalid — Portfolio";
    
    // Simple intersection observer to update active nav state based on scroll
    const sections = ['home', 'about', 'projects', 'expertise', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(`${section}-section`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('2005fkhalid@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = () => {
    // 1. Create an invisible link element
    const link = document.createElement('a');
    
    // 2. Point it directly to the PDF file in your public folder
    link.href = '/Farwa_CV_4th_semester.pdf'; 
    
    // 3. Name the file exactly as you want it to appear when the user downloads it
    link.download = 'Farwa_Khalid_CV.pdf'; 
    
    // 4. Temporarily add the link to the screen, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Technologies lists representing Farwa's genuine dev stack
  const skillRow1 = [
    { name: 'React', icon: Code2, color: 'text-cyan-400' },
    { name: 'Python', icon: Terminal, color: 'text-amber-300' },
    { name: 'C++', icon: Code2, color: 'text-blue-500' },
    { name: 'FastAPI', icon: Cpu, color: 'text-emerald-400' },
    { name: 'Node.js', icon: Globe, color: 'text-green-500' },
    { name: 'SQL Databases', icon: Database, color: 'text-orange-400' },
    { name: 'Tailwind CSS', icon: Layers, color: 'text-sky-400' },
    { name: 'JavaScript ES6+', icon: Globe, color: 'text-yellow-400' },
  ];

  const skillRow2 = [
    { name: 'Scikit-learn', icon: Brain, color: 'text-orange-300' },
    { name: 'Azure Cloud', icon: Globe, color: 'text-sky-500' },
    { name: 'Jupyter', icon: NotebookIcon, color: 'text-orange-500' },
    { name: 'Plotly Analytics', icon: TrendingUp, color: 'text-fuchsia-400' },
    { name: 'Git & GitHub', icon: Github, color: 'text-white' },
    { name: 'Figma UI/UX', icon: Sparkle, color: 'text-purple-400' },
    { name: 'Machine Learning', icon: Brain, color: 'text-pink-400' },
    { name: 'Statistical Comping', icon: Terminal, color: 'text-indigo-400' },
  ];

  function NotebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={props.className}>
        <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z" />
        <path d="M6 6h10M6 10h10M6 14h10M6 18h10" />
      </svg>
    )
  }

  return (
    <div id="root-portfolio-container" className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-purple-500/20 selection:text-purple-200">
      
      {/* Decorative Aurora Background Blobs */}
      <div className="absolute top-0 left-[10%] w-[35vw] h-[35vw] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40vh] right-[10%] w-[40vw] h-[40vw] bg-amber-950/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[15%] w-[30vw] h-[30vw] bg-emerald-950/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* FIXED HEADER STICKY NAVIGATION */}
      <header id="portfolio-sticky-header" className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#050505]/75 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex justify-between items-center">
          
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-base sm:text-lg font-semibold tracking-wider uppercase bg-gradient-to-r from-white via-white to-white/65 bg-clip-text text-transparent cursor-pointer hover:opacity-85 select-none"
            >
              Farwa Khalid.
            </span>
          </div>

          {/* Desktop Links Group */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-wider font-medium text-white/55">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'Credentials' },
              { id: 'projects', label: 'Projects' },
              { id: 'expertise', label: 'Expertise' },
              { id: 'contact', label: 'Send Note' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => handleScrollTo(`${section.id}-section`)}
                className={`transition-all duration-200 cursor-pointer hover:text-white ${
                  activeSection === section.id ? 'text-white font-bold tracking-widest scale-105' : ''
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadCV}
              className="liquid-glass text-white text-[11px] sm:text-xs font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-white/5 active:scale-95 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
            >
              CV
              <Download className="h-3.5 w-3.5 text-white/85" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => handleScrollTo('contact-section')}
              className="hidden sm:inline-flex bg-white text-black text-xs font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-neutral-200 active:scale-95 transition-all duration-200 items-center gap-1 cursor-pointer"
            >
              Connect
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </div>

        </div>
      </header>

      {/* 1. HERO INTRO SECTION & HOVER PARALLAX CARICATURE */}
      <section 
        id="home-section" 
        className="relative min-h-[90vh] flex items-center pt-8 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Block: Bold Headline & Intro Statement */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/15 text-purple-300 text-xs font-medium tracking-wide">
              <Sparkle className="h-3 w-3 animate-spin duration-1000" strokeWidth={1.5} />
              Open to Opportunities &amp; Internships
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold tracking-tight leading-tight uppercase font-sans">
              Hi, I&apos;m <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-200 bg-clip-text text-transparent">Farwa</span>.
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-[22px] leading-relaxed font-light text-white/90">
              A Software Engineering Student building robust, beautiful full-stack web applications and intelligent machine learning systems.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-white/55 max-w-2xl">
              Currently pursuing my BSSE at Air University. I specialize in merging meticulous frontend architectures (React + Tailwind) with robust endpoint architectures (FastAPI) and clean data analytical engines.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <button
                onClick={() => handleScrollTo('projects-section')}
                className="bg-white text-black hover:bg-neutral-200 font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                Explore Projects
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                onClick={handleDownloadCV}
                className="liquid-glass text-white/90 hover:text-white hover:bg-white/5 border border-white/[0.08] font-medium px-6 py-3 rounded-full text-sm transition-all duration-205 inline-flex items-center gap-2 cursor-pointer"
              >
                Download Resume (CV)
                <Download className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Micro-coordinate footer block */}
            <div className="flex gap-6 items-center text-xs tracking-wider text-white/40 mt-6 pt-6 border-t border-white/[0.05] w-full">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-purple-500/80" />
                <span>Islamabad, Pakistan</span>
              </div>
              <span>&bull;</span>
              <div>
                <span>BSSE Semester 4</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Active Core Developer</span>
              </div>
            </div>

          </div>

          {/* Right Block: Interactive Terminal Window */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="w-full max-w-[440px] rounded-3xl bg-[#0b0b0d] border border-white/[0.06] shadow-[0_24px_64px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col">
              
              {/* Terminal Title Bar */}
              <div className="bg-[#121215] px-4 py-3 border-b border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-[11px] text-white/45 tracking-wide">
                  farwa_khalid@terminal: ~
                </div>
                <Terminal className="h-3.5 w-3.5 text-white/20" />
              </div>

              {/* Tab Selector inside terminal */}
              <div className="flex border-b border-white/[0.03] bg-[#0c0c0e]">
                {[
                  { id: 'profile', label: 'Identity' },
                  { id: 'skills', label: 'Stack' },
                  { id: 'goals', label: 'Philosophy' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setTerminalTab(tab.id as 'profile' | 'skills' | 'goals')}
                    className={`flex-1 py-2 text-[11px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                      terminalTab === tab.id 
                        ? 'bg-[#0f0f12] text-purple-400 font-bold border-b border-purple-500/40' 
                        : 'text-white/45 hover:text-white/85'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Terminal Tab Content Screen */}
              <div className="p-6 font-mono text-xs text-white/75 space-y-4 min-h-[224px] bg-[#09090b] text-left">
                {terminalTab === 'profile' && (
                  <div className="space-y-2 animate-fadeIn">
                    <p className="text-white/35">&gt; farwa.location</p>
                    <p className="text-purple-300">"Islamabad, Pakistan"</p>
                    <p className="text-white/35">&gt; farwa.education</p>
                    <p className="text-amber-200">"Air University (BSSE)"</p>
                    <p className="text-white/35">&gt; farwa.status</p>
                    <p className="text-emerald-400">"Active Core developer &amp; ML practitioner"</p>
                  </div>
                )}

                {terminalTab === 'skills' && (
                  <div className="space-y-3 animate-fadeIn">
                    <p className="text-white/35">&gt; farwa.get_stack()</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-white/90">
                      <div><span className="text-cyan-400">■</span> React / State</div>
                      <div><span className="text-amber-300">■</span> Python ML</div>
                      <div><span className="text-emerald-400">■</span> FastAPI Core</div>
                      <div><span className="text-blue-500">■</span> C++ Engine</div>
                      <div><span className="text-sky-400">■</span> Tailwind CSS</div>
                      <div><span className="text-fuchsia-400">■</span> Scikit-Learn</div>
                    </div>
                  </div>
                )}

                {terminalTab === 'goals' && (
                  <div className="space-y-2 animate-fadeIn">
                    <p className="text-white/35">&gt; farwa.philosophy</p>
                    <p className="text-purple-200 leading-relaxed italic">
                      "I believe that every challenge is an opportunity to gain knowledge and develop new skills."
                    </p>
                  </div>
                )}
              </div>

              {/* Terminal Footer Panel */}
              <div className="bg-[#101012] border-t border-white/[0.04] py-2.5 px-4 flex justify-between items-center text-[9px] font-mono text-white/35 select-none">
                <span>UTF-8</span>
                <span>Active Workstation</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. CORE ACADEMIC BIOGRAPHY & CERTIFICATIONS BENTO GRID */}
      <section 
        id="about-section" 
        className="py-20 sm:p-24 border-t border-white/[0.04] bg-[#080808]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col gap-4 text-left max-w-3xl mb-12 sm:mb-16">
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-[0.2em]">Academic Milestones</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold uppercase tracking-tight">
              My Academic Credentials
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              Equipped with deep foundational theory, software practices, and high-quality industrial certifications. Currently studying in Pakistan&apos;s leading Air University.
            </p>
          </div>

          {/* Interactive credentials grid side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Card 1: Air University Path */}
            <div className="rounded-3xl bg-[#0c0c0c] border border-white/[0.05] p-6 sm:p-8 flex flex-col justify-between hover:border-white/10 transition-colors duration-300 relative group overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-purple-500/5 rounded-full blur-[40px]" />
              
              <div>
                <div className="h-10 w-10 rounded-2xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-400 mb-6">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-[10px] tracking-widest font-bold uppercase text-purple-400 block mb-2">University Education</span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mb-1">Air University</h3>
                <span className="text-xs text-white/50 font-mono">BSSE (Software Engineering) &middot; 2024 - Present</span>
                
                <p className="text-xs sm:text-[13.5px] leading-relaxed text-white/60 mt-6 font-light">
                  Currently completing my 4th Semester with excellence. Focused coursework in Object-Oriented Software Design, Algorithm Engineering, and Object Databases.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between text-xs text-white/45 font-mono">
                <span>Location: Islamabad</span>
                <span>Active Student</span>
              </div>
            </div>

            {/* Card 2: Certifications & Mentorship */}
            <div className="rounded-3xl bg-[#0c0c0c] border border-white/[0.05] p-6 sm:p-8 flex flex-col justify-between hover:border-white/10 transition-colors duration-300 relative group overflow-hidden">
              <div className="absolute bottom-[-10%] left-[-10%] w-36 h-36 bg-amber-500/5 rounded-full blur-[40px]" />
              
              <div>
                <div className="h-10 w-10 rounded-2xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center text-amber-300 mb-6">
                  <Award className="h-5 w-5" />
                </div>
                <span className="text-[10px] tracking-widest font-bold uppercase text-amber-400 block mb-2">Qualifications &amp; Training</span>
                <h3 className="text-lg font-bold uppercase text-white mb-4">Certifications Summary</h3>

                <div className="space-y-4">
                  <div className="border-l-2 border-amber-500/30 pl-3">
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">6-Month AI Mentorship</h4>
                    <span className="text-[9.5px] font-mono text-amber-400/80 block">Codanics &middot; Top Tier</span>
                    <p className="text-[11px] text-white/50 leading-relaxed mt-1 font-light">
                      Applied methodologies in machine learning engineering pipelines with high performance.
                    </p>
                  </div>
                  <div className="border-l-2 border-amber-500/30 pl-3">
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">ATS Data Science Training</h4>
                    <span className="text-[9.5px] font-mono text-amber-400/80 block">Microsoft Azure Integrations</span>
                    <p className="text-[11px] text-white/50 leading-relaxed mt-1 font-light">
                      Built API cloud coordination backend pipelines on cloud architectures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CORE PROJECT PORTFOLIO SHOWCASE */}
      <section 
        id="projects-section" 
        className="py-24 border-t border-white/[0.04] bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 w-full">
            <div className="flex flex-col gap-4 text-left max-w-2xl">
              <span className="text-purple-400 text-xs font-semibold uppercase tracking-[0.2em]">Crafted Implementations</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold uppercase tracking-tight">
                My Core Projects
              </h2>
              <p className="text-white/60 text-sm sm:text-base font-light">
                Explore real, tangible software products from my system engineering repository, featuring live functional details and direct GitHub sources.
              </p>
            </div>
            
            <a 
              href="https://github.com/FarwaK05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="liquid-glass text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-white/5 active:scale-95 transition-all duration-200 inline-flex items-center gap-2"
            >
              Github Repositories
              <Github className="h-4 w-4" />
            </a>
          </div>

          {/* Majestic Stacked Projects List */}
          <div className="flex flex-col gap-8 w-full">
            
            {/* Project Card 1: E-Canteen */}
            <div className="group rounded-[32px] bg-[#0c0c0c] border border-white/[0.05] p-6 sm:p-10 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Micro High-Fidelity UI Screens of E-Canteen Mockups on Left */}
                <div className="lg:col-span-5 grid grid-cols-10 gap-3">
                  
                  {/* Screen 1: Sign-In Portal (Light Greenish Theme) */}
                  <div className="col-span-5 h-[170px] sm:h-[195px] rounded-2xl overflow-hidden relative border border-emerald-500/10 bg-slate-50 text-slate-800 p-2.5 sm:p-3 flex flex-col justify-between text-center group-hover:scale-[1.02] transition-transform duration-300">
                    {/* E-Canteen Logo & Welcome */}
                    <div className="flex flex-col items-center gap-0.5 mt-1">
                      {/* Logo Icon */}
                      <div className="h-4.5 w-4.5 rounded-lg bg-[#00966b] flex items-center justify-center text-white scale-90">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-black text-[#0f172a] leading-tight mt-1">E-Canteen</span>
                      <span className="text-[5px] text-slate-400 select-none">Sign in to your account</span>
                    </div>

                    {/* Role Tab Selector Mock */}
                    <div className="bg-slate-200/60 rounded-md p-0.5 grid grid-cols-2 gap-0.5 my-1">
                      <div className="bg-white rounded py-0.5 text-[5px] font-bold text-[#00966b] flex items-center justify-center gap-0.5 shadow-sm">
                        <span>🎓</span> Student
                      </div>
                      <div className="py-0.5 text-[5px] font-semibold text-slate-500 flex items-center justify-center gap-0.5">
                        <span>🛡️</span> Staff
                      </div>
                    </div>

                    {/* Compact Inputs */}
                    <div className="flex flex-col gap-1 text-left">
                      <div>
                        <span className="text-[4px] font-bold text-slate-500 capitalize">Student Email</span>
                        <div className="bg-sky-50/60 border border-sky-100 rounded px-1.5 py-0.5 text-[4.5px] font-mono text-slate-700 whitespace-nowrap overflow-hidden">
                          2500645@students.au...
                        </div>
                      </div>
                      <div>
                        <span className="text-[4px] font-bold text-slate-500 capitalize">Password</span>
                        <div className="bg-sky-50/60 border border-sky-100 rounded px-1.5 py-0.5 flex justify-between items-center">
                          <span className="text-[4px] text-slate-700 font-mono tracking-widest leading-none">••••••</span>
                          <span className="text-[4.5px] text-slate-400">👁️</span>
                        </div>
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="bg-[#00966b] text-white hover:bg-[#00805a] rounded-md py-0.5 text-[5.5px] font-bold tracking-wide flex items-center justify-center gap-0.5 mt-1 cursor-pointer">
                      <span>➔</span> Login as student
                    </div>

                    <div className="text-[4px] text-slate-405 leading-none select-none mt-1">
                      Don't have an account? <span className="text-[#00966b] font-semibold">Create account</span>
                    </div>
                  </div>

                  {/* Screen 2: Today's Menu Catalog (Client Menu Interface) */}
                  <div className="col-span-5 h-[170px] sm:h-[195px] rounded-2xl overflow-hidden relative border border-emerald-500/10 bg-[#f8fafc] text-slate-800 p-2.5 sm:p-3 flex flex-col justify-between text-left group-hover:scale-[1.02] transition-transform duration-300">
                    <div>
                      {/* Compact Header */}
                      <div className="flex justify-between items-center border-b border-slate-200/50 pb-1 mb-1">
                        <div>
                          <h4 className="text-[8.5px] font-extrabold text-[#0f172a] leading-none">Today's Menu</h4>
                          <span className="text-[4px] font-mono text-slate-400">9 items available</span>
                        </div>
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>

                      {/* Small Search Bar input */}
                      <div className="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[5px] text-slate-400 mb-1.5 flex items-center gap-1">
                        <span>🔍</span>
                        <span className="text-slate-300">Search food...</span>
                      </div>

                      {/* Pill selections */}
                      <div className="flex gap-0.5 overflow-hidden whitespace-nowrap text-[3.5px] font-bold mb-1.5">
                        <span className="bg-[#00966b] text-white px-1 py-0.2 rounded-md">All</span>
                        <span className="bg-slate-200 text-slate-600 px-1 py-0.2 rounded-md">Beverages</span>
                        <span className="bg-slate-200 text-slate-600 px-1 py-0.2 rounded-md">Desserts</span>
                        <span className="bg-slate-200 text-slate-600 px-1 py-0.2 rounded-md">Fast Food</span>
                      </div>

                      {/* Micro Compact Grid of Food items */}
                      <div className="grid grid-cols-2 gap-1 font-sans">
                        {/* Item A */}
                        <div className="bg-white rounded-md border border-slate-100 p-1 flex flex-col justify-between">
                          <img 
                            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=120&auto=format&fit=crop&q=80" 
                            alt="Fresh Juice" 
                            referrerPolicy="no-referrer"
                            className="w-full h-8 object-cover rounded-sm mb-0.5"
                          />
                          <span className="text-[5px] font-black leading-none text-slate-800 uppercase truncate">Fresh Juice</span>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-[5.5px] font-black text-[#00966b]">Rs 60</span>
                            <span className="bg-[#00966b] text-white text-[4px] px-1 rounded-sm scale-90 origin-right font-bold">+ Add</span>
                          </div>
                        </div>
                        {/* Item B */}
                        <div className="bg-white rounded-md border border-slate-100 p-1 flex flex-col justify-between">
                          <img 
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=120&auto=format&fit=crop&q=80" 
                            alt="Club Sandwich" 
                            referrerPolicy="no-referrer"
                            className="w-full h-8 object-cover rounded-sm mb-0.5"
                          />
                          <span className="text-[5px] font-black leading-none text-slate-800 uppercase truncate">Club Sandwich</span>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-[5.5px] font-black text-[#00966b]">Rs 130</span>
                            <span className="bg-[#00966b] text-white text-[4px] px-1 rounded-sm scale-90 origin-right font-bold">+ Add</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[4px] font-mono text-slate-400 mt-1 select-none">
                      <span>Checkout cart connected</span>
                      <span className="text-[#00966b] font-bold">🛒 1 item</span>
                    </div>
                  </div>

                  {/* Screen 3: Staff Operator Operations Panel */}
                  <div className="col-span-10 h-[140px] sm:h-[155px] rounded-2xl overflow-hidden relative border border-emerald-500/10 bg-[#f8fafc] text-slate-800 p-3 flex flex-col justify-between text-left group-hover:scale-[1.01] transition-transform duration-300 mt-1">
                    <div>
                      {/* Compact Dashboard Top Header */}
                      <div className="flex justify-between items-center border-b border-slate-200/60 pb-1.5 mb-2">
                        <div className="flex flex-col">
                          <h4 className="text-[9px] font-black text-slate-800 leading-none">Staff Dashboard</h4>
                          <span className="text-[4px] text-slate-400 font-mono mt-0.5 uppercase">Real-time canteen manager</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[5px] text-slate-500 font-mono">Operator: <strong className="text-slate-800">ADNAN (STAFF)</strong></span>
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                      </div>

                      {/* Metric Boxes row */}
                      <div className="grid grid-cols-4 gap-1.5 mb-2">
                        {[
                          { label: 'Unpaid', count: '1', color: 'border-amber-300 bg-amber-50 text-amber-700' },
                          { label: 'Verifying', count: '0', color: 'border-slate-200 bg-slate-50 text-slate-500' },
                          { label: 'In Kitchen', count: '3', color: 'border-emerald-300 bg-emerald-50 text-[#00966b]' },
                          { label: 'Today\'s Total', count: '0', color: 'border-slate-200 bg-slate-50 text-slate-700' }
                        ].map((m, idx) => (
                          <div key={idx} className={`border rounded-lg p-1 text-left flex flex-col justify-between ${m.color}`}>
                            <span className="text-[4.5px] font-mono font-bold uppercase tracking-wider">{m.label}</span>
                            <span className="text-[10px] font-bold leading-none mt-1">{m.count}</span>
                          </div>
                        ))}
                      </div>

                      {/* Incoming & Active Orders simulation lines */}
                      <div className="flex flex-col gap-1">
                        <div className="bg-white border border-slate-150 rounded-md p-1 flex justify-between items-center scale-95 origin-center">
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1">
                              <span className="text-[5.5px] font-mono font-bold text-slate-800">#0D5A</span>
                              <span className="bg-emerald-500/10 text-[#00966b] text-[4px] px-1 py-0.2 rounded font-bold uppercase scale-90 origin-left">Confirmed</span>
                            </div>
                            <span className="text-[4px] text-slate-500 leading-none">Student: Madiah | Items: 1x Chicken Biryani, 1x Daal Chawal</span>
                          </div>
                          <button className="bg-[#00966b] text-white text-[4.5px] py-0.5 px-2 rounded font-bold hover:bg-[#00805a]">
                            Start Preparing &rarr;
                          </button>
                        </div>
                        
                        <div className="bg-white border border-slate-150 rounded-md p-1 flex justify-between items-center scale-95 origin-center">
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1">
                              <span className="text-[5.5px] font-mono font-bold text-slate-800">#D872</span>
                              <span className="bg-sky-500/10 text-sky-700 text-[4px] px-1 py-0.2 rounded font-bold uppercase scale-90 origin-left">Ready for Pickup</span>
                            </div>
                            <span className="text-[4px] text-slate-500 leading-none">Student: Madiah | Items: 2x Chocolate Brownie</span>
                          </div>
                          <button className="bg-[#0f172a] text-white text-[4.5px] py-0.5 px-2 rounded font-bold hover:bg-slate-850">
                            Complete Order ✓
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[4px] font-mono text-slate-400 border-t border-slate-200/50 pt-1">
                      <span>Server Sync Latency: &lt; 15ms</span>
                      <span className="text-emerald-500 font-bold uppercase">Ready to prepare</span>
                    </div>
                  </div>

                </div>

                {/* Typography details on right */}
                <div className="lg:col-span-7 text-left flex flex-col gap-4 self-center justify-center">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-purple-400 text-xs tracking-wider uppercase bg-purple-500/10 px-2.5 py-1 rounded-md">01 — Full-Stack</span>
                    <span className="text-white/40 text-xs">&bull;</span>
                    <span className="text-white/50 text-xs uppercase font-semibold">Web Application</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                    E-Canteen Portal
                  </h3>
                  
                  <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                    Designed and engineered a complete digital ordering and queue administration system built to streamline school/college canteen transactions. Promotes contactless order coordination, real-time inventory adjustments, and modern cafeteria billing modules.
                  </p>

                  <div className="flex flex-wrap gap-2 py-2">
                    {['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'SQL Schema design', 'Auth & Security'].map((tech) => (
                      <span key={tech} className="text-[11px] font-mono font-medium text-white/50 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.03]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    <a 
                      href="https://github.com/FarwaK05/E-Canteen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black hover:bg-neutral-200 text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      GitHub Repo
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </a>
                    
                    <span className="font-mono text-[10.5px] text-white/45 uppercase">Repository Verified</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Project Card 2: SyncGlow Platform */}
            <div className="group rounded-[32px] bg-[#0c0c0c] border border-white/[0.05] p-6 sm:p-10 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Micro High-Fidelity UI Screens of SyncGlow Mockups on Left */}
                <div className="lg:col-span-5 grid grid-cols-10 gap-3">
                  
                  {/* Screen 1: Welcome / Main Hero UI */}
                  <div className="col-span-5 h-36 sm:h-44 rounded-2xl overflow-hidden relative border border-purple-200/20 bg-gradient-to-b from-[#FAF0F3] via-[#FCEAEF] to-[#EBE2E7] p-3 flex flex-col justify-between text-center group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col items-center gap-0.5">
                      {/* SG Circular Icon */}
                      <div className="h-4 w-4 rounded-md bg-[#9AA3BA] text-white flex items-center justify-center font-bold text-[6px] select-none">
                        SG
                      </div>
                      <h4 className="text-[10px] font-black text-slate-800 leading-none mt-1">SyncGlow</h4>
                      <p className="text-[5.5px] text-slate-500/90 leading-tight tracking-tight max-w-[120px] mx-auto mt-0.5 select-none">
                        Advanced AI skin analysis to understand &amp; improve skin health.
                      </p>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-3 gap-1 my-1">
                      {[
                        { title: 'Upload & Analyze', desc: 'Instant AI results' },
                        { title: 'Track Progress', desc: 'Detailed log history' },
                        { title: 'Expert Consultation', desc: 'Dermatologist advice' }
                      ].map((feat, idx) => (
                        <div key={idx} className="bg-white/90 rounded border border-purple-100/50 p-1 flex flex-col justify-center items-center scale-95 origin-center">
                          <span className="text-[4.5px] font-bold text-slate-800 text-center leading-tight truncate w-full">{feat.title}</span>
                          <span className="text-[3.5px] text-slate-400 text-center truncate w-full mt-0.5">{feat.desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-1.5 border-t border-purple-200/10 pt-1 select-none">
                      <span className="text-[5.5px] font-mono text-slate-400">STATUS</span>
                      <span className="bg-[#B9B3D0]/20 text-[#6B5A8F] scale-90 px-1 py-0.5 rounded-[3px] text-[4.5px] font-bold">ACTIVE KERNEL</span>
                    </div>
                  </div>

                  {/* Screen 2: Skin Analyzer Interface */}
                  <div className="col-span-5 h-36 sm:h-44 rounded-2xl overflow-hidden relative border border-purple-200/20 bg-gradient-to-b from-[#FAF0F3] via-[#FCEAEF] to-[#EBE2E7] p-3 flex flex-col justify-between text-left group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col gap-0.5 items-center justify-center">
                      <span className="text-[9px] font-black tracking-tight text-slate-800">Skin Analyzer</span>
                      <span className="text-[5px] font-mono text-slate-500/80 leading-none">AI-powered diagnostic scan</span>
                    </div>

                    {/* Two-Column Mockup boxes */}
                    <div className="grid grid-cols-2 gap-2 mt-1 flex-1 items-stretch">
                      {/* Upload Panel */}
                      <div className="bg-white/95 rounded-lg border border-purple-100/40 p-1.5 flex flex-col justify-between items-center text-center">
                        <span className="text-[5.5px] font-extrabold text-slate-700 block self-start">Upload Image</span>
                        <div className="border border-dashed border-slate-200 w-full rounded flex flex-col items-center justify-center py-2 bg-slate-50/[0.3] my-1">
                          <span className="text-[10px] text-slate-400 select-none leading-none">&uarr;</span>
                          <span className="text-[3.5px] font-mono text-slate-400 mt-0.5 leading-none">Click to upload</span>
                        </div>
                        <span className="text-center w-full bg-[#B1ADB5] text-white rounded py-0.5 text-[4.5px] font-bold tracking-wide">Analyze Skin</span>
                      </div>

                      {/* Analysis Results */}
                      <div className="bg-white/95 rounded-lg border border-purple-100/40 p-1.5 flex flex-col justify-center items-center text-center">
                        <span className="text-[5.5px] font-extrabold text-slate-700 block self-start mb-1">Analysis Results</span>
                        <div className="flex flex-col items-center justify-center gap-1 my-auto">
                          <span className="text-[9px] text-slate-450 select-none">&#128161;</span>
                          <span className="text-[5px] font-bold text-slate-500 leading-tight">Results ready</span>
                          <span className="text-[4px] text-slate-400 leading-none">Scan complete</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[4px] font-mono text-slate-400 uppercase text-center mt-1">
                      Diagnostic Scan Layer Active
                    </div>
                  </div>

                  {/* Screen 3: Recommended Skincare E-Commerce Products catalog */}
                  <div className="col-span-10 h-32 sm:h-40 rounded-2xl overflow-hidden relative border border-purple-200/20 bg-gradient-to-b from-[#FAF0F3] via-[#FCEAEF] to-[#EBE2E7] p-3 sm:p-4 flex flex-col justify-between text-left group-hover:scale-[1.01] transition-transform duration-300 mt-1">
                    <div className="flex items-center justify-between border-b border-purple-200/20 pb-1.5 mb-2">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[8.5px] font-extrabold tracking-tight text-slate-800 uppercase">Acne-Prone Skin Products</span>
                        <span className="text-[5px] font-mono text-slate-500/80 leading-none">Prone to breakouts &amp; blemishes</span>
                      </div>
                      <div className="bg-slate-200/50 border border-slate-300/30 px-1.5 py-0.5 rounded-md text-[5.5px] font-mono text-slate-700 flex items-center gap-1 font-bold">
                        <span>&#128722;</span>
                        <span>Cart (2)</span>
                      </div>
                    </div>

                    {/* Products Grid representation */}
                    <div className="grid grid-cols-3 gap-2 flex-grow items-stretch select-none">
                      {[
                        { title: 'Acne Fighting Cleanser', price: '$24.99', badge: 'facewash', tag: 'Clear Fight', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&auto=format&fit=crop&q=80' },
                        { title: 'Non-Comedogenic Moisturizer', price: '$31.99', badge: 'moisturizer', tag: 'Clear Hydra', img: 'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=150&auto=format&fit=crop&q=80' },
                        { title: 'Spot Treatment Cream', price: '$33.99', badge: 'night cream', tag: 'Spot Clear', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=150&auto=format&fit=crop&q=80' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white/95 rounded-lg border border-purple-100/40 p-1.5 flex gap-2 items-center">
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-10 h-10 object-cover rounded-md flex-shrink-0" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex flex-col justify-between flex-grow min-w-0 h-full">
                            <h5 className="text-[5px] font-bold text-slate-800 tracking-tight leading-tight uppercase truncate">{item.title}</h5>
                            <span className="text-[5.5px] font-black text-slate-700 leading-none">{item.price}</span>
                            <div className="flex gap-1 mt-0.5">
                              <span className="bg-[#ebd9df]/50 text-[#855465] text-[4px] px-1 py-0.2 rounded scale-90 origin-left">{item.badge}</span>
                              <span className="bg-[#e2e7ec]/50 text-[#4c586c] text-[4px] px-1 py-0.2 rounded scale-90 origin-left whitespace-nowrap">{item.tag}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-[5px] font-mono text-slate-500/70 uppercase mt-2 pt-1.5 border-t border-purple-200/10">
                      <span>SyncGlow Recommended Catalog</span>
                      <span className="text-[#3c6b4e] font-semibold flex items-center gap-0.5">
                        <span>&#10003;</span> Match Verified
                      </span>
                    </div>
                  </div>

                </div>

                {/* Typography details on right */}
                <div className="lg:col-span-7 text-left flex flex-col gap-4 self-center justify-center">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-amber-300 text-xs tracking-wider uppercase bg-amber-500/10 px-2.5 py-1 rounded-md">02 — Machine Learning Integrations</span>
                    <span className="text-white/40 text-xs">&bull;</span>
                    <span className="text-white/50 text-xs uppercase font-semibold">Diagnostic Portal</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                    SyncGlow Platform
                  </h3>
                  
                  <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                    An interactive health portal designed to generate personalized skin health recommendatory logs based on automated diagnostic profiling logic. Supports dynamic health survey trackers and secure state synchronization.
                  </p>

                  <div className="flex flex-wrap gap-2 py-2">
                    {['React.js', 'FastAPI (Python)', 'State Management', 'Skin Profiling Classifier', 'Tailwind CSS'].map((tech) => (
                      <span key={tech} className="text-[11px] font-mono font-medium text-white/50 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.03]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    <a 
                      href="https://github.com/FarwaK05/SyncGlow" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black hover:bg-neutral-200 text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      GitHub Repo
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </a>
                    
                    <span className="font-mono text-[10.5px] text-white/45 uppercase">Repository Verified</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Project Card 3: DS Statistical Calculator */}
            <div className="group rounded-[32px] bg-[#0c0c0c] border border-white/[0.05] p-6 sm:p-10 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Micro High-Fidelity UI Screens of StatPro Mockups on Left */}
                <div className="lg:col-span-5 grid grid-cols-10 gap-3">
                  
                  {/* Screen 1: Dashboard Empty State Panel */}
                  <div className="col-span-5 h-36 sm:h-44 rounded-2xl overflow-hidden relative border border-white/[0.05] bg-[#090b0e] p-3 flex flex-col justify-between text-left group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black tracking-tight text-blue-400">StatPro</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500/80 animate-pulse" />
                      </div>
                      <span className="text-[6px] font-mono text-white/30 uppercase tracking-[0.05em] leading-none mb-1">DATASET &amp; DISTRIBUTION</span>
                      
                      {/* Mini Empty State Box */}
                      <div className="bg-[#050608] border border-white/[0.02] border-dashed rounded-md p-1.5 flex flex-col gap-1 mt-1">
                        <div className="flex justify-between items-center text-[5px] font-mono text-white/40">
                          <span>Add value...</span>
                          <span className="bg-blue-500 text-white px-1 rounded">ADD</span>
                        </div>
                        <div className="h-10 bg-[#030405] rounded border border-white/[0.02] flex items-center justify-center p-1">
                          <span className="text-[5px] font-mono text-white/20 select-none">Waiting for data...</span>
                        </div>
                      </div>
                    </div>

                    {/* Mini Actions Grid */}
                    <div className="grid grid-cols-4 gap-0.5 mt-1 text-center">
                      {['MEAN', 'MEDIAN', 'MODE', 'STD'].map((label) => (
                        <span key={label} className="text-[5px] font-mono text-blue-400/80 bg-blue-500/5 border border-blue-500/10 py-0.5 rounded-sm uppercase">
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Screen 2: Active Distribution Chart Panel */}
                  <div className="col-span-5 h-36 sm:h-44 rounded-2xl overflow-hidden relative border border-white/[0.05] bg-[#090b0e] p-3 flex flex-col justify-between text-left group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black tracking-tight text-blue-400">StatPro</span>
                        <span className="text-[6px] font-mono text-emerald-400 font-bold">ONLINE</span>
                      </div>
                      
                      {/* Dataset values banner */}
                      <div className="bg-[#050608] border border-white/[0.03] rounded-md px-1.5 py-0.5 text-[5px] font-mono text-sky-400/90 whitespace-nowrap overflow-hidden">
                        2 &rarr; 2 &rarr; 3 &rarr; 3 &rarr; 3 &rarr; 5 &rarr; 8
                      </div>

                      {/* Mini Bar Chart Rendering */}
                      <div className="h-14 bg-[#030405] rounded border border-white/[0.02] flex items-end justify-around gap-1 px-1.5 pt-3.5 mt-1.5">
                        {[
                          { val: 2, height: '70%', pct: 2 },
                          { val: 3, height: '100%', pct: 3 },
                          { val: 5, height: '35%', pct: 1 },
                          { val: 8, height: '35%', pct: 1 }
                        ].map((b, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end">
                            <span className="text-[4px] font-mono text-cyan-300 scale-75 mb-0.5">{b.pct}</span>
                            <div className="w-full bg-gradient-to-t from-blue-600/80 to-emerald-400 rounded-t-sm" style={{ height: b.height }} />
                            <div className="h-[0.5px] w-full bg-white/[0.05]" />
                            <span className="text-[4px] font-mono text-white/35 mt-0.5">{b.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-[5px] font-mono text-white/20 uppercase text-center tracking-wider">
                      Frequency Histogram Graph
                    </div>
                  </div>

                  {/* Screen 3: History Pile Metrics Capsule Panel */}
                  <div className="col-span-10 h-32 sm:h-40 rounded-2xl overflow-hidden relative border border-white/[0.05] bg-[#090b0e] p-3 sm:p-4 flex flex-col justify-between text-left group-hover:scale-[1.01] transition-transform duration-300 mt-1">
                    <div className="flex items-center justify-between border-b border-white/[0.03] pb-1.5 mb-2">
                      <span className="text-[9px] font-mono font-bold tracking-wider text-blue-400/80 uppercase">COMPUTATION HISTORY</span>
                      <span className="text-[6px] font-mono text-white/30 uppercase leading-none">20 Records Ledger</span>
                    </div>

                    {/* Capsule Pill Slots representation */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: 'P(ANB)', val: '0.2000' },
                        { label: 'P(B\')', val: '0.6000' },
                        { label: 'P(A\')', val: '0.5000' },
                        { label: 'STD DEV', val: '2.5460' },
                        { label: 'MEDIAN', val: '3.0000' },
                        { label: 'MEAN', val: '4.3750' },
                        { label: 'MODE', val: '6.0000' },
                        { label: 'BINOMIAL', val: '0.2760' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#050608] border border-white/[0.03] py-1 px-1.5 rounded-lg flex items-center justify-between text-[6px] font-mono">
                          <span className="text-white/25">{item.label}</span>
                          <span className="text-blue-300 font-bold">{item.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-[5.5px] font-mono text-white/20 uppercase mt-2 pt-1 border-t border-white/[0.02]">
                      <span>Thread Stack Buffer</span>
                      <span className="text-emerald-400/75 font-semibold">Active Memory Online</span>
                    </div>
                  </div>

                </div>

                {/* Typography details on right */}
                <div className="lg:col-span-7 text-left flex flex-col gap-4 self-center justify-center">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sky-400 text-xs tracking-wider uppercase bg-sky-500/10 px-2.5 py-1 rounded-md">03 — Algorithmic Core</span>
                    <span className="text-white/40 text-xs">&bull;</span>
                    <span className="text-white/50 text-xs uppercase font-semibold">C++ Engine &amp; Visual Web App</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                    DS Statistical Calculator
                  </h3>
                  
                  <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                    An advanced calculations suite implementing complex statistical algorithms, variance tracking, datasets distributions, and linear regression models. Programmed with high-speed C++ core execution with a beautiful accompanying React presentation layout.
                  </p>

                  <div className="flex flex-wrap gap-2 py-2">
                    {['C++ Algorithm Core', 'React.js', 'Mathematical Graphics Plotting', 'Exploratory Analytics'].map((tech) => (
                      <span key={tech} className="text-[11px] font-mono font-medium text-white/50 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.03]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    <a 
                      href="https://github.com/FarwaK05/DS-Statistical-Calculator" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black hover:bg-neutral-200 text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      GitHub Repo
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </a>
                    
                    <span className="font-mono text-[10.5px] text-white/45 uppercase">Repository Verified</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TECHNICAL EXPERTISE GRID */}
      <section 
        id="expertise-section" 
        className="py-24 border-t border-white/[0.04] bg-[#080808]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col gap-4 text-left max-w-3xl mb-16">
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-[0.2em]">High Value Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold uppercase tracking-tight">
              My Core Expertise
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light">
              Designing, programming, and validating production-ready software solutions spanning web, desktop, API logic, and intelligent data predictions.
            </p>
          </div>

          {/* Clean grids for expertise blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Service 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0c] border border-white/[0.04] hover:border-purple-500/10 hover:bg-[#000] hover:scale-[1.01] transition-all duration-300 text-left">
              <span className="font-mono text-purple-400 text-sm font-semibold tracking-wider block mb-3">01 / WEB DEVELOPMENT</span>
              <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-3">Full-Stack Web Dev</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/55 font-light">
                Engineering fully responsive Client applications under modern React libraries, utilizing Tailwind utility classes for high-fidelity layouts, customized state models, and scalable architectures.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0c] border border-white/[0.04] hover:border-purple-500/10 hover:bg-[#000] hover:scale-[1.01] transition-all duration-300 text-left">
              <span className="font-mono text-purple-400 text-sm font-semibold tracking-wider block mb-3">02 / ENDPOINT ARCHITECTURES</span>
              <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-3">Backend Engineering</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/55 font-light">
                Designing REST compliant endpoints supported by FastAPI (Python) and Node.js backend services. Capable of planning stable relational database structures, secure requests handling, and fast querying.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0c] border border-white/[0.04] hover:border-purple-500/10 hover:bg-[#000] hover:scale-[1.01] transition-all duration-300 text-left">
              <span className="font-mono text-purple-400 text-sm font-semibold tracking-wider block mb-3">03 / MATHEMATICAL CLASSIFIERS</span>
              <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-3">Machine Learning &amp; AI</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/55 font-light">
                Deploying robust machine learning classifiers via Scikit-learn pipelines. Capable of handling feature engineering with advanced techniques (like SMOTE) for imbalanced data distributions.
              </p>
            </div>

            {/* Service 4 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0c] border border-white/[0.04] hover:border-purple-500/10 hover:bg-[#000] hover:scale-[1.01] transition-all duration-300 text-left">
              <span className="font-mono text-purple-400 text-sm font-semibold tracking-wider block mb-3">04 / STATISTICAL MODELING</span>
              <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-3">Exploratory Data Science</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/55 font-light">
                Performing multi-variable analytical evaluations, plotting advanced interactive charts with Plotly frameworks, and compiling regressions models to represent trends and forecast information safely.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DYNAMIC TECHNICAL STACK INFINITE MARQUEE */}
      <section id="marquee-section" className="py-12 bg-[#050505] overflow-hidden border-t border-b border-white/[0.03]">
        <div className="max-w-[1536px] mx-auto px-4 text-center">
          <span className="text-[10px] tracking-widest font-mono text-white/30 uppercase block mb-6">DAILY WORKSPACE SOFTWARE &amp; LIBRARIES</span>
          
          <div 
            className="flex flex-col gap-4 py-2 overflow-hidden w-full relative"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 16%, black 84%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 16%, black 84%, transparent)'
            }}
          >
            {/* Row 1: Leftward marquee */}
            <div className="flex w-full overflow-hidden relative">
              <div className="flex gap-4 animate-marquee-left whitespace-nowrap">
                {[...skillRow1, ...skillRow1, ...skillRow1].map((skill, index) => {
                  const IconComp = skill.icon;
                  return (
                    <div 
                      key={`r1-skill-${index}`} 
                      className="px-5 py-3 rounded-2xl liquid-glass flex items-center gap-2.5 shrink-0 border border-white/[0.04] hover:bg-white/[0.04] transition-colors duration-200 select-none cursor-default"
                    >
                      <IconComp className={`h-4.5 w-4.5 ${skill.color}`} strokeWidth={1.8} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/80">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2: Rightward marquee */}
            <div className="flex w-full overflow-hidden relative">
              <div className="flex gap-4 animate-marquee-right whitespace-nowrap">
                {[...skillRow2, ...skillRow2, ...skillRow2].map((skill, index) => {
                  const IconComp = skill.icon;
                  return (
                    <div 
                      key={`r2-skill-${index}`} 
                      className="px-5 py-3 rounded-2xl liquid-glass flex items-center gap-2.5 shrink-0 border border-white/[0.04] hover:bg-white/[0.04] transition-colors duration-200 select-none cursor-default"
                    >
                      <IconComp className={`h-4.5 w-4.5 ${skill.color}`} strokeWidth={1.8} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/80">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION (REACH ME & SOCIAL CONNECTIONS) */}
      <section 
        id="contact-section" 
        className="py-24 border-t border-white/[0.04] bg-[#080808] relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <div className="h-10 w-10 rounded-2xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-400 mb-6">
            <Mail className="h-5 w-5" />
          </div>

          <span className="text-purple-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Initiate Conversation</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold uppercase tracking-tight mb-6">
            Let&apos;s build together.
          </h2>
          
          <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light max-w-2xl mb-12">
            Looking for an active engineering intern or custom full-stack solutions builder? Let&apos;s start a chat. I would love to co-create high-performing digital frameworks with you!
          </p>

          {/* Interactive Click-to-Copy Email Card */}
          <div className="w-full max-w-md p-5 sm:p-6 rounded-3xl bg-[#0c0c0c] border border-white/[0.05] hover:border-purple-500/20 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-[20px] pointer-events-none" />
            
            <div className="flex items-center gap-4 text-left">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Mail className="h-5.5 w-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-purple-400 tracking-wider">Email Address</span>
                <span className="text-sm sm:text-base text-white/90 font-medium font-mono select-all">
                  2005fkhalid@gmail.com
                </span>
              </div>
            </div>

            <button 
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer self-stretch sm:self-auto justify-center"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-black" strokeWidth={3} />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
                  Copy Email
                </>
              )}
            </button>
          </div>

          {/* High value active social links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs uppercase tracking-wider font-semibold text-white/60 mb-16">
            <a 
              href="https://www.linkedin.com/in/farwa-khalid-895527280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
            >
              <Linkedin className="h-4 w-4 text-purple-400" />
              LinkedIn
            </a>
            
            <span className="text-white/10 select-none">&bull;</span>
            
            <a 
              href="https://github.com/FarwaK05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
            >
              <Github className="h-4 w-4 text-purple-400" />
              GitHub
            </a>
            
            <span className="text-white/10 select-none">&bull;</span>
            
            <a 
              href="https://www.kaggle.com/farwa99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
            >
              <Globe className="h-4 w-4 text-purple-400" />
              Kaggle
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER BAR */}
      <footer id="master-page-footer" className="bg-[#050505] border-t border-white/[0.04] py-8 w-full text-center text-xs text-white/40 font-mono tracking-wider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} Farwa Khalid. All rights reserved.
          </div>
          <div className="flex gap-4 text-[11px]">
            <span>Crafted with Focus &amp; Intention</span>
            <span>&middot;</span>
            <span>Islamabad, Pakistan</span>
          </div>
        </div>
      </footer>

    </div>
  );
}