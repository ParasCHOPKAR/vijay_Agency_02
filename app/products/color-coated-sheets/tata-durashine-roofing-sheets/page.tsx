"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function TataDurashineRoofingPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Tata Durashine Roofing Sheets
  const images = [
    "/product_page_images/Tata-durashine-roofing-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Tata Durashine Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Tata Durashine Color Coated Roofing Sheet" 
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
          <h1 className={styles.productTitle}>Tata Durashine Roofing Sheets</h1>
          <p className={styles.productSubtitle}>Premium color-coated Galvalume steel roofing from India's most trusted brand, offering unmatched durability, leak-proof performance, and vibrant aesthetics.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Trusted Tata Quality</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Anti-Capillary Leak-Proof Groove</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>0.35mm</span>
              <span className={styles.tag}>0.40mm</span>
              <span className={styles.tag}>0.45mm</span>
              <span className={styles.tag}>0.47mm</span>
            </div>
            <p className={styles.note}>*Wider valley design ensures higher water discharge during heavy monsoon rains.</p>
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
              <h3 className={styles.tabContentHeading}>The Gold Standard in Residential and Commercial Roofing</h3>
              <p>Manufactured by Tata BlueScope Steel, DURASHINE® is the flagship brand for premium color-coated steel roofing in India. These sheets are engineered with a high-strength Galvalume® (Zinc-Aluminum alloy) base, which provides vastly superior corrosion resistance compared to standard galvanized steel. This ensures a longer lifespan, even in regions with heavy rainfall or high humidity.</p>
              <br/>
              <p>One of the most critical design features of Tata Durashine sheets is the proprietary anti-capillary groove. This specialized side-lap design completely prevents water seepage driven by capillary action during severe storms, guaranteeing a 100% leak-proof roof. Coated with an advanced, fade-resistant paint system, these sheets retain their vibrant colors and structural integrity for years, offering ultimate peace of mind backed by the legacy of the Tata brand.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>DURASHINE® by Tata BlueScope Steel</td>
                  </tr>
                  <tr>
                    <th>Base Material</th>
                    <td>High Tensile Galvalume® Steel (Al-Zn Alloy)</td>
                  </tr>
                  <tr>
                    <th>Yield Strength</th>
                    <td>550 MPa (High load-bearing capacity)</td>
                  </tr>
                  <tr>
                    <th>Profile Features</th>
                    <td>Anti-Capillary Groove & Wider Valleys for better drainage</td>
                  </tr>
                  <tr>
                    <th>Paint System</th>
                    <td>Super Durable Polyester (SDP) for high UV resistance</td>
                  </tr>
                  <tr>
                    <th>Standard Colors</th>
                    <td>Nuvo Blue, Bright Green, Castle Red, Passion Red, Asian White</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Residential Homes, Independent Villas, and Row Houses</li>
                <li>Commercial Complexes, Shopping Centers, and Outlets</li>
                <li>Industrial Sheds and Factory Manufacturing Units</li>
                <li>Agricultural Godowns, Poultry Farms, and Barns</li>
                <li>Boundary Walls, Barricading, and Architectural Cladding</li>
                <li>Porches, Carports, and Terrace Coverings</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}