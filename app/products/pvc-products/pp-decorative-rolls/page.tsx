"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function PPDecorativeRollsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for PP Decorative Rolls
  const images = [
    "/product_page_images/PP-decorative-rolls.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=PVC+Products">PVC Products</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>PP Decorative Rolls</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="PP Decorative Roll" 
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
          <h1 className={styles.productTitle}>PP Decorative Rolls</h1>
          <p className={styles.productSubtitle}>Eco-friendly Polypropylene (PP) rolls offering superior flexibility, moisture resistance, and high-end decorative finishes.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Recyclable</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High Chemical Resistance</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Widths & Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>0.5mm</span>
              <span className={styles.tag}>1.0mm</span>
              <span className={styles.tag}>1220mm Width</span>
              <span className={styles.tag}>Custom Lengths</span>
            </div>
            <p className={styles.note}>*Roll form allows for seamless application over large curved or flat surfaces.</p>
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
              <h3 className={styles.tabContentHeading}>Eco-Friendly Surface Innovation</h3>
              <p>PP (Polypropylene) Decorative Rolls are the modern choice for environmentally conscious designers and builders. Unlike traditional PVC, PP is 100% recyclable and chlorine-free, making it a sustainable alternative for surface finishing. These rolls are known for their exceptional flexibility, allowing them to wrap perfectly around sharp corners and complex curves.</p>
              <br/>
              <p>The surface of these rolls is treated with high-definition decorative prints and textures that replicate wood, stone, and metallic finishes with incredible realism. They are highly resistant to chemicals, moisture, and impact, ensuring that your decorative surfaces remain vibrant and undamaged even in high-traffic commercial environments.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>Premium Polypropylene (PP)</td>
                  </tr>
                  <tr>
                    <th>Environmental Profile</th>
                    <td>Chlorine-free, 100% Recyclable, Eco-friendly</td>
                  </tr>
                  <tr>
                    <th>Flexibility</th>
                    <td>High (Ideal for edge banding and wrapping)</td>
                  </tr>
                  <tr>
                    <th>Surface Resistance</th>
                    <td>Excellent against water, oil, and household chemicals</td>
                  </tr>
                  <tr>
                    <th>Texture Options</th>
                    <td>Matte, Glossy, Embossed Woodgrain, Metallic</td>
                  </tr>
                  <tr>
                    <th>Standard Width</th>
                    <td>1220mm (Custom widths available on bulk order)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Furniture Lamination and Edge Banding</li>
                <li>Kitchen Cabinet and Wardrobe Finishing</li>
                <li>Commercial Wall Paneling and Partitions</li>
                <li>Interior Door Skin Covering</li>
                <li>Modular Office Workstations</li>
                <li>Exhibition Display Stands and Booths</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}