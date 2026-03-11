import { useEffect, useState } from "react"

export default function Hero() {
  const [counts, setCounts] = useState({ startups: 0, investors: 0, funding: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    let step = 0
    const totalSteps = 80
    const timer = setInterval(() => {
      step++
      setCounts({
        startups: Math.round((step / totalSteps) * 500),
        investors: Math.round((step / totalSteps) * 80),
        funding: Math.round((step / totalSteps) * 12),
      })
      if (step >= totalSteps) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #050505;
        }

        .text-gradient {
          background: linear-gradient(to right, #E63012, #FF8A00, #E63012);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(1.5deg); }
        }

        @keyframes fadein {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 120px 8% 80px;
        }

        .hero-bg-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: transform 0.3s ease-out;
        }

        .hero-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 28vw;
          font-weight: 900;
          color: rgba(255,255,255,0.025);
          letter-spacing: -0.04em;
          user-select: none;
          white-space: nowrap;
          line-height: 1;
        }

        .hero-glow-red {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 65vw;
          height: 65vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(230,48,18,0.22) 0%, transparent 70%);
          filter: blur(100px);
          opacity: 0.8;
        }

        .hero-glow-blue {
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 55vw;
          height: 55vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          filter: blur(90px);
        }

        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 44px 44px;
          opacity: 0.15;
          pointer-events: none;
        }

        /* ── LEFT COLUMN ── */
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .hero-left {
          animation: fadein 0.8s ease both;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          margin-bottom: 32px;
        }

        .hero-badge-dot {
          position: relative;
          width: 8px;
          height: 8px;
          flex-shrink: 0;
        }

        .hero-badge-dot span {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #E63012;
        }

        .hero-badge-dot::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(230,48,18,0.4);
          animation: ping 1.5s cubic-bezier(0,0,0.2,1) infinite;
        }

        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        .hero-badge-text {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }

        .hero-h1 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(44px, 5.5vw, 84px);
          font-weight: 900;
          color: #fff;
          line-height: 0.97;
          letter-spacing: -0.025em;
          margin-bottom: 28px;
        }

        .hero-p {
          font-size: clamp(15px, 1.2vw, 18px);
          line-height: 1.75;
          color: rgba(141,160,192,0.9);
          max-width: 440px;
          font-weight: 300;
          margin-bottom: 44px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 56px;
        }

        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: #E63012;
          color: #fff;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 15px;
          letter-spacing: 0.01em;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 8px 32px rgba(230,48,18,0.45), 0 2px 8px rgba(0,0,0,0.3);
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateY(110%);
          transition: transform 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(230,48,18,0.55), 0 4px 12px rgba(0,0,0,0.4);
        }

        .btn-primary:hover::after {
          transform: translateY(0);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.8);
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 15px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .hero-stat-val {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .hero-stat-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── RIGHT CARD ── */
        .hero-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          animation: fadein 0.8s 0.2s ease both;
        }

        .elite-card-wrapper {
          position: relative;
          animation: float 6s ease-in-out infinite;
        }

        .elite-card {
          position: relative;
          width: 400px;
          height: 500px;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 40px;
          padding: 44px;
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.23,1,0.32,1), border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .elite-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(230,48,18,0.1) 0%, transparent 60%);
          pointer-events: none;
        }

        .elite-card:hover {
          transform: rotateY(-8deg) rotateX(4deg) translateY(-8px);
          border-color: rgba(230,48,18,0.35);
          box-shadow: -16px 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(230,48,18,0.08);
        }

        .glass-shine {
          position: absolute;
          top: -150%;
          left: -150%;
          width: 300%;
          height: 300%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.04), transparent);
          transition: all 0.8s ease;
          pointer-events: none;
        }

        .elite-card:hover .glass-shine {
          top: 150%;
          left: 150%;
        }

        .card-featured-tag {
          display: inline-flex;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(230,48,18,0.12);
          color: #E63012;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: 1px solid rgba(230,48,18,0.2);
          margin-bottom: 0;
        }

        .card-bg-kp {
          position: absolute;
          top: 16px;
          right: 20px;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 88px;
          font-weight: 900;
          font-style: italic;
          color: rgba(255,255,255,0.04);
          user-select: none;
          line-height: 1;
        }

        .card-body {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .card-accent-line {
          width: 48px;
          height: 3px;
          background: #E63012;
          border-radius: 4px;
          box-shadow: 0 0 14px rgba(230,48,18,0.7);
          margin-top: 24px;
        }

        .card-headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 34px;
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .card-headline span { color: #E63012; }

        .card-sub {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          max-width: 260px;
          margin-top: 12px;
        }

        .card-founder {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .card-founder-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E63012, #FF8A00);
          flex-shrink: 0;
        }

        .card-founder-name {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 3px;
        }

        .card-founder-role {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .card-glow-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 130%;
          height: 130%;
          background: rgba(230,48,18,0.08);
          filter: blur(100px);
          border-radius: 50%;
          z-index: -1;
          pointer-events: none;
        }

        /* ── MARQUEE ── */
        .marquee-strip {
          width: 100%;
          background: #050505;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 18px 0;
          overflow: hidden;
        }

        .marquee-strip:hover .marquee-inner {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .marquee-word {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(16px, 2.5vw, 26px);
          font-weight: 900;
          color: rgba(255,255,255,0.07);
          letter-spacing: -0.01em;
          padding: 0 32px;
          white-space: nowrap;
          transition: color 0.3s;
        }

        .marquee-word:hover {
          color: rgba(255,255,255,0.18);
        }

        .marquee-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #E63012;
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(230,48,18,0.6);
        }

        @media (max-width: 1024px) {
          .hero-content { grid-template-columns: 1fr; gap: 60px; }
          .hero-right { justify-content: center; display: none; }
          .hero-section { padding: 100px 6% 60px; }
        }

        @media (max-width: 640px) {
          .hero-section { padding: 90px 5% 50px; }
          .hero-stats { gap: 24px; }
          .hero-actions { flex-direction: column; }
          .btn-primary, .btn-secondary { justify-content: center; }
        }
      `}</style>

      <div className="hero-root">
        <section className="hero-section">

          {/* BG Layer */}
          <div
            className="hero-bg-layer"
            style={{ transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)` }}
          >
            <div className="hero-bg-text">PITCH</div>
            <div className="hero-glow-red" />
            <div className="hero-glow-blue" />
          </div>
          <div className="hero-grid-overlay" />

          {/* Content Grid */}
          <div className="hero-content">

            {/* LEFT */}
            <div className="hero-left">
              <div className="hero-badge">
                <div className="hero-badge-dot"><span /></div>
                <span className="hero-badge-text">2026 Funding Season is Live</span>
              </div>

              <h1 className="hero-h1">
                Where Bharat<br />
                Meets <span className="text-gradient">Capital.</span>
              </h1>

              <p className="hero-p">
                We're tearing down the walls for founders in Tier 2 & 3 cities.
                Pitch to India's elite VCs and Angel networks from anywhere.
              </p>

              <div className="hero-actions">
                <button className="btn-primary">
                  Get Funded Now <span style={{ fontSize: 18 }}>→</span>
                </button>
                <button className="btn-secondary">
                  View Showcase
                </button>
              </div>

              <div className="hero-stats">
                {[
                  { val: counts.startups, suffix: "+", label: "Startups" },
                  { val: counts.investors, suffix: "+", label: "Investors" },
                  { val: `₹${counts.funding}`, suffix: "Cr+", label: "Raised" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="hero-stat-val">{s.val}{s.suffix}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="hero-right">
              <div className="elite-card-wrapper">
                <div className="card-glow-bg" />
                <div className="elite-card">
                  <div className="glass-shine" />
                  <div className="card-bg-kp">KP</div>

                  <div className="card-body">
                    <div>
                      <div className="card-featured-tag">Featured Startup</div>
                      <div className="card-accent-line" />
                    </div>

                    <div>
                      <h3 className="card-headline">
                        India's Next<br />
                        <span>Unicorn</span> is<br />
                        from Indore.
                      </h3>
                      <p className="card-sub">
                        Join 500+ founders rewriting history.
                        Geography is no longer a limit.
                      </p>
                    </div>

                    <div className="card-founder">
                      <div className="card-founder-avatar" />
                      <div>
                        <div className="card-founder-name">Aman Rathore</div>
                        <div className="card-founder-role">Founder, AgriFlow</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Marquee */}
        <div className="marquee-strip">
          <div className="marquee-inner">
            {[...["AGRITECH","D2C","SAAS","FINTECH","HEALTH","EDTECH","WEB3","DEEPTECH"],
               ...["AGRITECH","D2C","SAAS","FINTECH","HEALTH","EDTECH","WEB3","DEEPTECH"]].map((tag, i) => (
              <div className="marquee-item" key={i}>
                <span className="marquee-word">{tag}</span>
                <div className="marquee-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}