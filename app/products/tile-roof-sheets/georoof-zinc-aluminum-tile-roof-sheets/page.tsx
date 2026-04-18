"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function GeoroofZincAluminumTilePage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Georoof Zinc Aluminum Tile Roof Sheets
  const images = [
    "/product_page_images/Georoof-Zinc-aluminum-tile-roof-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Georoof Tile Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Georoof Zinc Aluminum Tile Profile Roofing Sheet" 
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
          <h1 className={styles.productTitle}>Georoof Zinc Aluminum Tile Roof Sheets</h1>
          <p className={styles.productSubtitle}>Premium Galvalume roofing sheets featuring a classic step-tile profile, delivering exceptional architectural beauty and unmatched corrosion resistance.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Premium Al-Zn Coating</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Classic Tile Aesthetic</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>0.45mm</span>
              <span className={styles.tag}>0.47mm</span>
              <span className={styles.tag}>0.50mm</span>
              <span className={styles.tag}>0.60mm</span>
            </div>
            <p className={styles.note}>*Custom lengths available to eliminate overlapping joints and ensure a 100% leak-proof roof.</p>
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
              <h3 className={styles.tabContentHeading}>Timeless Elegance Engineered for Longevity</h3>
              <p>Georoof Zinc Aluminum Tile Roof Sheets offer the perfect synergy between traditional architectural aesthetics and advanced metallurgical science. Designed to flawlessly mimic the look of classic terracotta step-tiles, these sheets eliminate the heavy structural loads, algae growth, and cracking issues associated with real clay roofing.</p>
              <br/>
              <p>The core of these premium sheets is forged from high-tensile steel, which is then hot-dip coated with a highly protective Zinc-Aluminum alloy (Galvalume). This Al-Zn coating provides up to four times the corrosion resistance of standard galvanized steel. Finished with a multi-layered, UV-resistant color coating, Georoof sheets guarantee exceptional thermal efficiency, superior rust protection, and lasting vibrancy even in harsh coastal or high-rainfall climates.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>Georoof</td>
                  </tr>
                  <tr>
                    <th>Base Material</th>
                    <td>Zinc-Aluminum Coated Steel (Galvalume / GL)</td>
                  </tr>
                  <tr>
                    <th>Profile Type</th>
                    <td>Step Tile / Classic Roma Tile</td>
                  </tr>
                  <tr>
                    <th>Coating Mass</th>
                    <td>AZ70 to AZ150 (Superior corrosion protection)</td>
                  </tr>
                  <tr>
                    <th>Paint System</th>
                    <td>Premium Super Polyester or PVDF Topcoat</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>Brick Red, Autumn Green, Royal Blue, Slate Grey</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Premium Residential Villas and Independent Houses</li>
                <li>Luxury Farmhouses, Resorts, and Eco-Lodges</li>
                <li>Heritage Building Renovations and Extensions</li>
                <li>High-End Commercial Buildings with Sloping Roofs</li>
                <li>Coastal Housing Projects requiring high rust resistance</li>
                <li>Gazebos, Porches, and Aesthetic Carport Canopies</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}