"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function AluminumSectionsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Aluminum Sections for Polycarbonate
  const images = [
    "/product_page_images/Aluminum-section-for-polycarbonate.webp",
  
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Accessories">Accessories</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Aluminum Sections</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Aluminum Profiles and Sections for Polycarbonate Sheets" 
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
          <h1 className={styles.productTitle}>Aluminum Sections for Polycarbonate</h1>
          <p className={styles.productSubtitle}>Precision-extruded structural aluminum profiles designed to securely join, edge, and seal polycarbonate roofing sheets.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Rust Proof</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Easy Snap-Fit Installation</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Profiles & Types</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>H-Joiner (Connecting)</span>
              <span className={styles.tag}>U-Channel (Edging)</span>
              <span className={styles.tag}>Glazing Bars (Rafter)</span>
              <span className={styles.tag}>Snap-down Top Caps</span>
            </div>
            <p className={styles.note}>*Profiles are available to accommodate sheet thicknesses from 4mm up to 25mm.</p>
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
              <h3 className={styles.tabContentHeading}>The Foundation of a Perfect Glazing System</h3>
              <p>Installing polycarbonate sheets requires more than just screws—it requires a proper framing system that accounts for thermal expansion while ensuring a 100% watertight seal. Our range of Aluminum Sections provides exactly that. Manufactured from high-grade architectural aluminum (typically 6063 alloy), these profiles are lightweight, incredibly strong, and highly resistant to corrosion.</p>
              <br/>
              <p><strong>H-Profiles (Joiners):</strong> Used to seamlessly connect two sheets side-by-side, creating a continuous waterproof barrier over large spans.<br/>
                 <strong>U-Profiles (Edging):</strong> Placed over the open flutes (ends) of multiwall sheets to prevent dirt, insects, and moisture from entering the cells.<br/>
                 <strong>Glazing Bars:</strong> Heavy-duty, rafter-supported bars featuring EPDM rubber gaskets and snap-down top caps for premium, professional roofing installations.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material Alloy</th>
                    <td>High-Grade Extruded Aluminum (6063-T5 / T6)</td>
                  </tr>
                  <tr>
                    <th>Profile Types</th>
                    <td>H-Shape, U-Shape, F-Shape, Rafter Glazing Bars</td>
                  </tr>
                  <tr>
                    <th>Compatible Sheet Thickness</th>
                    <td>4mm, 6mm, 10mm, 16mm, up to 25mm</td>
                  </tr>
                  <tr>
                    <th>Standard Lengths</th>
                    <td>3 Meters, 6 Meters (Custom cuts available)</td>
                  </tr>
                  <tr>
                    <th>Weather Sealing</th>
                    <td>Compatible with EPDM rubber gaskets</td>
                  </tr>
                  <tr>
                    <th>Surface Finish</th>
                    <td>Mill Finish, Silver Anodized, or Powder Coated (Brown/White)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Patios, Pergolas, and Carport Roofing</li>
                <li>Commercial Skylights and Architectural Domes</li>
                <li>Greenhouse Framing and Glazing Construction</li>
                <li>Swimming Pool Enclosures and Walkways</li>
                <li>Joining Multiwall and Solid Polycarbonate Sheets</li>
                <li>Sealing Flute Ends on Cellular Polycarbonate</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}