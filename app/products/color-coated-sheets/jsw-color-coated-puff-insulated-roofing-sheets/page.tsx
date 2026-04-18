"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt, FaThermometerHalf } from "react-icons/fa";

export default function JSWPUFInsulatedPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for JSW Color Coated PUF Insulated Sheets
  const images = [
    "/product_page_images/JSW-color-coated-puff-insulated-roofing-sheets.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=PVC+Products">PVC Products</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>JSW PUF Insulated Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="JSW Color Coated PUF Insulated Sandwich Panel" 
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
          <h1 className={styles.productTitle}>JSW Color Coated PUF Insulated Sheets</h1>
          <p className={styles.productSubtitle}>High-performance sandwich panels featuring a high-density Polyurethane Foam (PUF) core and JSW Colouron+ steel skins for ultimate thermal and acoustic comfort.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaThermometerHalf /> 40 kg/m³ Core Density</span>
            <span className={styles.benefitBadge}><FaShieldAlt /> Fire Retardant & Leak Proof</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available PUF Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>30mm</span>
              <span className={styles.tag}>40mm</span>
              <span className={styles.tag}>50mm</span>
              <span className={styles.tag}>100mm+</span>
            </div>
            <p className={styles.note}>*Standard width of 1070mm. Top skin features JSW Colouron+ (AZ150) for maximum rust protection.</p>
          </div>

          {/* Action Area */}
          <div className={styles.actionArea}>
            <Link href="/contact" className={styles.quoteBtn}>
              Request Bulk Quote
            </Link>
            <button className={styles.downloadBtn}><FaFileDownload /> Technical Brochure</button>
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
              <h3 className={styles.tabContentHeading}>The Pinnacle of Energy-Efficient Construction</h3>
              <p>JSW PUF Insulated Roofing Sheets (Sandwich Panels) are the gold standard for temperature-controlled environments. These panels consist of a rigid core of CFC-free Polyurethane Foam sandwiched between two layers of JSW color-coated steel. This composite structure provides exceptional structural strength while acting as a near-perfect thermal barrier.</p>
              <br/>
              <p>By utilizing **JSW Colouron+** as the external facing, these panels inherit superior corrosion resistance (AZ150 coating) and vibrant, fade-resistant aesthetics. The PUF core maintains a consistent density of 40 kg/m³, ensuring that large industrial halls and residential spaces remain significantly cooler in the summer and warmer in the winter, leading to energy savings of up to 40-50% on air conditioning costs.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Core Material</th>
                    <td>Rigid Polyurethane Foam (PUF) - CFC Free</td>
                  </tr>
                  <tr>
                    <th>Core Density</th>
                    <td>40 kg/m³ (+/- 2 kg)</td>
                  </tr>
                  <tr>
                    <th>Top Skin</th>
                    <td>JSW Colouron+ (Galvalume AZ150 / 550 MPa)</td>
                  </tr>
                  <tr>
                    <th>Skin Thickness</th>
                    <td>0.45mm to 0.60mm</td>
                  </tr>
                  <tr>
                    <th>Thermal Conductivity</th>
                    <td>0.022 W/mK (Superior insulation)</td>
                  </tr>
                  <tr>
                    <th>Joint System</th>
                    <td>Tongue & Groove / Overlap Profile (Leak-proof)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Industrial Cold Storages and Food Processing Units</li>
                <li>Pharmaceutical Warehouses and Clean Rooms</li>
                <li>Modern Pre-Engineered Buildings (PEB)</li>
                <li>Residential Rooftop Rooms and Luxury Farmhouses</li>
                <li>Portable Cabins, Site Offices, and Security Posts</li>
                <li>Large Distribution Centers and Temperature-Controlled Godowns</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}