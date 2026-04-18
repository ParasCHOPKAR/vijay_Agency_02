"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function PVCGutterSystemPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for PVC Gutter System
  const images = [
    "/product_page_images/PVC-gutter-system.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=PVC+Products">PVC Products</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>PVC Gutter System</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="PVC Rainwater Gutter System" 
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
          <h1 className={styles.productTitle}>PVC Gutter System</h1>
          <p className={styles.productSubtitle}>High-quality, maintenance-free uPVC rainwater drainage systems designed for efficient water management.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Rust & Corrosion Free</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> UV Stabilized & Leak-Proof</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Profiles & Sizes</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>140mm Half-Round</span>
              <span className={styles.tag}>160mm Half-Round</span>
              <span className={styles.tag}>Square / Box Profile</span>
              <span className={styles.tag}>Custom Fittings</span>
            </div>
            <p className={styles.note}>*Standard gutter pipe lengths are typically 3m and 5m.</p>
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
              <h3 className={styles.tabContentHeading}>Efficient Rainwater Management</h3>
              <p>Rainwater gutters are essential for protecting the foundation, walls, and exterior landscape of any building. Our PVC gutter systems are manufactured from high-quality unplasticized Polyvinyl Chloride (uPVC), making them completely rust-proof, lightweight, and incredibly durable against harsh weather conditions.</p>
              <br/>
              <p>The system features precision-engineered interlocking components (including joiners, drop-outs, and end caps) with heavy-duty rubber seals. This ensures a 100% leak-proof installation that can handle heavy monsoon downpours without sagging or overflowing, and completely eliminates the need for messy glues, welding, or soldering during installation.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>High-Impact uPVC (Unplasticized PVC)</td>
                  </tr>
                  <tr>
                    <th>Profiles Available</th>
                    <td>Half-Round and Square / Box Profile</td>
                  </tr>
                  <tr>
                    <th>Standard Lengths</th>
                    <td>3 Meters, 5 Meters</td>
                  </tr>
                  <tr>
                    <th>Key Features</th>
                    <td>UV Stabilized, Non-flammable, Anti-corrosive</td>
                  </tr>
                  <tr>
                    <th>System Components</th>
                    <td>Brackets, Joiners, Drop-outs, End Caps, Elbows</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>White, Grey, Terracotta/Brown</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Homes, Villas, and Apartments</li>
                <li>Commercial Buildings and Office Complexes</li>
                <li>Industrial Factory Sheds and Warehouses</li>
                <li>Agricultural Greenhouses and Farm Buildings</li>
                <li>Rainwater Harvesting Systems</li>
                <li>Covered Walkways and Parking Canopies</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}