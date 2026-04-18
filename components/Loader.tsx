"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [removeDOM, setRemoveDOM] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    const duration = 2000; 
    const interval = 20;
    const step = 100 / (duration / interval);
    let currentProgress = 0;

    const counterInterval = setInterval(() => {
      currentProgress += step;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(counterInterval);

        // 🔥 Wait before lifting the shutter for a polished pause
        setTimeout(() => {
          setIsLoaded(true); // Triggers the CSS slide-up animation
          document.body.style.overflow = "auto";
          
          // 🔥 Only remove from DOM AFTER the 1.4s transition is completely finished
          setTimeout(() => {
            setRemoveDOM(true);
          }, 1400); 

        }, 600); // 600ms pause at 100% so the user registers it
      }

      setProgress(Math.round(currentProgress));
    }, interval);

    return () => {
      clearInterval(counterInterval);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (removeDOM) return null;

  return (
    <>
      <div className={`shutter-container ${isLoaded ? "shutter-lift" : ""}`}>
        {/* Subtle Roofing Tile Watermark Background */}
        <div className="watermark"></div>
        
        {/* Soft Modern Overlay */}
        <div className="overlay"></div>

        {/* Clean, shadow-less modern content box */}
        <div className="loader-content">
          <div className="reveal-box">
            <Image
              src="/logo.png"
              alt="Vijay Agency Logo"
              width={240}
              height={110}
              priority
              className="logo"
            />
          </div>

          <div className="reveal-box">
            <h1 className="brand">VIJAY AGENCY</h1>
          </div>

          <div className="reveal-box">
            <p className="tagline">House of Roofing Sheets</p>
          </div>

          <div className="progress-section">
            <div className="progress-header">
              <span className="loading-text">Loading Experience</span>
              <span className="percentage">{progress}%</span>
            </div>

            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* INLINE CSS BLOCK FOR MODERN, SHADOW-LESS SMOOTHNESS */}
      <style>{`
        :root {
          --brand-orange: #f37121;
          --brand-blue: #00aeef;
          --brand-teal: #109d82;
          --brand-black: #1a1e23;
        }

        .shutter-container {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f8f9fa;
          
          /* Refined, softer horizontal lines */
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 48px,
            rgba(0, 0, 0, 0.015) 48px,
            rgba(0, 0, 0, 0.015) 50px
          );

          /* Start position */
          transform: translateY(0);
          
          /* Majestic, slow-start/fast-end sliding ease */
          transition: transform 1.4s cubic-bezier(0.65, 0, 0.05, 1);
        }

        /* Clean bottom bar - no heavy shadow */
        .shutter-container::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(90deg, var(--brand-orange), var(--brand-teal), var(--brand-blue));
          z-index: 5;
        }

        /* Subtle Roofing Tile Watermark */
        .watermark {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.3;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-opacity='0.03'%3E%3Cpath d='M0 40 A 20 20 0 0 1 40 40 A 20 20 0 0 1 80 40'/%3E%3Cpath d='M-20 20 A 20 20 0 0 1 20 20 A 20 20 0 0 1 60 20 A 20 20 0 0 1 100 20'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 100px 50px;
        }

        /* Clean Overlay */
        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,1) 100%);
          opacity: 1;
          transition: opacity 1.2s ease;
          z-index: 1;
        }

        /* --- THE SHUTTER LIFT (OPEN FROM BOTTOM TO TOP) --- */
        .shutter-lift {
          transform: translateY(-100%);
        }

        .shutter-lift .overlay {
          opacity: 0; 
        }

        /* Fade out the content gracefully as it slides up */
        .shutter-lift .loader-content {
          opacity: 0;
          transform: scale(0.98);
        }

        /* --- MODERN CONTENT BOX (NO SHADOW) --- */
        .loader-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          
          padding: 60px 80px;
          
          /* Clean frosted glass */
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
                      
          transition: all 0.6s ease;
        }

        .reveal-box {
          overflow: hidden;
          margin-bottom: 2px;
        }

        .logo {
          transform: translateY(100%);
          animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          margin-bottom: 20px;
          height: auto;
          object-fit: contain;
        }

        /* Clean Typography */
        .brand {
          font-family: 'Arial Black', Impact, sans-serif;
          font-size: 32px;
          font-weight: 900;
          color: var(--brand-black);
          letter-spacing: 2px;
          line-height: 1.1;
          margin: 0;
          transform: translateY(100%);
          animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }

        .tagline {
          color: var(--brand-teal);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin: 10px 0 45px;
          transform: translateY(100%);
          animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        /* --- PROGRESS BAR --- */
        .progress-section {
          width: 320px;
          opacity: 0;
          animation: fadeIn 1s ease 0.6s forwards;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .loading-text {
          color: #999; /* Softer grey */
        }

        .percentage {
          color: var(--brand-orange);
        }

        .progress-container {
          width: 100%;
          height: 3px; /* Ultra-thin modern line */
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--brand-orange), var(--brand-teal));
          transition: width 0.15s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* --- ANIMATIONS --- */
        @keyframes revealUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}