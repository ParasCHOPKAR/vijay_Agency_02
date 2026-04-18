"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import styles from "./products.module.css";

// ==========================================
// 1. COMPLETE PRODUCT DATABASE (Hierarchical)
// ==========================================
const productCategories = [
  { 
    title: "Polycarbonate Sheets",
    path: "/products?category=Polycarbonate Sheets",
    items: [
      { name: "S Polytech (Korea) Polycarbonate embossed and compact rolls", href: "/products/polycarbonate-sheets/s-polytech-polycarbonate-embossed-and-compact-rolls", img: "/product_page_images/s-_01polytech-korea-multiwall-polycarbonate-sheets.webp" },
      { name: "Lotus Diamond Polycarbonate rolls", href: "/products/polycarbonate-sheets/lotus-diamond-polycarbonate-rolls", img: "/product_page_images/lotus-diamond-polycarbonate-rolls.jpg" },
      { name: "Ultralite ISI marked Polycarbonate corrugated sheets", href: "/products/polycarbonate-sheets/ultralite-isi-marked-polycarbonate-corrugated-sheets", img: "/product_page_images/Ultralite_01.jpg" },
      { name: "Polycarbonate Awning", href: "/products/polycarbonate-sheets/polycarbonate-awning", img: "/product_page_images/Polycarbonate-Awning.jpg" },
      { name: "Danpal Polycarbonate standing seam", href: "/products/polycarbonate-sheets/danpal-polycarbonate-standing-seam", img: "/product_page_images/Danpal-Polycarbonate-standing-seam.jpg" },
      { name: "Lotus Polycarbonate frosted sheets", href: "/products/polycarbonate-sheets/lotus-polycarbonate-frosted-sheets", img: "/product_page_images/Lotus-PVC-greca-roofing-sheets.jpg" },
      { name: "S Polytech (Korea) Polycarbonate multiwall sheets", href: "/products/polycarbonate-sheets/s-polytech-korea-polycarbonate-multiwall-sheets", img: "/product_page_images/lotus-diamond-polycarbonate-rolls.jpg" },
      { name: "Lotus Polycarbonate multiwall sheets", href: "/products/polycarbonate-sheets/lotus-polycarbonate-multiwall-sheets", img: "/product_page_images/Lotus-Polycarbonate_01.jpg" },
      { name: "Lotus Polycarbonate embossed and compact rolls", href: "/products/polycarbonate-sheets/lotus-polycarbonate-embossed-and-compact-rolls", img: "/product_page_images/Lotus-Polycarbonate-multiwall-sheets.webp" },
    ],
  },
  {
    title: "PVC Products",
    path: "/products?category=PVC Products",
    items: [
      { name: "PVC gutter system", href: "/products/pvc-products/pvc-gutter-system", img: "/product_page_images/PVC-gutter-system.jpg" },
      { name: "PVC decorative tiles for roof", href: "/products/pvc-products/pvc-decorative-tiles-for-roof", img: "/product_page_images/PVC-decorative-tiles-for-roof.jpg" },
      { name: "Vox PVC panel", href: "/products/pvc-products/vox-pvc-panel", img: "/product_page_images/vox-pvc-panel_01.jpg" },
      { name: "Pare PVC panel", href: "/products/pvc-products/pare-pvc-panel", img: "/product_page_images/Pare-PVC-panel.jpg" },
      { name: "PP decorative rolls", href: "/products/pvc-products/pp-decorative-rolls", img: "/product_page_images/PP-decorative-rolls.webp" },
      { name: "Lotus PVC greca roofing sheets", href: "/products/pvc-products/lotus-pvc-greca-roofing-sheets", img: "/product_page_images/Lotus-PVC-greca-roofing-sheets.jpg" },
    ],
  },
  {
    title: "Acrylic Sheets",
    path: "/products?category=Acrylic Sheets",
    items: [
      { name: "Cast Acrylic sheets", href: "/products/acrylic-sheets/cast-acrylic-sheets", img: "/product_page_images/Cast-Acrylic-sheets.jpg" },
      { name: "PS sheets", href: "/products/acrylic-sheets/ps-sheets", img: "/product_page_images/PS-sheets.png" },
      { name: "Decorative Acrylic sheets", href: "/products/acrylic-sheets/decorative-acrylic-sheets", img: "/product_page_images/Decorative-Acrylic-sheets.jpg" },
      { name: "Alabaster onyx Acrylic sheets", href: "/products/acrylic-sheets/alabaster-onyx-acrylic-sheets", img: "/product_page_images/Alabaster-onyx-Acrylic-sheets.jpg" },
      { name: "Alabaster decorative sheets", href: "/products/acrylic-sheets/alabaster-decorative-sheets", img: "/product_page_images/alabaster-decorative-sheets.webp" },
      { name: "Acrylic mirror sheets", href: "/products/acrylic-sheets/acrylic-mirror-sheets", img: "/product_page_images/Acrylic-mirror-sheets.jpg" },
      { name: "FRP wrinkle decorative sheets", href: "/products/acrylic-sheets/frp-wrinkle-decorative-sheets", img: "/product_page_images/frp-wrinkle-decorative-sheets.webp" },
    ],
  },
  {
    title: "FRP Roofing Sheets",
    path: "/products?category=FRP Roofing Sheets",
    items: [
      { name: "FRP printed roofing sheets", href: "/products/frp-roofing-sheets/frp-printed-roofing-sheets", img: "/product_page_images/FRP-printed-roofing-sheets.jpg" },
      { name: "FRP industrial roofing sheets", href: "/products/frp-roofing-sheets/frp-industrial-roofing-sheets", img: "/product_page_images/frp-industrial-roofing-sheets.webp" },
      { name: "FRP decorative rolls", href: "/products/frp-roofing-sheets/frp-decorative-rolls", img: "/product_page_images/FRP-decorative-rolls.jpg" },
    ],
  },
  {
    title: "Accessories and Other",
    path: "/products?category=Accessories and Other",
    items: [
      { name: "Industrial turbo ventilator", href: "/products/accessories-and-other/industrial-turbo-ventilator", img: "/product_page_images/Industrial-turbo-ventilator.webp" },
      { name: "Aluminum section for polycarbonate", href: "/products/accessories-and-other/aluminum-section-for-polycarbonate", img: "/product_page_images/aluminum-section-for-polycarbonate.webp" },
      { name: "Primus Self tapping screws", href: "/products/accessories-and-other/primus-self-tapping-screws", img: "/product_page_images/Primus-Self-tapping-screws.webp" },
      { name: "PVC cap & washer", href: "/products/accessories-and-other/pvc-cap-and-washer", img: "/product_page_images/PVC-cap-washer.jpg" },
      { name: "SS washers", href: "/products/accessories-and-other/ss-washers", img: "/product_page_images/SS-washers.jpg" },
      { name: "Floor guard rolls", href: "/products/accessories-and-other/floor-guard-rolls", img: "/product_page_images/Floor-guard-rolls.jpg" },
      { name: "Aluminum insulated foil", href: "/products/accessories-and-other/aluminum-insulated-foil", img: "/product_page_images/Aluminum-insulated-foil.webp" },
      { name: "Kalon butyl & bitumen tapes", href: "/products/accessories-and-other/kalon-butyl-and-bitumen-tapes", img: "/product_page_images/Kalon-butyl-bitumen-tapes.jpg" },
    ],
  },
  {
    title: "Tile Roof Sheets",
    path: "/products?category=Tile Roof Sheets",
    items: [
      { name: "Precoated tile roof sheets", href: "/products/tile-roof-sheets/precoated-tile-roof-sheets", img: "/product_page_images/Precoated-tile-roof-sheets.webp" },
      { name: "Georoof Zinc aluminum tile roof sheets", href: "/products/tile-roof-sheets/georoof-zinc-aluminum-tile-roof-sheets", img: "/product_page_images/Georoof-Zinc-aluminum-tile-roof-sheets.jpg" },
      { name: "UPVC tile roof sheets", href: "/products/tile-roof-sheets/upvc-tile-roof-sheetss", img: "/product_page_images/UPVC-ile-roof-sheets.jpg" },
      { name: "Kalon Stone coated Metal tile roof sheets", href: "/products/tile-roof-sheets/kalon-stone-coated-metal-tile-roof-sheets", img: "/product_page_images/Kalon-Stone-coated-Metal-tile-roof-sheets.webp" },
      { name: "Oralium aluminum tile roof sheets", href: "/products/tile-roof-sheets/oralium-aluminum-tile-roof-sheets", img: "/product_page_images/Oralium-aluminum-tile-roof-sheets.jpg" },
    ],
  },
  {
    title: "Color Coated Sheets",
    path: "/products?category=Color Coated Sheets",
    items: [
      { name: "AMNS precoated roofing sheets", href: "/products/color-coated-sheets/amns-precoated-roofing-sheets", img: "/product_page_images/AMNS-precoated-roofing-sheets.jpg" },
      { name: "Tata durashine roofing sheets", href: "/products/color-coated-sheets/tata-durashine-roofing-sheets", img: "/product_page_images/Tata-durashine-roofing-sheets.jpg" },
      { name: "JSW roofing sheet", href: "/products/color-coated-sheets/jsw-roofing-sheet", img: "/product_page_images/JSW-roofing-sheet.webp" },
      { name: "Essar roofing sheets", href: "/products/color-coated-sheets/essar-roofing-sheets", img: "/product_page_images/Essar-roofing-sheets.webp" },
      { name: "JSW decking sheets", href: "/products/color-coated-sheets/jsw-decking-sheets", img: "/product_page_images/JSW-decking-sheets.jpg" },
      { name: "JSW color coated puff insulated roofing sheets", href: "/products/color-coated-sheets/jsw-color-coated-puff-insulated-roofing-sheets", img: "/product_page_images/JSW-color-coated-puff-insulated-roofing-sheets.webp" },
      { name: "Tata cool shield roofing sheets", href: "/products/color-coated-sheets/tata-cool-shield-roofing-sheets", img: "/product_page_images/tata-cool-shield-roofing-sheets.png" },
    ],
  },
];

// Dynamically flatten the hierarchical data into the format the UI grid expects
let idCounter = 1;

const productsData = productCategories.flatMap((category) => 
  category.items.map((item) => ({
    id: idCounter++,
    name: item.name,
    category: category.title,
    href: item.href,
    desc: `Premium quality ${category.title.toLowerCase()} engineered for durability and excellence.`,
    img: item.img, 
  }))
);

// Dynamically generate unique categories list for the sidebar
const categoriesList = ["All Products", ...productCategories.map(c => c.title)];

// Animation configurations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// ==========================================
// 2. INNER COMPONENT (Handles URL Params)
// ==========================================
function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("All Products");

  // Listen for URL changes from the Navbar and update the active tab
  useEffect(() => {
    if (categoryQuery && categoriesList.includes(categoryQuery)) {
      setActiveCategory(categoryQuery);
    } else {
      setActiveCategory("All Products");
    }
  }, [categoryQuery]);

  // Filter products based on selected category
  const filteredProducts = activeCategory === "All Products"
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      
      <title>Premium Roofing Sheets & Accessories | Vijay Agency</title>
      <meta name="description" content="Explore Vijay Agency's premium range of Polycarbonate sheets, Tile Roofs, PVC panels, FRP sheets, and roofing accessories in Pune." />

      <main className={styles.wrapper}>
        
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroGlow}></div>
          <div className={styles.heroPattern}></div>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>Our Product Catalog</h1>
            <p>Engineered for strength. Designed for excellence.</p>
          </motion.div>
        </section>

        {/* MAIN LAYOUT */}
        <div className={styles.layoutContainer}>
          
          {/* SIDEBAR FILTERS (Sticky) */}
          <aside className={styles.sidebar}>
            <div className={styles.stickyWrapper}>
              <h3>Categories</h3>
              <nav className={styles.categoryList}>
                {categoriesList.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`${styles.catBtn} ${isActive ? styles.activeCat : ""}`}
                    >
                      <span className={styles.catText}>{cat}</span>
                      {isActive && (
                        <motion.div 
                          layoutId="activeSidebarIndicator" 
                          className={styles.activeIndicator}
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* PRODUCT GRID SECTION */}
          <section className={styles.productSection}>
            <div className={styles.sectionHeader}>
              <h2>{activeCategory}</h2>
              <span>Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</span>
            </div>

            <motion.div layout className={styles.grid}>
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.article
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(4px)" }}
                    transition={{ 
                      layout: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4 }
                    }}
                    className={styles.productCard}
                  >
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={product.img} 
                        alt={product.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.productImg}
                      />
                      <div className={styles.categoryTag}>{product.category}</div>
                    </div>
                    
                    <div className={styles.cardContent}>
                      <h3>{product.name}</h3>
                      <p>{product.desc}</p>
                      
                      <div className={styles.cardFooter}>
                        <Link href={product.href} className={styles.detailsBtn}>
                          <span>View Details</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State Fallback (Just in case a category has no products) */}
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className={styles.emptyState}
              >
                <p>No products found in this category.</p>
              </motion.div>
            )}
          </section>
        </div>

        {/* CALL TO ACTION SECTION */}
        <section className={styles.ctaSection}>
          <motion.div 
            className={styles.ctaContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2>Need help choosing the right material?</h2>
            <p>Our experts are ready to provide technical consultation and competitive pricing for your specific project requirements.</p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>Contact Sales</a>
              <a href="tel:8888010111" className={styles.outlineBtn}>Call +91 8888010111</a>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}

// ==========================================
// 3. MAIN EXPORT WRAPPED IN SUSPENSE
// ==========================================
export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', color: '#1B1B1B', fontWeight: 600 }}>
        Loading Catalog...
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}