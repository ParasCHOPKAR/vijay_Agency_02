"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ProductOverview.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    id: 1,
    title: "Polycarbonate Sheets",
    desc: "Durable, high-impact resistant, and transparent sheets ideal for natural light and modern sloped roofs.",
    img: "/polycarbonate_01.webp",
    items: ["Polycarbonate Awning", "Polycarbonate Corrugated Sheets"],
  },
  {
    id: 2,
    title: "Tile Roof Sheets",
    desc: "Classic aesthetic with modern durability. Perfect for residential and commercial architectural styles.",
    img: "/roof-tiles_01.webp",
    items: ["PVC Tile Roof Sheet", "Pre-Coated Tile Roof Sheets", "Geo Roof"],
  },
  {
    id: 3,
    title: "Color & Stone Coated",
    desc: "Premium stone-coated and color-coated sheets offering superior weather resistance and an elegant finish.",
    img: "/stone-cotted-roof.jpg",
    items: ["Color Coated Sheets Tile Roof", "Stone Coated"],
  },
  {
    id: 4,
    title: "PVC Products",
    desc: "Versatile, lightweight, and highly cost-effective PVC roofing and premium paneling solutions.",
    img: "/pvc-sheets.jpg",
    items: ["VOX PVC Panels", "PVC Rain Water Hycount", "PVC Zalar"],
  },
  {
    id: 5,
    title: "Acrylic & FRP Sheets",
    desc: "High-quality Acrylic, FRP, and PP sheets engineered for specialized industrial and architectural applications.",
    img: "/acrilyc_01.jpeg",
    items: ["Acrylic Sheets", "FRP Sheets", "PP Sheets"],
  },
  {
    id: 6,
    title: "Translucent Sheets",
    desc: "Elegant Alabaster sheets designed to diffuse sunlight beautifully, creating premium lit spaces.",
    img: "/alabster_01.jpg",
    items: ["Alabaster Sheets"],
  },
  {
    id: 7,
    title: "Accessories & Others",
    desc: "Essential, high-performance roofing accessories including industrial ventilators and insulation foils.",
    img: "/ventiletor.jpg",
    items: ["Roof Ventilator", "Aluminium Foil, Roll"],
  }
];

// Upgraded to fluid spring physics for a high-end feel
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
  },
  exit: { 
    opacity: 0, 
    transition: { staggerChildren: 0.05, staggerDirection: -1 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 30, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", damping: 20, stiffness: 100 } },
  exit: { opacity: 0, x: -20, filter: "blur(5px)", transition: { ease: "easeIn", duration: 0.2 } }
};

export default function ProductOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect Logic for the Image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(`.${styles.header}`, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(`.${styles.tab}`, 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(`.${styles.cardWrapper}`, 
        { opacity: 0, scale: 0.95, filter: "blur(10px)" }, 
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power4.out" },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.productOverview}>
      {/* Animated Ambient Background */}
      <div className={styles.bgBlob}></div>
      <div className={styles.bgBlob2}></div>

      <div className={styles.container}>
        
        {/* HEADER */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.orangeText}>Product</span> Overview
          </h2>
          <p className={styles.subtitle}>
            Explore our wide range of premium roofing solutions designed for longevity and aesthetics.
          </p>
        </div>

        {/* MAIN INTERACTIVE AREA */}
        <div className={styles.interactiveArea}>
          
          {/* LEFT SIDEBAR: TAB LIST */}
          <div className={styles.sidebar}>
            {categories.map((cat, index) => (
              <div 
                key={cat.id} 
                onClick={() => setActiveIndex(index)}
                className={`${styles.tab} ${activeIndex === index ? styles.activeTab : ""}`}
              >
                {activeIndex === index && (
                  <motion.div layoutId="activeTabIndicator" className={styles.activeIndicator} />
                )}
                <span className={styles.tabNumber}>
                  {cat.id.toString().padStart(2, '0')}
                </span>
                <span className={styles.tabName}>{cat.title}</span>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: CONTENT CARD */}
          <div className={styles.cardWrapper}>
            <div className={styles.contentCard}>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={styles.cardInner}
                >
                  {/* 3D Interactive Product Image */}
                  <motion.div 
                    variants={itemVariants} 
                    className={styles.cardImageContainer}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ perspective: 1000 }}
                  >
                    <div className={styles.imageBackdrop}></div>
                    <motion.img 
                      src={categories[activeIndex].img} 
                      alt={categories[activeIndex].title} 
                      className={styles.cardImage} 
                      style={{ rotateX, rotateY }}
                    />
                  </motion.div>

                  {/* Product Info */}
                  <div className={styles.cardInfo}>
                    <motion.h3 variants={itemVariants} className={styles.cardTitle}>
                      {categories[activeIndex].title}
                    </motion.h3>
                    <motion.p variants={itemVariants} className={styles.cardDesc}>
                      {categories[activeIndex].desc}
                    </motion.p>
                    
                    <motion.ul variants={itemVariants} className={styles.cardItems}>
                      {categories[activeIndex].items.map((item, i) => (
                        <li key={i}>
                          <span className={styles.checkIcon}>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </span> 
                          {item}
                        </li>
                      ))}
                    </motion.ul>

                    <motion.div variants={itemVariants} className={styles.btnWrapper}>
                      <Link href="/products" className={styles.exploreBtn}>
                        <span className={styles.btnText}>Explore Series</span>
                        <span className={styles.btnArrow}>→</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}