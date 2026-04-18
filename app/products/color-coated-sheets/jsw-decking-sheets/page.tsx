"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

export default function JSWDeckingSheetsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for JSW Decking Sheets
  const images = [
    "/product_page_images/JSW-decking-sheets.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=Metal+Roofing">Metal Roofing</Link> <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>JSW Decking Sheets</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="JSW Structural Metal Decking Sheet" 
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
          <h1 className={styles.productTitle}>JSW Decking Sheets</h1>
          <p className={styles.productSubtitle}>High-tensile, galvanized composite floor decking from JSW Steel, designed for rapid construction and superior structural load distribution.</p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}><FaShieldAlt /> 2-Hour Fire Rated</span>
            <span className={styles.benefitBadge}><FaCheckCircle /> 30-40% Steel Weight Saving</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Profiles & Thickness</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>TR 60 Profile</span>
              <span className={styles.tag}>TR 80 Profile</span>
              <span className={styles.tag}>0.8mm - 2.0mm</span>
              <span className={styles.tag}>120-275 GSM Coating</span>
            </div>
            <p className={styles.note}>*Engineered as permanent shuttering for composite slabs. Customizable lengths to minimize site wastage.</p>
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
              <h3 className={styles.tabContentHeading}>The Future of Composite Floor Systems</h3>
              <p>JSW Decking Sheets, manufactured by **JSW-SMD (Structural Metal Decking Ltd.)**, provide a sophisticated flooring solution for modern steel-frame buildings. These sheets act as a permanent formwork for concrete slabs and, once the concrete has cured, work in tandem with it to create a high-strength composite floor system. This eliminates the need for traditional temporary shuttering and propping, significantly accelerating construction timelines.</p>
              <br/>
              <p>By utilizing high-tensile galvanized steel, JSW decking allows for longer spans between support beams, which can reduce the overall steel weight in a project by up to 40%. The specialized embossing on the ribs ensures a mechanical bond between the steel and concrete, while the inherent 2-hour fire rating provides essential safety for high-rise and commercial structures.</p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>JSW-SMD (Structural Metal Decking Ltd.)</td>
                  </tr>
                  <tr>
                    <th>Profiles</th>
                    <td>TR 60 & TR 80 (High-performance profiles)</td>
                  </tr>
                  <tr>
                    <th>Base Material</th>
                    <td>High-Tensile Galvanized Steel (IS 277 / IS 513)</td>
                  </tr>
                  <tr>
                    <th>Thickness Range</th>
                    <td>0.8 mm, 1.0 mm, 1.2 mm, 1.5 mm, up to 2.0 mm</td>
                  </tr>
                  <tr>
                    <th>Zinc Coating</th>
                    <td>120 GSM (Standard) up to 275 GSM</td>
                  </tr>
                  <tr>
                    <th>Fire Resistance</th>
                    <td>Up to 2 Hours (Tested composite slab rating)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                <li>High-Rise Residential and Commercial Skyscrapers</li>
                <li>Shopping Malls, Multiplexes, and Office Complexes</li>
                <li>Pre-Engineered Buildings (PEB) and Industrial Platforms</li>
                <li>Flyovers, Bridges, and Metro Rail Stations</li>
                <li>Power Plants and Heavy Infrastructure Mezzanines</li>
                <li>Seismic Zone Construction (Due to lateral load distribution)</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}