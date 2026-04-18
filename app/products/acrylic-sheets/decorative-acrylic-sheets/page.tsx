"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function DecorativeAcrylicSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Decorative Acrylic Sheets
  const images = [
    "/product_page_images/Decorative-Acrylic-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Acrylic+Sheets">Acrylic Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Decorative Acrylic</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Decorative Acrylic Sheet" 
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
          <h1 className={styles.productTitle}>Decorative Acrylic Sheets</h1>
          <p className={styles.productSubtitle}>Stunning, premium acrylic sheets featuring unique patterns, textures, and embedded designs for high-end aesthetic applications.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> High Visual Impact</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Perfect for Backlighting</span>
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
            <p className={styles.note}>*Thickness may vary slightly depending on the embedded texture or pattern.</p>
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
              <h3 className={styles.tabContentHeading}>Limitless Design Possibilities</h3>
              <p>Decorative Acrylic Sheets are the ultimate material for architects, interior designers, and creative fabricators. These specialty sheets go beyond standard clear or colored acrylic by incorporating breathtaking visual effects—such as marble swirls, pearlescent shimmers, metallic glitters, frosted textures, and even embedded natural elements like leaves or fabrics.</p>
              <br/>
              <p>While they offer the luxurious appearance of heavy stone, stained glass, or exotic materials, they retain all the incredible benefits of acrylic. They are highly shatter-resistant, weigh half as much as glass, and can be effortlessly laser-cut, drilled, and thermoformed. Many of these decorative patterns are translucent, making them absolutely spectacular when illuminated from behind (backlit) in bar fronts, retail displays, and feature walls.</p>
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
                    <th>Available Finishes</th>
                    <td>Marble, Pearl, Metallic, Glitter, Tortoiseshell, Patterned</td>
                  </tr>
                  <tr>
                    <th>Light Properties</th>
                    <td>Opaque, Translucent, and Transparent options</td>
                  </tr>
                  <tr>
                    <th>Fabrication Suitability</th>
                    <td>Excellent (Laser cutting, CNC routing, Heat bending)</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>50% lighter than standard glass</td>
                  </tr>
                  <tr>
                    <th>Impact Resistance</th>
                    <td>High (Significantly stronger than glass)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Luxury Interior Wall Cladding and Feature Panels</li>
                <li>Backlit Bar Fronts, Counters, and Reception Desks</li>
                <li>High-end Retail Displays and Cosmetic Stands</li>
                <li>Custom Lighting Fixtures and Lamp Shades</li>
                <li>Boutique Signage and Laser-Cut Lettering</li>
                <li>Jewelry, Crafting, and Decorative Furniture Accents</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}