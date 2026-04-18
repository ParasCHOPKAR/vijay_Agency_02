"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function ParePVCPanelPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Pare PVC Panels
  const images = [
    "/product_page_images/Acrylic-mirror-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=PVC+Products">PVC Products</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Pare PVC Panels</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Pare Premium PVC Panel" 
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
          <h1 className={styles.productTitle}>Pare PVC Panels</h1>
          <p className={styles.productSubtitle}>High-quality, stylish PVC panels for modern interiors, offering exceptional durability and moisture resistance.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Moisture Proof</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Quick Interlocking Assembly</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Widths & Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>8mm Thick</span>
              <span className={styles.tag}>10mm Thick</span>
              <span className={styles.tag}>250mm Width</span>
              <span className={styles.tag}>300mm Width</span>
            </div>
            <p className={styles.note}>*Standard lengths are 10ft (approx 3.0m). Custom cuts may be available upon request.</p>
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
              <h3 className={styles.tabContentHeading}>Modern Aesthetics meets Durability</h3>
              <p>Pare PVC Panels provide a sleek and contemporary solution for upgrading residential and commercial interiors. Designed to replace traditional painting and POP (Plaster of Paris) work, these panels save immense time and labor costs through their highly efficient tongue-and-groove interlocking design.</p>
              <br/>
              <p>Because they are manufactured from premium extruded PVC, Pare panels are completely immune to water damage, termites, and borers. This makes them highly reliable for use in moisture-prone areas where traditional drywall or wood cladding would deteriorate. Available in a variety of vibrant prints, woodgrains, and geometric patterns, they offer unparalleled design flexibility.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Brand / Manufacturer</th>
                    <td>Pare</td>
                  </tr>
                  <tr>
                    <th>Material Structure</th>
                    <td>Hollow Core Extruded PVC</td>
                  </tr>
                  <tr>
                    <th>Installation Mechanism</th>
                    <td>Seamless Tongue & Groove</td>
                  </tr>
                  <tr>
                    <th>Durability Features</th>
                    <td>Termite Proof, Borer Proof, 100% Waterproof</td>
                  </tr>
                  <tr>
                    <th>Surface Finish</th>
                    <td>Laminated / Hot-Stamped Decorative Prints</td>
                  </tr>
                  <tr>
                    <th>Maintenance</th>
                    <td>Simply wipe clean with a damp cloth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Living Room and Bedroom False Ceilings</li>
                <li>Accent Walls and TV Unit Backdrops</li>
                <li>Bathroom and Washroom Cladding</li>
                <li>Commercial Office Cabins and Corridors</li>
                <li>Showroom and Retail Store Displays</li>
                <li>Restaurants, Cafes, and Hospitality Venues</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}