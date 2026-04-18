"use client";

import { useEffect, useRef } from "react";
import styles from "./ProjectGallery.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { img: "/home-page-gallery/residencial-01.jpg", location: "Pune", client: "Residential Project" },
  { img: "/home-page-gallery/industrial-roofing-01.jpg", location: "Nagpur", client: "Industrial Roofing" },
  { img: "/home-page-gallery/commercial-roofing-01.jpg", location: "Mumbai", client: "Commercial Building" },
  { img: "/home-page-gallery/wearhousing-tileroofing-01.jpg", location: "Bhandara", client: "Warehouse Roofing" },
  { img: "/home-page-gallery/vilha-roofing.jpg", location: "Tumsar", client: "Villa Roofing" },
];

// Duplicate to make the horizontal scroll longer and more impressive
const loopData = [...projects, ...projects];

export default function ProjectGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // Get the total width of the track to know how far to scroll
      const getScrollAmount = () => {
        let trackWidth = trackRef.current ? trackRef.current.scrollWidth : 0;
        return -(trackWidth - window.innerWidth + 100); // 100px buffer at the end
      };

      // The Horizontal Scroll Magic
      gsap.to(trackRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Pins when the top of the section hits the top of the viewport
          end: () => `+=${getScrollAmount() * -1}`, // Scroll distance equals the width of the track
          pin: true, // This makes the section stick to the screen!
          scrub: 1, // Smoothly ties the animation to the scroll wheel (1 sec lag for smoothness)
          invalidateOnRefresh: true, // Recalculates on screen resize
        },
      });

      // Subtle entrance animation for the heading
      gsap.fromTo(`.${styles.headingWrapper}`, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      
      {/* HEADING (Stays fixed at the top while pinned) */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>
          <span>Project</span> Gallery
        </h2>

      </div>

      {/* SLIDER VIEWPORT */}
      <div className={styles.slider}>
        
        {/* MOVING TRACK */}
        <div ref={trackRef} className={styles.track}>
          {loopData.map((item, i) => (
            <div key={i} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <img src={item.img} alt="Project" className={styles.image} />
                <div className={styles.gradientOverlay}></div>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.location}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {item.location}
                </p>
                <h4 className={styles.client}>{item.client}</h4>
                <div className={styles.arrowBox}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}