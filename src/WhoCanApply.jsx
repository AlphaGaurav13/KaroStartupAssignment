import React, { useEffect } from 'react';

export default function WhoCanApply() {
  const cards = [
    { num: "01", icon: "🛍️", title: "D2C Brands", desc: "Direct to consumer product businesses with real customer traction" },
    { num: "02", icon: "📱", title: "Consumer Startups", desc: "Apps and platforms targeting Indian consumers at scale" },
    { num: "03", icon: "🏭", title: "MSMEs", desc: "Small and medium enterprises looking to raise growth capital" },
    { num: "04", icon: "💻", title: "SaaS Startups", desc: "B2B and B2C software companies with recurring revenue models" },
    { num: "05", icon: "⚙️", title: "Manufacturing", desc: "Make in India manufacturers solving real supply chain problems" },
    { num: "06", icon: "🌾", title: "Bharat Startups", desc: "Founders building for Tier-2, Tier-3 cities and rural India" },
  ]

  // Logic for the spotlight mouse-follow effect
  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("wca-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .wca-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #050505;
          padding: 140px 10% 160px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle moving background mesh */
        .wca-mesh {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(230,48,18,0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(230,48,18,0.03) 0%, transparent 40%);
          pointer-events: none;
        }

        .wca-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 100px;
          position: relative;
          z-index: 10;
        }

        .wca-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #E63012;
          margin-bottom: 24px;
        }

        .wca-label::before {
          content: '';
          width: 30px;
          height: 1px;
          background: #E63012;
        }

        .wca-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 700;
          color: #fff;
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin: 0 0 20px;
        }

        .wca-title span { color: #E63012; }

        .wca-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255,255,255,0.4);
          max-width: 480px;
          font-weight: 300;
        }

        .wca-btn {
          font-family: 'Clash Display', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #fff;
          background: #E63012;
          border: none;
          padding: 18px 38px;
          border-radius: 16px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 35px rgba(230,48,18,0.3);
          white-space: nowrap;
        }

        .wca-btn:hover {
          transform: translateY(-4px) scale(1.02);
          background: #FF4422;
          box-shadow: 0 25px 50px rgba(230,48,18,0.5);
        }

        .wca-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          position: relative;
          z-index: 10;
        }

        .wca-card {
          position: relative;
          border-radius: 32px;
          padding: 48px 36px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          cursor: default;
          transition: border-color 0.4s ease, transform 0.4s ease;
        }

        /* The Spotlight Glow */
        .wca-card::before {
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(230, 48, 18, 0.1),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 1;
        }

        .wca-card:hover {
          border-color: rgba(230,48,18,0.3);
          transform: translateY(-8px);
        }

        .wca-card:hover::before { opacity: 1; }

        .wca-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          z-index: 2;
        }

        .wca-card:hover .wca-icon-wrap {
          transform: scale(1.1) rotate(-8deg);
          background: rgba(230,48,18,0.15);
          border-color: rgba(230,48,18,0.2);
        }

        .wca-num {
          font-family: 'Clash Display', sans-serif;
          font-size: 60px;
          font-weight: 700;
          color: rgba(255,255,255,0.02);
          line-height: 1;
          transition: color 0.4s ease, transform 0.4s ease;
          position: absolute;
          top: 30px;
          right: 30px;
        }

        .wca-card:hover .wca-num {
          color: rgba(230,48,18,0.08);
          transform: scale(1.1);
        }

        .wca-card-title {
          font-family: 'Clash Display', sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #fff;
          margin: 32px 0 12px;
          position: relative;
          z-index: 2;
        }

        .wca-card-desc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(141, 160, 192, 0.5);
          font-weight: 400;
          position: relative;
          z-index: 2;
        }

        .wca-card-shine {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #E63012, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .wca-card:hover .wca-card-shine { opacity: 1; }

        @media (max-width: 1024px) {
          .wca-grid { grid-template-columns: repeat(2, 1fr); }
          .wca-section { padding: 100px 7%; }
        }

        @media (max-width: 640px) {
          .wca-grid { grid-template-columns: 1fr; }
          .wca-header { align-items: flex-start; }
          .wca-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="wca-section" id="apply" onMouseMove={handleMouseMove}>
        <div className="wca-mesh" />

        <div className="wca-header">
          <div>
            <p className="wca-label">Eligibility</p>
            <h2 className="wca-title">
              Who Can <span>Apply?</span>
            </h2>
            <p className="wca-subtitle">
              We're looking for real builders. Whether you're in Indore or Bangalore, if you're building for the future, we want you.
            </p>
          </div>

          <a href="#cta" className="wca-btn">
            Apply to Pitch Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="wca-grid">
          {cards.map((card) => (
            <div className="wca-card" key={card.num}>
              <div className="wca-card-shine" />
              <span className="wca-num">{card.num}</span>

              <div className="wca-card-top">
                <div className="wca-icon-wrap">{card.icon}</div>
              </div>

              <h3 className="wca-card-title">{card.title}</h3>
              <p className="wca-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}