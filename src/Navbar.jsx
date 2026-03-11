import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800;900&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');

        .nav-island {
          pointer-events: auto;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid transparent;
        }

        /* Jab scroll nahi ho raha (Top state) */
        .nav-top {
          width: 100%;
          padding: 30px 7%;
          background: transparent;
        }

        /* Jab scroll ho gaya (Floating Island state) */
        .nav-scrolled {
          width: 90%;
          max-width: 1100px;
          margin-top: 20px;
          padding: 12px 24px;
          background: rgba(13, 13, 13, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #fff;
        }

        /* Hover line effect */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #E63012;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-logo {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 900;
          font-size: 24px;
          color: #fff;
          letter-spacing: -1px;
          text-decoration: none;
        }

        .nav-btn {
          font-family: 'Bricolage Grotesque', sans-serif;
          background: #E63012;
          color: #fff;
          padding: 12px 28px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 20px rgba(230, 48, 18, 0.2);
          text-decoration: none;
          border: none;
        }

        .nav-btn:hover {
          transform: translateY(-2px) scale(1.05);
          background: #FF4422;
          box-shadow: 0 15px 30px rgba(230, 48, 18, 0.4);
        }
      `}</style>

      <nav className={`nav-island ${scrolled ? 'nav-scrolled' : 'nav-top'}`}>
        {/* Logo */}
        <a href="#" className="nav-logo">
          Karo<span style={{ color: "#E63012" }}>Pitch</span>
        </a>

        {/* Links - Hidden on very small screens for better UX */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="nav-link">About</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#investors" className="nav-link">Investors</a>
          <a href="#startups" className="nav-link">Startups</a>
        </div>

        {/* CTA Button */}
        <a href="#cta" className="nav-btn">
          Apply to Pitch →
        </a>
      </nav>
    </header>
  )
}