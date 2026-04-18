"use client";

import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Home Owner",
    text: "Excellent quality roofing sheets. Very durable and perfect for Indian weather conditions.",
  },
  {
    name: "Rahul Patil",
    role: "Contractor",
    text: "Best supplier in Pune. Wide range of products and timely delivery.",
  },
  {
    name: "Sneha Joshi",
    role: "Architect",
    text: "Premium designs and great finish. My clients are always satisfied.",
  },
  {
    name: "Vikram Deshmukh",
    role: "Builder",
    text: "Reliable and trusted vendor since years. Highly recommended.",
  },
];

// duplicate for smooth loop
const loopData = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className={styles.wrapper}>
      
      <h2 className={styles.heading}>
        <span>Client</span> Testimonials
      </h2>

      <div className={styles.slider}>
        <motion.div
          className={styles.track}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loopData.map((item, i) => (
            <div key={i} className={styles.card}>
              
              {/* STARS */}
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.text}>
                “{item.text}”
              </p>

              <h4>{item.name}</h4>
              <span>{item.role}</span>

            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}