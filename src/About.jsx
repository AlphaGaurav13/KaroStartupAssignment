import { useEffect, useRef, useState } from "react"

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

export default function About() {
  const [ref1, vis1] = useReveal()
  const [ref2, vis2] = useReveal()
  const [ref3, vis3] = useReveal()

  const revealStyle = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  })

  // Mouse spotlight logic for cards
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="about" className="about-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .about-wrapper {
          padding: 160px 10%;
          background: #050505;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Subtle ambient glow to match hero */
        .about-bg-glow {
          position: absolute;
          top: 40%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(230, 48, 18, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 100px;
          position: relative;
          z-index: 10;
        }

        .about-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(36px, 5vw, 68px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #fff;
        }

        .highlight-card {
          padding: 24px;
          border-radius: 20px;
          transition: all 0.4s ease;
          border: 1px solid transparent;
        }

        .highlight-card:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.05);
          transform: translateX(12px);
        }

        .bento-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 32px;
          padding: 48px;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        /* Spotlight Effect */
        .bento-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(230, 48, 18, 0.12),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
        }

        .bento-card:hover::before { opacity: 1; }
        .bento-card:hover { border-color: rgba(230, 48, 18, 0.3); }

        .icon-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: rgba(230, 48, 18, 0.1);
          border: 1px solid rgba(230, 48, 18, 0.2);
          border-radius: 16px;
          font-size: 24px;
          margin-bottom: 28px;
        }

        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 60px; }
          .about-wrapper { padding: 100px 7%; }
        }
      `}</style>

      <div className="about-bg-glow" />

      <div className="about-grid">
        {/* Left Column: Vision & Narrative */}
        <div className="flex flex-col">
          <div ref={ref1} style={revealStyle(vis1)}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-[#E63012]" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#E63012]">
                Our DNA
              </span>
            </div>
            
            <h2 className="about-title mb-10">
              India's Real Builders <br />
              Deserve <span className="text-[#E63012]">Real Access.</span>
            </h2>

            <p className="text-xl leading-relaxed text-[#8DA0C0] font-light max-w-xl mb-16">
              Thousands of founders across Bharat are building real businesses in garages and small towns. We bridge the gap between their grit and the capital they deserve.
            </p>
          </div>

          {/* Icon List */}
          <div ref={ref2} style={revealStyle(vis2, 0.1)} className="space-y-4">
            {[
              { icon: "🎯", title: "Structured Pitch Events", desc: "Curated closed-room events for high-impact presentations." },
              { icon: "🌐", title: "Built for Bharat", desc: "Showcasing founders from Jaipur to Jabalpur and beyond." },
              { icon: "📈", title: "Discovery Engine", desc: "Not just funding—we enable mentorship and full ecosystem visibility." }
            ].map((item, i) => (
              <div key={i} className="highlight-card flex gap-6">
                <div className="text-2xl mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#8DA0C0] leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Pillars (Bento Style) */}
        <div ref={ref3} style={revealStyle(vis3, 0.2)} className="flex flex-col gap-8">
          
          <div className="bento-card" onMouseMove={handleMouseMove}>
            <div className="icon-pill">💡</div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              What is Karo Pitch?
            </h3>
            <p className="text-base text-[#8DA0C0] leading-relaxed">
              A structured bridge where early-stage founders present to a panel of India's elite VCs and Angel networks. We remove geographical bias from the investment equation.
            </p>
          </div>

          <div className="bento-card" onMouseMove={handleMouseMove}>
            <div className="icon-pill">🇮🇳</div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              The Mission
            </h3>
            <p className="text-base text-[#8DA0C0] leading-relaxed">
              To democratize the Indian Dream. Whether you are in Indore or Patna, Karo Pitch ensures that world-class capital is just one pitch away.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}