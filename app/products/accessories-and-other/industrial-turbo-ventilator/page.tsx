"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function IndustrialTurboVentilatorPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Industrial Turbo Ventilator
  const images = [
    "/product_page_images/Industrial-turbo-ventilator.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Accessories">Accessories</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Industrial Turbo Ventilator</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Industrial Turbo Ventilator" 
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
          <h1 className={styles.productTitle}>Industrial Turbo Ventilators</h1>
          <p className={styles.productSubtitle}>Wind-driven, zero-power roof exhaust ventilators for efficient heat, smoke, and moisture extraction in large-scale facilities.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Zero Operating Cost</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Silent 24/7 Operation</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Throat Diameters</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>21 Inches</span>
              <span className={styles.tag}>24 Inches</span>
              <span className={styles.tag}>28 Inches</span>
              <span className={styles.tag}>32 Inches</span>
            </div>
            <p className={styles.note}>*Matching transparent FRP or Polycarbonate base plates available for all roof profiles.</p>
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
              <h3 className={styles.tabContentHeading}>Efficient, Eco-Friendly Ventilation</h3>
              <p>Industrial Turbo Ventilators are wind-operated exhaust fans that provide highly efficient, zero-cost ventilation for commercial and industrial buildings. They utilize the natural velocity of the wind and the temperature differential between the inside and outside of the building to continuously extract hot air, humidity, smoke, and harmful airborne fumes.</p>
              <br/>
              <p>Manufactured from premium aluminum alloy or stainless steel, these ventilators are incredibly lightweight yet durable enough to withstand extreme weather, heavy rain, and high wind speeds. Equipped with permanently lubricated, precision-sealed bearings, they operate silently and smoothly 24/7, requiring absolutely no electricity and virtually zero maintenance.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material Options</th>
                    <td>Aluminum Alloy / Stainless Steel (SS 304/202)</td>
                  </tr>
                  <tr>
                    <th>Power Source</th>
                    <td>100% Wind Driven (Zero Electricity Required)</td>
                  </tr>
                  <tr>
                    <th>Bearing Type</th>
                    <td>High-speed, self-lubricating ZZ sealed bearings</td>
                  </tr>
                  <tr>
                    <th>Weather Resistance</th>
                    <td>Rainproof, Rustproof, and Storm-resistant</td>
                  </tr>
                  <tr>
                    <th>Base Plate Options</th>
                    <td>FRP / Polycarbonate (Matched to roofing profile)</td>
                  </tr>
                  <tr>
                    <th>Vane Design</th>
                    <td>Aerodynamically curved blades for maximum exhaust</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Industrial Factory Sheds and Manufacturing Plants</li>
                <li>Large-Scale Warehouses and Godowns</li>
                <li>Chemical Storage Facilities and Boiler Rooms</li>
                <li>Commercial Kitchens and Food Processing Units</li>
                <li>Agricultural Sheds and Poultry Farms</li>
                <li>Indoor Sports Complexes and Auditoriums</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}