"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function LotusDiamondPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Lotus Diamond
  const images = [
    "/product_page_images/lotus-diamond-polycarbonate-rolls.jpg",
    // "/Polycarbonate-Sheets/Lotus-Diamond-02.jpg",
    // "/Polycarbonate-Sheets/Lotus-Diamond-03.jpg",
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Polycarbonate+Sheets">Polycarbonate Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Lotus Diamond Rolls</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Lotus Diamond Polycarbonate Roll" 
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
          <h1 className={styles.productTitle}>Lotus Diamond Polycarbonate Rolls</h1>
          <p className={styles.productSubtitle}>Elegant diamond-embossed continuous polycarbonate rolls for superior light diffusion and aesthetic appeal.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Excellent Light Diffusion</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High Impact Resistance</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>1.2mm</span>
              <span className={styles.tag}>1.5mm</span>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>2.5mm</span>
            </div>
            <p className={styles.note}>*Roll lengths range from 15m to 30m depending on thickness.</p>
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
              <h3 className={styles.tabContentHeading}>Aesthetic Brilliance & Glare Reduction</h3>
              <p>Lotus Diamond Polycarbonate rolls feature a unique, attractive diamond-embossed texture on the surface. This specialized texture is not just for visual appeal; it serves a crucial functional purpose by beautifully diffusing direct sunlight.</p>
              <br/>
              <p>Instead of harsh, direct beams of light, the diamond pattern scatters the rays, creating a soft, evenly lit environment below while completely eliminating glare. This makes it an exceptional choice for areas where comfort and natural lighting are both priorities.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>Lotus</td>
                  </tr>
                  <tr>
                    <th>Material</th>
                    <td>Premium Virgin Polycarbonate</td>
                  </tr>
                  <tr>
                    <th>Surface Texture</th>
                    <td>Diamond Embossed (Prismatic)</td>
                  </tr>
                  <tr>
                    <th>Standard Widths</th>
                    <td>1220mm, 1520mm, 2050mm</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Co-extruded UV resistant layer</td>
                  </tr>
                  <tr>
                    <th>Colors</th>
                    <td>Clear, Bronze, Blue, Green, Metallic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Decorative Pergolas and Patio Covers</li>
                <li>Architectural Skylights and Domes</li>
                <li>Indoor and Outdoor Privacy Partitions</li>
                <li>Swimming Pool Enclosures</li>
                <li>Shopping Mall Canopies</li>
                <li>Residential Balcony Coverings</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}