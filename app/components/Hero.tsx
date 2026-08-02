import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const Hero = () => {
  return (
    <section
      className={jetBrainsMono.className}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'clamp(380px, 45vh, 520px)',
        background: '#012346',
        color: '#e2e8f0',
        padding: 'clamp(20px, 4vw, 48px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent line */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, #38bdf8, #a78bfa, transparent)',
        }}
      />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(24px, 5vw, 56px)',
        maxWidth: '800px',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {/* Photo */}
        <div style={{
          flexShrink: 0,
          width: 'clamp(100px, 20vw, 160px)',
          height: 'clamp(100px, 20vw, 160px)',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid rgba(56,189,248,0.3)',
        }}>
          <Image
            src="/room1.png"
            alt="Joel Mathew"
            width={160}
            height={160}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Text */}
        <div style={{ textAlign: 'left', minWidth: 0 }}>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '4px',
            letterSpacing: '-0.02em',
          }}>
            Joel Mathew
          </h1>

          <p style={{
            fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
            color: '#38bdf8',
            fontWeight: 500,
            marginBottom: '4px',
          }}>
            Electronic Systems Engineering
          </p>

          <p style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
            color: '#94a3b8',
            marginBottom: '12px',
          }}>
            Texas A&M University &middot; Class of 2027
          </p>

          <p style={{
            fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
            color: '#cbd5e1',
            lineHeight: 1.6,
            maxWidth: '440px',
            marginBottom: '16px',
          }}>
            I build embedded hardware, write firmware, and design FPGA logic.
            Seeking a <strong style={{ color: '#e2e8f0' }}>Summer 2026 internship</strong> in
            embedded systems, firmware, or hardware engineering.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="./jmathew_site-resume.pdf" target="_blank" rel="noopener noreferrer"
              style={{
                padding: '8px 20px', borderRadius: '6px', border: '1px solid #38bdf8',
                color: '#38bdf8', fontSize: '0.85rem', fontWeight: 500,
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              className="hover:bg-[#38bdf8]/10 hover:-translate-y-0.5"
            >
              Resume
            </a>
            <a href="https://github.com/joelmathew27" target="_blank" rel="noopener noreferrer"
              style={{
                padding: '8px 20px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.25)',
                color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 500,
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              className="hover:border-[#94a3b8]/60 hover:text-[#e2e8f0] hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/joelmathew27/" target="_blank" rel="noopener noreferrer"
              style={{
                padding: '8px 20px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.25)',
                color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 500,
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              className="hover:border-[#94a3b8]/60 hover:text-[#e2e8f0] hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;