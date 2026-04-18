"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function CastAcrylicSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Cast Acrylic Sheets
  const images = [
    "/product_page_images/Cast-Acrylic-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Acrylic+Sheets">Acrylic Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Cast Acrylic Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Premium Cast Acrylic Sheet" 
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
          <h1 className={styles.productTitle}>Cast Acrylic Sheets</h1>
          <p className={styles.productSubtitle}>Premium optical-grade cast acrylic sheets offering superior clarity, weatherability, and flawless fabrication.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 92% Light Transmission</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Perfect for Laser Cutting</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>3.0mm</span>
              <span className={styles.tag}>5.0mm</span>
              <span className={styles.tag}>10.0mm+</span>
            </div>
            <p className={styles.note}>*Custom thicknesses up to 50mm available for heavy-duty applications like aquariums.</p>
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
              <h3 className={styles.tabContentHeading}>The Gold Standard in Transparent Plastics</h3>
              <p>Cast Acrylic Sheets are manufactured by pouring liquid acrylic resin into glass molds. This premium cell-casting process results in a material that is structurally isotropic, meaning it has uniform properties in all directions. The result is unparalleled optical clarity that rivals traditional glass, but at half the weight and with up to 10 times the impact resistance.</p>
              <br/>
              <p>Unlike extruded acrylic, cast acrylic is the preferred choice for fabricators and designers. It melts beautifully during laser cutting (leaving clean, polished edges), routes effortlessly without gumming up CNC bits, and is highly resistant to crazing when exposed to solvents. It is also naturally UV stable, ensuring it will not yellow or degrade even after years of outdoor exposure.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>100% Virgin PMMA (Polymethyl Methacrylate)</td>
                  </tr>
                  <tr>
                    <th>Manufacturing Process</th>
                    <td>Cell Cast</td>
                  </tr>
                  <tr>
                    <th>Light Transmission</th>
                    <td>Up to 92% (for Clear sheets)</td>
                  </tr>
                  <tr>
                    <th>Fabrication Suitability</th>
                    <td>Excellent (Laser cutting, CNC routing, Thermoforming)</td>
                  </tr>
                  <tr>
                    <th>Weatherability</th>
                    <td>Highly UV Resistant (No yellowing)</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>Clear, Opal White, Black, Translucent & Opaque Colors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Premium Signage and Illuminated Light Boxes</li>
                <li>Point-of-Purchase (POP) Displays and Retail Fixtures</li>
                <li>Architectural Glazing and Safety Barriers</li>
                <li>Custom Aquariums and Terrariums</li>
                <li>Laser Cut Decorative Panels and Awards</li>
                <li>High-end Furniture and Display Cases</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}