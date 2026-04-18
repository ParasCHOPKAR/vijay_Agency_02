"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function AlabasterDecorativeSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Alabaster Decorative Sheets
  const images = [
    "/product_page_images/alabaster-decorative-sheets.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Acrylic+Sheets">Acrylic Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Alabaster Decorative Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Alabaster Decorative Sheet" 
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
          <h1 className={styles.productTitle}>Alabaster Decorative Sheets</h1>
          <p className={styles.productSubtitle}>Exquisite, lightweight faux-alabaster acrylic sheets designed for elegant lighting diffusers and sophisticated interior spaces.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Soft Light Diffusion</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Lightweight & Durable</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>3.0mm</span>
              <span className={styles.tag}>4.0mm</span>
              <span className={styles.tag}>5.0mm</span>
            </div>
            <p className={styles.note}>*Custom thicknesses and panel sizes available for large architectural projects.</p>
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
              <h3 className={styles.tabContentHeading}>The Warmth of Natural Stone, Perfected</h3>
              <p>Alabaster Decorative Sheets capture the soft, milky, and gently clouded appearance of natural alabaster stone. These premium acrylic sheets are specifically formulated to diffuse light beautifully, eliminating harsh LED hot-spots and creating a warm, inviting glow that elevates any interior environment.</p>
              <br/>
              <p>Unlike real alabaster, which is fragile, incredibly heavy, and extremely difficult to work with, our faux-alabaster acrylic provides immense design freedom. It is highly shatter-resistant, weighs a fraction of natural stone, and can be easily thermoformed into curved lighting diffusers, seamless columns, or routed for custom architectural installations. It is the perfect blend of classical aesthetics and modern material engineering.</p>
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
                    <td>Smooth / Faux Alabaster (Cloudy & Milky Textures)</td>
                  </tr>
                  <tr>
                    <th>Light Properties</th>
                    <td>Excellent Diffusion (Eliminates LED hot-spots)</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>Significantly lighter than real alabaster or glass</td>
                  </tr>
                  <tr>
                    <th>Fabrication</th>
                    <td>Highly thermoformable, easy to CNC route and cut</td>
                  </tr>
                  <tr>
                    <th>Pattern Consistency</th>
                    <td>Organic cloudy swirls imitating natural stone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Custom Lighting Fixtures, Chandeliers, and Sconces</li>
                <li>Backlit Ceiling Panels and Dropped Ceilings</li>
                <li>Illuminated Columns and Architectural Pillars</li>
                <li>Premium Hotel, Restaurant, and Casino Interiors</li>
                <li>Translucent Room Dividers and Sliding Doors</li>
                <li>Decorative Wall Panels and Backsplash Accents</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}