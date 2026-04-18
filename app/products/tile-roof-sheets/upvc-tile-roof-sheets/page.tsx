"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function UPVCTileRoofSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for UPVC Tile Roof Sheets
  const images = [
    "/product_page_images/UPVC-ile-roof-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=PVC+Products">PVC Products</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>UPVC Tile Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="UPVC Tile Profile Roofing Sheet" 
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
          <h1 className={styles.productTitle}>UPVC Tile Roof Sheets</h1>
          <p className={styles.productSubtitle}>High-performance, multi-layered UPVC roofing sheets featuring a traditional step-tile profile for superior thermal insulation and classic aesthetics.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Excellent Heat & Sound Insulation</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> 100% Rust & Corrosion Proof</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>2.5mm</span>
              <span className={styles.tag}>3.0mm</span>
            </div>
            <p className={styles.note}>*Manufactured in custom lengths to minimize overlapping and guarantee a leak-proof roof.</p>
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
              <h3 className={styles.tabContentHeading}>The Smart Upgrade from Metal Roofing</h3>
              <p>UPVC (Unplasticized Polyvinyl Chloride) Tile Roof Sheets represent a massive leap forward in roofing technology. While they perfectly replicate the beautiful, undulating look of traditional Spanish clay tiles, their multi-layer polymer construction solves the two biggest problems of standard metal roofing: extreme heat absorption and deafening noise during heavy rain.</p>
              <br/>
              <p>The dense UPVC core acts as a highly effective thermal barrier, keeping building interiors significantly cooler in the summer without the need for additional under-roof insulation. Furthermore, because these sheets contain zero metal, they are entirely immune to rust, salt-water corrosion, and chemical degradation, making them an exceptionally durable choice for coastal properties and industrial environments.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material Structure</th>
                    <td>Multi-layer Co-extruded UPVC</td>
                  </tr>
                  <tr>
                    <th>Profile Type</th>
                    <td>Step Tile / Classic Roma Tile</td>
                  </tr>
                  <tr>
                    <th>Thermal Insulation</th>
                    <td>Excellent (Significantly lowers indoor temperature)</td>
                  </tr>
                  <tr>
                    <th>Acoustic Insulation</th>
                    <td>High (Reduces rain impact noise by up to 30dB)</td>
                  </tr>
                  <tr>
                    <th>Fire Resistance</th>
                    <td>B1 Grade (Self-extinguishing, flame retardant)</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>Terracotta Red, Brick Red, Grey, Blue, Green</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Homes, Villas, and Row Houses</li>
                <li>Coastal Properties and Beach Resorts</li>
                <li>Farmhouses, Gazebos, and Garden Patios</li>
                <li>Commercial Buildings with Sloping Architectural Roofs</li>
                <li>Sound-sensitive areas requiring quiet roofing solutions</li>
                <li>Chemical-prone environments where metal roofs fail</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}