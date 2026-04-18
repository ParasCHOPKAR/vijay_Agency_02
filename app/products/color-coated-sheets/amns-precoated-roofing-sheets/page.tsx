"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function AMNSPrecoatedRoofingPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for AMNS Precoated Roofing Sheets
  const images = [
    "/product_page_images/AMNS-precoated-roofing-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>AMNS Precoated Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="AMNS Precoated Roofing Sheet" 
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
          <h1 className={styles.productTitle}>AMNS Precoated Roofing Sheets</h1>
          <p className={styles.productSubtitle}>High-performance, premium color-coated steel roofing sheets from ArcelorMittal Nippon Steel, engineered for heavy-duty infrastructure and extreme weather resistance.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 550 MPa High Tensile Strength</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Superior Paint Adhesion</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>0.45mm</span>
              <span className={styles.tag}>0.47mm</span>
              <span className={styles.tag}>0.50mm</span>
              <span className={styles.tag}>0.60mm</span>
            </div>
            <p className={styles.note}>*Available in standard Trapezoidal (Hi-Rib) and Corrugated profiles for maximum structural spanning.</p>
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
              <h3 className={styles.tabContentHeading}>The Standard for Premium Industrial Roofing</h3>
              <p>AMNS (ArcelorMittal Nippon Steel) precoated roofing sheets represent the pinnacle of modern steel manufacturing. Produced using state-of-the-art cold-rolling and metallic coating processes, these sheets offer superior structural integrity, making them the preferred choice for demanding industrial infrastructure, commercial roofing agencies, and premium Pre-Engineered Buildings (PEB).</p>
              <br/>
              <p>The base high-tensile steel is coated with a highly protective metallic layer (either pure zinc or an Aluminum-Zinc Galvalume alloy), providing exceptional corrosion resistance. This is topped with a multi-layered, technologically advanced paint system that prevents fading, peeling, and chalking under intense UV exposure. The result is a vibrant, incredibly tough roof that maintains its architectural beauty and structural safety for decades.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>ArcelorMittal Nippon Steel India (AM/NS)</td>
                  </tr>
                  <tr>
                    <th>Base Metal</th>
                    <td>High Tensile Cold Rolled Steel (PPGI or PPGL)</td>
                  </tr>
                  <tr>
                    <th>Yield Strength</th>
                    <td>550 MPa (Guaranteed high load-bearing capacity)</td>
                  </tr>
                  <tr>
                    <th>Paint System</th>
                    <td>Regular Modified Polyester (RMP) / Super Durable Polyester</td>
                  </tr>
                  <tr>
                    <th>Weatherability</th>
                    <td>Excellent UV Resistance and Anti-Chalking properties</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>Caulfield Green, Brick Red, Royal Blue, Off-White, Mist Grey</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Heavy Industrial Manufacturing Plants and Warehouses</li>
                <li>Pre-Engineered Buildings (PEB) and Large Commercial Sheds</li>
                <li>Premium Roofing Infrastructure for Transport Hubs</li>
                <li>Agricultural Facilities, Godowns, and Poultry Farms</li>
                <li>High-End Residential Roofing and Wall Cladding</li>
                <li>Coastal and High-Humidity Construction Projects</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}