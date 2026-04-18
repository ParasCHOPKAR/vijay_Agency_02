"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function SSWashersPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for SS Washers
  const images = [
    "/product_page_images/SS-washers.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Accessories">Accessories</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>SS Bonded Washers</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Stainless Steel EPDM Bonded Washer" 
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
          <h1 className={styles.productTitle}>SS EPDM Bonded Washers</h1>
          <p className={styles.productSubtitle}>Premium stainless steel washers vulcanized with heavy-duty EPDM rubber for the ultimate rust-proof and watertight fastening seal.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 100% Rust-Proof (SS 304)</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> Vulcanized EPDM Seal</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Sizes & Grades</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>16mm Outer Diameter</span>
              <span className={styles.tag}>19mm Outer Diameter</span>
              <span className={styles.tag}>SS 304 Grade</span>
              <span className={styles.tag}>SS 316 (Marine Grade)</span>
            </div>
            <p className={styles.note}>*Standard inner diameters (ID) are sized to fit #10, #12, and #14 roofing screws perfectly.</p>
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
              <h3 className={styles.tabContentHeading}>The Ultimate Defense Against Leaks and Rust</h3>
              <p>When installing premium roofing like aluminum, polycarbonate, or high-grade color-coated steel, standard zinc-plated washers simply aren't enough. Our SS Bonded Washers combine the unstoppable corrosion resistance of Stainless Steel (SS 304 / SS 316) with a highly resilient layer of vulcanized EPDM rubber.</p>
              <br/>
              <p>As the screw is tightened, the stainless steel backing evenly distributes the fastening pressure to prevent the roofing material from crushing or cracking. Simultaneously, the EPDM rubber compresses into the gaps around the screw thread and the roof surface, creating a 100% watertight seal. Because EPDM is highly UV and ozone resistant, it will not dry out, crack, or perish over time, ensuring a leak-free roof for decades.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Metal Component</th>
                    <td>Stainless Steel (SS 304 or SS 316 Marine Grade)</td>
                  </tr>
                  <tr>
                    <th>Sealing Component</th>
                    <td>Vulcanized EPDM (Ethylene Propylene Diene Monomer)</td>
                  </tr>
                  <tr>
                    <th>Standard Outer Diameters (OD)</th>
                    <td>16mm, 19mm, 25mm</td>
                  </tr>
                  <tr>
                    <th>Weatherability</th>
                    <td>High UV, Ozone, and Temperature Resistance (-40°C to 120°C)</td>
                  </tr>
                  <tr>
                    <th>Corrosion Resistance</th>
                    <td>Exceptional (Immune to red rust and galvanic corrosion)</td>
                  </tr>
                  <tr>
                    <th>Packaging</th>
                    <td>Bulk polybags and industrial cartons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Fastening Premium Aluminum and Steel Roofing Sheets</li>
                <li>Mounting Solar Panels on Industrial Roofs</li>
                <li>Installing Polycarbonate and FRP Skylights</li>
                <li>Coastal and High-Humidity Construction Environments</li>
                <li>Securing Exterior HVAC Ducting and Cladding</li>
                <li>Preventing Galvanic Corrosion on Dissimilar Metals</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}