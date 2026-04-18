"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt, FaLeaf } from "react-icons/fa";

export default function ParePVCPanelPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  // Images for Pare PVC Wall & Ceiling Panels
  const images = [
    "/product_page_images/Pare-PVC-panel.jpg",

  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> 
        <span className={styles.crumbDivider}>/</span> 
        <Link href="/products">Products</Link> 
        <span className={styles.crumbDivider}>/</span> 
        <Link href="/products?category=PVC+Products">PVC Products</Link> 
        <span className={styles.crumbDivider}>/</span> 
        <span className={styles.activeCrumb}>Pare PVC Panels</span>
      </div>

      <div className={styles.productGrid}>
        
        {/* LEFT: Image Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={images[activeImage]} 
              alt="Pare Premium PVC Wall and Ceiling Panel" 
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
                  alt={`Pare Panel Thumbnail ${idx + 1}`}
                  className={styles.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Information & Configuration */}
        <div className={styles.infoSection}>
          <h1 className={styles.productTitle}>Pare Premium PVC Panels</h1>
          <p className={styles.productSubtitle}>
            Architectural-grade PVC wall cladding and ceiling panels designed to deliver the luxury of natural wood and marble without the high maintenance.
          </p>

          <div className={styles.benefitsRow}>
            <span className={styles.benefitBadge}>
              <FaShieldAlt /> 100% Waterproof & Termite Proof
            </span>
            <span className={styles.benefitBadge}>
              <FaLeaf /> Eco-Friendly & Recyclable
            </span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Profiles & Finishes</h3>
            <div className={styles.tagCloud}>
              <span className={styles.tag}>Fluted Louvers (WPC/PVC)</span>
              <span className={styles.tag}>Seamless Flat Panels</span>
              <span className={styles.tag}>Woodgrain Textures</span>
              <span className={styles.tag}>Marble & Solid Colors</span>
            </div>
            <p className={styles.note}>
              *Standard lengths are typically 9.5ft and 10ft to accommodate standard room heights without visible horizontal joints.
            </p>
          </div>

          {/* Action Area */}
          <div className={styles.actionArea}>
            <Link href="/contact" className={styles.quoteBtn}>
              Request Bulk Quote
            </Link>
            <button className={styles.downloadBtn}>
              <FaFileDownload /> Pare Panel Catalog
            </button>
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
              <h3 className={styles.tabContentHeading}>The Modern Alternative to Traditional Wall Treatments</h3>
              <p>
                Pare Premium PVC Panels are revolutionizing interior design by offering a highly durable, cost-effective, and aesthetically stunning alternative to traditional paint, wallpaper, and wooden cladding. Manufactured using advanced extrusion technology, these panels consist of a high-density PVC core wrapped in incredibly realistic, scratch-resistant decorative films.
              </p>
              <br/>
              <p>
                Unlike natural wood, Pare panels are entirely immune to moisture, dampness, and termite infestations. This makes them the perfect solution for areas where traditional materials fail, such as basement walls, bathroom ceilings, and high-humidity coastal homes. Their hollow-core design also provides an added layer of thermal and acoustic insulation, keeping rooms cooler and quieter.
              </p>
              <br/>
              <h4>Key Advantages:</h4>
              <ul className={styles.appList}>
                <li><strong>Interlocking System:</strong> Features a precision tongue-and-groove edge for seamless, hidden-nail installation.</li>
                <li><strong>Zero Maintenance:</strong> Requires no polishing, painting, or varnishing. Simply wipe clean with a damp cloth.</li>
                <li><strong>Fire Retardant:</strong> Designed with self-extinguishing properties, ensuring a higher standard of safety for residential and commercial spaces.</li>
                <li><strong>Instant Makeover:</strong> Can be installed directly over existing raw brick, plastered walls, or damaged surfaces, drastically reducing renovation time.</li>
              </ul>
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>Pare India</td>
                  </tr>
                  <tr>
                    <th>Material Composition</th>
                    <td>High-Density Polyvinyl Chloride (PVC) / WPC</td>
                  </tr>
                  <tr>
                    <th>Panel Thickness</th>
                    <td>Typically ranges from 6mm to 12mm (Profile dependent)</td>
                  </tr>
                  <tr>
                    <th>Standard Dimensions</th>
                    <td>Widths vary (150mm to 250mm) x Lengths (2900mm / 9.5ft - 10ft)</td>
                  </tr>
                  <tr>
                    <th>Surface Treatment</th>
                    <td>Hot-stamped laminated foil (Scratch and UV resistant)</td>
                  </tr>
                  <tr>
                    <th>Installation Method</th>
                    <td>Tongue and groove interlocking with specialized clips/screws</td>
                  </tr>
                  <tr>
                    <th>Moisture Resistance</th>
                    <td>100% Waterproof (Does not swell, warp, or rot)</td>
                  </tr>
                  <tr>
                    <th>Fire Rating</th>
                    <td>B1 Class (Flame retardant, self-extinguishing)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <p>
                Thanks to their lightweight nature and structural integrity, Pare panels are highly versatile and can be used across a wide array of residential, commercial, and hospitality projects.
              </p>
              <br/>
              <ul className={styles.appList}>
                <li><strong>Feature Walls & TV Units:</strong> Using fluted louvers to create modern, textured focal points in living rooms.</li>
                <li><strong>False Ceilings:</strong> A pristine, moisture-proof alternative to POP (Plaster of Paris) in bathrooms, balconies, and kitchens.</li>
                <li><strong>Commercial Interiors:</strong> Office receptions, hotel lobbies, and restaurant dining areas requiring high-end aesthetics with fast turnaround times.</li>
                <li><strong>Damp Wall Solutions:</strong> Directly cladding over walls affected by rising dampness or peeling paint where conventional treatments have failed.</li>
                <li><strong>Retail Showrooms:</strong> Creating modular, easily changeable backdrops for product displays and window layouts.</li>
                <li><strong>Exterior Soffits:</strong> Protecting the underside of roof eaves from weather and pests while maintaining a polished wood look.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}