import React from 'react';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const domains = [
  { label: 'Embedded', detail: 'ESP32 · STM32 · I2S · SPI' },
  { label: 'FPGA / HDL', detail: 'Altera MAX · PWM · Simulation' },
  { label: 'Firmware', detail: 'C · C++ · Bare-Metal' },
  { label: 'Hardware', detail: 'KiCad · Schematics · PCB' },
  { label: 'Security', detail: 'Encryption · Secure Boot' },
  { label: 'Full-Stack', detail: 'Next.js · React · TypeScript' },
];

const DomainBar = () => {
  return (
    <section
      className={jetBrainsMono.className}
      style={{
        background: '#0a3558',
        borderTop: '1px solid rgba(56,189,248,0.15)',
        borderBottom: '1px solid rgba(56,189,248,0.15)',
        padding: '24px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '16px 8px',
        }}
      >
        {domains.map((d, i) => (
          <div
            key={d.label}
            style={{
              textAlign: 'center',
              padding: '8px 4px',
              borderRight: i < domains.length - 1 ? '1px solid rgba(148,163,184,0.1)' : 'none',
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#e2e8f0',
                letterSpacing: '0.04em',
                marginBottom: '3px',
                textTransform: 'uppercase',
              }}
            >
              {d.label}
            </div>
            <div style={{ fontSize: '0.66rem', color: '#38bdf8', opacity: 0.75, lineHeight: 1.4 }}>
              {d.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DomainBar;