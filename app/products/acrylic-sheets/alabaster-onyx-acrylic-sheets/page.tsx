"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function AlabasterOnyxAcrylicPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Alabaster Onyx Acrylic Sheets
  const images = [
    "/product_page_images/Alabaster-onyx-Acrylic-sheets.jpg",
 
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Acrylic+Sheets">Acrylic Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Alabaster Onyx Acrylic</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Alabaster Onyx Acrylic Sheet" 
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
          <h1 className={styles.productTitle}>Alabaster Onyx Acrylic Sheets</h1>
          <p className={styles.productSubtitle}>Luxurious, translucent acrylic sheets that perfectly replicate the breathtaking beauty of natural alabaster and onyx stone.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Stunning Faux Stone</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Perfect for Backlighting</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>3.0mm</span>
              <span className={styles.tag}>5.0mm</span>
              <span className={styles.tag}>8.0mm</span>
              <span className={styles.tag}>10.0mm</span>
            </div>
            <p className={styles.note}>*Pattern variations are unique to each sheet, closely mimicking natural stone veining.</p>
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
              <h3 className={styles.tabContentHeading}>The Elegance of Stone, The Versatility of Acrylic</h3>
              <p>Alabaster Onyx Acrylic Sheets offer a brilliant architectural solution for designers who desire the rich, opulent look of natural exotic stones without the exorbitant cost, extreme weight, and structural limitations of real marble or onyx. Each sheet is beautifully crafted with organic-looking veins and swirls that make every piece truly unique.</p>
              <br/>
              <p>The true magic of these sheets is revealed when they are backlit. Because they are highly translucent, placing LED lighting behind them brings the deep, warm textures to life, creating a spectacular, glowing focal point. Furthermore, unlike real stone, this acrylic can be easily cut, curved, drilled, and fabricated to fit curved bar fronts, custom lighting fixtures, and complex interior structures.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>Premium Polymethyl Methacrylate (PMMA)</td>
                  </tr>
                  <tr>
                    <th>Surface Finish</th>
                    <td>Glossy / Faux Stone (Alabaster & Onyx variants)</td>
                  </tr>
                  <tr>
                    <th>Light Properties</th>
                    <td>Highly Translucent (Designed for backlighting)</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>Significantly lighter than real stone or glass</td>
                  </tr>
                  <tr>
                    <th>Fabrication</th>
                    <td>Can be thermoformed, routed, and laser-cut</td>
                  </tr>
                  <tr>
                    <th>Pattern Consistency</th>
                    <td>Organic and randomized (mimics nature)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Backlit Bar Counters and Reception Desks</li>
                <li>Luxury Hotel and Restaurant Feature Walls</li>
                <li>Custom High-End Lighting Fixtures and Sconces</li>
                <li>Elevator Cab Interiors and Premium Signage</li>
                <li>Retail Display Pedestals and Cosmetic Counters</li>
                <li>Decorative Room Dividers and Privacy Screens</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}