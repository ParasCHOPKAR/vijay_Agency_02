"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function JSWRoofingSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for JSW Roofing Sheets
  const images = [
    "/product_page_images/JSW-roofing-sheet.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>JSW Roofing Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="JSW Colouron Plus Roofing Sheet" 
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
          <h1 className={styles.productTitle}>JSW Roofing Sheets</h1>
          <p className={styles.productSubtitle}>India's most trusted color-coated steel roofing, featuring advanced Galvalume® technology and high-gloss paint for unmatched longevity and style.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> India's 1st 20-Year Warranty</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High-Tensile 550 MPa Steel</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Brands & Variants</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>JSW Everglow (Premium)</span>
              <span className={styles.tag}>JSW Colouron+ (All-Weather)</span>
              <span className={styles.tag}>JSW Pragati+ (Budget)</span>
              <span className={styles.tag}>JSW Vishwas+ (Al-Zn)</span>
            </div>
            <p className={styles.note}>*Thickness range from 0.30mm to 0.80mm. Available in Trapezoidal, Corrugated, and Tile profiles.</p>
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
              <h3 className={styles.tabContentHeading}>Engineered for Resilience and Aesthetics</h3>
              <p>JSW Steel is a pioneer in the color-coated roofing industry, being India's first licensee of Galvalume® technology. JSW roofing sheets are manufactured using high-grade steel alloys coated with an advanced Aluminium-Zinc (AZ-150) substrate. This combination provides up to 4 times the life of ordinary galvanized sheets, ensuring your roof remains rust-proof even in the most corrosive coastal environments.</p>
              <br/>
              <p>The premium **JSW Everglow** range features high-gloss Super Durable Polyester (SDP) paint and SRI (Solar Reflective Index) technology. This specialized coating reflects a high percentage of solar radiation, effectively managing interior temperatures and keeping your home or factory significantly cooler. With the first-ever 20-year anti-fade and anti-chalk warranty in India, JSW ensures your roof stays as vibrant as the day it was installed.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>JSW Steel Coated Products Ltd.</td>
                  </tr>
                  <tr>
                    <th>Base Substrate</th>
                    <td>Aluminium-Zinc (Galvalume®) AZ-70 to AZ-150</td>
                  </tr>
                  <tr>
                    <th>Yield Strength</th>
                    <td>High-Tensile (550 MPa to 770 MPa)</td>
                  </tr>
                  <tr>
                    <th>Paint System</th>
                    <td>Super Durable Polyester (SDP) / RMP / PVDF</td>
                  </tr>
                  <tr>
                    <th>Weatherability</th>
                    <td>1000+ Hrs Salt Spray Test Passed</td>
                  </tr>
                  <tr>
                    <th>Standard Width</th>
                    <td>1070mm to 1220mm (Effective varies by profile)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Homes, Farmhouses, and Modern Villas</li>
                <li>Industrial Factories, Warehouses, and Cold Storages</li>
                <li>Commercial Offices, Showrooms, and Parking Sheds</li>
                <li>Pre-Engineered Buildings (PEB) and Large Infrastructure Projects</li>
                <li>Coastal and High-Rainfall Regions (High Rust Resistance)</li>
                <li>Solar Panel Mounting and HVAC Ducting Support</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}