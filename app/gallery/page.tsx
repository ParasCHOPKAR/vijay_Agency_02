"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import styles from "./gallery.module.css";

const galleryData = [
  // Commercial
  { id: 1, src: "/gallery/commercial-01.JPG", category: "Commercial", title: "Commercial Project 1" },
  { id: 2, src: "/gallery/commercial-02.tif", category: "Commercial", title: "Commercial Project 2" },
  { id: 3, src: "/gallery/commercial-03.JPG", category: "Commercial", title: "Commercial Project 3" },
  { id: 4, src: "/gallery/commercial-04.tif", category: "Commercial", title: "Commercial Project 4" },
  { id: 5, src: "/gallery/commercial-05.tif", category: "Commercial", title: "Commercial Project 5" },
  { id: 6, src: "/gallery/commercial-06.JPG", category: "Commercial", title: "Commercial Project 6" },
  { id: 7, src: "/gallery/commercial-07.JPG", category: "Commercial", title: "Commercial Project 7" },
  { id: 8, src: "/gallery/commercial-08.jpeg", category: "Commercial", title: "Commercial Project 8" },
  { id: 9, src: "/gallery/commercial-09.jpg", category: "Commercial", title: "Commercial Project 9" },
  { id: 10, src: "/gallery/commercial-10.jpg", category: "Commercial", title: "Commercial Project 10" },
  { id: 11, src: "/gallery/commercial-11.jpg", category: "Commercial", title: "Commercial Project 11" },
  { id: 12, src: "/gallery/commercial-12.jpg", category: "Commercial", title: "Commercial Project 12" },
  { id: 13, src: "/gallery/commercial-13.jpg", category: "Commercial", title: "Commercial Project 13" },
  { id: 14, src: "/gallery/commercial-14.jpg", category: "Commercial", title: "Commercial Project 14" },
  { id: 15, src: "/gallery/commercial-15.jpg", category: "Commercial", title: "Commercial Project 15" },
  { id: 16, src: "/gallery/commercial-16.jpg", category: "Commercial", title: "Commercial Project 16" },

  // Residential
  { id: 17, src: "/gallery/gallery-rediential-01.jpg", category: "Residential", title: "Residential Project 1" },
  { id: 18, src: "/gallery/gallery-rediential-02.jpg", category: "Residential", title: "Residential Project 2" },
  { id: 19, src: "/gallery/gallery-rediential-03.jpg", category: "Residential", title: "Residential Project 3" },
  { id: 20, src: "/gallery/gallery-rediential-04.jpg", category: "Residential", title: "Residential Project 4" },
  { id: 21, src: "/gallery/gallery-rediential-05.jpg", category: "Residential", title: "Residential Project 5" },
  { id: 22, src: "/gallery/gallery-rediential-06.jpg", category: "Residential", title: "Residential Project 6" },
  { id: 23, src: "/gallery/gallery-rediential-07.jpg", category: "Residential", title: "Residential Project 7" },
  { id: 24, src: "/gallery/gallery-rediential-08.jpg", category: "Residential", title: "Residential Project 8" },
  { id: 25, src: "/gallery/gallery-rediential-09.jpg", category: "Residential", title: "Residential Project 9" },
  { id: 26, src: "/gallery/gallery-rediential-10.jpg", category: "Residential", title: "Residential Project 10" },
  { id: 27, src: "/gallery/gallery-rediential-11.jpg", category: "Residential", title: "Residential Project 11" },
  { id: 28, src: "/gallery/gallery-rediential-12.jpg", category: "Residential", title: "Residential Project 12" },
  { id: 29, src: "/gallery/gallery-rediential-13.jpg", category: "Residential", title: "Residential Project 13" },
  { id: 30, src: "/gallery/gallery-rediential-14.jpg", category: "Residential", title: "Residential Project 14" },
  { id: 31, src: "/gallery/gallery-rediential-15.jpg", category: "Residential", title: "Residential Project 15" },
  { id: 32, src: "/gallery/gallery-rediential-16.jpg", category: "Residential", title: "Residential Project 16" },
  { id: 33, src: "/gallery/gallery-rediential-18.jpg", category: "Residential", title: "Residential Project 18" },
  { id: 34, src: "/gallery/gallery-rediential-19.jpg", category: "Residential", title: "Residential Project 19" },

  // Industrial
  { id: 35, src: "/gallery/industrial-01.jpg", category: "Industrial", title: "Industrial Project 1" },
  { id: 36, src: "/gallery/industrial-02.jpg", category: "Industrial", title: "Industrial Project 2" },
  { id: 37, src: "/gallery/industrial-03.jpg", category: "Industrial", title: "Industrial Project 3" },
  { id: 38, src: "/gallery/industrial-04.jpg", category: "Industrial", title: "Industrial Project 4" },
  { id: 39, src: "/gallery/industrial-05.jpg", category: "Industrial", title: "Industrial Project 5" },
  { id: 40, src: "/gallery/industrial-06.jpg", category: "Industrial", title: "Industrial Project 6" },
  { id: 41, src: "/gallery/industrial-07.jpg", category: "Industrial", title: "Industrial Project 7" },
  { id: 42, src: "/gallery/industrial-08.jpg", category: "Industrial", title: "Industrial Project 8" },
  { id: 43, src: "/gallery/industrial-09.jpg", category: "Industrial", title: "Industrial Project 9" },
  { id: 44, src: "/gallery/industrial-10.jpg", category: "Industrial", title: "Industrial Project 10" },
  { id: 45, src: "/gallery/industrial-11.jpg", category: "Industrial", title: "Industrial Project 11" },
  { id: 46, src: "/gallery/industrial-12.jpg", category: "Industrial", title: "Industrial Project 12" },
  { id: 47, src: "/gallery/industrial-13.jpg", category: "Industrial", title: "Industrial Project 13" },
  { id: 48, src: "/gallery/industrial-14.jpg", category: "Industrial", title: "Industrial Project 14" },
  { id: 49, src: "/gallery/industrial-15.jpg", category: "Industrial", title: "Industrial Project 15" },
  { id: 50, src: "/gallery/industrial-16.jpg", category: "Industrial", title: "Industrial Project 16" },
  { id: 51, src: "/gallery/industrial-17.jpg", category: "Industrial", title: "Industrial Project 17" },
  { id: 52, src: "/gallery/industrial-18.jpg", category: "Industrial", title: "Industrial Project 18" },
];

const categories = ["All", "Residential", "Industrial", "Commercial"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = activeFilter === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeFilter);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === filteredImages.length - 1 ? 0 : prev! + 1));
  }, [selectedIndex, filteredImages.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === 0 ? filteredImages.length - 1 : prev! - 1));
  }, [selectedIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: custom * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    })
  };

  return (
    <>
      <Navbar /> 

      <main className={styles.wrapper}>
        
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <section className={styles.hero}>
          <Image 
            src="/galllerryyy_hero_01.png" // Updated to point to the new image in the public folder
            alt="Roofing Gallery Background"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroPattern}></div>
          
          <div className={styles.heroContent}>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={heroVariants}
            >
              Our Project Gallery
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={heroVariants}
            >
              Explore our premium roofing solutions installed across various sectors.
            </motion.p>
          </div>
        </section>

        <section className={styles.gallerySection}>
          
          <div className={styles.filterWrapper}>
            <motion.div 
              className={styles.filters}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {categories.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveFilter(category);
                      setSelectedIndex(null); 
                    }}
                    className={`${styles.filterBtn} ${isActive ? styles.activeBtn : ""}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterIndicator"
                        className={styles.activeIndicator}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className={styles.filterText}>{category}</span>
                  </button>
                );
              })}
            </motion.div>
          </div>

          <motion.div layout className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                  transition={{ 
                    layout: { type: "spring", stiffness: 250, damping: 28 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    filter: { duration: 0.4 }
                  }}
                  className={styles.imageCard}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={item.src} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.gridImage}
                    />
                    <div className={styles.overlay}>
                      <span className={styles.viewText}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <span className={styles.categoryBadge}>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={styles.lightbox}
              onClick={() => setSelectedIndex(null)}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)} aria-label="Close Lightbox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
              </button>

              <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedIndex} 
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.lightboxContent}
                  onClick={(e) => e.stopPropagation()} 
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x < -80 || velocity.x < -500) handleNext();
                    if (offset.x > 80 || velocity.x > 500) handlePrev();
                  }}
                >
                  <Image 
                    src={filteredImages[selectedIndex].src} 
                    alt={filteredImages[selectedIndex].title} 
                    fill
                    style={{ objectFit: "contain", pointerEvents: "none" }} 
                    quality={100}
                    priority
                  />
                  <div className={styles.lightboxCaption}>
                    <h3>{filteredImages[selectedIndex].title}</h3>
                    <p>{filteredImages[selectedIndex].category}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              <div className={styles.counter}>
                {selectedIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}