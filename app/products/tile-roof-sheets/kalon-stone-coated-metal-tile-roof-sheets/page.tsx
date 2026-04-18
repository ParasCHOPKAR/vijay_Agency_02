"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function KalonStoneCoatedRoofPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Kalon Stone Coated Roof Sheets
  const images = [
    "/product_page_images/Kalon-Stone-coated-Metal-tile-roof-sheets.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Kalon Stone Coated Tiles</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Kalon Stone Coated Metal Roof Tile" 
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
          <h1 className={styles.productTitle}>Kalon Stone Coated Metal Roof Tiles</h1>
          <p className={styles.productSubtitle}>Luxury architectural roofing that combines the timeless beauty of natural stone and clay with the hurricane-grade strength of Galvalume steel.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Extreme Weather Resistance</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Rain Noise Dampening</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Architectural Profiles</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>Classic Bond</span>
              <span className={styles.tag}>Roman Tile</span>
              <span className={styles.tag}>Wood Shake</span>
              <span className={styles.tag}>Modern Shingle</span>
            </div>
            <p className={styles.note}>*Interlocking modular panel design ensures zero wind uplift and seamless, leak-proof installation.</p>
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
              <h3 className={styles.tabContentHeading}>The Ultimate Roofing Masterpiece</h3>
              <p>Kalon Stone Coated Metal Roof Tiles are engineered for homeowners and architects who refuse to compromise on either aesthetics or performance. At the core of every tile is a structural sheet of high-tensile Galvalume steel (Zinc-Aluminum alloy), providing unmatched rust protection. This core is then coated with an acrylic resin, embedded with natural, UV-resistant basalt stone chips, and sealed with a clear acrylic overglaze.</p>
              <br/>
              <p>This multi-layered construction solves the two biggest issues with traditional metal roofs: industrial aesthetics and rain noise. The textured stone surface acts as a natural sound damper, making it whisper-quiet during heavy monsoons. Furthermore, weighing only about 1.5 lbs per square foot, it is incredibly lightweight, requiring far less structural framing than heavy clay or concrete tiles while easily withstanding Category 5 hurricane winds, heavy hail, and fire.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>Kalon</td>
                  </tr>
                  <tr>
                    <th>Core Material</th>
                    <td>High-Tensile Galvalume® Steel (Al-Zn Alloy)</td>
                  </tr>
                  <tr>
                    <th>Surface Finish</th>
                    <td>Natural Basalt Stone Chips bonded with Acrylic Resin</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>Lightweight (Approx. 6.0 - 6.5 kg per sq. meter)</td>
                  </tr>
                  <tr>
                    <th>Acoustic Performance</th>
                    <td>Excellent (Stone texture absorbs and dampens rain noise)</td>
                  </tr>
                  <tr>
                    <th>Weather Resistance</th>
                    <td>Class 4 Hail Impact, Class A Fire Rating, 200+ km/h Wind Resistance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Luxury Villas, Mansions, and High-End Residential Estates</li>
                <li>Premium Resorts, Hotels, and Hospitality Projects</li>
                <li>Retrofitting and Reroofing over old asphalt shingles</li>
                <li>Gazebos, Farmhouses, and High-Pitch Architectural Roofs</li>
                <li>Coastal properties requiring extreme salt-spray rust protection</li>
                <li>Areas prone to heavy hail, high winds, or wildfires</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}