"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function PVCDecorativeTilesPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for PVC Decorative Tiles
  const images = [
    "/product_page_images/PVC-decorative-tiles-for-roof.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=PVC+Products">PVC Products</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>PVC Decorative Tiles</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="PVC Decorative Roof Tiles" 
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
          <h1 className={styles.productTitle}>PVC Decorative Roof Tiles</h1>
          <p className={styles.productSubtitle}>Lightweight, durable, and highly aesthetic polymer tiles that replicate traditional roofing without the heavy maintenance.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> UV & Weather Resistant</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Lightweight & Easy Install</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>2.5mm</span>
              <span className={styles.tag}>3.0mm</span>
            </div>
            <p className={styles.note}>*Supplied in continuous sheet lengths to minimize overlaps and prevent leaks.</p>
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
              <h3 className={styles.tabContentHeading}>Traditional Beauty, Modern Performance</h3>
              <p>Upgrade your roof's aesthetics with our PVC decorative roof tiles. Engineered from advanced unplasticized polyvinyl chloride (uPVC), these roofing sheets beautifully mimic the classic, elegant look of traditional terracotta or ceramic Spanish tiles, but bring the incredible durability and convenience of modern polymers.</p>
              <br/>
              <p>Unlike traditional clay tiles, PVC decorative tiles are virtually unbreakable. They will not crack under impact, absorb water, or grow moss and algae over time. Furthermore, they are remarkably lightweight, which significantly reduces the structural load on your building and makes the installation process much faster and more cost-effective.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>High-grade uPVC (Unplasticized PVC)</td>
                  </tr>
                  <tr>
                    <th>Profile Design</th>
                    <td>Spanish / Roma Tile Appearance</td>
                  </tr>
                  <tr>
                    <th>Corrosion Resistance</th>
                    <td>100% Rust and Corrosion Free</td>
                  </tr>
                  <tr>
                    <th>Thermal Insulation</th>
                    <td>Excellent (Reduces indoor heat transmission)</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Anti-UV coated top layer to prevent fading</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>Terracotta / Brick Red, Grey, Blue, Green</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Villas and Bungalows</li>
                <li>Farmhouses and Country Resorts</li>
                <li>Gazebos, Pergolas, and Outdoor Patios</li>
                <li>Commercial Sloping Roofs and Facades</li>
                <li>Out-houses and Garden Sheds</li>
                <li>Theme Parks and Tourist Attractions</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}