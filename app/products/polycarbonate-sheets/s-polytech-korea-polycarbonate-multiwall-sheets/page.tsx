"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function SPolytechMultiwallPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for S Polytech Multiwall Sheets
  const images = [
    "/product_page_images/s-_01polytech-korea-multiwall-polycarbonate-sheets.webp"
    // "/Polycarbonate-Sheets/S-Polytech-Multiwall-02.jpg",
    // "/Polycarbonate-Sheets/S-Polytech-Multiwall-03.jpg",
    // "/Polycarbonate-Sheets/S-Polytech-Multiwall-04.jpg"
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Polycarbonate+Sheets">Polycarbonate Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>S Polytech Multiwall Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="S Polytech Multiwall Polycarbonate Sheet" 
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
          <h1 className={styles.productTitle}>S Polytech (Korea) Polycarbonate Multiwall Sheets</h1>
          <p className={styles.productSubtitle}>Lightweight, high-impact cellular polycarbonate sheets delivering exceptional thermal insulation and diffused daylighting.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> High Thermal Insulation</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Ultra Lightweight</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>4.0mm</span>
              <span className={styles.tag}>6.0mm</span>
              <span className={styles.tag}>10.0mm</span>
              <span className={styles.tag}>16.0mm</span>
            </div>
            <p className={styles.note}>*Available in Twin-wall and Triple-wall hollow structures depending on thickness.</p>
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
              <h3 className={styles.tabContentHeading}>Advanced Hollow Cellular Structure</h3>
              <p>S Polytech Multiwall Polycarbonate sheets feature a brilliant cellular structure with hollow air spaces inside. Originating from South Korea's advanced manufacturing facilities, this multi-layered design traps air, providing outstanding thermal insulation that keeps spaces cooler in the summer and warmer in the winter.</p>
              <br/>
              <p>Despite their incredible impact resistance and rigidity, these sheets are remarkably lightweight. This makes them incredibly easy to transport, handle, and install over large structural spans without requiring heavy, expensive supporting frameworks. Combined with a co-extruded UV-protective layer, they are guaranteed to resist yellowing and weathering for years.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>S Polytech (South Korea)</td>
                  </tr>
                  <tr>
                    <th>Material</th>
                    <td>Premium Virgin Polycarbonate Resin</td>
                  </tr>
                  <tr>
                    <th>Internal Structure</th>
                    <td>Twin-wall / Triple-wall (Cellular)</td>
                  </tr>
                  <tr>
                    <th>Standard Widths</th>
                    <td>1220mm, 2100mm</td>
                  </tr>
                  <tr>
                    <th>Standard Lengths</th>
                    <td>5.8 meters, 11.8 meters</td>
                  </tr>
                  <tr>
                    <th>Colors</th>
                    <td>Clear, Bronze, Blue, Green, Opal White</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Greenhouses and Agricultural Roofing</li>
                <li>Commercial and Industrial Skylights</li>
                <li>Walkway Canopies and Pergolas</li>
                <li>Swimming Pool Enclosures</li>
                <li>Interior Soundproof Partitions and False Ceilings</li>
                <li>Advertising Signage and Display Boards</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}