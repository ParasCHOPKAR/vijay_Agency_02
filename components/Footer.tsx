"use client"; 

import styles from "./Footer.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      
      <video
        className={styles.videoBackground}
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/footer-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.videoOverlay}></div>

      <div className={styles.footerContent}>
        
        <div className={styles.container}>

          {/* LEFT - COMPANY */}
          <div className={styles.col}>
            {/* Added styling to split colors to match your logo closely (Teal + White) */}
            <h2 className={styles.logo}>
              <span style={{ color: '#3DB389' }}>VIJAY</span> <span style={{ color: '#ffffff' }}>AGENCY</span>
            </h2>
            <p className={styles.description}>
              House of Roofing Sheets. We provide premium quality roofing
              solutions including polycarbonate sheets, metal roofing,
              ventilators, and more.
            </p>

            <div className={styles.social}>
              <a href="https://www.facebook.com/profile.php?id=61570794628476" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.instagram.com/vijayag987/" aria-label="Instagram"><FaInstagram /></a>
         
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.col}>
            <h3 className={styles.heading}>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* PRODUCTS */}
          <div className={styles.col}>
            <h3 className={styles.heading}>Products</h3>
            <Link href="#">Polycarbonate Sheets</Link>
            <Link href="#">Roofing Sheets</Link>
            <Link href="#">Tile Roof Sheets</Link>
            <Link href="#">Stone Coated Roofing</Link>
            <Link href="#">Roof Ventilators</Link>
          </div>

          {/* CONTACT */}
          <div className={styles.col}>
            <h3 className={styles.heading}>Contact</h3>

            <div className={styles.contactItem}>
              <FaPhoneAlt /> <p>+91 8888010111</p>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope /> <p>vijayagency@gmail.com</p>
            </div>
            <p className={styles.address}>Pune, Maharashtra, India</p>

            <Link href="/contact" className={styles.cta}>
              Get Quote
            </Link>
          </div>

        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Vijay Agency. All Rights Reserved.</p>
          <p>Developed BY DW Innovation PVT LTD</p>
        </div>
      </div>
      
    </footer>
  );
}