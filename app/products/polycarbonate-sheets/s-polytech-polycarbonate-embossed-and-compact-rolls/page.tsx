"use client";

import { useState } from "react";
import Link from "next/link"; // <-- Added this import
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [selectedType, setSelectedType] = useState("compact");
  const [activeImage, setActiveImage] = useState(0);

  // Placeholder images - replace with your actual public folder paths
  const images = [
    "/Polycarbonate-Sheets/S-Polytech-Polycarbonate-Rolls_01.jpg",

    "/Polycarbonate-Sheets/S-Polytech-Polycarbonate-Rolls_04.jpg"
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <span>Home</span> <span className={styles.crumbDivider}>/</span> 
        <span>Products</span> <span className={styles.crumbDivider}>/</span> 
        <span>Polycarbonate Sheets</span> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>S Polytech Rolls</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="S Polytech Polycarbonate Roll" 
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
          <h1 className={styles.productTitle}>S Polytech Polycarbonate Rolls</h1>
          <p className={styles.productSubtitle}>Premium high-quality compact and embossed continuous rolls.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 10-Year UV Warranty</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High Impact Resistance</span>
          </div>

          <div className={styles.divider}></div>

          {/* Configuration Options */}
          <div className={styles.configGroup}>
            <h3>Select Surface Finish</h3>
            <div className={styles.optionsGrid}>
              <button 
                className={`${styles.optionBtn} ${selectedType === "compact" ? styles.selected : ""}`}
                onClick={() => setSelectedType("compact")}
              >
                Compact (Plain)
              </button>
              <button 
                className={`${styles.optionBtn} ${selectedType === "embossed" ? styles.selected : ""}`}
                onClick={() => setSelectedType("embossed")}
              >
                Embossed (Textured)
              </button>
            </div>
          </div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>1.2mm</span>
              <span className={styles.tag}>1.5mm</span>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>3.0mm</span>
            </div>
            <p className={styles.note}>*Roll lengths range from 20m to 50m depending on thickness.</p>
          </div>

          {/* Action Area */}
          <div className={styles.actionArea}>
            {/* CHANGED: Swapped button for Link to point to Contact Page */}
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
              <h3 className={styles.tabContentHeading}>Premium Manufacturing Standard</h3>
              <p>Manufactured to the highest global standards, these polycarbonate rolls represent the pinnacle of optical clarity and durability. By providing continuous rolls rather than cut sheets, we minimize overlap joints in large-scale roofing and cladding projects, significantly reducing the risk of leakage and saving on installation time.</p>
              <br/>
              <p><strong>Compact Rolls:</strong> Feature a glass-like flat surface offering 88% light transmission. Ideal for skylights, covered walkways, and safety glazing.</p>
              <p><strong>Embossed Rolls:</strong> Feature a textured surface that diffuses harsh sunlight, reducing glare while still allowing natural light to penetrate. Perfect for privacy screens, greenhouses, and decorative roofing.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>S Polytech</td>
                  </tr>
                  <tr>
                    <th>Material</th>
                    <td>100% Virgin Polycarbonate Resin</td>
                  </tr>
                  <tr>
                    <th>Widths Available</th>
                    <td>1220mm, 1560mm, 1820mm, 2100mm</td>
                  </tr>
                  <tr>
                    <th>Lengths Available</th>
                    <td>20m, 30m, 50m (Varies by thickness)</td>
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
                <li>Greenhouse Glazing</li>
                <li>Sound Barrier Walls along Highways</li>
                <li>Pedestrian Covered Walkways and Canopies</li>
                <li>Privacy Partitions (Embossed type)</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}