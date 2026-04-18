"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function KalonTapesPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Kalon Butyl & Bitumen Tapes
  const images = [
    "/product_page_images/Kalon-butyl-bitumen-tapes.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Accessories">Accessories</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Kalon Sealing Tapes</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Kalon Butyl and Bitumen Waterproofing Tape" 
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
          <h1 className={styles.productTitle}>Kalon Butyl & Bitumen Tapes</h1>
          <p className={styles.productSubtitle}>High-performance self-adhesive sealing tapes designed for instant, watertight repairs and permanent flashing applications.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Waterproof Seal</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Instant Aggressive Tack</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Tape Types & Widths</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>Butyl Rubber Tape</span>
              <span className={styles.tag}>Bitumen Flashing Tape</span>
              <span className={styles.tag}>50mm / 2 Inch Width</span>
              <span className={styles.tag}>100mm / 4 Inch Width</span>
            </div>
            <p className={styles.note}>*Standard roll lengths are typically 10 meters. Features a reflective aluminum foil backing.</p>
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
              <h3 className={styles.tabContentHeading}>The Ultimate Peel-and-Stick Weatherproofing</h3>
              <p>Kalon Sealing Tapes are the industry standard for fast, reliable, and permanent waterproofing. Designed with a highly aggressive self-adhesive compound, these tapes bond instantly to metal, plastic, concrete, glass, and wood without the need for heat torches or special primers.</p>
              <br/>
              <p><strong>Bitumen Tapes:</strong> Feature a polymer-modified asphalt compound reinforced with an aluminum foil backing. They are highly economical and perfect for general roof repairs, gutter sealing, and flashing.<br/>
                 <strong>Butyl Tapes:</strong> Manufactured from premium synthetic butyl rubber. These remain permanently flexible, will not dry out or crack over time, and offer vastly superior UV resistance and temperature tolerance, making them ideal for high-end polycarbonate and metal roofing joint seals.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>Kalon</td>
                  </tr>
                  <tr>
                    <th>Adhesive Base</th>
                    <td>Synthetic Butyl Rubber / Modified Bitumen</td>
                  </tr>
                  <tr>
                    <th>Top Surface</th>
                    <td>UV-Resistant Aluminum Foil / PET Film</td>
                  </tr>
                  <tr>
                    <th>Standard Widths</th>
                    <td>50mm, 75mm, 100mm, 150mm</td>
                  </tr>
                  <tr>
                    <th>Roll Length</th>
                    <td>10 Meters</td>
                  </tr>
                  <tr>
                    <th>Application Temperature</th>
                    <td>5°C to 45°C (Performs well in extreme weather)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Sealing overlaps and end-laps in Metal and FRP roofing</li>
                <li>Waterproofing skylights, chimneys, and roof ventilators</li>
                <li>Repairing cracks in concrete gutters and asbestos sheets</li>
                <li>Sealing HVAC ducting and insulation joints</li>
                <li>Flashing around window frames and exterior doors</li>
                <li>Emergency leak repairs for pipes and automotive applications</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}