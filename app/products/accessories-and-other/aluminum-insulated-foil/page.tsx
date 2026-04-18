"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function AluminumInsulatedFoilPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Aluminum Insulated Foil
  const images = [
    "/product_page_images/Aluminum-insulated-foil.webp",
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Accessories">Accessories</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Aluminum Insulated Foil</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Aluminum Insulated Foil Thermal Barrier" 
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
          <h1 className={styles.productTitle}>Aluminum Insulated Foil</h1>
          <p className={styles.productSubtitle}>High-performance reflective thermal insulation designed to block radiant heat, prevent condensation, and drastically reduce energy costs.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 97% Radiant Heat Reflection</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> 100% Moisture & Vapor Barrier</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Core Types & Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>4mm Single Bubble</span>
              <span className={styles.tag}>8mm Double Bubble</span>
              <span className={styles.tag}>XLPE Foam Core</span>
              <span className={styles.tag}>Woven Poly Backed</span>
            </div>
            <p className={styles.note}>*Supplied in standard 1.2m wide rolls. Custom lengths available for large industrial projects.</p>
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
              <h3 className={styles.tabContentHeading}>The Ultimate Thermal and Vapor Shield</h3>
              <p>Metal and standard industrial roofs absorb a massive amount of solar radiation, transferring uncomfortable heat into the building and driving up air conditioning costs. Aluminum Insulated Foil is the most efficient and cost-effective solution to this problem. Featuring a highly polished pure aluminum surface, it acts as a mirror to reflect up to 97% of the sun's radiant heat away from your structure.</p>
              <br/>
              <p>Beneath the reflective surface lies an insulating core—typically trapped air bubbles or high-density XLPE foam—which halts conductive heat transfer. This dual-action design not only keeps interiors significantly cooler in the summer and warmer in the winter but also functions as an impenetrable vapor barrier. It completely stops roof condensation and sweating, protecting your valuable inventory, machinery, and ceiling panels from water damage.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Surface Material</th>
                    <td>Pure Aluminum Foil (Single or Double Sided)</td>
                  </tr>
                  <tr>
                    <th>Core Options</th>
                    <td>Polyethylene (PE) Air Bubble or XLPE Foam</td>
                  </tr>
                  <tr>
                    <th>Thermal Reflectivity</th>
                    <td>95% - 97%</td>
                  </tr>
                  <tr>
                    <th>Emissivity</th>
                    <td>0.03 - 0.05</td>
                  </tr>
                  <tr>
                    <th>Fire Rating</th>
                    <td>Fire Retardant (Class A / Class 1) available</td>
                  </tr>
                  <tr>
                    <th>Standard Roll Dimensions</th>
                    <td>1.2m Width x 40m/50m Length</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Under Metal Decking and GI Roofing Sheets</li>
                <li>Industrial Factory Sheds and Warehouses</li>
                <li>Poultry Farms and Agricultural Barns</li>
                <li>HVAC Duct Insulation and Cold Storage Facilities</li>
                <li>Residential Attics, Walls, and Crawl Spaces</li>
                <li>Pre-Engineered Buildings (PEB) Thermal Wrapping</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}