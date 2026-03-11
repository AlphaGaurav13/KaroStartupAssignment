export default function CTA() {
  return (
    <section id="cta" className="cta-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .cta-wrapper {
          padding: 160px 10%;
          background: #050505;
          text-align: center;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Intense glowing core behind the CTA */
        .cta-mesh {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle, rgba(230, 48, 18, 0.12) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .cta-container {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 900;
          line-height: 1;
          color: #fff;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
        }

        .cta-btn-primary {
          padding: 20px 48px;
          background: #E63012;
          color: #fff;
          font-weight: 800;
          font-size: 18px;
          border-radius: 20px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 20px 40px rgba(230, 48, 18, 0.4);
        }

        .cta-btn-primary:hover {
          transform: translateY(-5px) scale(1.05);
          background: #FF4422;
          box-shadow: 0 30px 60px rgba(230, 48, 18, 0.55);
        }

        .cta-btn-secondary {
          padding: 20px 48px;
          background: rgba(255, 255, 255, 0.03);
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          border-radius: 20px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #E63012;
          color: #E63012;
        }

        .contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          margin-top: 48px;
        }

        .contact-link {
          color: #8DA0C0;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-link:hover {
          color: #E63012;
        }

        @media (max-width: 768px) {
          .cta-wrapper { padding: 100px 7%; }
          .cta-btn-primary, .cta-btn-secondary { width: 100%; justify-content: center; }
          .contact-pill { flex-direction: column; border-radius: 24px; padding: 20px; width: 100%; }
        }
      `}</style>

      <div className="cta-mesh" />

      <div className="cta-container">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-[#E63012]" />
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#E63012]">
            Take the Leap
          </span>
          <div className="w-8 h-[1px] bg-[#E63012]" />
        </div>

        {/* Heading */}
        <h2 className="cta-title">
          Ready to Pitch Your <br />
          <span className="text-[#E63012]">Dream</span> to India?
        </h2>

        {/* Description */}
        <p className="text-xl text-[#8DA0C0] leading-relaxed font-light mb-12 max-w-2xl mx-auto">
          Join 500+ founders already building the future. Your next funding round is just one elite pitch away. Let's make it happen.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="mailto:business@karostartup.com" className="cta-btn-primary">
            Apply to Pitch Now <span className="text-2xl">→</span>
          </a>

          <a href="mailto:business@karostartup.com" className="cta-btn-secondary">
            Partner With Us
          </a>
        </div>

        {/* Contact Pill */}
        <div className="contact-pill">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Active Support</span>
          </div>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <a href="mailto:business@karostartup.com" className="contact-link">
            business@karostartup.com
          </a>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <a href="tel:9315194393" className="contact-link">
            +91 93151 94393
          </a>
        </div>
      </div>
    </section>
  )
}