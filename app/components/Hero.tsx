import {JetBrains_Mono } from 'next/font/google';
import React from 'react';

// Configure fonts
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const Hero = () => {
  return (
    <section
      className={jetBrainsMono.className} // Apply the font className here
      style={{
        display: 'flex',
        justifyContent: "center",
        height: '20vh', // Extend to the full viewport height
        background: '#012346', // Dark background
        color: '#aed6f1',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      
      <div
        style={{
          maxWidth: '900px',
          textAlign: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            marginTop: '60px',
            marginBottom: '10px',
          }}
        >
          Joel Mathew
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            marginBottom: '20px',
            fontWeight: 400,
          }}
        >
          Student | Engineer | Creator
        </p>
      </div>
    </section>
  );
};

export default Hero;
