import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About us",
        jobs: "Careers",
        schemes: "Government schemes",
        location: "Heritage Village",
        cta: "Contact Us"
      },
      hero: {
        title1: "PIONEERING RURAL",
        title2: "GREEN ENERGY",
        title3: "SOLUTIONS.",
        subtitle: "Upholding Gandhian values of self-reliance, we drive sustainable rural development through state-of-the-art training, expert-led capacity building, and clean energy innovation.",
        cta: "Discover Our Mandates",
        scroll: "Scroll Down"
      },
      marquee: [
        "Gandhian Sustainability & Self-Reliance",
        "Solar Lantern & Green Tech Outreach",
        "Panchayat Leadership & Training",
        "Organic Eco-Friendly Replicable Models",
        "Wind Energy & Hydro Capacity Building"
      ],
      about: {
        title: "Where innovation meets sustainable excellence.",
        desc: "At MGIRED, we drive progress and empower futures. We are dedicated to delivering impactful programs and establishing a foundation of expertise, ensuring every initiative supports lasting community success."
      },
      jobs: {
        badge: "Careers & Growth",
        title: "Build Your Future with Us",
        step1: {
          title: "Internship",
          desc: "Kickstart your career with our hands-on internship programs. Gain real-world experience, mentorship from industry experts, and a clear path toward professional growth."
        },
        step3: {
          title: "Training and Programs",
          desc: "Enhance your skill set with our specialized training modules. We offer comprehensive services designed to empower professionals and elevate organizational capabilities.",
          clickToExpand: "Click to view programs",
          clickToCollapse: "Click to close programs",
          programs: [
            {
              title: "Leadership Excellence and Socially Responsive Local Governance training for Panchayat Development Officers (in campus)",
              desc: "This on-campus training builds leadership abilities and governance skills among Panchayat Development Officers. The programme emphasizes ethical leadership, community engagement, transparency, and socially responsive governance for effective implementation of rural development initiatives.",
              image: "/karnataka_panchayat_training_1778046812790.png"
            },
            {
              title: "Solar Lantern SHG Awareness Program – 1 day (Off campus)",
              desc: "This one-day awareness programme educates SHG women on the benefits, usage, and maintenance of solar lanterns. The initiative encourages rural households to adopt clean lighting solutions that reduce energy costs and promote sustainable living.",
              image: "/karnataka_shg_solar_lantern_1778046831496.png"
            },
            {
              title: "Technician Training for ITI/Diploma students on Renewable Energy – 3 days (Off campus through NGOs)",
              desc: "This three-day training is organized off-campus through NGOs and provides ITI/Diploma students with foundational knowledge of renewable energy technologies.",
              image: "/karnataka_iti_solar_technician_1778046847494.png"
            },
            {
              title: "Solar Grid Engineers Training Program – 10 days (in-campus)",
              desc: "This ten-day intensive training programme prepares participants to work as solar grid engineers by teaching grid integration, system design, electrical safety, and performance monitoring. Conducted on campus, the course emphasizes hands-on experience with real-time solar grid setups.",
              image: "/karnataka_solar_grid_engineer_1778046864360.png"
            },
            {
              title: "Entrepreneurship Development Program on Solar Energy Systems – 5 days (in-campus)",
              desc: "This five-day programme aims to nurture entrepreneurship among participants by providing insights into solar energy technologies, business models, and market opportunities. Through mentoring and practical sessions, trainees learn how to establish and manage solar-based enterprises.",
              image: "/karnataka_solar_grid_engineer_1778046864360.png"
            },
            {
              title: "Suryamitra Solar Technician Training for ITI/Diploma graduates – 3 months (in-campus)",
              desc: "This training provides ITI and Diploma graduates with three months of advanced knowledge in Suryamitra Solar Technician solar photovoltaic systems. Held on-campus, the training includes practice, field experience, and topics that match industrial requirements.",
              image: "/karnataka_iti_solar_technician_1778046847494.png"
            },
            {
              title: "Solar Technician Training for rural ITI/Diploma students – 1 month (in-campus)",
              desc: "This one-month on-campus training equips rural ITI and Diploma students with skills in installation, operation, and troubleshooting of solar systems. Its goal is to prepare the youth for growing job opportunities in the renewable energy sector.",
              image: "/karnataka_iti_solar_technician_1778046847494.png"
            },
            {
              title: "Awareness programs for schools and colleges on Renewable Energy, Rainwater Harvesting, and Solid Waste Management – 1 day",
              desc: "This one-day awareness programme for schools and colleges introduces students to key environmental concepts such as renewable energy, rainwater harvesting, and solid waste management. Through interactive sessions, students are encouraged to adopt eco-friendly habits and contribute to environmental protection.",
              image: "/karnataka_environmental_school_1778046883896.png"
            },
            {
              title: "SWM Unit Management Training for SHG women – 5 days (off-campus through NGOs)",
              desc: "This five-day training programme equips SHG women with the skills needed to manage Solid Waste Management units effectively. Conducted off-campus with NGO support, the training includes topics such as unit administration, bookkeeping, waste collection planning, and adoption of environmentally friendly practices.",
              image: "/karnataka_shg_waste_management_1778046899981.png"
            },
            {
              title: "Course for SHG members working in SWM units – 3 days (in collaboration with NGOs off campus)",
              desc: "This three-day refresher course is designed to enhance the knowledge and skills of SHG members working in Solid Waste Management units. Conducted in collaboration with NGOs, the training covers updated SWM practices, safety measures, segregation methods, and efficient operational techniques to improve unit performance.",
              image: "/karnataka_shg_waste_management_1778046899981.png"
            },
            {
              title: "Awareness programme for SHG women and rural communities on Renewable Energy, Rainwater Harvesting, and Solid Waste Management – 1 day (off-campus through NGOs)",
              desc: "This one-day awareness programme aims to educate SHG women and rural communities on the importance of renewable energy, rainwater harvesting, and solid waste management. Conducted off-campus through NGOs, the programme focuses on practical demonstrations and simple techniques that can be adopted at the household and community levels to promote sustainability and environmental responsibility.",
              image: "/karnataka_environmental_school_1778046883896.png"
            }
          ]
        }
      },
      internshipDetails: {
        title: "Internship Program",
        intro: "Renewable Energy, Solid Waste Management, and Rainwater Harvesting are essential pillars of modern rural development. Imagine applying your knowledge to create sustainable solutions for the future.",
        role: "Internship",
        location: "Bengaluru, Karnataka",
        aboutTitle: "About the Program",
        aboutDesc: "MGIRED is excited to launch its Internship Program, designed to empower individuals from rural communities by providing them with valuable skills and practical exposure. This initiative aims to bridge the gap between academic learning and industry needs through hands-on experience and professional development opportunities.",
        eligibilityTitle: "Eligibility Criteria",
        eligibilityDesc: "We welcome enthusiastic and capable students currently pursuing graduation or post-graduation.",
        highlightsTitle: "Program Highlights",
        highlights: [
          "Practical training using advanced technologies and real industry projects",
          "Guidance and mentorship from experienced professionals at MGIRED",
          "Exposure to real-world challenges and organizational operations",
          "A diverse, inclusive, and supportive work culture that nurtures both professional and personal growth"
        ],
        whyTitle: "Why Join Us?",
        whyDesc: "At MGIRED, we are committed to developing talent, encouraging innovation, and fostering inclusivity. This internship is crafted to help individuals excel in the corporate world by equipping them with essential skills and industry insights. If you're ready to begin an exciting professional journey, apply now and take the first step toward a promising career.",
        applyTitle: "How to Apply",
        applyDesc: "Interested candidates can pursue internship opportunities through their respective academic institutions."
      },
      heritageVillage: {
        title: "Heritage Village",
        desc: "Explore MGIRED's traditional Heritage Village, celebrating the rich culture, architecture, and sustainable lifestyle of rural Karnataka. Drag to spin the 3D dome gallery, and click or tap any card to enlarge."
      },
      cta: {
        title: "Ready to join our mission?",
        accent: "MGIRED is hiring.",
        subtitle: "Explore our latest opportunities, internships, and training programs.",
        button: "Contact Us"
      },
      footer: {
        tagline: "Driving progress and empowering futures through sustainable excellence and innovation.",
        navTitle: "Navigation",
        contactTitle: "Contact Us",
        addressTitle: "Postal Address",
        addressLine1: "Mahatma Gandhi Institute of Rural Energy and Development (MGIRED)",
        addressLine2: "Srirampura Cross, Jakkur, Bangalore – 560064",
        addressLine3: "Karnataka, India"
      }
    }
  },
  kn: {
    translation: {
      nav: {
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        jobs: "ವೃತ್ತಿಜೀವನ",
        schemes: "ಸರ್ಕಾರದ ಯೋಜನೆಗಳು",
        location: "ಪಾರಂಪರಿಕ ಗ್ರಾಮ",
        cta: "ಸಂಪರ್ಕಿಸಿ"
      },
      hero: {
        title1: "ಗ್ರಾಮೀಣ ಪುನರುತ್ಪಾದಕ",
        title2: "ಹಸಿರು ಇಂಧನ",
        title3: "ಪರಿಹಾರಗಳು.",
        subtitle: "ಗಾಂಧೀಜಿಯವರ ಸ್ವಾವಲಂಬನೆಯ ಮೌಲ್ಯಗಳನ್ನು ಎತ್ತಿಹಿಡಿಯುತ್ತಾ, ಅತ್ಯಾಧುನಿಕ ತರಬೇತಿ, ತಜ್ಞರ ನೇತೃತ್ವದ ಸಾಮರ್ಥ್ಯ ವೃದ್ಧಿ ಮತ್ತು ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ ನಾವೀನ್ಯತೆಯ ಮೂಲಕ ನಾವು ಸುಸ್ಥಿರ ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತೇವೆ.",
        cta: "ನಮ್ಮ ಜವಾಬ್ದಾರಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        scroll: "ಕೆಳಗೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ"
      },
      marquee: [
        "ಗಾಂಧಿ ತತ್ವಗಳ ಸುಸ್ಥಿರತೆ ಮತ್ತು ಸ್ವಾವಲಂಬನೆ",
        "ಸೌರ ದೀಪ ಮತ್ತು ಹಸಿರು ತಂತ್ರಜ್ಞಾನ ಪ್ರಚಾರ",
        "ಪಂಚಾಯತ್ ನಾಯಕತ್ವ ಮತ್ತು ತರಬೇತಿ",
        "ಪ್ರಾಯೋಗಿಕ ಪರಿಸರ ಸ್ನೇಹಿ ಮಾದರಿಗಳು",
        "ಪವನ ಮತ್ತು ಜಲಶಕ್ತಿ ಸಾಮರ್ಥ್ಯ ವೃದ್ಧಿ"
      ],
      about: {
        title: "ನಾವೀನ್ಯತೆ ಸುಸ್ಥಿರ ಶ್ರೇಷ್ಠತೆಯನ್ನು ಸಂಧಿಸುವ ಸ್ಥಳ.",
        desc: "MGIRED ನಲ್ಲಿ, ನಾವು ಪ್ರಗತಿಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತೇವೆ ಮತ್ತು ಭವಿಷ್ಯವನ್ನು ಸಬಲಗೊಳಿಸುತ್ತೇವೆ. ಪ್ರತಿ ಉಪಕ್ರಮವು ಸುಸ್ಥಿರ ಸಮುದಾಯ ಯಶಸ್ಸನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಾವು ಪ್ರಭಾವಶಾಲಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನೀಡಲು ಮತ್ತು ಪರಿಣತಿಯ ಅಡಿಪಾಯವನ್ನು ಸ್ಥಾಪಿಸಲು ಸಮರ್ಪಿತರಾಗಿದ್ದೇವೆ."
      },
      jobs: {
        badge: "ವೃತ್ತಿ ಮತ್ತು ಬೆಳವಣಿಗೆ",
        title: "ನಮ್ಮೊಂದಿಗೆ ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸಿ",
        step1: {
          title: "ಇಂಟರ್ನ್‌ಶಿಪ್",
          desc: "ನಮ್ಮ ಪ್ರಾಯೋಗಿಕ ಇಂಟರ್ನ್‌ಶಿಪ್ ಕಾರ್ಯಕ್ರಮಗಳೊಂದಿಗೆ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಪ್ರಾರಂಭಿಸಿ. ಉದ್ಯಮ ತಜ್ಞರಿಂದ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ವೃತ್ತಿಪರ ಬೆಳವಣಿಗೆಯತ್ತ ಸ್ಪಷ್ಟ ಮಾರ್ಗವನ್ನು ಪಡೆಯಿರಿ."
        },
        step3: {
          title: "ತರಬೇತಿ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳು",
          desc: "ನಮ್ಮ ವಿಶೇಷ ತರಬೇತಿ ಮಾಡ್ಯೂಲ್‌ಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಕೌಶಲ್ಯವನ್ನು ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಿ. ನಾವು ವೃತ್ತಿಪರರನ್ನು ಸಬಲಗೊಳಿಸಲು ಮತ್ತು ಸಾಂಸ್ಥಿಕ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಸಮಗ್ರ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತೇವೆ.",
          clickToExpand: "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
          clickToCollapse: "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಮುಚ್ಚಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
          programs: [
            {
              title: "ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳಿಗೆ ನಾಯಕತ್ವ ಶ್ರೇಷ್ಠತೆ ಮತ್ತು ಸಾಮಾಜಿಕವಾಗಿ ಸ್ಪಂದಿಸುವ ಸ್ಥಳೀಯ ಆಡಳಿತ ತರಬೇತಿ (ಆವರಣದಲ್ಲಿ)",
              desc: "ಈ ಆವರಣದೊಳಗಿನ ತರಬೇತಿಯು ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳಲ್ಲಿ ನಾಯಕತ್ವ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಆಡಳಿತ ಕೌಶಲ್ಯಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ. ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಉಪಕ್ರಮಗಳ ಪರಿಣಾಮಕಾರಿ ಅನುಷ್ಠಾನಕ್ಕಾಗಿ ನೈತಿಕ ನಾಯಕತ್ವ, ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆ, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಸಾಮಾಜಿಕವಾಗಿ ಸ್ಪಂದಿಸುವ ಆಡಳಿತಕ್ಕೆ ಕಾರ್ಯಕ್ರಮವು ಒತ್ತು ನೀಡುತ್ತದೆ.",
              image: "/karnataka_panchayat_training_1778046812790.png"
            },
            {
              title: "ಸೋಲಾರ್ ಲ್ಯಾಂಟರ್ನ್ ಸ್ವಸಹಾಯ ಸಂಘದ (SHG) ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮ – 1 ದಿನ (ಆವರಣದ ಹೊರಗೆ)",
              desc: "ಈ ಒಂದು ದಿನದ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮವು ಸ್ವಸಹಾಯ ಸಂಘದ ಮಹಿಳೆಯರಿಗೆ ಸೌರ ಲ್ಯಾಂಟರ್ನ್‌ಗಳ ಪ್ರಯೋಜನಗಳು, ಬಳಕೆ ಮತ್ತು ನಿರ್ವಹಣೆಯ ಬಗ್ಗೆ ಶಿಕ್ಷಣ ನೀಡುತ್ತದೆ. ಇಂಧನ ವೆಚ್ಚಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಮತ್ತು ಸುಸ್ಥಿರ ಜೀವನವನ್ನು ಉತ್ತೇಜಿಸುವ ಶುದ್ಧ ಬೆಳಕಿನ ಪರಿಹಾರಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಲು ಈ ಉಪಕ್ರಮವು ಗ್ರಾಮೀಣ ಕುಟುಂಬಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ.",
              image: "/karnataka_shg_solar_lantern_1778046831496.png"
            },
            {
              title: "ಪುನರುತ್ಪಾದಕ ಶಕ್ತಿ ಕುರಿತು ಐಟಿಐ/ಡಿಪ್ಲೊಮಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಂತ್ರಜ್ಞ ತರಬೇತಿ – 3 ದಿನಗಳು (ಸರ್ಕಾರೇತರ ಸಂಸ್ಥೆಗಳ ಮೂಲಕ ಸಂಸ್ಥೆಯ ಆವರಣದ ಹೊರಗಡೆ)",
              desc: "ಮೂರು ದಿನಗಳ ಈ ತರಬೇತಿಯನ್ನು ಸರ್ಕಾರೇತರ ಸಂಸ್ಥೆಗಳ ಮೂಲಕ ಕಾಲೇಜು ಹೊರಗಡೆ ಆಯೋಜಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಇದು ಕೈಗಾರಿಕಾ ತರಬೇತಿ ಸಂಸ್ಥೆ/ಡಿಪ್ಲೊಮಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪುನರುತ್ಪಾದಕ ಶಕ್ತಿ ತಂತ್ರಜ್ಞಾನಗಳ ಮೂಲಭೂತ ಜ್ಞಾನವನ್ನು ನೀಡುತ್ತದೆ.",
              image: "/karnataka_iti_solar_technician_1778046847494.png"
            },
            {
              title: "ಸೋಲಾರ್ ಗ್ರಿಡ್ ಎಂಜಿನಿಯರ್‌ಗಳ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮ – 10 ದಿನಗಳು (ಆವರಣದಲ್ಲಿ)",
              desc: "ಹತ್ತು ದಿನಗಳ ಈ ತೀವ್ರತರವಾದ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮವು ಗ್ರಿಡ್ ಏಕೀಕರಣ, ಸಿಸ್ಟಮ್ ವಿನ್ಯಾಸ, ವಿದ್ಯುತ್ ಸುರಕ್ಷತೆ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಯ ಮೇಲ್ವಿಚಾರಣೆಯನ್ನು ಕಲಿಸುವ ಮೂಲಕ ಸೌರ ಗ್ರಿಡ್ ಎಂಜಿನಿಯರ್‌ಗಳಾಗಿ ಕೆಲಸ ಮಾಡಲು ಭಾಗವಹಿಸುವವರನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತದೆ. ಆವರಣದಲ್ಲಿ ನಡೆಸಲಾಗುವ ಈ ಕೋರ್ಸ್ ನೈಜ-ಸಮಯದ ಸೌರ ಗ್ರಿಡ್ ಸೆಟಪ್‌ಗಳೊಂದಿಗೆ ಪ್ರಾಯೋಗಿಕ ಅನುಭವಕ್ಕೆ ಒತ್ತು ನೀಡುತ್ತದೆ.",
              image: "/karnataka_solar_grid_engineer_1778046864360.png"
            },
            {
              title: "ಸೌರಶಕ್ತಿ ವ್ಯವಸ್ಥೆಗಳ ಕುರಿತು ಉದ್ಯಮಶೀಲತೆ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮ – 5 ದಿನಗಳು (ಆವರಣದಲ್ಲಿ)",
              desc: "ಸೌರಶಕ್ತಿ ತಂತ್ರಜ್ಞಾನಗಳು, ವ್ಯಾಪಾರ ಮಾದರಿಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಅವಕಾಶಗಳ ಬಗ್ಗೆ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಭಾಗವಹಿಸುವವರಲ್ಲಿ ಉದ್ಯಮಶೀಲತೆಯನ್ನು ಪೋಷಿಸುವ ಉದ್ದೇಶವನ್ನು ಈ ಐದು ದಿನಗಳ ಕಾರ್ಯಕ್ರಮ ಹೊಂದಿದೆ. ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಅವಧಿಗಳ ಮೂಲಕ, ತರಬೇತಿದಾರರು ಸೌರ ಆಧಾರಿತ ಉದ್ಯಮಗಳನ್ನು ಹೇಗೆ ಸ್ಥಾಪಿಸಬೇಕು ಮತ್ತು ನಿರ್ವಹಿಸಬೇಕು ಎಂಬುದನ್ನು ಕಲಿಯುತ್ತಾರೆ.",
              image: "/karnataka_solar_grid_engineer_1778046864360.png"
            },
            {
              title: "ತರಬೇತಿ ಕೈಗಾರಿಕಾ ತರಬೇತಿ ಸಂಸ್ಥೆ/ಡಿಪ್ಲೊಮಾ ಪದವೀಧರರಿಗೆ ಸೂರ್ಯಮಿತ್ರ ಸೌರ ತಂತ್ರಜ್ಞ ತರಬೇತಿ – 3 ತಿಂಗಳು (ಸಂಸ್ಥೆಯ ಆವರಣದಲ್ಲಿ)",
              desc: "ಈ ತರಬೇತಿಯು ತರಬೇತಿ ಕೈಗಾರಿಕಾ ತರಬೇತಿ ಸಂಸ್ಥೆ ಮತ್ತು ಡಿಪ್ಲೊಮಾ ಪದವೀಧರರಿಗೆ ಮೂರು ತಿಂಗಳ ಸೂರ್ಯಮಿತ್ರ ಸೌರ ತಂತ್ರಜ್ಞ ಸೌರ ಫೋಟೋವೋಲ್ಟಾಯಿಕ್ ವ್ಯವಸ್ಥೆಗಳ ಉನ್ನತ ಜ್ಞಾನವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕ್ಯಾಂಪಸ್ನಲ್ಲಿ ನಡೆಯುವ ಈ ತರಬೇತಿಯಲ್ಲಿ ಅಭ್ಯಾಸ, ಕ್ಷೇತ್ರ ಅನುಭವ ಮತ್ತು ಕೈಗಾರಿಕಾ ಅವಶ್ಯಕತೆಗಳಿಗೆ ಹೊಂದುವ ವಿಷಯಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.",
              image: "/karnataka_iti_solar_technician_1778046847494.png"
            },
            {
              title: "ಗ್ರಾಮೀಣ ಕೈಗಾರಿಕಾ ತರಬೇತಿ ಸಂಸ್ಥೆ/ಡಿಪ್ಲೊಮಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸೌರ ತಂತ್ರಜ್ಞ ತರಬೇತಿ – 1 ತಿಂಗಳು (ಸಂಸ್ಥೆಯ ಆವರಣದಲ್ಲಿ)",
              desc: "ಒಂದು ತಿಂಗಳ ಕಾಲ ಕ್ಯಾಂಪಸ್ನಲ್ಲಿ ನಡೆಯುವ ಈ ತರಬೇತಿ ಗ್ರಾಮೀಣ ಕೈಗಾರಿಕಾ ತರಬೇತಿ ಸಂಸ್ಥೆ ಮತ್ತು ಡಿಪ್ಲೊಮಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸೌರ ವ್ಯವಸ್ಥೆಗಳ ಅಳವಡಿಕೆ, ನಿರ್ವಹಣೆ ಮತ್ತು ದೋಷಪತ್ತೆ ಕುರಿತು ಕೌಶಲ್ಯಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಪುನರುತ್ಪಾದಕ ಶಕ್ತಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ವೃದ್ಧಿಯಾಗುತ್ತಿರುವ ಉದ್ಯೋಗಾವಕಾಶಗಳಿಗೆ ಯುವಕರನ್ನು ಸಿದ್ಧಗೊಳಿಸುವುದೇ ಇದರ ಗುರಿಯಾಗಿದೆ.",
              image: "/karnataka_iti_solar_technician_1778046847494.png"
            },
            {
              title: "ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ, ಮಳೆನೀರು ಕೊಯ್ಲು ಮತ್ತು ಘನತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಕುರಿತು ಶಾಲೆ ಮತ್ತು ಕಾಲೇಜುಗಳಿಗೆ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು – 1 ದಿನ",
              desc: "ಶಾಲೆಗಳು ಮತ್ತು ಕಾಲೇಜುಗಳಿಗಾಗಿ ಈ ಒಂದು ದಿನದ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮವು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ, ಮಳೆನೀರು ಕೊಯ್ಲು ಮತ್ತು ಘನತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಯಂತಹ ಪ್ರಮುಖ ಪರಿಸರ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಪರಿಚಯಿಸುತ್ತದೆ. ಸಂವಾದಾತ್ಮಕ ಅವಧಿಗಳ ಮೂಲಕ, ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಪರಿಸರ ಸ್ನೇಹಿ ಅಭ್ಯಾಸಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಲು ಮತ್ತು ಪರಿಸರ ಸಂರಕ್ಷಣೆಗೆ ಕೊಡುಗೆ ನೀಡಲು ಪ್ರೋತ್ಸಾಹಿಸಲಾಗುತ್ತದೆ.",
              image: "/karnataka_environmental_school_1778046883896.png"
            },
            {
              title: "ಸ್ವಸಹಾಯ ಸಂಘದ (SHG) ಮಹಿಳೆಯರಿಗೆ ಘನತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ (SWM) ಘಟಕದ ನಿರ್ವಹಣೆ ತರಬೇತಿ – 5 ದಿನಗಳು (ಸರ್ಕಾರೇತರ ಸಂಸ್ಥೆಗಳ ಮೂಲಕ ಆವರಣದ ಹೊರಗಡೆ)",
              desc: "ಈ ಐದು ದಿನಗಳ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮವು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ಘಟಕಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನಿರ್ವಹಿಸಲು ಅಗತ್ಯವಿರುವ ಕೌಶಲ್ಯಗಳೊಂದಿಗೆ SHG ಮಹಿಳೆಯರನ್ನು ಸಜ್ಜುಗೊಳಿಸುತ್ತದೆ. NGO ಬೆಂಬಲದೊಂದಿಗೆ ಕ್ಯಾಂಪಸ್‌ನ ಹೊರಗೆ ನಡೆಸಲಾಗುವ ಈ ತರಬೇತಿಯು ಘಟಕದ ಆಡಳಿತ, ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣೆ, ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಣೆ ಯೋಜನೆ ಮತ್ತು ಪರಿಸರ ಸ್ನೇಹಿ ಅಭ್ಯಾಸಗಳ ಅಳವಡಿಕೆಯಂತಹ ವಿಷಯಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.",
              image: "/karnataka_shg_waste_management_1778046899981.png"
            },
            {
              title: "SWM ಘಟಕಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡುವ ಸ್ವಸಹಾಯ ಸಂಘದ (SHG) ಸದಸ್ಯರಿಗೆ ಕೋರ್ಸ್ – 3 ದಿನಗಳು (ಸರ್ಕಾರೇತರ ಸಂಸ್ಥೆಗಳ ಸಹಯೋಗದೊಂದಿಗೆ ಆವರಣದ ಹೊರಗಡೆ)",
              desc: "ಈ ಮೂರು ದಿನಗಳ ರಿಫ್ರೆಶರ್ ಕೋರ್ಸ್ ಅನ್ನು ಘನತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಘಟಕಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡುವ ಸ್ವಸಹಾಯ ಸಂಘದ ಸದಸ್ಯರ ಜ್ಞಾನ ಮತ್ತು ಕೌಶಲ್ಯಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಎನ್‌ಜಿಒಗಳ ಸಹಯೋಗದೊಂದಿಗೆ ನಡೆಸಲಾಗುವ ಈ ತರಬೇತಿಯು ಘಟಕದ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸುಧಾರಿಸಲು ನವೀಕರಿಸಿದ ಎಸ್‌ಡಬ್ಲ್ಯೂಎಂ ಅಭ್ಯಾಸಗಳು, ಸುರಕ್ಷತಾ ಕ್ರಮಗಳು, ವಿಂಗಡಣೆ ವಿಧಾನಗಳು ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ಕಾರ್ಯಾಚರಣೆಯ ತಂತ್ರಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.",
              image: "/karnataka_shg_waste_management_1778046899981.png"
            },
            {
              title: "ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ, ಮಳೆನೀರು ಕೊಯ್ಲು ಮತ್ತು ಘನತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಕುರಿತು ಸ್ವಸಹಾಯ ಸಂಘದ ಮಹಿಳೆಯರು ಮತ್ತು ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮ – 1 ದಿನ (ಸರ್ಕಾರೇತರ ಸಂಸ್ಥೆಗಳ ಮೂಲಕ ಆವರಣದ ಹೊರಗಡೆ)",
              desc: "ಈ ಒಂದು ದಿನದ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮವು ನವೀಕರಿಸಬಹುದಾದ ಶಕ್ತಿ, ಮಳೆನೀರು ಕೊಯ್ಲು ಮತ್ತು ಘನತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಯ ಮಹತ್ವದ ಕುರಿತು SHG ಮಹಿಳೆಯರು ಮತ್ತು ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಶಿಕ್ಷಣ ನೀಡುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ. ಎನ್‌ಜಿಒಗಳ ಮೂಲಕ ಕ್ಯಾಂಪಸ್‌ನ ಹೊರಗೆ ನಡೆಸಲಾದ ಕಾರ್ಯಕ್ರಮವು ಪ್ರಾಯೋಗಿಕ ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಸುಸ್ಥಿರತೆ ಮತ್ತು ಪರಿಸರ ಜವಾಬ್ದಾರಿಯನ್ನು ಉತ್ತೇಜಿಸಲು ಮನೆಯ ಮತ್ತು ಸಮುದಾಯ ಮಟ್ಟದಲ್ಲಿ ಅಳವಡಿಸಿಕೊಳ್ಳಬಹುದಾದ ಸರಳ ತಂತ್ರಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.",
              image: "/karnataka_environmental_school_1778046883896.png"
            }
          ]
        }
      },
      internshipDetails: {
        title: "ಇಂಟರ್ನ್‌ಶಿಪ್ ಕಾರ್ಯಕ್ರಮ",
        intro: "ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ, ಘನತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಮತ್ತು ಮಳೆನೀರು ಕೊಯ್ಲು ಆಧುನಿಕ ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿಯ ಪ್ರಮುಖ ಸ್ಥೂಲ ಸ್ತಂಭಗಳಾಗಿವೆ. ಭವಿಷ್ಯದ ಸುಸ್ಥಿರ ಪರಿಹಾರಗಳನ್ನು ರೂಪಿಸಲು ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ಅನ್ವಯಿಸುವುದನ್ನು ಊಹಿಸಿಕೊಳ್ಳಿ.",
        role: "ಇಂಟರ್ನ್‌ಶಿಪ್",
        location: "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ",
        aboutTitle: "ಕಾರ್ಯಕ್ರಮದ ಬಗ್ಗೆ",
        aboutDesc: "ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳ ಜನರಿಗೆ ಉಪಯುಕ್ತ ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಜ್ಞಾನವನ್ನು ನೀಡುವ ಮೂಲಕ ಅವರನ್ನು ಸಬಲಗೊಳಿಸಲು MGIRED ತನ್ನ ಇಂಟರ್ನ್‌ಶಿಪ್ ಕಾರ್ಯಕ್ರಮವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಉತ್ಸುಕವಾಗಿದೆ. ಈ ಯೋಜನೆಯು ಪ್ರಾಯೋಗಿಕ ಅನುಭವ ಮತ್ತು ವೃತ್ತಿಪರ ಅಭಿವೃದ್ಧಿಯ ಅವಕಾಶಗಳ ಮೂಲಕ ಶೈಕ್ಷಣಿಕ ಕಲಿಕೆ ಮತ್ತು ಉದ್ಯಮದ ಅಗತ್ಯತೆಗಳ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ.",
        eligibilityTitle: "ಅರ್ಹತೆಯ ಮಾನದಂಡಗಳು",
        eligibilityDesc: "ಪ್ರಸ್ತುತ ಪದವಿ ಅಥವಾ ಸ್ನಾತಕೋತ್ತರ ಪದವಿ ವ್ಯಾಸಂಗ ಮಾಡುತ್ತಿರುವ ಉತ್ಸಾಹಿ ಮತ್ತು ಸಮರ್ಥ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ನಾವು ಸ್ವಾಗತಿಸುತ್ತೇವೆ.",
        highlightsTitle: "ಕಾರ್ಯಕ್ರಮದ ಪ್ರಮುಖಾಂಶಗಳು",
        highlights: [
          "ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನಗಳು ಮತ್ತು ನೈಜ ಉದ್ಯಮದ ಯೋಜನೆಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ",
          "MGIRED ನ ಅನುಭವಿ ವೃತ್ತಿಪರರಿಂದ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸಲಹೆ",
          "ನೈಜ-ಪ್ರಪಂಚದ ಸವಾಲುಗಳು ಮತ್ತು ಸಾಂಸ್ಥಿಕ ಕಾರ್ಯಾಚರಣೆಗಳ ಪರಿಚಯ",
          "ವೃತ್ತಿಪರ ಮತ್ತು ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆಯನ್ನು ಪೋಷಿಸುವ ವೈವಿಧ್ಯಮಯ, ಅಂತರ್ಗತ ಮತ್ತು ಬೆಂಬಲಿತ ಕೆಲಸದ ವಾತಾವರಣ"
        ],
        whyTitle: "ನಮ್ಮೊಂದಿಗೆ ಏಕೆ ಸೇರಬೇಕು?",
        whyDesc: "MGIRED ನಲ್ಲಿ, ಪ್ರತಿಭೆಯನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು, ನಾವೀನ್ಯತೆಯನ್ನು ಉತ್ತೇಜಿಸಲು ಮತ್ತು ಸಮಗ್ರತೆಯನ್ನು ಬೆಂಬಲಿಸಲು ನಾವು ಬದ್ಧರಾಗಿದ್ದೇವೆ. ಈ ಇಂಟರ್ನ್‌ಶಿಪ್ ಅತ್ಯಗತ್ಯ ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಉದ್ಯಮದ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಕಾರ್ಪೊರೇಟ್ ಜಗತ್ತಿನಲ್ಲಿ ವ್ಯಕ್ತಿಗಳು ಯಶಸ್ವಿಯಾಗಲು ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ನೀವು ವೃತ್ತಿಪರ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಾಗಿದ್ದರೆ, ಈಗಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.",
        applyTitle: "ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ",
        applyDesc: "ಆಸಕ್ತ ಅಭ್ಯರ್ಥಿಗಳು ತಮ್ಮ ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಗಳ ಮೂಲಕ ಇಂಟರ್ನ್‌ಶಿಪ್ ಅವಕಾಶಗಳನ್ನು ಪಡೆಯಬಹುದು."
      },
      heritageVillage: {
        title: "ಪಾರಂಪರಿಕ ಗ್ರಾಮ",
        desc: "ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕದ ಶ್ರೀಮಂತ ಸಂಸ್ಕೃತಿ, ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಸುಸ್ಥಿರ ಜೀವನಶೈಲಿಯನ್ನು ಬಿಂಬಿಸುವ MGIRED ನ ಸಾಂಪ್ರದಾಯಿಕ ಪಾರಂಪರಿಕ ಗ್ರಾಮವನ್ನು ಅನ್ವೇಷಿಸಿ. 3D ಡೋಮ್ ಗ್ಯಾಲರಿಯನ್ನು ತಿರುಗಿಸಲು ಡ್ರ್ಯಾಗ್ ಮಾಡಿ, ಮತ್ತು ದೊಡ್ಡದಾಗಿಸಲು ಯಾವುದೇ ಚಿತ್ರವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಟ್ಯಾಪ್ ಮಾಡಿ."
      },
      cta: {
        title: "ನಮ್ಮ ಮಿಷನ್ ಸೇರಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
        accent: "MGIRED ನೇಮಕಾತಿ ಮಾಡುತ್ತಿದೆ.",
        subtitle: "ನಮ್ಮ ಇತ್ತೀಚಿನ ಅವಕಾಶಗಳು, ಇಂಟರ್ನ್‌ಶಿಪ್‌ಗಳು ಮತ್ತು ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
        button: "ಸಂಪರ್ಕಿಸಿ"
      },
      footer: {
        tagline: "ಸುಸ್ಥಿರ ಶ್ರೇಷ್ತೆ ಮತ್ತು ನಾವೀನ್ಯತೆಯ ಮೂಲಕ ಪ್ರಗತಿಯನ್ನು ಉತ್ತೇಜಿಸುವುದು ಮತ್ತು ಭವಿಷ್ಯವನ್ನು ಸಬಲಗೊಳಿಸುವುದು.",
        navTitle: "ನ್ಯಾವಿಗೇಷನ್",
        contactTitle: "ಸಂಪರ್ಕಿಸಿ",
        addressTitle: "ಅಂಚೆ ವಿಳಾಸ",
        addressLine1: "ಮಹಾತ್ಮಾ ಗಾಂಧಿ ಗ್ರಾಮೀಣ ಇಂಧನ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಸಂಸ್ಥೆ (MGIRED)",
        addressLine2: "ಶ್ರೀರಾಮಪುರ ಕ್ರಾಸ್, ಜಕ್ಕೂರು, ಬೆಂಗಳೂರು – 560064",
        addressLine3: "ಕರ್ನಾಟಕ, ಭಾರತ"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
