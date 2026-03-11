import React, { useEffect } from 'react';

export default function Investors() {
  const investorData = [
    { name: "Rahul Kapoor", role: "Angel Investor", info: "15+ Investments", initials: "RK", color: "linear-gradient(135deg, #FF5C1A, #FF9D5C)" },
    { name: "Priya Sharma", role: "Partner, VC Fund", info: "Bharat Ventures", initials: "PS", color: "linear-gradient(135deg, #3B82F6, #06B6D4)" },
    { name: "Arjun Verma", role: "Family Office", info: "Consumer and D2C", initials: "AV", color: "linear-gradient(135deg, #10B981, #059669)" },
    { name: "Neha Malhotra", role: "VC Partner", info: "Scale Capital", initials: "NM", color: "linear-gradient(135deg, #8B5CF6, #EC4899)" },
  ];

  // Mouse spotlight logic
  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("inv-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="investors" className="investors-section" onMouseMove={handleMouseMove}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .investors-section {
          padding: 160px 10%;
          background: #050505;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Moving background light */
        .investors-section::after {
          content: '';
          position: absolute;
          top: 40%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(230, 48, 18, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .inv-container { position: relative; z-index: 10; }

        .inv-header {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          margin-bottom: 100px;
          align-items: flex-end;
        }

        .inv-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #fff;
        }

        .inv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 100px;
        }

        .inv-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 50px 30px;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(12px);
        }

        /* Spotlight Effect */
        .inv-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(230, 48, 18, 0.1),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s;
        }

        .inv-card:hover::before { opacity: 1; }
        .inv-card:hover {
          transform: translateY(-12px);
          border-color: rgba(230, 48, 18, 0.3);
          background: rgba(255, 255, 255, 0.04);
        }

        .inv-avatar {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 26px;
          color: #fff;
          transition: transform 0.5s ease;
          position: relative;
          z-index: 2;
        }

        .inv-card:hover .inv-avatar { transform: scale(1.1) rotate(-8deg); }

        .inv-name {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 22px;
          color: #fff;
          margin-bottom: 8px;
        }

        .inv-role {
          font-size: 14px;
          color: #8DA0C0;
          margin-bottom: 20px;
        }

        .inv-pill {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 16px;
          background: rgba(230, 48, 18, 0.1);
          color: #E63012;
          border-radius: 100px;
          border: 1px solid rgba(230, 48, 18, 0.2);
        }

        /* Marquee Styles */
        .marquee-strip {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 60px;
          margin-top: 60px;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-content {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .logo-box {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 24px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.1);
          letter-spacing: -1px;
          transition: color 0.3s;
        }

        .logo-box:hover { color: #E63012; }

        @media (max-width: 1024px) {
          .inv-header { grid-template-columns: 1fr; gap: 30px; }
          .investors-section { padding: 100px 7%; }
        }
      `}</style>

      <div className="inv-container">
        {/* Header Section */}
        <div className="inv-header">
          <div>
            <div style={{ color: "#E63012", fontWeight: 800, fontSize: "11px", letterSpacing: "0.4em", marginBottom: "24px", textTransform: "uppercase" }}>
              The Network
            </div>
            <h2 className="inv-title">
              Capital Meets <br /> <span className="text-white/20">Bharat's</span> Grit.
            </h2>
          </div>
          <p className="inv-desc" style={{ fontSize: '18px', color: '#8DA0C0', lineHeight: '1.8', fontWeight: 300 }}>
            Access a high-octane network of 100+ vetted investors. From Tier-1 VCs to prolific Angels, we bring the best of the Indian ecosystem to your screen.
          </p>
        </div>

        {/* Investor Cards */}
        <div className="inv-grid">
          {investorData.map((inv, index) => (
            <div key={index} className="inv-card">
              <div className="inv-avatar" style={{ background: inv.color, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
                {inv.initials}
              </div>
              <div className="inv-name">{inv.name}</div>
              <div className="inv-role">{inv.role}</div>
              <div className="inv-pill">{inv.info}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & Marquee */}
        <div style={{ textAlign: 'center' }}>
          <a href="#cta" style={{
            padding: "18px 44px",
            background: "#E63012",
            color: "#fff",
            borderRadius: "16px",
            fontWeight: "800",
            fontSize: "16px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 20px 40px -10px rgba(230,48,18,0.4)",
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Apply for Investor Access
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Investor Firm Marquee */}
        <div className="marquee-strip overflow-hidden">
          <div className="marquee-content">
            {["ACCEL", "SEQUOIA", "BLUME", "ELEVATION", "KALAARI", "MATRIX", "TITAN", "ACCEL", "SEQUOIA", "BLUME", "ELEVATION", "KALAARI", "MATRIX", "TITAN"].map((firm, i) => (
              <div key={i} className="logo-box">
                {firm}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}