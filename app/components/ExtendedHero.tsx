import React from 'react'
import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const HeroExtended = () => {
  return (
    <div
      className={`${jetBrainsMono.className} flex flex-wrap md:flex-nowrap justify-center items-start h-full bg-[#012346] text-[#aed6f1] px-5 pb-10`}
    >
      <Image
        src="/room1.png"
        alt="Cover Image"
        width={400}
        height={300}
        className="w-full max-w-[300px] md:max-w-[400px] h-auto flex-auto m-[50px_10px_10px_20px] p-5"
        priority
      />
      <div
        className="flex flex-col justify-center items-start pt-[20px] md:pt-[100px] md:ml-3 max-w-[800px]"
      >
        <p className="text-base md:text-lg max-w-[400px] mb-[30px]">
          Welcome to my portfolio! I am a student at Texas A&M with a passion for cybersecurity, electrical systems, and software development.
        </p>
        <a
          href="./jmathew_site-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="px-4 py-2 rounded-md border border-[#aed6f1] bg-[#012346] text-11 hover:-translate-y-1 transform transition duration-200 hover:shadow-lg hover:text-orange-500"
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
