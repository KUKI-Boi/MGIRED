import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Award, Sparkles, Building, Info } from 'lucide-react';

export function GovernmentSchemesPage({ onBack }) {
  const { i18n } = useTranslation();
  const revealRefHeader = useScrollReveal();
  const revealRefGrid = useScrollReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const isKannada = i18n.language && i18n.language.startsWith('kn');

  const schemes = [
    {
      titleEn: "PM Surya Ghar: Muft Bijli Yojana (National Rooftop Solar)",
      titleKn: "ಪಿಎಂ ಸೂರ್ಯ ಘರ್: ಮುಫ್ತ್ ಬಿಜ್ಲಿ ಯೋಜನೆ (ರಾಷ್ಟ್ರೀಯ ರೂಫ್‌ಟಾಪ್ ಸೋಲಾರ್ ಯೋಜನೆ)",
      badgeEn: "Rooftop Solar Subsidy",
      badgeKn: "ರೂಫ್‌ಟಾಪ್ ಸೋಲಾರ್ ಸಬ್ಸಿಡಿ",
      subEn: "₹30,000 per kW (up to 2 kW) + ₹18,000 for the 3rd kW. Total subsidy capped at ₹78,000.",
      subKn: "ಪ್ರತಿ ಕಿಲೋವ್ಯಾಟ್‌ಗೆ ₹30,000 (2 kW ವರೆಗೆ) + 3ನೇ kW ಗೆ ₹18,000. ಗರಿಷ್ಠ ಸಬ್ಸಿಡಿ ₹78,000 ವರೆಗೆ.",
      link: "https://pmsuryaghar.gov.in/",
      linkTextEn: "Apply Online via National Portal",
      linkTextKn: "ರಾಷ್ಟ್ರೀಯ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅನ್ವಯಿಸಿ",
      stepsEn: [
        "Register on the official National Portal for Rooftop Solar using your mobile number.",
        "Request Technical Feasibility Approval from your local DISCOM (BESCOM, CESC, HESCOM, etc.).",
        "Install the solar power system through any empanelled and registered vendor.",
        "Submit installation details, request net-metering inspection, and receive the direct bank subsidy within 30 days of commissioning."
      ],
      stepsKn: [
        "ಅಧಿಕೃತ ರಾಷ್ಟ್ರೀಯ ರೂಫ್‌ಟಾಪ್ ಸೋಲಾರ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಬಳಸಿ ನೋಂದಾಯಿಸಿ.",
        "ನಿಮ್ಮ ಸ್ಥಳೀಯ ವಿದ್ಯುತ್ ವಿತರಣಾ ಸಂಸ್ಥೆಯಿಂದ (BESCOM, HESCOM, ಇತ್ಯಾದಿ) ತಾಂತ್ರಿಕ ಅನುಮೋದನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.",
        "ನೋಂದಾಯಿತ ಅಧಿಕೃತ ವೆಂಡರ್‌ಗಳ ಮೂಲಕ ಸೋಲಾರ್ ಘಟಕವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಅಳವಡಿಸಿ.",
        "ನೆಟ್-ಮೀಟರಿಂಗ್ ತಪಾಸಣೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ ವಿವರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, 30 ದಿನಗಳಲ್ಲಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ಹಣ ಜಮೆಯಾಗುತ್ತದೆ."
      ]
    },
    {
      titleEn: "PM-KUSUM Scheme (Solar Agricultural Pumps)",
      titleKn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಕುಸುಮ್ ಯೋಜನೆ (ಸೋಲಾರ್ ಕೃಷಿ ಪಂಪ್ ಸೆಟ್ ಸಬ್ಸಿಡಿ)",
      badgeEn: "Solar Agri Pump Subsidy",
      badgeKn: "ರೈತರು ಮತ್ತು ಕೃಷಿ ಪಂಪ್ ಸಬ್ಸಿಡಿ",
      subEn: "Up to 60% of solar pump system cost jointly subsidized by Central & State Govts. Low-interest bank loans available.",
      subKn: "ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರಗಳಿಂದ ಜಂಟಿಯಾಗಿ 60% ವರೆಗೆ ನೇರ ಸಬ್ಸಿಡಿ ನೆರವು. ಅತ್ಯಂತ ಕಡಿಮೆ ಬಡ್ಡಿಯಲ್ಲಿ ಬ್ಯಾಂಕ್ ಸಾಲ ಸೌಲಭ್ಯ.",
      link: "https://kredlinfo.karnataka.gov.in/",
      linkTextEn: "Apply Online via Karnataka KREDL",
      linkTextKn: "ಕರ್ನಾಟಕ KREDL ಮೂಲಕ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ",
      stepsEn: [
        "Visit the official Karnataka Renewable Energy Development Ltd (KREDL) or PM-KUSUM portal.",
        "Submit online application with land ownership documents (RTC / Pahani / Khata), Aadhaar card, and water source details.",
        "Upon approval, deposit the minimal farmer beneficiary share online via secure portal payment.",
        "Authorized government solar engineers will install and commission the agricultural pump set at your farm."
      ],
      stepsKn: [
        "ಕರ್ನಾಟಕ ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ ಅಭಿವೃದ್ಧಿ ನಿಯಮಿತ (KREDL) ಅಥವಾ PM-KUSUM ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.",
        "ಜಮೀನಿನ ಪಹಣಿ (RTC), ಆಧಾರ್ ಸಂಖ್ಯೆ ಮತ್ತು ಜಲಮೂಲ ಪ್ರಮಾಣಪತ್ರದೊಂದಿಗೆ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.",
        "ಅರ್ಜಿ ಅನುಮೋದನೆಯ ನಂತರ ನಿಮ್ಮ ಪಾಲಿನ ಕಡಿಮೆ ಮೊತ್ತದ ಫಲಾನುಭವಿ ಕೊಡುಗೆಯನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಪಾವತಿಸಿ.",
        "ಅಧಿಕೃತ ಸೋಲಾರ್ ಎಂಜಿನಿಯರ್‌ಗಳು ನಿಮ್ಮ ಕೃಷಿ ಜಮೀನಿನಲ್ಲಿ ಆಧುನಿಕ ಸೋಲಾರ್ ಪಂಪ್ ಸೆಟ್ ಅನ್ನು ಅಳವಡಿಸುತ್ತಾರೆ."
      ]
    },
    {
      titleEn: "National Biogas Programme (NNBOMP)",
      titleKn: "ರಾಷ್ಟ್ರೀಯ ಜೈವಿಕ ಅನಿಲ ಮತ್ತು ಸಾವಯವ ಗೊಬ್ಬರ ಕಾರ್ಯಕ್ರಮ (NNBOMP)",
      badgeEn: "Clean Energy & Biogas Subsidy",
      badgeKn: "ಶುದ್ಧ ಇಂಧನ ಮತ್ತು ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಸಬ್ಸಿಡಿ",
      subEn: "Direct financial assistance from ₹9,800 to ₹14,350 based on plant capacity (2-4 cubic meters) and beneficiary category.",
      subKn: "ಜೈವಿಕ ಅನಿಲ ಘಟಕದ ಸಾಮರ್ಥ್ಯದ (2-4 ಕ್ಯೂಬಿಕ್ ಮೀಟರ್) ಆಧಾರದ ಮೇಲೆ ₹9,800 ರಿಂದ ₹14,350 ರವರೆಗೆ ನೇರ ಸಬ್ಸಿಡಿ.",
      link: "https://mnre.gov.in/",
      linkTextEn: "Learn More on MNRE Website",
      linkTextKn: "ಕೇಂದ್ರ ಸಚಿವಾಲಯದ ಪೋರ್ಟಲ್ ವೀಕ್ಷಿಸಿ",
      stepsEn: [
        "Contact your local Gram Panchayat office, rural extension officer, or MGIRED training department.",
        "Submit basic details including cow/cattle ownership, land availability, and water availability certificates.",
        "Get site clearance and technical verification approval from regional project coordinators.",
        "Biogas construction by certified masons, followed by subsidy transfer directly to the beneficiary's bank account."
      ],
      stepsKn: [
        "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಗ್ರಾಮ ಪಂಚಾಯತ್ ಕಚೇರಿ ಅಥವಾ MGIRED ತರಬೇತಿ ವಿಭಾಗವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "ಜಾನುವಾರುಗಳ ಸಂಖ್ಯೆ, ಲಭ್ಯವಿರುವ ಜಾಗ ಮತ್ತು ನೀರಾವರಿ ವಿವರಗಳೊಂದಿಗೆ ಆನ್‌ಲೈನ್ ಅಥವಾ ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.",
        "ಯೋಜನಾ ಸಂಯೋಜಕರಿಂದ ತಾಂತ್ರಿಕ ಪರಿಶೀಲನೆ ಮತ್ತು ಸ್ಥಳ ತಪಾಸಣಾ ಅನುಮೋದನೆಯನ್ನು ಪಡೆದುಕೊಳ್ಳಿ.",
        "ಅಧಿಕೃತ ಮೇಸ್ತ್ರಿಗಳಿಂದ ಘಟಕ ನಿರ್ಮಾಣಗೊಂಡ ನಂತರ ಪ್ರಾಯೋಗಿಕ ಪರೀಕ್ಷೆ ಮುಗಿದು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ಹಣ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text pt-32 pb-24 px-6 md:px-12 selection:bg-brand-accent selection:text-brand-bg">
      <div className="max-w-[1320px] mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-sm uppercase tracking-widest text-brand-text/60 hover:text-brand-text transition-colors duration-300 mb-12 font-sans"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-2" />
          <span>{isKannada ? 'ಹಿಂದೆ ಹೋಗಿ' : 'Back to Home'}</span>
        </button>

        {/* Hero Header */}
        <div ref={revealRefHeader} className="reveal-hidden transition-all duration-[1000ms] mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-4 bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1.5 rounded-full w-fit">
            <Sparkles size={14} className="text-brand-accent" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-accent">
              {isKannada ? 'ಸರ್ಕಾರದ ಯೋಜನೆಗಳು' : 'Government Subsidies & Support'}
            </span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,72px)] leading-[1.1] mb-6">
            {isKannada ? 'ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ ಯೋಜನೆಗಳು' : 'Renewable Energy Initiatives'}
          </h1>
          <p className="font-sans text-brand-text/70 text-lg md:text-xl font-light leading-relaxed">
            {isKannada 
              ? 'ಕರ್ನಾಟಕ ಮತ್ತು ಭಾರತ ಸರ್ಕಾರದ ಸಬ್ಸಿಡಿ ಯೋಜನೆಗಳ ಅಡಿಯಲ್ಲಿ ಸೋಲಾರ್ ಮತ್ತು ಜೈವಿಕ ಅನಿಲ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಲು ಲಭ್ಯವಿರುವ ಪ್ರಯೋಜನಗಳು, ಅನ್ವಯಿಸುವ ವಿಧಾನಗಳು ಮತ್ತು ಅಧಿಕೃತ ಸಂಪರ್ಕ ಕೊಂಡಿಗಳು ಇಲ್ಲಿವೆ.' 
              : 'Empowering citizens with direct financial support from state and central ministries. Explore key government subsidy programs, detailed eligibility protocols, and verified links to submit your applications.'}
          </p>
        </div>

        {/* Schemes Bento-Grid */}
        <div 
          ref={revealRefGrid}
          className="reveal-hidden delay-200 transition-all duration-[1000ms] grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {schemes.map((scheme, sIdx) => {
            const title = isKannada ? scheme.titleKn : scheme.titleEn;
            const badge = isKannada ? scheme.badgeKn : scheme.badgeEn;
            const subsidy = isKannada ? scheme.subKn : scheme.subEn;
            const steps = isKannada ? scheme.stepsKn : scheme.stepsEn;
            const linkText = isKannada ? scheme.linkTextKn : scheme.linkTextEn;

            return (
              <div 
                key={sIdx}
                className="group relative bg-brand-bg-light border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-accent/30 transition-all duration-500 shadow-2xl"
              >
                <div>
                  {/* Card Header Badge */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[10px] uppercase tracking-widest font-semibold text-brand-accent">
                      {badge}
                    </span>
                    <span className="font-mono text-xs text-brand-text/30 group-hover:text-brand-accent/50 transition-colors">
                      0{sIdx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl text-brand-text mb-4 leading-snug group-hover:text-brand-accent transition-colors duration-300 min-h-[3.5rem] flex items-center">
                    {title}
                  </h3>

                  {/* Subsidy Info Callout */}
                  <div className="bg-brand-bg border border-brand-accent/10 rounded-2xl p-5 mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={14} className="text-brand-accent" />
                      <span className="block font-sans text-[10px] uppercase tracking-[0.15em] text-brand-accent font-semibold">
                        {isKannada ? 'ಸಬ್ಸಿಡಿ ವಿವರಗಳು' : 'Subsidy Details'}
                      </span>
                    </div>
                    <p className="font-sans text-brand-text text-sm md:text-base leading-relaxed font-medium">
                      {subsidy}
                    </p>
                  </div>

                  {/* Step-by-Step Procedure */}
                  <div className="mb-8">
                    <span className="block font-sans text-[10px] uppercase tracking-[0.15em] text-brand-text/40 font-semibold mb-4">
                      {isKannada ? 'ಅನ್ವಯಿಸುವ ವಿಧಾನ (ಹಂತ-ಹಂತವಾಗಿ)' : 'Step-by-Step Procedure'}
                    </span>
                    <ul className="space-y-4">
                      {steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="flex gap-3 items-start">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-brand-text/50 shrink-0 mt-0.5 font-bold">
                            {stepIdx + 1}
                          </span>
                          <span className="font-sans text-brand-text/70 text-[13px] md:text-sm leading-relaxed font-light">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply/Link Button */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-between px-6 py-4 rounded-full bg-white/5 border border-white/10 text-brand-text text-xs uppercase tracking-widest font-medium hover:bg-brand-accent hover:text-brand-bg hover:border-brand-accent transition-all duration-300"
                  >
                    <span>{linkText}</span>
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Info Section */}
        <div className="mt-24 bg-brand-bg-light border border-white/5 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center max-w-[1320px] mx-auto">
          <div className="p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl">
            <Building size={32} className="text-brand-accent" />
          </div>
          <div className="flex-1">
            <h4 className="font-serif text-xl md:text-2xl mb-2 text-brand-text">
              {isKannada ? 'ಹೆಚ್ಚಿನ ನೆರವು ಬೇಕೇ?' : 'Need Technical Guidance?'}
            </h4>
            <p className="font-sans text-brand-text/70 text-sm leading-relaxed font-light">
              {isKannada
                ? 'MGIRED ಕೇಂದ್ರವು ಸೋಲಾರ್ ರೂಫ್‌ಟಾಪ್ ಮತ್ತು ಜೈವಿಕ ಅನಿಲ ಘಟಕಗಳ ತಾಂತ್ರಿಕ ಕಾರ್ಯಸಾಧ್ಯತೆ ಮತ್ತು ಅನುಷ್ಠಾನಕ್ಕಾಗಿ ಉಚಿತ ಸಮಾಲೋಚನೆ ಹಾಗೂ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೀಡುತ್ತದೆ. ನಮ್ಮ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಲು ಕೆಳಗಿನ ಬಟನ್ ಬಳಸಿ.'
                : 'MGIRED provides technical consultancy, feasibility assessments, and direct guidance on deploying household solar systems and waste-to-energy biogas plants. Contact our support cell for professional assistance.'}
            </p>
          </div>
          <button
            onClick={() => {
              onBack();
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 400);
            }}
            className="px-8 py-4 rounded-full bg-brand-text text-brand-bg font-sans text-xs uppercase tracking-widest font-medium hover:bg-brand-accent hover:text-brand-bg transition-colors duration-300 whitespace-nowrap"
          >
            {isKannada ? 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' : 'Contact Support'}
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 border-t border-white/10 pt-16 text-center">
          <p className="font-sans text-brand-text/60 text-lg mb-8">
            {isKannada ? 'ನಮ್ಮ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಬಯಸುವಿರಾ?' : 'Interested in exploring our training courses and programs?'}
          </p>
          <button
            onClick={() => {
              window.location.hash = '#programs';
            }}
            className="px-10 py-5 rounded-full bg-brand-bg border border-white/10 text-brand-text font-sans text-sm uppercase tracking-widest font-medium hover:bg-brand-accent hover:text-brand-bg hover:border-brand-accent transition-colors duration-300"
          >
            {isKannada ? 'ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು' : 'View Training Programs'}
          </button>
        </div>
      </div>
    </div>
  );
}
