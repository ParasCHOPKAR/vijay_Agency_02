"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function FRPDecorativeRollsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for FRP Decorative Rolls
  const images = [
    "/product_page_images/FRP-decorative-rolls.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=FRP+Roofing+Sheets">FRP Roofing Sheets</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>FRP Decorative Rolls</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="FRP Decorative Roll" 
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
          <h1 className={styles.productTitle}>FRP Decorative Rolls</h1>
          <p className={styles.productSubtitle}>Seamless, highly durable fiberglass reinforced decorative rolls for beautiful, leak-proof outdoor shading and partitions.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Seamless Installation</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Fade-Resistant Prints</span>
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
            <p className={styles.note}>*Supplied in continuous roll lengths up to 30 meters to eliminate joint overlaps.</p>
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
              <h3 className={styles.tabContentHeading}>Zero Joints. Zero Leaks. Maximum Beauty.</h3>
              <p>FRP Decorative Rolls offer a massive advantage over standard cut sheets: they can be unrolled over long spans without needing overlap joints. By eliminating seams, you significantly reduce the risk of water leakage, wind uplift, and structural weaknesses, resulting in a cleaner, faster, and more secure installation.</p>
              <br/>
              <p>Manufactured from robust fiberglass-reinforced plastic, these rolls feature embedded decorative prints that add a touch of elegance to any exterior or interior space. The patterns cast beautiful, diffused shadows while blocking harsh UV rays. Because they are highly flexible, shatterproof, and weather-resistant, they are the ideal choice for curved canopies, privacy fencing, and long residential awnings.</p>
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
                    <th>Format</th>
                    <td>Continuous Roll (Plain/Flat or mildly corrugated)</td>
                  </tr>
                  <tr>
                    <th>Standard Widths</th>
                    <td>0.9m, 1.22m (Custom widths available)</td>
                  </tr>
                  <tr>
                    <th>Standard Roll Lengths</th>
                    <td>15 meters, 30 meters</td>
                  </tr>
                  <tr>
                    <th>UV Protection</th>
                    <td>Anti-UV top film to prevent fading and yellowing</td>
                  </tr>
                  <tr>
                    <th>Design Options</th>
                    <td>Floral, Geometric, Leaves, and Abstract Prints</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Long Residential Awnings and Balcony Coverings</li>
                <li>Seamless Pergola and Patio Roofs</li>
                <li>Decorative Privacy Fencing and Boundary Walls</li>
                <li>Curved Architectural Canopies</li>
                <li>Car Ports and Parking Shelters</li>
                <li>Temporary Event Enclosures and Outdoor Dining Areas</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
