"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function OraliumAluminumTilePage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Oralium Aluminum Tile Roof Sheets
  const images = [
    "/product_page_images/Oralium-aluminum-tile-roof-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Oralium Aluminum Tile</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Oralium Aluminum Tile Profile Roofing Sheet" 
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
          <h1 className={styles.productTitle}>Oralium Aluminum Tile Roof Sheets</h1>
          <p className={styles.productSubtitle}>Premium architectural aluminum roofing featuring a classic tile profile, offering lifetime rust immunity and exceptional coastal weather resistance.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Rust-Proof Aluminum</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High Thermal Reflectivity</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>0.45mm</span>
              <span className={styles.tag}>0.56mm</span>
              <span className={styles.tag}>0.71mm</span>
              <span className={styles.tag}>0.91mm</span>
            </div>
            <p className={styles.note}>*Aluminum offers extremely high resale/scrap value and is 100% eco-friendly and recyclable.</p>
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
              <h3 className={styles.tabContentHeading}>The Ultimate Defense Against Coastal Corrosion</h3>
              <p>Oralium Aluminum Tile Roof Sheets are the premier choice for architects and homeowners building in high-humidity or coastal regions where standard steel roofs are prone to rapid rusting. Unlike steel, pure aluminum is inherently immune to red rust. When exposed to air, it naturally forms a microscopic oxide layer that permanently protects the metal from moisture and salt-laden sea breezes.</p>
              <br/>
              <p>Beyond its unstoppable corrosion resistance, Oralium aluminum is incredibly lightweight—weighing approximately one-third of an equivalent steel sheet. This drastically reduces the structural load on your roof truss. Combined with the elegant, traditional step-tile profile and premium color-coated finishes, these sheets provide luxury aesthetics, natural thermal reflectivity (keeping interiors much cooler), and a roof that will easily last a lifetime.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>Oralium</td>
                  </tr>
                  <tr>
                    <th>Base Material</th>
                    <td>Premium Architectural Aluminum Alloy</td>
                  </tr>
                  <tr>
                    <th>Profile Type</th>
                    <td>Step Tile / Classic Roma Tile</td>
                  </tr>
                  <tr>
                    <th>Corrosion Resistance</th>
                    <td>Absolute (Immune to red rust; ideal for coastal areas)</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>Ultra-lightweight (approx. 33% the weight of steel)</td>
                  </tr>
                  <tr>
                    <th>Thermal Efficiency</th>
                    <td>Excellent (High natural radiant heat reflectivity)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Luxury Coastal Villas and Beachfront Resorts</li>
                <li>Premium Residential Homes in High-Rainfall Areas</li>
                <li>Heritage Renovations Requiring a Classic Tile Look</li>
                <li>Gazebos, Farmhouses, and High-End Carports</li>
                <li>Commercial Buildings with Sloping Architectural Roofs</li>
                <li>Eco-friendly construction (Aluminum is 100% recyclable)</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}