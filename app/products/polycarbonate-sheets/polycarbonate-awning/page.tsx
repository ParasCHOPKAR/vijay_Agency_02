"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function PolycarbonateAwningPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Polycarbonate Awning
  const images = [
    "/product_page_images/Polycarbonate-Awning.jpg",
    // "/Polycarbonate-Sheets/Polycarbonate-Awning-02.jpg",
    // "/Polycarbonate-Sheets/Polycarbonate-Awning-03.jpg",
    // "/Polycarbonate-Sheets/Polycarbonate-Awning-04.jpg"
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Polycarbonate+Sheets">Polycarbonate Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Polycarbonate Awning</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Polycarbonate Awning" 
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
          <h1 className={styles.productTitle}>Polycarbonate Awning</h1>
          <p className={styles.productSubtitle}>Premium, weather-resistant polycarbonate awnings for elegant and durable outdoor protection.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% UV Protection</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> All-Weather Resistance</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Sheet Thickness (Solid/Compact)</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>3.0mm</span>
              <span className={styles.tag}>4.0mm</span>
            </div>
            <p className={styles.note}>*Available in customized depths and multi-bracket extended lengths.</p>
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
              <h3 className={styles.tabContentHeading}>Elegant Outdoor Protection</h3>
              <p>Our Polycarbonate Awnings provide the ultimate shield against rain, hail, and harsh UV rays while still allowing natural, diffused light to brighten your exterior spaces. Designed with a sleek, modern aesthetic, these awnings effortlessly enhance the architectural appeal of both residential and commercial buildings.</p>
              <br/>
              <p>Unlike traditional glass or fabric awnings, polycarbonate offers extreme impact resistance—it is practically unbreakable. Paired with high-strength engineering plastic or aluminum alloy brackets, these awnings are built to withstand heavy winds and extreme weather conditions without cracking, tearing, or fading over time.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Cover Material</th>
                    <td>Premium Solid Polycarbonate Sheet</td>
                  </tr>
                  <tr>
                    <th>Bracket Material</th>
                    <td>Engineering Plastic (UPVC) / Aluminum Alloy</td>
                  </tr>
                  <tr>
                    <th>Impact Resistance</th>
                    <td>250 times stronger than standard glass</td>
                  </tr>
                  <tr>
                    <th>Light Transmission</th>
                    <td>Up to 88% (Varies by tint)</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Co-extruded UV resistant layer on top surface</td>
                  </tr>
                  <tr>
                    <th>Available Tints</th>
                    <td>Clear, Bronze, Frosted, Blue, Grey</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Window and Door Canopies</li>
                <li>Commercial Storefronts and Entrances</li>
                <li>Patio, Balcony, and Deck Coverings</li>
                <li>Outdoor Air Conditioner / Equipment Shields</li>
                <li>Walkway and Pathway Overhangs</li>
                <li>ATM and Vending Machine Shelters</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}