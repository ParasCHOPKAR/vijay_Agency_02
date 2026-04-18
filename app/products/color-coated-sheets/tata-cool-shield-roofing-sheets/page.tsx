"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt, FaThermometerEmpty } from "react-icons/fa";

export default function TataCoolShieldPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Tata Durashine CoolShield
  const images = [
    "/product_page_images/tata-cool-shield-roofing-sheets.png",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Tata Durashine CoolShield</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Tata Durashine CoolShield Insulated Roofing Sheet" 
              className={styles.mainImage} 
            />
          </div>
          <div className={styles.thumbnailStrip}>
            {images.map((img, idx) => (
              <div 
                key={idx}
                className={`${styles.thumbnailWrapper} ${activeImage === idx ? styles.activeThumb : ""}`}
                onClick={() => setActiveImage(idx)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={styles.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Information & Configuration */}
        <div className={styles.infoSection}>
          <h1 className={styles.productTitle}>Tata Durashine CoolShield</h1>
          <p className={styles.productSubtitle}>Advanced 3-layered insulated roofing solution designed to reduce heat penetration by up to 10°C while providing superior acoustic insulation.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaThermometerEmpty /> Reduces Heat up to 10°C</span>
            <span className={styles.benefitBadge}><FaShieldAlt /> Sound Dampening Technology</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Sheet Specifications</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>0.45mm Steel Base</span>
              <span className={styles.tag}>5mm XLPE Insulation</span>
              <span className={styles.tag}>Aluminum Foil Lining</span>
              <span className={styles.tag}>Trapezoidal Profile</span>
            </div>
            <p className={styles.note}>*Available in lengths from 8ft to 24ft. The integrated 3-layer system eliminates the need for separate insulation installation.</p>
          </div>

          {/* Action Area */}
          <div className={styles.actionArea}>
            <Link href="/contact" className={styles.quoteBtn}>
              Request Bulk Quote
            </Link>
            <button className={styles.downloadBtn}><FaFileDownload /> CoolShield Brochure</button>
          </div>
        </div>
      </div>

      {/* BOTTOM: Detailed Information Tabs */}
      <div className={styles.detailsSection}>
        <div className={styles.tabHeaders}>
          <button 
            className={`${styles.tabBtn} ${activeTab === "description" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === "specs" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === "applications" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("applications")}
          >
            Applications
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "description" && (
            <div className={styles.animateFadeIn}>
              <h3 className={styles.tabContentHeading}>The Future of Climate-Controlled Roofing</h3>
              <p>Tata Durashine CoolShield is an innovative, technologically advanced roofing solution that integrates a high-strength Galvalume sheet with a world-class insulation layer and an aluminum foil finish. This 3-layer fortified protection is specifically engineered for hot Indian climates, significantly moderating internal temperatures and creating a comfortable ambient environment without excessive air conditioning costs.</p>
              <br/>
              <p>The core of the system is a **5mm thick insulation layer** that acts as a thermal barrier, blocking radiant heat during summers and retaining warmth during winters. Beyond temperature control, CoolShield excels in acoustic performance; the insulation material mitigates the vibrations caused by heavy rain, drastically reducing the "drumming" sound typical of metal roofs. It also effectively prevents moisture condensation on the inside surface, protecting your structure's longevity.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Top Layer</th>
                    <td>High-Tensile Zinc-Aluminium Coated Steel (Durashine)</td>
                  </tr>
                  <tr>
                    <th>Insulation Layer</th>
                    <td>5mm Thick High-Quality Insulation Material</td>
                  </tr>
                  <tr>
                    <th>Inner Layer</th>
                    <td>Premium Aluminium Foil Lining for Smooth Finish</td>
                  </tr>
                  <tr>
                    <th>Thermal Performance</th>
                    <td>Reduces internal heat by up to 6°C - 10°C</td>
                  </tr>
                  <tr>
                    <th>Sound Insulation</th>
                    <td>Reduces external rain noise significantly</td>
                  </tr>
                  <tr>
                    <th>Standard Lengths</th>
                    <td>8, 10, 12, 14, 16, 18, 20, 22, 24 Feet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Homes and Modern Sloping-Roof Bungalows</li>
                <li>Commercial Offices, Showrooms, and Retail Outlets</li>
                <li>Large Warehouses and Factories requiring temperature control</li>
                <li>School and Educational Institution Buildings</li>
                <li>Agricultural Sheds for Poultry and Livestock protection</li>
                <li>Food Storage and Processing Units requiring hygiene and low heat</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}