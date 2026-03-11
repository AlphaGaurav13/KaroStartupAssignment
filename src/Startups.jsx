import { useEffect, useState } from "react"

export default function Startups() {
  const startupData = [
    {
      name: "FarmDirect India",
      tag: "AgriTech · D2C",
      desc: "Connecting 50,000+ farmers directly to urban consumers — eliminating middlemen and doubling income.",
      stats: { mrr: "₹48L", metric: "50K+", label: "Farmers", raising: "₹2Cr" },
      initial: "F",
      color: "linear-gradient(135deg, #FF5C1A, #FF9D5C)"
    },
    {
      name: "SkillBridge",
      tag: "EdTech · SaaS",
      desc: "Vocational training platform for blue-collar workers in Tier-2 cities. Helping 10,000+ get certified.",
      stats: { mrr: "₹22L", metric: "10K+", label: "Trained", raising: "₹1Cr" },
      initial: "S",
      color: "linear-gradient(135deg, #3B82F6, #06B6D4)"
    },
    {
      name: "MitraMeds",
      tag: "HealthTech · Consumer",
      desc: "Affordable primary healthcare for rural India. 200+ clinics providing consultations at just ₹99.",
      stats: { mrr: "₹35L", metric: "200+", label: "Clinics", raising: "₹3Cr" },
      initial: "M",
      color: "linear-gradient(135deg, #10B981, #059669)"
    }
  ];

  return (
    <section id="startups" className="startups-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .startups-wrapper {
          padding: 140px 10%;
          background: #050505;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Moving background light */
        .startups-wrapper::before {
          content: '';
          position: absolute;
          top: 20%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(230, 48, 18, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 80px;
          gap: 40px;
        }

        .st-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(34px, 5vw, 60px);
          font-weight: 900;
          line-height: 1.1;
          color: #fff;
          letter-spacing: -0.04em;
        }

        .st-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .st-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 32px;
          padding: 40px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(12px);
        }

        .st-card:hover {
          transform: translateY(-12px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(230, 48, 18, 0.3);
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.6);
        }

        .st-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 900;
          font-size: 24px;
          color: #fff;
          margin-bottom: 24px;
        }

        .st-tag-pill {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #E63012;
          background: rgba(230, 48, 18, 0.1);
          padding: 6px 14px;
          border-radius: 100px;
          display: inline-block;
          margin-bottom: 12px;
        }

        .st-name {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
        }

        .st-desc {
          font-size: 15px;
          color: #8DA0C0;
          line-height: 1.7;
          margin-bottom: 32px;
          font-weight: 300;
        }

        .st-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          gap: 12px;
        }

        .st-stat-box { text-align: left; }
        .st-stat-val { font-weight: 800; font-size: 18px; color: #fff; display: block; }
        .st-stat-label { font-size: 10px; font-weight: 700; color: rgba(141, 160, 192, 0.5); text-transform: uppercase; letter-spacing: 0.1em; }

        .view-all-btn {
          padding: 14px 32px;
          background: transparent;
          color: #fff;
          border-radius: 14px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          border-color: #E63012;
          color: #E63012;
          background: rgba(230, 48, 18, 0.05);
        }

        @media (max-width: 1024px) {
          .header-flex { flex-direction: column; align-items: flex-start; }
          .startups-wrapper { padding: 100px 7%; }
        }
      `}</style>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-[#E63012]" />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#E63012]">
            Discover
          </span>
        </div>

        <div className="header-flex">
          <h2 className="st-title">
            Startups You <br /> Should <span className="text-white/20">Know.</span>
          </h2>
          <a href="#" className="view-all-btn">
            Explore All 500+ Startups →
          </a>
        </div>

        <div className="st-grid">
          {startupData.map((startup, i) => (
            <div key={i} className="st-card group">
              <div className="st-icon-wrap" style={{ background: startup.color }}>
                {startup.initial}
              </div>
              <div className="st-tag-pill">{startup.tag}</div>
              <h3 className="st-name">{startup.name}</h3>
              <p className="st-desc">{startup.desc}</p>
              
              <div className="st-stats-row">
                <div className="st-stat-box">
                  <span className="st-stat-val">{startup.stats.mrr}</span>
                  <span className="st-stat-label">MRR</span>
                </div>
                <div className="st-stat-box">
                  <span className="st-stat-val">{startup.stats.metric}</span>
                  <span className="st-stat-label">{startup.stats.label}</span>
                </div>
                <div className="st-stat-box">
                  <span className="st-stat-val">{startup.stats.raising}</span>
                  <span className="st-stat-label">Raising</span>
                </div>
              </div>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E63012] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}