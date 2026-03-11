export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .footer-wrapper {
          background: #050505;
          padding: 100px 10% 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Ambient glow in the corner */
        .footer-wrapper::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(230, 48, 18, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
          position: relative;
          z-index: 10;
        }

        .footer-logo {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 900;
          font-size: 28px;
          color: #fff;
          letter-spacing: -1px;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .footer-logo:hover {
          transform: scale(1.05);
        }

        .footer-logo span {
          color: #E63012;
        }

        .footer-heading {
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #E63012;
          margin-bottom: 24px;
        }

        .footer-link {
          color: #8DA0C0;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-block;
          width: fit-content;
        }

        .footer-link:hover {
          color: #fff;
          transform: translateX(8px);
        }

        .social-btn {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8DA0C0;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-btn:hover {
          background: #E63012;
          color: #fff;
          border-color: #E63012;
          transform: translateY(-5px) rotate(8deg);
          box-shadow: 0 10px 20px rgba(230, 48, 18, 0.3);
        }

        .bottom-row {
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-wrapper { padding: 80px 7% 40px; }
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; text-align: center; }
          .footer-link { width: 100%; }
          .footer-link:hover { transform: translateY(-3px); }
          .bottom-row { justify-content: center; text-align: center; }
        }
      `}</style>

      <div className="footer-grid">
        {/* Brand Column */}
        <div className="brand-col">
          <a href="#" className="footer-logo">
            Karo<span>Pitch</span>
          </a>
          <p style={{ color: "#8DA0C0", fontSize: "14px", lineHeight: "1.8", maxWidth: "280px", fontWeight: "400" }}>
            India's most accessible startup pitch platform — connecting Bharat's founders with world-class capital.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <div className="footer-heading">Platform</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <a href="#how-it-works" className="footer-link">How It Works</a>
            <a href="#apply" className="footer-link">Who Can Apply</a>
            <a href="#startups" className="footer-link">Featured Startups</a>
            <a href="#investors" className="footer-link">For Investors</a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <div className="footer-heading">Company</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <a href="https://karostartup.com" className="footer-link">KaroStartup</a>
            <a href="#about" className="footer-link">About Us</a>
            <a href="mailto:business@karostartup.com" className="footer-link">Contact</a>
            <a href="#cta" className="footer-link">Partner With Us</a>
          </div>
        </div>

        {/* Social Column */}
        <div>
          <div className="footer-heading">Join Community</div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/karopitch/" className="social-btn" title="Instagram">IG</a>
            <a href="https://www.linkedin.com/company/karo-startup/" className="social-btn" title="LinkedIn">LI</a>
            <a href="https://x.com/karo_startup" className="social-btn" title="Twitter">𝕏</a>
            <a href="https://www.youtube.com/@karostartup/videos" className="social-btn" title="YouTube">YT</a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="bottom-row">
        <div style={{ fontSize: "12px", color: "rgba(141, 160, 192, 0.6)", fontWeight: "500" }}>
          © 2026 KaroStartup. Built for Bharat's next generation of builders.
        </div>
        
        {/* "Back to top" aesthetic link */}
        <a 
          href="#" 
          style={{ 
            fontSize: "12px", 
            color: "#fff", 
            textDecoration: "none", 
            fontWeight: "700", 
            display: "flex", 
            alignItems: "center", 
            gap: "8px",
            letterSpacing: "0.1em"
          }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          BACK TO TOP <span style={{ color: "#E63012", fontSize: "16px" }}>↑</span>
        </a>
      </div>
    </footer>
  );
}