import { useState, useEffect } from 'react';
import { ArrowLeft, ShieldCheck, FileText, Lock, Globe, Database, Scale, AlertTriangle } from 'lucide-react';

export function LegalPage({ defaultTab = 'privacy', onBack }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Synchronize internal state with defaultTab if it changes
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // Scroll to top on mount or tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="bg-brand-bg min-h-screen text-brand-text pt-[120px] pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-brand-accent/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        
        {/* Back Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-sm tracking-widest uppercase text-brand-text/60 hover:text-brand-text transition-colors mb-12 font-mono"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-2" />
          <span>Back to Home</span>
        </button>

        {/* Hero Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1.5 rounded-full w-fit">
            <Scale size={14} className="text-brand-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-accent">
              Official Disclosures
            </span>
          </div>
          <h1 className="font-serif text-[clamp(32px,4.5vw,56px)] leading-tight tracking-tight mb-4">
            Legal, Privacy & <span className="text-brand-accent italic font-light">Security Policies</span>
          </h1>
          <p className="font-sans text-brand-text/70 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Please read the legal charters, user information notices, and terms of use governing the Mahatma Gandhi Institute of Rural Energy and Development.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-white/10 mb-12">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2.5 pb-4 text-xs uppercase tracking-widest font-mono border-b-2 transition-all duration-300 w-1/2 justify-center ${
              activeTab === 'privacy' 
                ? 'border-brand-accent text-brand-accent font-medium' 
                : 'border-transparent text-brand-text/45 hover:text-brand-text'
            }`}
          >
            <ShieldCheck size={16} />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2.5 pb-4 text-xs uppercase tracking-widest font-mono border-b-2 transition-all duration-300 w-1/2 justify-center ${
              activeTab === 'terms' 
                ? 'border-brand-accent text-brand-accent font-medium' 
                : 'border-transparent text-brand-text/45 hover:text-brand-text'
            }`}
          >
            <FileText size={16} />
            <span>Terms & Conditions</span>
          </button>
        </div>

        {/* Content Dynamic Area */}
        <div className="space-y-12 min-h-[400px]">
          {activeTab === 'privacy' ? (
            <article className="space-y-10 animate-fadeIn">
              
              {/* Introduction Panel */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <Lock size={18} />
                  <span>No Personal Information Collected</span>
                </h2>
                <p className="text-brand-text/80 font-sans font-light leading-relaxed text-base">
                  We collect no personal information, like names or addresses, when you visit our website. If you choose to provide that information to us, it is only used to fulfill your request for information.
                </p>
              </div>

              {/* Technical User Information Logging */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <Database size={18} />
                  <span>Technical Visitor Logging</span>
                </h2>
                <p className="text-brand-text/80 font-sans font-light leading-relaxed text-base mb-4">
                  We do collect technical user details when a user visits the websites and visitor information such as the type of browser, server, and domain, date and time, details of documents downloaded are recorded.
                </p>
                <div className="bg-black/20 rounded-xl p-4 border border-white/5 text-sm text-brand-text/70 space-y-2">
                  <p>
                    This information is only used to help us make the site more useful for you. With this data, we learn about the number of visitors to our site and the types of technology our visitors use. We never track or record information about individuals and their visits (except in the case when directed by the court through a warrant).
                  </p>
                </div>
              </div>

              {/* Email & Contact Form Policies */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <Globe size={18} />
                  <span>Email & Personal Data Management</span>
                </h2>
                
                <div className="space-y-6 text-brand-text/80 font-sans font-light leading-relaxed text-base">
                  <div>
                    <h3 className="font-medium text-brand-text mb-2 font-serif">Instant Email Use Only</h3>
                    <p>
                      Emails are stored when a user sends any information only for that instant and is used only to give information to them. These are not to be used for any other purposes or to be included in the contact list. Without intimating the user, it won’t be revealed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-brand-text mb-2 font-serif">User form submission terms</h3>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>
                        We do not collect personal information for any purpose other than to respond to you (for example, to respond to your questions or provide subscriptions you have chosen).
                      </li>
                      <li>
                        If you choose to provide us with personal information like filling out a Contact Us form, with an e-mail address or postal address, and submitting it to us through the website — we use that information to respond to your message and to help you get the information you have requested.
                      </li>
                      <li>
                        We only share the information you give us with another Government agency if your question relates to that agency, or as otherwise required by law.
                      </li>
                      <li>
                        Our website never collects information or creates individual profiles for commercial marketing. While you must provide an email address for a localized response to any incoming questions or comments to us, we recommend that you do NOT include any other personal information.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-brand-accent/5 rounded-xl p-4.5 border border-brand-accent/10 text-sm text-brand-text/75 mt-4">
                    <strong>Notice:</strong> If the user asks or provides any personal information, the details of its usage are mentioned. If you are not satisfied or suspicious about the details given, or wish to provide an opinion about the same, it is necessary for you to contact the assigned webmasters under the "Contact Us" section. Private pieces of information received under 'Personal details' will only be used to collect identity or elements for easy identification.
                  </div>
                </div>
              </div>

              {/* Cookies Clause */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <ShieldCheck size={18} />
                  <span>Cookie Policy</span>
                </h2>
                <p className="text-brand-text/80 font-sans font-light leading-relaxed text-base">
                  Websites provide a piece of software when visitors receive information on a website and they are called Cookies. No such persistent cookies are used on this website.
                </p>
              </div>

              {/* Website Security */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <AlertTriangle size={18} className="text-red-400" />
                  <span>Website Security</span>
                </h2>
                
                <ul className="list-decimal pl-5 space-y-3 text-brand-text/85 font-sans font-light text-base">
                  <li>
                    To make the information available to all, to prevent unauthorized user entry, to stop harming or distorting information, and keeping the security of the website in mind, also to handle user traffic, commercial software programs are used.
                  </li>
                  <li>
                    Except for official law institutions, no attempts are made to personally identify the visitor or user.
                  </li>
                  <li>
                    Visitor information is subject to regular deletion.
                  </li>
                  <li className="text-red-400/90 font-mono text-sm border-l-2 border-red-400/30 pl-3 mt-4">
                    <strong>Critical Warning:</strong> Unauthorized users shall not add or change information available, which can have legal consequences and may subject the violator to fines and prosecution under the Indian Information Technology Act (2000).
                  </li>
                </ul>
              </div>

            </article>
          ) : (
            <article className="space-y-10 animate-fadeIn">
              
              {/* Ownership & Maintenance */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <Globe size={18} />
                  <span>Maintenance & Support</span>
                </h2>
                <p className="text-brand-text/80 font-sans font-light leading-relaxed text-base">
                  This website is designed, developed, and maintained by the **Center for e-Governance, Government of Karnataka**.
                </p>
              </div>

              {/* Accuracy & General Disclaimers */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <Scale size={18} />
                  <span>Content Accuracy & Legal Status</span>
                </h2>
                
                <div className="space-y-4 text-brand-text/80 font-sans font-light leading-relaxed text-base">
                  <p>
                    Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Department(s) and/or other source(s), and to obtain appropriate professional advice.
                  </p>
                  <p>
                    Under no circumstances will this Department be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.
                  </p>
                </div>
              </div>

              {/* Jurisdiction */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <Scale size={18} />
                  <span>Governing Law & Jurisdiction</span>
                </h2>
                <p className="text-brand-text/80 font-sans font-light leading-relaxed text-base">
                  These terms and conditions shall be governed by and construed in accordance with the **Indian Laws**. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.
                </p>
              </div>

              {/* External Hyperlinks and Copyrights */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <Globe size={18} />
                  <span>External Hyperlinking Policies</span>
                </h2>
                
                <ul className="list-disc pl-5 space-y-3 text-brand-text/80 font-sans font-light text-base">
                  <li>
                    The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government/private organisations. MGIRED is providing these links and pointers solely for your information and convenience.
                  </li>
                  <li>
                    When you select a link to an outside website, you are leaving the MGIRED website and are subject to the privacy and security policies of the owners/sponsors of the outside website.
                  </li>
                  <li>
                    MGIRED does not guarantee the availability of such linked pages at all times.
                  </li>
                  <li>
                    MGIRED cannot authorize the use of copyrighted materials contained in linked websites. Users are advised to request such authorization from the owner of the linked website.
                  </li>
                  <li>
                    MGIRED does not guarantee that linked websites comply with Indian Government Web Guidelines.
                  </li>
                </ul>
              </div>

              {/* Automatic Logging items list */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <Database size={18} />
                  <span>Automatic Download Information</span>
                </h2>
                <p className="text-brand-text/80 font-sans font-light leading-relaxed text-base mb-4">
                  If the user visits the information and collects information or downloads files, the following elements may automatically download/be recorded:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-brand-text/70 font-mono">
                  <li>Your service domain and IP number.</li>
                  <li>How visitors accessed our website (referrals).</li>
                  <li>Browsers and operating systems.</li>
                  <li>Date and time of users’ visits.</li>
                  <li>URLs from which visitors accessed information.</li>
                </ul>
              </div>

              {/* Detailed session cookies clarification */}
              <div className="bg-brand-bg-light/10 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-accent/15 transition-all duration-500">
                <h2 className="font-serif text-xl text-brand-accent mb-4 flex items-center gap-3">
                  <ShieldCheck size={18} />
                  <span>Non-Persistent Session Cookies</span>
                </h2>
                <p className="text-brand-text/85 font-sans font-light leading-relaxed text-base">
                  When you visit some websites, they may download small pieces of software on your computer/browsing device known as cookies. Some cookies collect personal information to recognize your computer in the future. 
                </p>
                <div className="bg-brand-accent/5 border border-brand-accent/10 rounded-xl p-4.5 text-sm text-brand-text/75 mt-4 space-y-2">
                  <p>
                    We only use **non-persistent cookies** or **"per-session cookies"**.
                  </p>
                  <p>
                    Per-session cookies serve technical purposes, like providing seamless navigation through this website. These cookies do not collect personal information on users and they are deleted as soon as you leave our website. The cookies do not permanently record data and they are not stored on your computer’s hard drive.
                  </p>
                  <p>
                    The cookies are stored in active browser memory and are only available during an active browser session. Once you close your browser, the cookie instantly disappears.
                  </p>
                </div>
              </div>

            </article>
          )}
        </div>

        {/* Footer Return Back button */}
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
