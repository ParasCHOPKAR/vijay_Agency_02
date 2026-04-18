"use client";

import { useEffect, useRef } from "react";
import styles from "./WhySpecial.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Features array with custom SVG icons
const features = [
  {
    title: "High Quality Materials",
    desc: "We provide top-grade roofing sheets ensuring durability and long-lasting performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    ),
  },
  {
    title: "Weather Resistant",
    desc: "Our roofing solutions are designed for the Indian climate – heat, rain & wind resistant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    ),
  },
  {
    title: "Waterproof System",
    desc: "Tight locking systems prevent leakage even in heavy rainfall conditions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
    ),
  },
  {
    title: "Premium Finish",
    desc: "Modern designs with clean finishes that significantly enhance the look of your building.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    ),
  },
  {
    title: "Cost Effective",
    desc: "Affordable solutions with high value, drastically reducing long-term maintenance costs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    ),
  },
];

export default function WhySpecial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftCardsRef = useRef<HTMLDivElement>(null);
  const rightCardsRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Scroll-Triggered Entrance Animation (Plays both ways!)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Triggers when the top of the section is 80% down the viewport
          end: "bottom 20%", // Triggers when the bottom of the section is 20% from the top
          // THIS MAKES IT REVERSE ON SCROLL UP/DOWN
          toggleActions: "play reverse play reverse", 
        }
      });

      // Heading Reveal
      tl.fromTo(headingRef.current, 
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power3.out" }
      );

      // Center Image Pop
      tl.fromTo(centerImageRef.current,
        { opacity: 0, scale: 0.5, rotation: -15 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.4"
      );

      // Left Cards Slide In (TypeScript safe check)
      if (leftCardsRef.current) {
        tl.fromTo(Array.from(leftCardsRef.current.children),
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, stagger: 0.15, duration: 0.5, ease: "power2.out" },
          "-=0.6"
        );
      }

      // Right Cards Slide In (TypeScript safe check)
      if (rightCardsRef.current) {
        tl.fromTo(Array.from(rightCardsRef.current.children),
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, stagger: 0.15, duration: 0.5, ease: "power2.out" },
          "-=0.6"
        );
      }

      // Bottom Card Slide Up
      tl.fromTo(bottomCardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );

      // 2. Infinite Floating Animation for Center Image (Independent of scroll)
      gsap.to(centerImageRef.current, {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      
      {/* HEADING */}
      <div className={styles.headerWrapper}>
        <h2 ref={headingRef} className={styles.heading}>
          <span>Why</span> Vijay Agency Roofing Special?
        </h2>
        <p className={styles.subheading}>Discover the core advantages that make us the industry leaders in Pune.</p>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>

        {/* LEFT CARDS */}
        <div ref={leftCardsRef} className={styles.left}>
          {features.slice(0, 2).map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>{item.icon}</div>
              <div className={styles.cardContent}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE WITH GLOW */}
        <div className={styles.centerContainer}>
          <div className={styles.glowOrb}></div>
          <div ref={centerImageRef} className={styles.center}>
            <img src="/hero-3.webp" alt="Premium Roofing Tile" className={styles.centerImg} />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div ref={rightCardsRef} className={styles.right}>
          {features.slice(2, 4).map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>{item.icon}</div>
              <div className={styles.cardContent}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div ref={bottomCardRef} className={styles.bottomWrapper}>
        <div className={`${styles.card} ${styles.bottomCard}`}>
          <div className={styles.iconBox}>{features[4].icon}</div>
          <div className={styles.cardContent}>
            <h4>{features[4].title}</h4>
            <p>{features[4].desc}</p>
          </div>
        </div>
      </div>

    </section>
  );
}