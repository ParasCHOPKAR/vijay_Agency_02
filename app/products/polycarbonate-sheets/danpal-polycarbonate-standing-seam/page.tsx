"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function DanpalStandingSeamPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Danpal Standing Seam
  const images = [
    "/Polycarbonate-Sheets/Danpal-Standing-Seam-01.jpg",
    "/Polycarbonate-Sheets/Danpal-Standing-Seam-02.jpg",
    "/Polycarbonate-Sheets/Danpal-Standing-Seam-03.jpg",
    "/Polycarbonate-Sheets/Danpal-Standing-Seam-04.jpg"
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Polycarbonate+Sheets">Polycarbonate Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Danpal Standing Seam</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Danpal Polycarbonate Standing Seam System" 
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
          <h1 className={styles.productTitle}>Danpal Polycarbonate Standing Seam</h1>
          <p className={styles.productSubtitle}>Premium architectural daylighting system featuring 100% leakproof standing seam connections and superior thermal insulation.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Leakproof System</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Microcell Technology</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness (Microcell Panels)</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>10mm</span>
              <span className={styles.tag}>12mm</span>
              <span className={styles.tag}>16mm</span>
              <span className={styles.tag}>22mm</span>
            </div>
            <p className={styles.note}>*Panels are custom-cut to length for seamless architectural spans.</p>
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
              <h3 className={styles.tabContentHeading}>The Ultimate Architectural Daylighting Solution</h3>
              <p>The Danpal Polycarbonate Standing Seam system is a dry-glazed, interlocking architectural system designed for maximum weather resistance and aesthetic brilliance. Unlike traditional screwed-down sheets, the standing seam utilizes a snap-on connector that conceals and protects the fasteners, resulting in a 100% leakproof roof or facade.</p>
              <br/>
              <p>At the core of this system is Danpal's renowned Microcell technology. The tightly spaced internal ribbing within the panels delivers exceptional thermal insulation, high impact resistance, and an even, glare-free diffusion of natural light. This makes it the premier choice for architects designing energy-efficient, visually striking commercial and public spaces.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>Danpal</td>
                  </tr>
                  <tr>
                    <th>Material Structure</th>
                    <td>Microcell Polycarbonate</td>
                  </tr>
                  <tr>
                    <th>Installation System</th>
                    <td>Standing Seam (Snap-on interlocking connectors)</td>
                  </tr>
                  <tr>
                    <th>Standard Panel Widths</th>
                    <td>600mm, 900mm, 1040mm</td>
                  </tr>
                  <tr>
                    <th>Thermal Insulation (U-Value)</th>
                    <td>Excellent (Varies by panel thickness)</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Co-extruded UV layer (Double-sided available)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Stadiums and Sports Arena Roofing</li>
                <li>Airport Terminals and Transit Hubs</li>
                <li>Commercial Building Facades and Cladding</li>
                <li>Large Architectural Skylights</li>
                <li>Premium Shopping Mall Walkways</li>
                <li>Educational and Healthcare Facilities</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}