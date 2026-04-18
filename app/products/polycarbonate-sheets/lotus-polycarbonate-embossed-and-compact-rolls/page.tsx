"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function LotusRollsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Lotus Embossed and Compact Rolls
  const images = [
    "/product_page_images/Lotus-Polycarbonate-multiwall-sheets.webp",
    // "/Polycarbonate-Sheets/Lotus-Rolls-02.jpg",
    // "/Polycarbonate-Sheets/Lotus-Rolls-03.jpg",
    // "/Polycarbonate-Sheets/Lotus-Rolls-04.jpg"
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Polycarbonate+Sheets">Polycarbonate Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Lotus Rolls</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Lotus Polycarbonate Embossed and Compact Roll" 
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
          <h1 className={styles.productTitle}>Lotus Polycarbonate Embossed & Compact Rolls</h1>
          <p className={styles.productSubtitle}>High-quality continuous polycarbonate rolls available in plain and textured finishes for versatile roofing and glazing applications.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Seamless Leak-Proof Spans</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High Impact Resistance</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>1.2mm</span>
              <span className={styles.tag}>1.5mm</span>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>3.0mm</span>
            </div>
            <p className={styles.note}>*Roll lengths range from 15m to 30m depending on thickness.</p>
          </div>

          {/* Action Area */}
          <div className={styles.actionArea}>
            <Link href="/contact" className={styles.quoteBtn}>
              Request Bulk Quote
            </Link>
            <button className={styles.downloadBtn}><FaFileDownload /> Technical Data Sheet</button>
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
              <h3 className={styles.tabContentHeading}>Versatile Continuous Roofing Solution</h3>
              <p>Lotus Polycarbonate Rolls offer exceptional durability and optical clarity. Supplied as continuous rolls rather than individual cut sheets, they allow for seamless, long-span installations without the need for multiple overlapping joints. This significantly reduces the risk of water leakage and saves tremendous time during installation.</p>
              <br/>
              <p><strong>Compact Rolls:</strong> Provide a glass-like flat surface with high light transmission, perfect for clear skylights and safety glazing.</p>
              <p><strong>Embossed Rolls:</strong> Feature a beautifully textured surface that diffuses harsh sunlight and reduces glare, making them ideal for privacy screens and decorative roofing.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>Lotus</td>
                  </tr>
                  <tr>
                    <th>Material</th>
                    <td>Virgin Polycarbonate Resin</td>
                  </tr>
                  <tr>
                    <th>Surface Options</th>
                    <td>Compact (Plain / Clear) or Embossed (Textured)</td>
                  </tr>
                  <tr>
                    <th>Standard Widths</th>
                    <td>1220mm, 1560mm, 2100mm</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Co-extruded UV layer on top surface</td>
                  </tr>
                  <tr>
                    <th>Colors</th>
                    <td>Clear, Bronze, Blue, Green, Opal White</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Industrial and Commercial Skylights</li>
                <li>Continuous Architectural Domes and Vaults</li>
                <li>Greenhouse and Agricultural Glazing</li>
                <li>Pedestrian Covered Walkways and Canopies</li>
                <li>Privacy Partitions (Embossed variants)</li>
                <li>Sound Barrier Walls along Highways</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}