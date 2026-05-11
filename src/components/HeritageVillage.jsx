import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import Masonry from './Masonry';

export function HeritageVillage() {
  const { i18n } = useTranslation();
  const revealRefHeader = useScrollReveal();

  const isEnglish = i18n.language?.startsWith('en');

  const masonryItems = [
    {
      id: "13",
      img: "/heritage_13.jpg",
      height: 780,
      title: isEnglish 
        ? "Historical Stone Entrance Archway of MGIRED Heritage Village" 
        : "ಶಿಲೆಯಲ್ಲಿ ಕೆತ್ತಿದ ಪಾರಂಪರಿಕ ಗ್ರಾಮದ ಐತಿಹಾಸಿಕ ಹೆಬ್ಬಾಗಿಲು"
    },
    {
      id: "10",
      img: "/heritage_10.jpg",
      height: 720,
      title: isEnglish 
        ? "Dramatic Yakshagana Folk Dance Statues at Heritage Village" 
        : "ಕರ್ನಾಟಕದ ಹೆಮ್ಮೆಯ ಕಲೆಯಾದ ಯಕ್ಷಗಾನ ನೃತ್ಯ ಕಲಾಕೃತಿಗಳು"
    },
    {
      id: "5",
      img: "/heritage_5.jpg",
      height: 500,
      title: isEnglish 
        ? "Stunning courtyard view of MGIRED traditional architecture" 
        : "ಸಾಂಪ್ರದಾಯಿಕ ಹಟ್ಟಿಯ ನಡುವೆ ಸುಂದರವಾದ ಅಂಗಳದ ನೋಟ"
    },
    {
      id: "2",
      img: "/heritage_2.jpg",
      height: 640,
      title: isEnglish 
        ? "Traditional Karnataka Heritage Village Building Entrance" 
        : "ಕರ್ನಾಟಕ ಪಾರಂಪರಿಕ ಶೈಲಿಯ ಸಾಂಪ್ರದಾಯಿಕ ಕಟ್ಟಡದ ಪ್ರವೇಶ ದ್ವಾರ"
    },
    {
      id: "12",
      img: "/heritage_12.jpg",
      height: 920,
      title: isEnglish 
        ? "Traditional Karnataka Wrestling (Garadi Mane / Kusthi) Arena" 
        : "ಸಾಂಪ್ರದಾಯಿಕ ಗರಡಿ ಮನೆ ಮತ್ತು ಪೈಲ್ವಾನರ ಕುಸ್ತಿ ಅಖಾಡ"
    },
    {
      id: "3",
      img: "/heritage_3.jpg",
      height: 540,
      title: isEnglish 
        ? "Handcrafted Heritage Village Figures and Board Game Room" 
        : "ಪಾರಂಪರಿಕ ಗ್ರಾಮೀಣ ಕಲಾಕೃತಿಗಳು ಮತ್ತು ಜನಪದ ಆಟದ ಕೊಠಡಿ"
    },
    {
      id: "6",
      img: "/heritage_6.jpg",
      height: 680,
      title: isEnglish 
        ? "Traditional Kirana General Store Exhibit in Heritage Village" 
        : "ಪಾರಂಪರಿಕ ಶೈಲಿಯ ಹಳೆಯ ಕಾಲದ ಕಿರಾಣಿ ಅಂಗಡಿ ಪ್ರದರ್ಶನ"
    },
    {
      id: "1",
      img: "/heritage_1.jpg",
      height: 560,
      title: isEnglish 
        ? "MGIRED Heritage Village Main Entrance Archway" 
        : "MGIRED ಪಾರಂಪರಿಕ ಗ್ರಾಮದ ಮುಖ್ಯ ಪ್ರವೇಶ ದ್ವಾರ"
    },
    {
      id: "14",
      img: "/heritage_14.jpg",
      height: 900,
      title: isEnglish 
        ? "Rural Water Pond and Bullock Cart Performance Scene" 
        : "ಗ್ರಾಮೀಣ ಕೆರೆ ಹಾಗೂ ಎತ್ತಿನ ಬಂಡಿ ಸವಾರಿ ಪ್ರದರ್ಶನದ ನೋಟ"
    },
    {
      id: "4",
      img: "/heritage_4.jpg",
      height: 520,
      title: isEnglish 
        ? "Authentic Heritage Village Sculptures and Local Karnataka Marbles" 
        : "ಸ್ಥಳೀಯ ಗೋಲಿ ಆಟದಲ್ಲಿ ಮಗ್ನರಾದ ಗ್ರಾಮೀಣ ಕಲಾಕೃತಿಗಳು"
    },
    {
      id: "7",
      img: "/heritage_7.jpg",
      height: 700,
      title: isEnglish 
        ? "Traditional Gurukul and Vedic Learning Scene inside Heritage Village" 
        : "ಸಾಂಪ್ರದಾಯಿಕ ಗುರುಕುಲ ಹಾಗೂ ವೇದ ಪಾಠಶಾಲೆ ಕಲಿಕೆಯ ದೃಶ್ಯ"
    },
    {
      id: "11",
      img: "/heritage_11.jpg",
      height: 720,
      title: isEnglish 
        ? "Classic Heritage Village Theater Artiste and Folk Performance Platform" 
        : "ಪಾರಂಪರಿಕ ಬಯಲಾಟ ಮತ್ತು ಜನಪದ ಕಲಾ ಪ್ರದರ್ಶನದ ಕಲಾಕೃತಿಗಳು"
    },
    {
      id: "8",
      img: "/heritage_8.jpg",
      height: 580,
      title: isEnglish 
        ? "Rural Karnataka Children's Traditional Games Scene" 
        : "ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕದ ಮಕ್ಕಳ ಕುಣಿತ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಆಟಗಳು"
    },
    {
      id: "9",
      img: "/heritage_9.jpg",
      height: 600,
      title: isEnglish 
        ? "Auspicious Traditional Welcoming Scene in Karnataka Heritage House" 
        : "ಮನೆ ಹೆಬ್ಬಾಗಿಲಿನಲ್ಲಿ ದಂಪತಿಗಳು ಸ್ವಾಗತಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ದೃಶ್ಯ"
    }
  ];

  return (
    <section id="heritage-village" className="py-[clamp(80px,10vw,160px)] px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Concise and Premium Split Header */}
        <div ref={revealRefHeader} className="reveal-hidden transition-all duration-[1000ms] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          
          {/* Left Column - Context Description */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4 bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1.5 rounded-full w-fit">
              <Sparkles size={14} className="text-brand-accent animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-accent">
                {isEnglish ? "Government of Karnataka Initiative" : "ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಉಪಕ್ರಮ"}
              </span>
            </div>
            
            <h2 className="font-serif text-[clamp(32px,4vw,56px)] leading-[1.1] text-brand-text mb-6">
              {isEnglish ? "Model Heritage Village" : "ಮಾದರಿ ಪಾರಂಪರಿಕ ಗ್ರಾಮ"}
            </h2>
            
            <div className="space-y-4 text-brand-text/75 font-sans font-light leading-relaxed text-base md:text-lg">
              <p>
                {isEnglish 
                  ? "MGIRED, functioning under the Department of Rural Development and Panchayat Raj, Government of Karnataka, built this Model Heritage Village to connect younger generations with Karnataka’s rich culture, architectural wisdom, and community goodwill."
                  : "ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಮತ್ತು ಪಂಚಾಯತ್ ರಾಜ್ ಇಲಾಖೆಯ ಅಡಿಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ MGIRED ಸಂಸ್ಥೆಯು, ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಕರ್ನಾಟಕದ ಭವ್ಯ ಗ್ರಾಮೀಣ ಸಂಸ್ಕೃತಿ, ಪರಂಪರೆ ಮತ್ತು ಸದ್ಭಾವನೆಯನ್ನು ಪರಿಚಯಿಸಲು ಈ 'ಮಾದರಿ ಪಾರಂಪರಿಕ ಗ್ರಾಮ'ವನ್ನು ನಿರ್ಮಿಸಿದೆ."}
              </p>
              <p>
                {isEnglish
                  ? "While modern industrial life brings comfort, we have drifted from the self-sufficient harmony of our ancestors. This heritage park serves as a bridge, helping children born in urban environments appreciate rural traditions, agricultural significance, and our meaningful ancestral way of life."
                  : "ಇಂದಿನ ಕೈಗಾರಿಕೀಕರಣ ಮತ್ತು ಆಧುನಿಕ ಜೀವನದಲ್ಲಿ ನಮ್ಮ ಗ್ರಾಮೀಣ ಮೂಲಗಳು, ಕೃಷಿ ಪದ್ಧತಿಗಳು ಮತ್ತು ಹಿರಿಯರ ಸ್ವಾವಲಂಬಿ ಜೀವನಶೈಲಿಯ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಯುವ ಪೀಳಿಗೆಗೆ ತಿಳಿಸುವುದು ಅತ್ಯಗತ್ಯವಾಗಿದೆ. ನಮ್ಮ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಜೀವನ ಮೌಲ್ಯಗಳನ್ನು ಉಳಿಸಿ ಬೆಳೆಸುವುದು ನಮ್ಮೆಲ್ಲರ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ."}
              </p>
            </div>
          </div>

          {/* Right Column - Premium Frosted Glass Visitor Information Card */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-brand-bg-light/40 border border-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl h-full relative overflow-hidden group hover:border-brand-accent/20 transition-all duration-500">
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-brand-text/50 mb-6 flex items-center gap-2">
                  <MapPin size={16} className="text-brand-accent animate-pulse" />
                  <span>{isEnglish ? "Visitor Information" : "ವೀಕ್ಷಕರ ಮಾಹಿತಿ"}</span>
                </h3>
                
                <div className="space-y-6">
                  {/* Opening Days */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-brand-bg border border-white/10 rounded-xl text-brand-accent group-hover:border-brand-accent/30 transition-all duration-500">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-brand-text/40 uppercase tracking-wider block mb-1 font-mono">
                        {isEnglish ? "Availability" : "ಲಭ್ಯತೆ"}
                      </span>
                      <span className="text-brand-text font-serif text-lg leading-snug">
                        {isEnglish ? "Open 365 Days a Year" : "ವರ್ಷದ 365 ದಿನಗಳೂ ಮುಕ್ತವಾಗಿದೆ"}
                      </span>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-brand-bg border border-white/10 rounded-xl text-brand-accent group-hover:border-brand-accent/30 transition-all duration-500">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-brand-text/40 uppercase tracking-wider block mb-1 font-mono">
                        {isEnglish ? "Park Timings" : "ಪ್ರವೇಶ ಸಮಯ"}
                      </span>
                      <span className="text-brand-text font-serif text-lg leading-snug">
                        {isEnglish ? "09:00 AM – 06:00 PM" : "ಬೆಳಿಗ್ಗೆ 09:00 ರಿಂದ ಸಂಜೆ 06:00"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Footer Prompt */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] text-brand-text/50 font-mono tracking-wider uppercase">
                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span>{isEnglish ? "Tap or Click any card below to expand" : "ದೊಡ್ಡದಾಗಿಸಲು ಕೆಳಗಿನ ಚಿತ್ರವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ"}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Masonry Gallery Container */}
        <div className="w-full relative mt-8">
          <Masonry 
            items={masonryItems}
            ease="power3.out"
            duration={0.65}
            stagger={0.03}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.96}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
}
