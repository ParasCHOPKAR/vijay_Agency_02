"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function FRPIndustrialRoofingPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for FRP Industrial Roofing Sheets
  const images = [
    "/product_page_images/frp-industrial-roofing-sheets.webp",
  
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=FRP+Roofing+Sheets">FRP Roofing Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>FRP Industrial Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="FRP Industrial Roofing Sheet" 
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
          <h1 className={styles.productTitle}>FRP Industrial Roofing Sheets</h1>
          <p className={styles.productSubtitle}>Heavy-duty, anti-corrosive fiberglass reinforced sheets designed for extreme industrial environments and natural daylighting.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Chemical & Acid Resistant</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Shatterproof Durability</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>1.5mm</span>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>2.5mm</span>
              <span className={styles.tag}>3.0mm</span>
            </div>
            <p className={styles.note}>*Profiles can be custom-matched to existing metal (GI) or asbestos roofing sheets.</p>
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
              <h3 className={styles.tabContentHeading}>The Ultimate Industrial Daylighting Solution</h3>
              <p>FRP (Fiberglass Reinforced Plastic) Industrial Roofing Sheets are the backbone of modern factory and warehouse construction. Manufactured using high-grade thermosetting resins and interwoven fiberglass, these translucent sheets are designed to be installed alongside metal roofing to allow abundant, diffused natural daylight into large industrial spaces, drastically reducing daytime electricity costs.</p>
              <br/>
              <p>Unlike traditional metal sheets, FRP is 100% rust-proof and highly resistant to corrosive industrial chemicals, acids, and alkaline fumes. This makes them exceptionally long-lasting, even in the harshest manufacturing environments or coastal areas. Furthermore, they are shatterproof and possess an incredibly high strength-to-weight ratio, ensuring the safety of workers below.</p>
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
                    <th>Profile Options</th>
                    <td>Corrugated, Trapezoidal (Matches standard GI/Asbestos)</td>
                  </tr>
                  <tr>
                    <th>Corrosion Resistance</th>
                    <td>High (Resistant to industrial chemicals and fumes)</td>
                  </tr>
                  <tr>
                    <th>Light Transmission</th>
                    <td>Translucent (Up to 85%) or Opaque options available</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Anti-UV weather film on top surface</td>
                  </tr>
                  <tr>
                    <th>Fire Rating</th>
                    <td>Fire-retardant grades available upon request</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Industrial Factory Sheds and Manufacturing Plants</li>
                <li>Chemical, Fertilizer, and Processing Facilities</li>
                <li>Large-Scale Warehouses and Distribution Centers</li>
                <li>Agricultural Sheds and Dairy Farms</li>
                <li>Coastal Industrial Buildings and Ports</li>
                <li>Natural Daylighting Skylights in Metal Roofs</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}