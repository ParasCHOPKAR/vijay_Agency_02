"use client";

import { useEffect, useRef } from "react";
import styles from "./VideoSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !videoContainerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // The ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Starts when the section hits the top of the viewport
          end: "+=200%", // The user has to scroll twice the height of the screen to finish the animation
          scrub: 1, // Smoothly scrubs through the animation based on scroll speed
          pin: true, // Pins the section in place while the animation happens
        }
      });

      // Phase 1: Reveal (Grow to full screen)
      tl.fromTo(videoContainerRef.current,
        { scale: 0.4, borderRadius: "50px" }, // Starts small and rounded
        { scale: 1, borderRadius: "0px", duration: 1, ease: "power1.inOut" } // Grows to full screen
      )
      // Simultaneously fade out the text as it grows
      .to(textRef.current, { opacity: 0, y: -50, duration: 0.5 }, "<")
      
      // Phase 2: Hold (Keep it full screen for a moment while scrolling)
      .to({}, { duration: 0.5 }) 
      
      // Phase 3: Shrink & Fade (Gets smaller before moving to the next section)
      .to(videoContainerRef.current,
        { scale: 0.75, borderRadius: "40px", opacity: 0.4, duration: 1, ease: "power2.out" }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      
      {/* Floating Text behind the video */}
      <div ref={textRef} className={styles.textContainer}>
    
        <p className={styles.subtitle}>Watch our premium manufacturing process in action.</p>
      </div>

      {/* Video Container that gets animated */}
      <div ref={videoContainerRef} className={styles.videoContainer}>
        {/* Dark overlay to make it look premium */}
        <div className={styles.overlay}></div>
        
        <video 
          className={styles.video} 
          src="/Kalon-Final-render.mp4" /* Make sure this matches your file in the public folder */
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>

    </section>
  );
}