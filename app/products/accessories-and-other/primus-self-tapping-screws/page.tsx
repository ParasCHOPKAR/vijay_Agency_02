"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function PrimusScrewsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Primus Self Tapping Screws
  const images = [
    "/product_page_images/Primus-Self-tapping-screws.webp",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Accessories">Accessories</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Primus Fasteners</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Primus Self-Drilling and Tapping Screws" 
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
          <h1 className={styles.productTitle}>Primus Self-Drilling & Tapping Screws</h1>
          <p className={styles.productSubtitle}>Premium grade, high-tensile fasteners featuring advanced anti-corrosion coatings for secure, leak-proof roofing and cladding installations.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> Ruspert Polymer Coating</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> DEKS EPDM Sealing Washer</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Sizes & Types</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>#12G x 25mm</span>
              <span className={styles.tag}>#12G x 55mm</span>
              <span className={styles.tag}>#14G Polycarbonate</span>
              <span className={styles.tag}>Metal-to-Wood (Type 17)</span>
            </div>
            <p className={styles.note}>*Available in Hex Washer Head, CSK, and Truss Head profiles. Packed in cartons of 2500+ pieces.</p>
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
              <h3 className={styles.tabContentHeading}>Engineered for Structural Integrity</h3>
              <p>Primus Fasteners represent the pinnacle of fixing technology for roofing and cladding. Manufactured from case-hardened carbon steel (SAE 1022), these self-drilling and self-tapping screws are designed to pierce through metal, timber, and heavy-duty plastics effortlessly in a single driving motion—eliminating the need for pre-drilling and significantly speeding up installation times.</p>
              <br/>
              <p>What sets Primus apart is their extreme resistance to harsh weather. Each screw is treated with a premium PriSeal™ Ruspert Polymer Coating, providing exceptional anti-corrosive properties that outlast standard zinc plating. Furthermore, they are equipped with high-quality, non-conductive DEKS True-blue EPDM rubber washers. This ensures a 100% watertight seal around the penetration point, protecting your roofing sheets from leaks, thermal expansion damage, and rust.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>Primus Fasteners</td>
                  </tr>
                  <tr>
                    <th>Material</th>
                    <td>Case Hardened Carbon Steel SAE 1022</td>
                  </tr>
                  <tr>
                    <th>Surface Coating</th>
                    <td>PriSeal™ Ruspert Polymer / Clear Zinc</td>
                  </tr>
                  <tr>
                    <th>Washer Type</th>
                    <td>DEKS True-blue EPDM Sealing Washer</td>
                  </tr>
                  <tr>
                    <th>Head Styles</th>
                    <td>Hex Washer Head, Flange Head, Pan Phillips, CSK</td>
                  </tr>
                  <tr>
                    <th>Standards Compliant</th>
                    <td>Australian Standard AS3566 Class 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>Fixing Metal Roofing and Cladding to Steel Purlins</li>
                <li>Installing Polycarbonate and FRP Transparent Sheets</li>
                <li>Fastening Asbestos and Cement Roofing Sheets</li>
                <li>Metal-to-Timber Crest and Valley Fixing</li>
                <li>Industrial Shed and Warehouse Construction</li>
                <li>Structural Steel and HVAC Duct Assemblies</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}