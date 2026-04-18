"use client";

import styles from "./contact.module.css";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      {/* NAVBAR */}


      <section className={styles.wrapper}>
        
        {/* HERO */}
        <div className={styles.hero}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p>Get in touch with us for premium, long-lasting roofing solutions.</p>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className={styles.container}>
          
          {/* LEFT INFO */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Vijay Agency</h2>
            <p className={styles.subtitle}>House of Roofing Sheets</p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  {/* Map Pin Icon */}
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <strong>Visit Us</strong>
                  <p>Bhawani Peth, Pune - 411042<br />Maharashtra, India</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  {/* Phone Icon */}
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <strong>Call Us</strong>
                  <p>Mobile: +91 8888010111<br />Landline: 020-26443274</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  {/* Mail Icon */}
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <strong>Email Us</strong>
                  <p>vijayagency@gmail.com</p>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <span>Connect with us:</span>
              <div className={styles.socialIcons}>
                {/* Facebook Placeholder */}
                <a href="https://www.facebook.com/profile.php?id=61570794628476" className={styles.socialCircle}><svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
                {/* Instagram Placeholder */}
                <a href="https://www.instagram.com/vijayag987/" className={styles.socialCircle}><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                {/* WhatsApp Placeholder */}

              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            className={styles.form}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Send us a message</h3>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="How can we help you?" rows={5} required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit Request
            </button>
          </motion.form>

        </div>

{/* MAP */}
       {/* MAP */}
        <motion.div 
          className={styles.map}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Vijay%20Agency,%20Bhawani%20Peth,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
}