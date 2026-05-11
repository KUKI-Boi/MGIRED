import { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  Eye, 
  Compass, 
  Shield, 
  Users, 
  Award, 
  Sparkles, 
  Calendar, 
  Layers, 
  TrendingUp, 
  Share2, 
  Cpu,
  Search,
  Phone,
  Mail,
  Briefcase
} from 'lucide-react';

export function AboutDetailsPage({ onBack }) {
  const [activeTab, setActiveTab] = useState('vision');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStaffTab, setActiveStaffTab] = useState('all');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const staffList = [
    { id: 1, name: "Dr. K. Gayathri Reddy", role: "Executive Director", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "leadership" },
    { id: 2, name: "Shri Ramesha C.", role: "Deputy Director", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "leadership" },
    { id: 3, name: "Smt Bhaghyashree H.", role: "Deputy Director", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "leadership" },
    { id: 4, name: "Smt Asha R.", role: "Admin Superintendent", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "admin" },
    { id: 5, name: "Smt Sandhya H.", role: "Personal Secretary to Executive Director", phone: "080-23626493", ext: "32", email: "mgiredblr@gmail.com", cat: "admin" },
    { id: 6, name: "Shri Ravi K", role: "Consulting Faculty (Small Wind & Hydro)", phone: "080-23626493", ext: "23", email: "sfrepicohydromgired@gmail.com", cat: "faculty" },
    { id: 7, name: "Shri Manjunatha E.C.", role: "Consulting Faculty (Bioenergy)", phone: "080-23626493", ext: "34", email: "jfbiofuelmgired@gmail.com", cat: "faculty" },
    { id: 8, name: "Shri Santhosh Kumar M.", role: "Consulting Faculty (Solar)", phone: "080-23626493", ext: "34", email: "jfremgired@gmail.com", cat: "faculty" },
    { id: 9, name: "Smt Ashwini R.N.", role: "Consulting Faculty (Bioenergy & Waste Management)", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "faculty" },
    { id: 10, name: "Shri Vijay Kumar", role: "Consulting Faculty (Solar)", phone: "080-23626493", ext: "-", email: "vijaymgired@gmail.com", cat: "faculty" },
    { id: 11, name: "Shri Umashankar N.P.", role: "Consulting Faculty (Solar)", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "faculty" },
    { id: 12, name: "Smt Prajwala S.", role: "Consulting Faculty (Solar)", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "faculty" },
    { id: 13, name: "Shri Nagaraja B", role: "Training Assistant", phone: "080-23626493", ext: "36", email: "mgiredblr@gmail.com", cat: "admin" },
    { id: 14, name: "Smt Madhura K.T.", role: "Accountant", phone: "080-23626493", ext: "28", email: "mgiredblr@gmail.com", cat: "admin" },
    { id: 15, name: "Shri Deepak S.M.", role: "Computer Operator", phone: "080-23626493", ext: "22", email: "mgiredblr@gmail.com", cat: "admin" },
    { id: 16, name: "Shri Vikram Kulkarni", role: "Training Assistant", phone: "080-23626493", ext: "36", email: "mgiredblr@gmail.com", cat: "admin" },
    { id: 17, name: "Shri Ganapati S. Naik", role: "Technician", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 18, name: "Shri Ganesha J.M.", role: "Technician", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 19, name: "Ku. Indushree G.", role: "Stenographer/ Accounts Assistant", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "admin" },
    { id: 20, name: "Shri Ganesha P.N.", role: "Driver", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 21, name: "Shri Venkateshaiah N.B.", role: "Driver", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 22, name: "Shri Rakesh K.", role: "Driver", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 23, name: "Shri Ajjaiaha M.", role: "Driver", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 24, name: "Shri Raghu N.", role: "Attender / Driver", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 25, name: "Shri Manjunath M.R.", role: "Attender / Driver", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 26, name: "Shri Obalesh", role: "Gardener", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 27, name: "Smt Rashmi Parashuram Korwar", role: "Attender", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" },
    { id: 28, name: "Smt Thriveni M.", role: "Attender", phone: "080-23626493", ext: "-", email: "mgiredblr@gmail.com", cat: "support" }
  ];

  const filteredStaff = useMemo(() => {
    return staffList.filter(item => {
      const matchTab = activeStaffTab === 'all' || item.cat === activeStaffTab;
      const matchSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [searchQuery, activeStaffTab]);

  const missionItems = [
    {
      num: "01",
      title: "Technology & Training",
      desc: "Promote latest technology advancements and adopt state of the art methodologies in effective awareness creation, extension and training for rural areas."
    },
    {
      num: "02",
      title: "Research & Advisory",
      desc: "Undertake quality research, energy assessment, providing consultancy and policy advisory in the field of rural energy including conservation, environment protection, bio energy and natural resources management."
    },
    {
      num: "03",
      title: "Demonstration & Projects",
      desc: "Establish demonstration models, execute project planning and implementation, provide technical back up and take up monitoring and evaluation."
    },
    {
      num: "04",
      title: "Local Best Practices",
      desc: "Adopt and disseminate local best practices to foster organic sustainable growth across Karnataka's rural landscape."
    }
  ];

  const pillarItems = [
    {
      icon: <Sparkles className="text-brand-accent" size={24} />,
      title: "Sustainable Policy",
      desc: "Awareness creation for sustainable policy initiatives.",
      badge: "Pillar 01"
    },
    {
      icon: <TrendingUp className="text-brand-accent" size={24} />,
      title: "Skill & Entrepreneurship",
      desc: "Skill Development & Entrepreneurship Promotion to empower rural youth.",
      badge: "Pillar 02"
    },
    {
      icon: <Share2 className="text-brand-accent" size={24} />,
      title: "Affordable Technology",
      desc: "Transfer of affordable technology for Social Transformation.",
      badge: "Pillar 03"
    },
    {
      icon: <Layers className="text-brand-accent" size={24} />,
      title: "Replicable Models",
      desc: "Creation of replicable models for Sustainable development.",
      badge: "Pillar 04"
    },
    {
      icon: <Users className="text-brand-accent" size={24} />,
      title: "Reputed Collaboration",
      desc: "Work in collaboration with reputed organizations globally.",
      badge: "Pillar 05"
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-brand-text pt-[120px] pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Rings/Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Top Back Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-sm tracking-widest uppercase text-brand-text/60 hover:text-brand-text transition-colors mb-12 font-mono"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-2" />
          <span>Back to Home</span>
        </button>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4 bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1.5 rounded-full w-fit">
            <Cpu size={14} className="text-brand-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-accent">
              Instituted in 2000
            </span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,72px)] leading-[1.05] tracking-tight mb-8">
            An Autonomous Legacy of <span className="text-brand-accent italic font-light">Sustainable Growth</span>
          </h1>
          <p className="font-sans text-brand-text/75 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Mahatma Gandhi Institute of Rural Energy and Development (MGIRED) is a pioneering, autonomous institution under the Government of Karnataka, championing self-reliance, green tech, and energy conservation across rural India.
          </p>
        </div>

        {/* Dynamic Multi-Column Grid: Left (History & Governance) | Right (Interactive Vision & Mission) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column (History & Governance) */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Timeline History Card */}
            <div className="bg-brand-bg-light/20 border border-white/5 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:border-brand-accent/20 transition-all duration-500">
              <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <Calendar size={20} className="text-brand-accent" />
                <span>Our Heritage & Origin</span>
              </h2>
              <div className="space-y-6 text-brand-text/75 font-sans font-light leading-relaxed text-base">
                <p>
                  In <strong className="text-brand-text font-medium">2000</strong>, the <strong className="text-brand-text font-medium">Southern Regional Institute on the Integrated Rural Energy Programme</strong> was established with the joint patronage of the Ministry of Non-Conventional Energy Sources, Government of India, and the RDPR Department, Government of Karnataka.
                </p>
                <p>
                  Recognizing its immense capacity, the institute was subsequently granted <strong className="text-brand-text font-medium">autonomous status</strong> and renamed in honor of the Father of the Nation. MGIRED continues to execute its mandates, upholding Gandhian values of self-sufficiency, social equity, and decentralized green energy.
                </p>
              </div>
            </div>

            {/* Governance Card */}
            <div className="bg-brand-bg-light/20 border border-white/5 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:border-brand-accent/20 transition-all duration-500">
              <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <Shield size={20} className="text-brand-accent" />
                <span>Governance & Leadership</span>
              </h2>
              <div className="space-y-6 text-brand-text/75 font-sans font-light leading-relaxed text-base">
                <p>
                  MGIRED operates under the strategic leadership of a <strong className="text-brand-text font-medium">Governing Council</strong> and receives structural guidance from an <strong className="text-brand-text font-medium">Executive Committee</strong>.
                </p>
                <div className="flex gap-4 items-center bg-brand-bg/50 border border-white/5 rounded-xl p-4 mt-2">
                  <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-brand-accent">
                    <Award size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-text/40 block font-mono">Operations head</span>
                    <span className="text-brand-text font-medium text-base">Executive Director</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Interactive Vision & Mission Hub) */}
          <div className="lg:col-span-6">
            <div className="bg-brand-bg-light/40 border border-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              
              {/* Tab Toggles */}
              <div className="flex border-b border-white/10 mb-8">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex items-center gap-2 pb-4 text-sm uppercase tracking-widest font-mono border-b-2 transition-all duration-300 w-1/2 justify-center ${
                    activeTab === 'vision' 
                      ? 'border-brand-accent text-brand-accent' 
                      : 'border-transparent text-brand-text/45 hover:text-brand-text'
                  }`}
                >
                  <Eye size={16} />
                  <span>Our Vision</span>
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex items-center gap-2 pb-4 text-sm uppercase tracking-widest font-mono border-b-2 transition-all duration-300 w-1/2 justify-center ${
                    activeTab === 'mission' 
                      ? 'border-brand-accent text-brand-accent' 
                      : 'border-transparent text-brand-text/45 hover:text-brand-text'
                  }`}
                >
                  <Compass size={16} />
                  <span>Our Mission</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[340px] flex flex-col justify-between">
                {activeTab === 'vision' ? (
                  <div className="space-y-6 transition-opacity duration-500 animate-fadeIn">
                    <span className="text-xs uppercase tracking-widest font-mono text-brand-accent font-semibold">The North Star</span>
                    <blockquote className="font-serif text-2xl md:text-3xl font-light leading-snug text-brand-text">
                      "To be a lead knowledge, research, extension center in the field of rural energy and development."
                    </blockquote>
                    <p className="font-sans text-brand-text/60 text-base font-light leading-relaxed">
                      This vision drives every solar project, waste-management workshop, and training course we engineer across Karnataka, creating energy-literate and self-sustaining village economies.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6 transition-opacity duration-500 animate-fadeIn">
                    <span className="text-xs uppercase tracking-widest font-mono text-brand-accent font-semibold">The Core Directives</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {missionItems.map((item) => (
                        <div 
                          key={item.num}
                          className="bg-brand-bg/60 border border-white/5 rounded-xl p-5 hover:border-brand-accent/20 transition-all duration-300 group"
                        >
                          <span className="text-brand-accent/40 font-mono text-xs block mb-1 group-hover:text-brand-accent transition-colors">
                            {item.num}
                          </span>
                          <h4 className="font-medium text-brand-text font-serif text-base mb-1.5">{item.title}</h4>
                          <p className="text-brand-text/60 text-xs font-light leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footnote */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] text-brand-text/40 font-mono tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  <span>Upholding Gandhian Self-Reliance & Sustainable Progress</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Mission Pillars Grid - Full Width Showcase */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent text-xs font-mono tracking-[0.25em] uppercase block mb-3">Our Foundation</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] text-brand-text leading-tight">
              The Five Pillars of Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillarItems.map((pillar, i) => (
              <div 
                key={pillar.badge}
                className="bg-brand-bg-light/10 border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-brand-accent/30 hover:-translate-y-1.5 transition-all duration-500 shadow-lg group relative overflow-hidden"
              >
                {/* Visual Accent Hover Bar */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-lg text-brand-text mb-2.5 font-medium leading-snug group-hover:text-brand-accent transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-brand-text/65 text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-mono text-brand-text/30 block mt-6">
                  {pillar.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Immersive Officers & Staff Directory */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-brand-accent text-xs font-mono tracking-[0.25em] uppercase block mb-3">Roster Directory</span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] text-brand-text leading-tight">
                Our Officers & Staff
              </h2>
              <p className="font-sans text-brand-text/60 text-sm font-light leading-relaxed max-w-xl mt-2">
                Meet the dedicated team, experts, and leadership driving MGIRED's sustainable operations, green energy programs, and community support.
              </p>
            </div>

            {/* Dynamic Search Box */}
            <div className="relative w-full md:w-80">
              <input 
                type="text"
                placeholder="Search by name or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-bg-light/10 border border-white/10 rounded-full px-5 py-3 pl-11 text-sm text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-brand-accent/50 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/40 w-4 h-4" />
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-white/5">
            {[
              { id: 'all', label: 'All Personnel' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'faculty', label: 'Technical Faculty' },
              { id: 'admin', label: 'Administration' },
              { id: 'support', label: 'Support Services' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStaffTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                  activeStaffTab === tab.id 
                    ? 'bg-brand-accent border-brand-accent text-brand-bg font-medium shadow-md' 
                    : 'bg-transparent border-white/10 text-brand-text/60 hover:text-brand-text hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Roster Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((staff) => (
              <div 
                key={staff.id}
                className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-accent/25 hover:bg-brand-bg-light/15 transition-all duration-300 shadow-lg group relative overflow-hidden"
              >
                {/* Accent Hover Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-brand-accent/60 bg-brand-accent/10 px-2.5 py-0.5 rounded-full border border-brand-accent/15">
                      Sl No. {staff.id}
                    </span>
                    {staff.ext !== '-' && (
                      <span className="text-[10px] font-mono text-brand-text/40 bg-white/5 px-2 py-0.5 rounded-md">
                        Ext: {staff.ext}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg text-brand-text group-hover:text-brand-accent transition-colors duration-300 font-medium leading-snug">
                    {staff.name}
                  </h3>
                  
                  <p className="text-brand-text/50 text-xs uppercase tracking-wider font-mono mt-2 mb-6 flex items-center gap-1.5">
                    <Briefcase size={12} className="text-brand-accent/70" />
                    <span>{staff.role}</span>
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-brand-text/70 font-light">
                  <div className="flex items-center gap-2.5">
                    <Phone size={12} className="text-brand-accent/60" />
                    <span className="font-mono">{staff.phone}</span>
                  </div>
                  
                  <a 
                    href={`mailto:${staff.email}`}
                    className="flex items-center gap-2.5 hover:text-brand-accent transition-colors group/link"
                  >
                    <Mail size={12} className="text-brand-accent/60 group-hover/link:text-brand-accent transition-colors" />
                    <span className="font-mono break-all">{staff.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredStaff.length === 0 && (
            <div className="text-center py-20 bg-brand-bg-light/5 border border-dashed border-white/10 rounded-2xl">
              <p className="text-brand-text/40 text-sm font-light">
                No team members matched your search query.
              </p>
            </div>
          )}
        </div>

        {/* Footer Navigation Back Prompt */}
        <div className="mt-20 pt-10 border-t border-white/5 flex justify-center">
          <button 
            onClick={onBack}
            className="group relative px-8 py-4 rounded-full border border-brand-accent text-brand-accent text-xs uppercase tracking-widest overflow-hidden transition-all duration-300 hover:border-white"
          >
            <span className="relative z-10 group-hover:text-brand-bg transition-colors duration-300">
              Return to main campus
            </span>
            <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury" />
          </button>
        </div>

      </div>
    </div>
  );
}
