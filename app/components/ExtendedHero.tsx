import React from 'react'
import { JetBrains_Mono } from 'next/font/google'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const HeroExtended = () => {
  return (
    <div
      className={jetBrainsMono.className}
      style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      background: '#012346',
      color: '#aed6f1',
      alignItems: 'flex-start',
      padding: '0 20px',
      flexWrap: 'nowrap',
      }}
    >
      <img
      src="./room1.png"
      alt="Cover Image"
      style={{
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        flex: 'auto',
        margin: '30px 10px 50px 20px',
        padding: '20px',
      }}
      />
      <div
      style={{
        flex: '0 0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '100px',
        maxWidth: '800px',
        marginLeft: '10px',
      }}
      >
      <p
        className="text-lg"
        style={{ maxWidth: '400px', marginBottom: '30px' }}
      >
        Welcome to my portfolio! I am a student at Texas A&M with a passion for cybersecurity, electrical systems, and software development.
      </p>
      <a
        href="./jmathew_site-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="px-4 py-2 rounded-md border #012346 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-lg hover:text-orange-500"
          style={{ backgroundColor: '#012346' }}
          tabIndex={-1}
        >
          Download Resume
        </button>
      </a>
      </div>
    </div>
    

  );
};

export default HeroExtended;