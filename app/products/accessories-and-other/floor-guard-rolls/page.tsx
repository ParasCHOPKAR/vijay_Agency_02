"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function FloorGuardRollsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Floor Guard Rolls
  const images = [
    "/product_page_images/Floor-guard-rolls.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Accessories">Accessories</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Floor Guard Rolls</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Floor Guard Protection Roll" 
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
          <h1 className={styles.productTitle}>Floor Guard Rolls</h1>
          <p className={styles.productSubtitle}>Heavy-duty, reusable surface protection rolls designed to safeguard expensive tiles, marble, and hardwood during construction and renovations.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> High Impact Absorption</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Reusable & Eco-Friendly</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>2.0mm</span>
              <span className={styles.tag}>2.5mm</span>
              <span className={styles.tag}>3.0mm</span>
              <span className={styles.tag}>4.0mm</span>
            </div>
            <p className={styles.note}>*Supplied in standard 1m x 50m rolls. Custom widths may be available for bulk orders.</p>
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
              <h3 className={styles.tabContentHeading}>The Modern Alternative to Messy POP</h3>
              <p>Floor Guard Rolls provide the ultimate surface protection for ongoing construction, interior fit-outs, and heavy moving. Traditionally, contractors used Plaster of Paris (POP) to protect flooring, which is incredibly messy, requires water to set, and takes hours of intense labor to scrape off later. Our Floor Guard Rolls completely eliminate this hassle.</p>
              <br/>
              <p>Manufactured from a high-density cross-linked polymer foam, these flexible rolls are incredibly tough. They provide a thick, cushioned barrier that absorbs heavy impacts from dropped tools, dragging scaffolding, and construction debris. They are 100% waterproof, protecting your expensive Italian marble or wooden floors from paint spills and chemical stains. Best of all, they can be simply swept, rolled up, and reused on the next project.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>High-Density Cross-Linked Polymer / XLPE Foam</td>
                  </tr>
                  <tr>
                    <th>Surface Finish</th>
                    <td>Anti-slip texture for safe walking</td>
                  </tr>
                  <tr>
                    <th>Standard Roll Size</th>
                    <td>1 Meter (Width) x 50 Meters (Length)</td>
                  </tr>
                  <tr>
                    <th>Water & Chemical Resistance</th>
                    <td>Excellent (100% waterproof, prevents paint/oil seepage)</td>
                  </tr>
                  <tr>
                    <th>Reusability</th>
                    <td>High (Can be washed and reused multiple times)</td>
                  </tr>
                  <tr>
                    <th>Installation</th>
                    <td>Fast and dry (Simply unroll and tape the seams)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Construction and Home Renovations</li>
                <li>Commercial Interior Fit-outs and Showroom Upgrades</li>
                <li>Protecting Italian Marble, Granite, and Vitrified Tiles</li>
                <li>Safeguarding Hardwood and Laminate Flooring</li>
                <li>Preventing Mess During Painting and Plastering</li>
                <li>Heavy Furniture Moving and Relocation Logistics</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}