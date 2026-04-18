"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";
import TextType from "./TextType";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // State for click toggle and hover toggle
  const [isLightOn, setIsLightOn] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. TEXT REVEAL
      tl.from(".gsap-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      })
      
      // 2. HOUSE ENTRANCE
      .from(".gsap-house", {
        x: 150, 
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      }, "-=0.6") 
      
      // 3. LABELS POP IN
      .from(".gsap-label", {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.8");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handlers
  const toggleLight = () => setIsLightOn((prev) => !prev);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // XOR logic: If hovered, preview the opposite state. If clicked, change the base state.
  const currentImageSrc = (isLightOn !== isHovered) 
    ? "/hero-house-011111.png" 
    : "/hero-house-light-off_01.png";

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.container}>
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className={styles.content}>
          <h1 className={`${styles.title} gsap-reveal`}>
            PROTECT YOUR HOME <br />
            WITH <span className={styles.highlight}>SUPERIOR ROOFING SOLUTIONS.</span>
          </h1>
          
          <div className={`${styles.descriptionContainer} gsap-reveal`}>
            <TextType 
              texts={[
                "From robust metal sheets to premium tiles. Find the perfect enduring cover for your structure, engineered for durability and natural light."
              ]}
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={5000}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>
          
          <div className={`${styles.buttonGroup} gsap-reveal`}>
            <button className={styles.primaryBtn}>EXPLORE PRODUCTS</button>
            <button className={styles.iconBtn} aria-label="Chat with us">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM15 12H9V10H15V12ZM18 9H6V7H18V9Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: HOUSE IMAGE & LABELS */}
        <div className={styles.visualsWrapper}>
          <div className={styles.imageInnerWrapper}>
            
            {/* The isolated house image */}
            <img 
              src={currentImageSrc} 
              alt="Premium Roofing House" 
              className={`${styles.houseImage} gsap-house`} 
              onClick={toggleLight}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              title="Click or hover to toggle lights"
            />
            
            {/* Labels */}
            <div className={styles.labelsContainer}>
              <div className={`${styles.label} ${styles.labelTile} gsap-label`}>
                [Cast Acrylic sheets]
              </div>
              <div className={`${styles.label} ${styles.labelMetal} gsap-label`}>
                  [Color Coated Sheets]
              </div>
              <div className={`${styles.label} ${styles.labelLight} gsap-label`}>
                [PREMIUM ROOFING]
              </div>
              <div className={`${styles.labelDark} ${styles.labelPoly} gsap-label`}>
                TRANSLUCENT<br/>POLYCARBONATE
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}