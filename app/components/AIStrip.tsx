import React from "react";

export default function ShipStrip() {
  return (
    <div className="bg-[#0a3558] py-4 px-4 border-b border-[#3b6b9b]/30">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-[#aed6f1] font-medium">
          <span>Autonomous AI Agents</span>
          <span className="text-[#aed6f1]/30">•</span>
          <span>Production Automation Systems</span>
          <span className="text-[#aed6f1]/30">•</span>
          <span>Embedded & FPGA Hardware</span>
          <span className="text-[#aed6f1]/30">•</span>
          <span>Secure Systems & Cybersecurity</span>
        </div>
      </div>
    </div>
  );
}