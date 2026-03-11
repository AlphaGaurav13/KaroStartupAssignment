import { useEffect, useRef, useState } from "react"

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function StepCard({ number, icon, title, desc, delay }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className="step-card group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {/* Glossy Overlay */}
      <div className="card-gloss" />
      
      {/* Large Index Number */}
      <div className="step-number">{number}</div>

      <div className="relative z-10">
        <div className="step-icon-wrap">{icon}</div>
        <h3 className="step-title">{title}</h3>
        <p className="step-desc">{desc}</p>
      </div>

      {/* Hover Border Glow */}
      <div className="hover-glow" />
    </div>
  )
}

export default function HowItWorks() {
  const [ref, visible] = useReveal()

  return (
    <section id="how-it-works" className="hiw-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .hiw-section {
          padding: 140px 10%;
          background: #050505;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .hiw-title-wrap {
          text-align: center;
          margin-bottom: 100px;
          position: relative;
          z-index: 10;
        }

        .hiw-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 1200px) {
          .hiw-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .hiw-grid { grid-template-columns: 1fr; }
        }

        .step-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 50px 30px;
          overflow: hidden;
          cursor: default;
          backdrop-filter: blur(10px);
        }

        .step-card:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-10px) !important;
          border-color: rgba(230, 48, 18, 0.3);
        }

        .step-number {
          position: absolute;
          top: -10px;
          right: -10px;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 900;
          font-size: 100px;
          color: rgba(230, 48, 18, 0.04);
          line-height: 1;
          transition: all 0.4s ease;
        }

        .step-card:hover .step-number {
          color: rgba(230, 48, 18, 0.1);
          transform: scale(1.1) translate(-10px, 10px);
        }

        .step-icon-wrap {
          width: 64px;
          height: 64px;
          background: rgba(230, 48, 18, 0.1);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin-bottom: 30px;
          border: 1px solid rgba(230, 48, 18, 0.2);
          transition: all 0.4s ease;
        }

        .step-card:hover .step-icon-wrap {
          background: #E63012;
          transform: rotate(-10deg) scale(1.1);
        }

        .step-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .step-desc {
          font-size: 14px;
          color: #8DA0C0;
          line-height: 1.8;
          font-weight: 400;
        }

        .hover-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #E63012, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step-card:hover .hover-glow {
          opacity: 1;
        }

        /* Ambient background glow */
        .hiw-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70vw;
          height: 70vw;
          background: radial-gradient(circle, rgba(230, 48, 18, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      <div className="hiw-bg-glow" />

      <div className="hiw-title-wrap" ref={ref} style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s ease",
      }}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-[#E63012]" />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#E63012]">
            The Journey
          </span>
          <div className="w-8 h-[1px] bg-[#E63012]" />
        </div>
        
        <h2 className="font-black text-white" 
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1 }}>
          How Karo <span style={{ color: "#E63012" }}>Pitch</span> Works
        </h2>
      </div>

      <div className="hiw-grid">
        <StepCard
          number="01"
          icon="📋"
          title="Apply with Your Pitch Deck"
          desc="Submit your vision through our elite onboarding portal. Tell us about your traction and funding goals."
          delay={0.1}
        />

        <StepCard
          number="02"
          icon="✅"
          title="Get Shortlisted"
          desc="Our investment committee meticulously handpicks startups based on market potential and merit."
          delay={0.2}
        />

        <StepCard
          number="03"
          icon="🎤"
          title="Pitch Live to Investors"
          desc="Enter the spotlight. Present your business to a curated panel of high-net-worth individuals and VCs."
          delay={0.3}
        />

        <StepCard
          number="04"
          icon="🚀"
          title="Raise and Scale"
          desc="Close the round, unlock strategic mentorship, and propel your startup to the next dimension."
          delay={0.4}
        />
      </div>
    </section>
  )
}