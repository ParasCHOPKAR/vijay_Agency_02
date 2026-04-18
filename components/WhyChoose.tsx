"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyChoose.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  "Weather & Heat Resistant Sheets",
  "Premium Quality Roofing Materials",
  "Long-Lasting & Durable Products",
  "Quick & Easy Installation Support",
  "Trusted Brands (TATA, ESSAR)",
  "Serving Excellence Since 1982",
  "Wide Range of Roofing Solutions",
  "Customer-Specific Customization",
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const smallImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !rightRef.current || !leftRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Core Entrance Timeline (Plays every time it enters the screen)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        }
      });

      // Left Image Composition Reveal
      tl.fromTo(leftRef.current, 
        { opacity: 0, x: -60, filter: "blur(10px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
      // Headers Reveal
      .fromTo(`.${styles.subtitle}, .${styles.title}`, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.6"
      );

      // 2. Staggered Feature Cards (Popping in with a slight bounce)
      // Added optional chaining (?.) to satisfy TypeScript's strict null checks inside the callback
      const cards = rightRef.current?.querySelectorAll(`.${styles.card}`);
      
      if (cards && cards.length > 0) {
        tl.fromTo(Array.from(cards), 
          { opacity: 0, y: 30, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            stagger: 0.1, 
            duration: 0.6, 
            ease: "back.out(1.5)" 
          },
          "-=0.4"
        );
      }

      // 3. Constant Parallax on the Small Image for Depth
      gsap.to(smallImgRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* LEFT IMAGES (Stacked Composition) */}
        <div ref={leftRef} className={styles.left}>
          <div className={styles.imageStack}>
            <img 
              src="/hero-4.webp" 
              alt="Premium Roofing" 
              className={styles.large} 
            />
            <img 
              ref={smallImgRef}
              src="/pvc-sheets.jpg" 
              alt="Roofing Details" 
              className={styles.small} 
            />
            {/* Decorative Element */}
            <div className={styles.floatingBadge}>
              <span className={styles.badgeNumber}>100%</span>
              <span className={styles.badgeText}>Quality<br/>Assured</span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div ref={rightRef} className={styles.right}>
          <h4 className={styles.subtitle}>OUR ADVANTAGE</h4>
          <h2 className={styles.title}>
            <span>Why Choose</span> Vijay Agency
          </h2>

          <div className={styles.grid}>
            {features.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {/* Premium SVG Checkmark */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className={styles.cardText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}