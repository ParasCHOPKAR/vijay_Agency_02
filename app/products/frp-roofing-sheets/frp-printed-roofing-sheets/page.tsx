"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function FRPPrintedRoofingPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for FRP Printed Roofing Sheets
  const images = [
    "/product_page_images/FRP-printed-roofing-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=FRP+Roofing+Sheets">FRP Roofing Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>FRP Printed Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="FRP Printed Roofing Sheet" 
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
          <h1 className={styles.productTitle}>FRP Printed Roofing Sheets</h1>
          <p className={styles.productSubtitle}>Durable, light-transmitting fiberglass roofing sheets featuring attractive printed designs for decorative outdoor shading.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> UV Stabilized Prints</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High Impact Strength</span>
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
            <p className={styles.note}>*Available in corrugated, trapezoidal, or flat profiles to match your roofing structure.</p>
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
              <h3 className={styles.tabContentHeading}>Aesthetic Appeal with Industrial Durability</h3>
              <p>FRP (Fiberglass Reinforced Plastic) Printed Roofing Sheets offer the perfect combination of structural strength and decorative elegance. While standard FRP is highly valued for its shatter resistance and light diffusion, our printed sheets take it a step further by embedding beautiful, high-quality patterns—such as floral designs, geometric shapes, and abstract art—directly into the sheet.</p>
              <br/>
              <p>These sheets provide a pleasant, soft, diffused light while casting beautiful patterned shadows, making them ideal for lifestyle and residential outdoor areas. The prints are protected by a premium anti-UV topcoat, ensuring that the colors remain vibrant and do not fade, yellow, or peel even after years of direct exposure to harsh sunlight and heavy monsoon rains.</p>
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
                    <td>Embedded Decorative Print with UV Coating</td>
                  </tr>
                  <tr>
                    <th>Profile Options</th>
                    <td>Corrugated, Greca, or Flat sheets</td>
                  </tr>
                  <tr>
                    <th>Light Transmission</th>
                    <td>Translucent (Provides soft, diffused daylight)</td>
                  </tr>
                  <tr>
                    <th>Weatherability</th>
                    <td>100% Waterproof, Rust-proof, and Hail resistant</td>
                  </tr>
                  <tr>
                    <th>Design Options</th>
                    <td>Floral, Geometric, Leaves, Abstract, and Custom Prints</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Pergolas and Garden Gazebos</li>
                <li>Patio, Balcony, and Terrace Coverings</li>
                <li>Decorative Carports and Porch Awnings</li>
                <li>Outdoor Cafe and Restaurant Dining Areas</li>
                <li>Swimming Pool Shading Canopies</li>
                <li>Walkway and Pathway Shelters</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}