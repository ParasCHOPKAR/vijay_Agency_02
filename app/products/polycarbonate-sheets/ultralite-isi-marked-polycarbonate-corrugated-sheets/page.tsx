"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function UltraliteCorrugatedPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Ultralite Corrugated Sheets
  const images = [
    "/product_page_images/Ultralite_01.jpg",
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Polycarbonate+Sheets">Polycarbonate Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Ultralite Corrugated Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Ultralite Corrugated Polycarbonate Sheet" 
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
          <h1 className={styles.productTitle}>Ultralite ISI Marked Polycarbonate Corrugated Sheets</h1>
          <p className={styles.productSubtitle}>Certified high-strength corrugated polycarbonate sheets designed for industrial and residential natural lighting.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> ISI Certified Quality</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> High Light Transmission</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>0.8mm</span>
              <span className={styles.tag}>1.0mm</span>
              <span className={styles.tag}>1.2mm</span>
              <span className={styles.tag}>1.5mm</span>
            </div>
            <p className={styles.note}>*Standard lengths available up to 6 meters. Profiles match standard GI/Asbestos sheets.</p>
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
              <h3 className={styles.tabContentHeading}>Certified Strength & Daylighting</h3>
              <p>Ultralite Polycarbonate Corrugated Sheets offer the perfect blend of structural strength and brilliant light transmission. As an ISI-marked product, these sheets guarantee strict adherence to national quality and safety standards, providing peace of mind for heavy-duty industrial and commercial roofing projects.</p>
              <br/>
              <p>Designed to perfectly match the profiles of standard metal or asbestos roofing sheets, they make it incredibly easy to integrate seamless skylights into your existing roof. The co-extruded UV protection layer prevents yellowing, brittleness, and degradation, ensuring long-lasting performance even under harsh weather conditions.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>Ultralite</td>
                  </tr>
                  <tr>
                    <th>Material</th>
                    <td>Premium Polycarbonate</td>
                  </tr>
                  <tr>
                    <th>Certification</th>
                    <td>ISI Marked</td>
                  </tr>
                  <tr>
                    <th>Profile</th>
                    <td>Corrugated (Matches standard metal/asbestos profiles)</td>
                  </tr>
                  <tr>
                    <th>Light Transmission</th>
                    <td>Up to 85% (Clear variant)</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Co-extruded UV resistant layer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Industrial Warehouse Skylights</li>
                <li>Factory Shed Roofing & Daylighting</li>
                <li>Agricultural Greenhouses</li>
                <li>Railway Station and Bus Shelter Canopies</li>
                <li>Residential Car Porches and Garages</li>
                <li>Covered Walkways and Passages</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}