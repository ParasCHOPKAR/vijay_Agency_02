"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function LotusFrostedSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Lotus Frosted Sheets
  const images = [
    "/product_page_images/Lotus-PVC-greca-roofing-sheets.jpg",
  //   "/Polycarbonate-Sheets/Lotus-Frosted-02.jpg",
  //   "/Polycarbonate-Sheets/Lotus-Frosted-03.jpg",
  //   "/Polycarbonate-Sheets/Lotus-Frosted-04.jpg"
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Polycarbonate+Sheets">Polycarbonate Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Lotus Frosted Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Lotus Polycarbonate Frosted Sheet" 
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
          <h1 className={styles.productTitle}>Lotus Polycarbonate Frosted Sheets</h1>
          <p className={styles.productSubtitle}>Elegant frosted polycarbonate sheets providing excellent privacy and soft, diffused natural lighting.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Enhanced Privacy</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Soft Light Diffusion</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>1.5mm</span>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>3.0mm</span>
              <span className={styles.tag}>4.0mm</span>
            </div>
            <p className={styles.note}>*Available in standard sheet sizes. Custom cutting available upon request.</p>
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
              <h3 className={styles.tabContentHeading}>The Perfect Balance of Light and Privacy</h3>
              <p>Lotus Polycarbonate Frosted Sheets are engineered to provide an elegant, matte finish that obscures visibility while still allowing natural light to filter through. This makes them the ultimate material for applications where privacy is essential, but you don't want to sacrifice daytime illumination.</p>
              <br/>
              <p>The frosted surface scatters light rays, completely eliminating harsh glare and creating a comfortable, evenly lit environment. Despite their delicate appearance, these sheets retain the legendary durability of solid polycarbonate—they are virtually unbreakable, highly impact-resistant, and significantly lighter and safer than traditional frosted glass.</p>
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
                    <td>Solid Polycarbonate Resin</td>
                  </tr>
                  <tr>
                    <th>Surface Finish</th>
                    <td>Frosted / Matte / Sandblasted Texture</td>
                  </tr>
                  <tr>
                    <th>Light Transmission</th>
                    <td>Approx. 50% - 70% (Highly diffused)</td>
                  </tr>
                  <tr>
                    <th>Impact Strength</th>
                    <td>250 times stronger than glass</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Co-extruded UV layer to prevent yellowing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Office Partitions and Cubicle Screens</li>
                <li>Bathroom and Shower Enclosures</li>
                <li>Balcony Privacy Shields and Railing Panels</li>
                <li>Interior Decorative Glazing</li>
                <li>Diffused Skylights and False Ceilings</li>
                <li>Medical and Clinic Privacy Barriers</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}