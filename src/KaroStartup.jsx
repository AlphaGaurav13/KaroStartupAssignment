import { useEffect, useState } from "react"

export default function KaroStartup() {
  // Logic for the spotlight mouse-follow effect on stat cards
  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("ks-stat-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="karostartup" className="ks-wrapper" onMouseMove={handleMouseMove}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .ks-wrapper {
          padding: 160px 10%;
          background: #050505;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Ambient background mesh glow */
        .ks-bg-glow {
          position: absolute;
          top: 20%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(230, 48, 18, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .ks-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 100px;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .ks-tag {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #E63012;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ks-tag::before {
          content: '';
          width: 30px;
          height: 1px;
          background: #E63012;
        }

        .ks-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(38px, 5.5vw, 64px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #fff;
          margin-bottom: 32px;
        }

        .ks-feature-item {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 12px;
          border-radius: 16px;
          border: 1px solid transparent;
        }

        .ks-feature-item:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.05);
          transform: translateX(10px);
        }

        .ks-bullet {
          color: #E63012;
          font-size: 20px;
          line-height: 1;
        }

        .ks-stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .ks-stat-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 32px;
          padding: 48px 32px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        /* The Spotlight Effect */
        .ks-stat-card::before {
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(230, 48, 18, 0.1),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 1;
        }

        .ks-stat-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(230, 48, 18, 0.4);
          transform: translateY(-10px);
        }

        .ks-stat-card:hover::before { opacity: 1; }

        .ks-stat-num {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 48px;
          font-weight: 900;
          color: #fff;
          margin-bottom: 8px;
          display: block;
          position: relative;
          z-index: 2;
        }

        .ks-stat-label {
          font-size: 12px;
          font-weight: 700;
          color: rgba(141, 160, 192, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          position: relative;
          z-index: 2;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .ks-grid { grid-template-columns: 1fr; gap: 60px; }
          .ks-wrapper { padding: 100px 7%; }
        }

        @media (max-width: 500px) {
          .ks-stat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ks-bg-glow" />

      <div className="ks-grid">
        {/* Left Column */}
        <div className="ks-content">
          <div className="ks-tag">The Parent Ecosystem</div>
          <h2 className="ks-title">
            Empowering Bharat's <br />
            Next Generation of <br />
            <span style={{ color: '#E63012' }}>Builders.</span>
          </h2>

          <p className="text-xl leading-relaxed text-[#8DA0C0] mb-12 font-light max-w-lg">
            Since 2020, KaroStartup has been the voice of the Indian startup ecosystem. We don't just report stories—we fuel them. Karo Pitch is our next step in turning narratives into capital.
          </p>

          <div className="ks-features">
            {[
              "Over 2000 startup stories published and 500K+ monthly readers.",
              "A thriving community of entrepreneurs, investors, and mentors.",
              "5+ years of building trust across every corner of Bharat.",
              "100+ contributors and 50+ partners powering the ecosystem."
            ].map((text, i) => (
              <div key={i} className="ks-feature-item group">
                <span className="ks-bullet">⚡</span>
                <span className="text-base leading-relaxed text-[#8DA0C0]/80 group-hover:text-white transition-colors">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Bento Stat Cards */}
        <div className="ks-stat-grid">
          {[
            { num: "2000+", label: "Stories Told" },
            { num: "500K+", label: "Monthly Reach" },
            { num: "100+", label: "Contributors" },
            { num: "50+", label: "Ecosystem Partners" }
          ].map((stat, i) => (
            <div key={i} className="ks-stat-card">
              <span className="ks-stat-num">{stat.num}</span>
              <span className="ks-stat-label">{stat.label}</span>
              {/* Corner Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                background: 'linear-gradient(225deg, rgba(230, 48, 18, 0.08) 0%, transparent 70%)',
                borderRadius: '0 0 0 100%'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}