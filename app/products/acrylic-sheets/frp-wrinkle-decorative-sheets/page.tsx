"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function FRPWrinkleSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for FRP Wrinkle Decorative Sheets
  const images = [
    "/product_page_images/frp-wrinkle-decorative-sheets.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Acrylic+Sheets">Acrylic Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>FRP Wrinkle Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="FRP Wrinkle Decorative Sheet" 
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
          <h1 className={styles.productTitle}>FRP Wrinkle Decorative Sheets</h1>
          <p className={styles.productSubtitle}>Highly durable fiberglass-reinforced panels featuring a unique wrinkle-textured finish for decorative and heavy-duty protective applications.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Extreme Impact Strength</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Scratch-Concealing Texture</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>1.0mm</span>
              <span className={styles.tag}>1.5mm</span>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>3.0mm</span>
            </div>
            <p className={styles.note}>*Available in customized sizes and various opaque or translucent colors.</p>
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
              <h3 className={styles.tabContentHeading}>Industrial Strength Meets Aesthetic Design</h3>
              <p>FRP (Fiberglass Reinforced Plastic) Wrinkle Decorative Sheets combine extreme industrial-grade toughness with an attractive, textured surface. The distinct "wrinkle" or crinkled finish not only provides a unique, tactile aesthetic appeal but also serves a highly practical purpose—it expertly hides scratches, scuffs, and daily wear-and-tear.</p>
              <br/>
              <p>Because they are reinforced with interwoven fiberglass, these sheets are practically indestructible. They will not dent, rust, rot, or corrode, making them vastly superior to wood or metal panels in harsh environments. They are highly washable, sanitary, and moisture-resistant, making them the ultimate cladding choice for high-traffic commercial areas, decorative door skins, and exterior fascias.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>Fiberglass Reinforced Plastic (FRP)</td>
                  </tr>
                  <tr>
                    <th>Surface Finish</th>
                    <td>Wrinkle / Crinkle / Pebble Texture</td>
                  </tr>
                  <tr>
                    <th>Durability</th>
                    <td>Shatterproof, High Impact & Tear Resistance</td>
                  </tr>
                  <tr>
                    <th>Moisture Resistance</th>
                    <td>100% Waterproof, Rot and Mold Resistant</td>
                  </tr>
                  <tr>
                    <th>Maintenance</th>
                    <td>Easy to clean; texture hides fingerprints & scratches</td>
                  </tr>
                  <tr>
                    <th>Color Options</th>
                    <td>Various Opaque and Translucent colors available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Decorative Door Skins and Entryway Panels</li>
                <li>Wall Cladding for High-Traffic Corridors (Hospitals, Schools)</li>
                <li>Commercial Kitchens and Food Processing Areas</li>
                <li>Public Restrooms and Washroom Partitions</li>
                <li>Exterior Fascias and Weather-Resistant Signage</li>
                <li>Protective Wainscoting for Warehouses and Lobbies</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

