"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function PrecoatedTileRoofSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Precoated Tile Roof Sheets
  const images = [
    "/product_page_images/Precoated-tile-roof-sheets.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Precoated Tile Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Precoated Tile Profile Roofing Sheet" 
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
          <h1 className={styles.productTitle}>Precoated Tile Roof Sheets</h1>
          <p className={styles.productSubtitle}>Premium color-coated steel roofing sheets designed with a traditional Spanish tile profile for aesthetic elegance and modern durability.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Anti-Corrosive Coating</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Traditional Tile Aesthetic</span>
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
            <p className={styles.note}>*Manufactured to custom lengths to eliminate vertical overlaps and prevent water leakage.</p>
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
              <h3 className={styles.tabContentHeading}>Classic Beauty Meets Industrial Strength</h3>
              <p>Precoated Tile Roof Sheets (often referred to as step-tile or Spanish tile profile sheets) offer the stunning, classic appearance of traditional clay or terracotta roof tiles without any of the structural drawbacks. Manufactured from high-tensile pre-painted galvanized iron (PPGI) or galvalume (PPGL), these sheets are incredibly lightweight, significantly reducing the load-bearing requirements of your roof truss.</p>
              <br/>
              <p>Unlike real clay tiles that can crack, absorb water, or grow moss over time, our precoated steel sheets provide a 100% waterproof, maintenance-free barrier. The multi-layered protective paint system ensures excellent resistance against peeling, fading, and rust, keeping your roof looking brand new even under harsh UV rays and heavy monsoon downpours.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Base Material</th>
                    <td>Pre-Painted Galvanized Iron (PPGI) or Galvalume (PPGL)</td>
                  </tr>
                  <tr>
                    <th>Profile Type</th>
                    <td>Step Tile / Spanish Roma Tile</td>
                  </tr>
                  <tr>
                    <th>Paint System</th>
                    <td>Regular Modified Polyester (RMP) or SMP / PVDF</td>
                  </tr>
                  <tr>
                    <th>Overall Width</th>
                    <td>Typically 1060mm (Cover width: 960mm)</td>
                  </tr>
                  <tr>
                    <th>Weatherability</th>
                    <td>High UV resistance and Anti-Fungal properties</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>Terracotta Red, Brick Red, Caulfield Green, Royal Blue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Villas, Bungalows, and Row Houses</li>
                <li>Farmhouses, Country Resorts, and Theme Parks</li>
                <li>Gazebos, Pergolas, and Outdoor Patios</li>
                <li>Commercial Buildings requiring a premium sloped roof</li>
                <li>Out-houses, Garages, and Security Cabins</li>
                <li>Upgrading old asbestos or flat metal roofs with a modern finish</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}