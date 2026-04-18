"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function EssarRoofingSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Essar Roofing Sheets
  const images = [
    "/product_page_images/Essar-roofing-sheets.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Essar Roofing Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Essar High-Strength Roofing Sheet" 
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
          <h1 className={styles.productTitle}>Essar Roofing Sheets</h1>
          <p className={styles.productSubtitle}>High-quality steel roofing solutions from Essar Steel, engineered for maximum durability, structural rigidity, and long-term weather protection.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 120 GSM Zinc Coating</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Extreme Weather Proof</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Profiles & Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>Corrugated (Wavy)</span>
              <span className={styles.tag}>Trapezoidal (Industrial)</span>
              <span className={styles.tag}>0.35mm - 0.70mm</span>
              <span className={styles.tag}>PPGI / Galvalume</span>
            </div>
            <p className={styles.note}>*Standard widths of 1060mm with customizable lengths to suit large-scale industrial layouts.</p>
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
              <h3 className={styles.tabContentHeading}>The Industrial Strength Benchmark</h3>
              <p>Essar Roofing Sheets are a product of Essar Steel’s legacy of metallurgical excellence. Known for their high yield strength and exceptional formability, these sheets are designed to withstand the most punishing environmental conditions. Whether it is high-velocity winds or heavy monsoon rains, Essar sheets provide a structurally sound canopy that prevents leaks and structural fatigue.</p>
              <br/>
              <p>Available in both Galvanized Iron (GI) and Pre-Painted Galvanized Iron (PPGI), these sheets feature a minimum coating of 120 GSM zinc, ensuring high corrosion resistance even in chemical-intensive industrial areas. The advanced painting process used by Essar ensures that the sheets do not peel or crack during heavy forming, maintaining a clean, professional aesthetic for residential and commercial projects alike.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material Grade</th>
                    <td>High-Tensile Galvanized / Galvalume Steel</td>
                  </tr>
                  <tr>
                    <th>Coating Mass</th>
                    <td>120 GSM (Standard) / Customizable for Coastal</td>
                  </tr>
                  <tr>
                    <th>Thickness Range</th>
                    <td>0.30mm to 1.2mm</td>
                  </tr>
                  <tr>
                    <th>Tensile Strength</th>
                    <td>550 MPa (Guaranteed structural safety)</td>
                  </tr>
                  <tr>
                    <th>Profile Types</th>
                    <td>Corrugated, Profiled Trapezoidal, Plain Coils</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>Sky Blue, Royal Blue, Caulfield Green, Off-White, Terra Cotta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Large Industrial Warehouses and Manufacturing Plants</li>
                <li>Commercial Shopping Malls and Public Infrastructure</li>
                <li>Agricultural Farmhouses, Barns, and Poultry Sheds</li>
                <li>Residential Roofing and Wall Cladding for Modern Homes</li>
                <li>Coastal Construction requiring superior rust resistance</li>
                <li>Skylight Framing and Ancillary Structural Decking</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}