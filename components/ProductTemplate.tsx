// components/ProductTemplate.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
// To this:
import styles from "./ProductPage.module.css";
import { FaCheckCircle, FaFileDownload, FaShieldAlt } from "react-icons/fa";

// This defines the structure of the data every product needs to provide
export interface ProductData {
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href: string }[];
  images: string[];
  badges: string[];
  thicknesses: string[];
  note: string;
  description: React.ReactNode; // Allows HTML/JSX in description
  specs: { label: string; value: string }[];
  applications: string[];
}

export default function ProductTemplate({ product }: { product: ProductData }) {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={styles.pageWrapper}>
      {/* Dynamic Breadcrumbs */}
      <div className={`${styles.breadcrumbs} ${styles.animateFadeInDown}`}>
        {product.breadcrumbs.map((crumb, idx) => (
          <span key={idx}>
            {idx < product.breadcrumbs.length - 1 ? (
              <>
                <Link href={crumb.href}>{crumb.label}</Link>
                <span className={styles.crumbDivider}>/</span>
              </>
            ) : (
              <span className={styles.activeCrumb}>{crumb.label}</span>
            )}
          </span>
        ))}
      </div>

      <div className={styles.productGrid}>
        {/* LEFT: Image Gallery */}
        <div className={`${styles.gallerySection} ${styles.animateSlideRight}`}>
          <div className={styles.mainImageWrapper}>
            <img 
              src={product.images[activeImage] || '/placeholder.jpg'} 
              alt={product.title} 
              className={styles.mainImage} 
            />
          </div>
          <div className={styles.thumbnailStrip}>
            {product.images.slice(0, 4).map((img, idx) => (
              <div 
                key={idx}
                className={`${styles.thumbnailWrapper} ${activeImage === idx ? styles.activeThumb : ""}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className={styles.thumbnail} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Information */}
        <div className={`${styles.infoSection} ${styles.animateSlideUp}`}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.productSubtitle}>{product.subtitle}</p>

          <div className={styles.benefitsRow}>
            {product.badges.map((badge, idx) => (
              <span key={idx} className={styles.benefitBadge}>
                {idx === 0 ? <FaShieldAlt /> : <FaCheckCircle />} {badge}
              </span>
            ))}
          </div>

          <div className={styles.divider}></div>

          <div className={styles.configGroup}>
            <h3>Available Thickness</h3>
            <div className={styles.tagCloud}>
              {product.thicknesses.map((thickness, idx) => (
                <span key={idx} className={styles.tag}>{thickness}</span>
              ))}
            </div>
            <p className={styles.note}>{product.note}</p>
          </div>

          <div className={styles.actionArea}>
            <button className={styles.quoteBtn}>Request Bulk Quote</button>
            <button className={styles.downloadBtn}><FaFileDownload /> Technical Data Sheet</button>
          </div>
        </div>
      </div>

      {/* BOTTOM: Tabs */}
      <div className={`${styles.detailsSection} ${styles.animateFadeInUpDelay}`}>
        <div className={styles.tabHeaders}>
          <button className={`${styles.tabBtn} ${activeTab === "description" ? styles.activeTab : ""}`} onClick={() => setActiveTab("description")}>Description</button>
          <button className={`${styles.tabBtn} ${activeTab === "specs" ? styles.activeTab : ""}`} onClick={() => setActiveTab("specs")}>Specifications</button>
          <button className={`${styles.tabBtn} ${activeTab === "applications" ? styles.activeTab : ""}`} onClick={() => setActiveTab("applications")}>Applications</button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "description" && (
            <div className={styles.animateFadeIn}>
              <h3 className={styles.tabContentHeading}>About this Product</h3>
              {product.description}
            </div>
          )}

          {activeTab === "specs" && (
            <div className={styles.animateFadeIn}>
              <table className={styles.specsTable}>
                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr key={idx}>
                      <th>{spec.label}</th>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "applications" && (
            <div className={styles.animateFadeIn}>
              <ul className={styles.appList}>
                {product.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}