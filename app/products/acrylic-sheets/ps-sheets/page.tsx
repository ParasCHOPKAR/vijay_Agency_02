"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function PSSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for PS Sheets
  const images = [
    "/product_page_images/PS-sheets.png",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Acrylic+Sheets">Acrylic Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>PS Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="PS Polystyrene Sheet" 
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
          <h1 className={styles.productTitle}>PS (Polystyrene) Sheets</h1>
          <p className={styles.productSubtitle}>Economical, lightweight, and versatile transparent sheets ideal for indoor glazing, displays, and decorative framing.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Highly Economical</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Lightweight & Rigid</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>1.0mm</span>
              <span className={styles.tag}>1.2mm</span>
              <span className={styles.tag}>1.5mm</span>
              <span className={styles.tag}>2.0mm</span>
            </div>
            <p className={styles.note}>*Available in clear, translucent, and various embossed textured patterns.</p>
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
              <h3 className={styles.tabContentHeading}>The Cost-Effective Glass Alternative</h3>
              <p>PS (Polystyrene) sheets offer a highly cost-effective alternative to acrylic and standard glass for indoor applications. While they share a similar transparent appearance to clear acrylic, PS sheets are exceptionally lightweight, easy to handle, and strictly designed for budget-conscious projects where high impact resistance and outdoor weatherability are not the primary concerns.</p>
              <br/>
              <p>These sheets are highly versatile and can be easily cut, routed, and glued. Because they do not splinter like glass, they are incredibly popular for picture framing as a safe, lightweight cover. Additionally, textured or embossed PS sheets are widely used for shower cubicles, room dividers, and interior decorative panels where privacy and light transmission are both needed.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>Polystyrene (PS)</td>
                  </tr>
                  <tr>
                    <th>Cost Efficiency</th>
                    <td>Very High (More economical than Acrylic/Polycarbonate)</td>
                  </tr>
                  <tr>
                    <th>Light Transmission</th>
                    <td>Approx. 88% (For clear sheets)</td>
                  </tr>
                  <tr>
                    <th>Suitability</th>
                    <td>Strictly Indoor Use (Non-UV Stable)</td>
                  </tr>
                  <tr>
                    <th>Fabrication</th>
                    <td>Easy to cut, saw, and drill</td>
                  </tr>
                  <tr>
                    <th>Available Finishes</th>
                    <td>Clear, Opaque, Embossed (Prismatic / Cracked Ice)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Picture and Poster Framing (Safe glass substitute)</li>
                <li>Shower Cubicle Screens and Enclosures</li>
                <li>Indoor Point-of-Purchase (POP) Displays</li>
                <li>Temporary Event Signage and Standees</li>
                <li>Interior Room Dividers and Privacy Partitions</li>
                <li>Architectural Model Making and Crafting</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}