"use client";

import { useEffect, useRef } from "react";
import styles from "./AboutHome.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHome() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  const brands = [
    "TATA DURASHINE", "ESSAR STEEL", "PALRAM", "S-POLYTECH", 
    "ONDULINE", "KALON", "KISAN", "STAR"
  ];

  useEffect(() => {
    if (!sectionRef.current || !rightRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Giant Background Text Parallax
      gsap.to(bgTextRef.current, {
        y: -250,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // 2. Modern Clip-Path Image Reveal
      gsap.fromTo(imageWrapperRef.current,
        { clipPath: "inset(20% 20% 20% 20% round 20px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 40px)",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1.5,
          }
        }
      );

      // 3. Image Parallax Pan
      gsap.fromTo(imageRef.current, 
        { scale: 1.4, y: -40 },
        { 
          scale: 1, 
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom", 
            end: "bottom top",
            scrub: 1.2, 
          }
        }
      );

      // 4. ULTRA-SMOOTH Right Side Text Reveal
      gsap.fromTo(`.${styles.revealElement}`, 
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.95, 
          filter: "blur(12px)" 
        },
        {
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: "blur(0px)", 
          stagger: 0.15, 
          duration: 1.4, 
          ease: "power4.out", 
          scrollTrigger: {
            trigger: sectionRef.current, 
            start: "top 75%",            
            end: "bottom 20%",           
            toggleActions: "restart reverse restart reverse", 
          }
        }
      );

      // 5. Floating Badge Infinite Animation
      gsap.fromTo(badgeRef.current, 
        { y: -15, rotation: -2 },
        {
          y: 15,
          rotation: 2,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        }
      );

    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      {/* Massive Background Typography */}
      <div ref={bgTextRef} className={styles.bgText}>1982</div>

      <div className={styles.container}>
        
        {/* LEFT SECTION */}
        <div className={styles.left}>
          <div ref={imageWrapperRef} className={styles.imageWrapper}>
            <img
              ref={imageRef}
              src="/about-home-01-second-section.jpg" 
              alt="Vijay Agency Roofing"
              className={styles.mainImg}
            />
            <div className={styles.imgOverlay}></div>
          </div>
          
          <div ref={badgeRef} className={styles.experience}>
            <span className={styles.expNumber}>40+</span>
            <span className={styles.expText}>Years of<br/>Excellence</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div ref={rightRef} className={styles.right}>
          
          <div className={`${styles.badgeLine} ${styles.revealElement}`}>
            <span className={styles.subtitle}>ESTABLISHED IN 1982</span>
            <div className={styles.line}></div>
          </div>

          <h2 className={`${styles.title} ${styles.revealElement}`}>
            The Ultimate House of <br/>
            <span>Superior Roofing</span>
          </h2>

          <div className={`${styles.content} ${styles.revealElement}`}>
            <p>
              <strong>Vijay Agency</strong>  Based in the heart of <strong> Pune</strong> stood as a premier wholesale trader, retailer, and importer for over four decades. We don't just supply sheets; we provide customized, quality-assured solutions designed to fulfill your specific structural requirements.
            </p>
            <p>
              From <strong>Polycarbonate</strong> and <strong>Decorative Sheets</strong> to <strong>Roof Ventilators</strong> and <strong>Color Coated Sheets</strong>, our avid range is backed by a sound infrastructural campus. Under the unyielding vision of our proprietor, <strong>Mr. Vipul Parmar</strong>, we strive to achieve long-standing business relationships through trust, constant consultation, and swift deliverance.
            </p>
          </div>

          <div className={`${styles.brandSection} ${styles.revealElement}`}>
            <div className={styles.brandGrid}>
              {brands.map((brand, i) => (
                <div key={i} className={styles.brandTagWrapper}>
                  <span className={styles.brandTag}>{brand}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.actions} ${styles.revealElement}`}>
            <a href="/about" className={styles.btn}>
              <span className={styles.btnText}>Discover Our Legacy</span>
              <span className={styles.btnArrow}>→</span>
            </a>
            <div className={styles.contactBrief}>
              <span className={styles.cLabel}>Quick Inquiry</span>
              {/* <a href="tel:02026443274" className={styles.cNumber}>020-26443274</a> */}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}