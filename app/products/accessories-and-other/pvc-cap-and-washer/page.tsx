"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function PVCCapAndWasherPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for PVC Cap & Washer Sets
  const images = [
    "/product_page_images/PVC-cap-washer.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Accessories">Accessories</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>PVC Cap & Washer</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="PVC Cap and Washer Set for Roofing" 
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
          <h1 className={styles.productTitle}>PVC Cap & Washer Sets</h1>
          <p className={styles.productSubtitle}>UV-stabilized, weather-resistant mounting hardware designed to provide a 100% watertight seal and prevent cracking on plastic roofing sheets.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Leak-Proof Seal</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Prevents Sheet Cracking</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Profiles & Types</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>Corrugated Profile</span>
              <span className={styles.tag}>Trapezoidal (Greca)</span>
              <span className={styles.tag}>Universal Flat Base</span>
              <span className={styles.tag}>Color-Matched Tops</span>
            </div>
            <p className={styles.note}>*Sold in bulk bags. Available in multiple colors to match your roofing sheets.</p>
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
              <h3 className={styles.tabContentHeading}>The Essential Fastening Accessory</h3>
              <p>When installing PVC, FRP, or Polycarbonate roofing sheets, using standard flat metal washers can cause the plastic panels to crack due to overtightening and restricted thermal expansion. Our two-piece PVC Cap and Washer sets are specifically engineered to solve this problem. The profiled bottom washer perfectly hugs the ridge of the roofing sheet, distributing the fastening load evenly and safely.</p>
              <br/>
              <p>Once the screw is driven in, the top PVC cap firmly snaps into place, completely encapsulating the screw head. This double-layer system protects the metal fastener from rust-inducing rain and creates a highly flexible, weather-tight seal that accommodates the natural expansion and contraction of plastic roofing under direct sunlight.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>High-Impact, UV-Stabilized PVC</td>
                  </tr>
                  <tr>
                    <th>Components</th>
                    <td>Snap-on Top Cap + Profiled Base Washer</td>
                  </tr>
                  <tr>
                    <th>Profile Compatibility</th>
                    <td>Round Corrugated, Trapezoidal (Greca), Flat</td>
                  </tr>
                  <tr>
                    <th>Weatherability</th>
                    <td>Anti-UV coated, highly resistant to fading and embrittlement</td>
                  </tr>
                  <tr>
                    <th>Screw Compatibility</th>
                    <td>Fits standard Hex and Truss head self-tapping screws</td>
                  </tr>
                  <tr>
                    <th>Available Colors</th>
                    <td>Clear, White, Terracotta, Blue, Green, Grey</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Fixing PVC and FRP Profiled Roofing Sheets</li>
                <li>Installing Polycarbonate Skylights and Canopies</li>
                <li>Industrial Factory Sheds and Coastal Warehouses</li>
                <li>Agricultural Greenhouses and Poultry Farms</li>
                <li>Residential Pergolas, Carports, and Patios</li>
                <li>Preventing wind-uplift damage on lightweight panels</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}