"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function LotusPVCGrecaPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Lotus PVC Greca Sheets
  const images = [
    "/product_page_images/Lotus-PVC-greca-roofing-sheets.jpg",
 
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=PVC+Products">PVC Products</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Lotus PVC Greca Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Lotus PVC Greca Roofing Sheet" 
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
          <h1 className={styles.productTitle}>Lotus PVC Greca Roofing Sheets</h1>
          <p className={styles.productSubtitle}>High-performance trapezoidal profile uPVC sheets designed for superior strength and efficient water drainage.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Chemical & Acid Resistant</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High Load Bearing Capacity</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>1.5mm</span>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>2.5mm</span>
              <span className={styles.tag}>3.0mm</span>
            </div>
            <p className={styles.note}>*Available in standard industrial widths. Profile matches common trapezoidal metal sheets.</p>
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
              <h3 className={styles.tabContentHeading}>Advanced Trapezoidal Engineering</h3>
              <p>Lotus PVC Greca Roofing Sheets feature a classic trapezoidal profile that is specifically engineered for maximum structural rigidity. This "Greca" design allows the sheets to support higher loads over longer spans compared to traditional corrugated profiles, making them an ideal choice for large-scale industrial roofing.</p>
              <br/>
              <p>Manufactured using high-grade uPVC, these sheets are inherently resistant to corrosion, chemicals, and industrial emissions. They provide excellent thermal insulation, keeping the environment underneath significantly cooler than traditional metal roofing. The Greca profile also ensures rapid water runoff during heavy monsoons, preventing any water stagnation on the roof surface.</p>
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
                    <td>uPVC (unplasticized Polyvinyl Chloride)</td>
                  </tr>
                  <tr>
                    <th>Profile Type</th>
                    <td>Greca / Trapezoidal</td>
                  </tr>
                  <tr>
                    <th>Corrosion Resistance</th>
                    <td>Acid, Alkali, and Salt Resistant</td>
                  </tr>
                  <tr>
                    <th>UV Stability</th>
                    <td>Anti-UV Stabilized for outdoor use</td>
                  </tr>
                  <tr>
                    <th>Available Colors</th>
                    <td>White, Blue, Terracotta Red, Grey</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Chemical and Fertilizer Plants</li>
                <li>Industrial Sheds and Warehouses</li>
                <li>Coastal Area Building Roofs</li>
                <li>Animal Husbandry and Poultry Farms</li>
                <li>Railway Stations and Public Platforms</li>
                <li>Commercial Parking Lots and Garages</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}