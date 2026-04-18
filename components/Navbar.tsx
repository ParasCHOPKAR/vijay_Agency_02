"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const productCategories = [
  { 
    title: "Polycarbonate Sheets",
    path: "/products?category=Polycarbonate Sheets",
    items: [
      { name: "S Polytech (Korea) Polycarbonate embossed and compact rolls", href: "/products/polycarbonate-sheets/s-polytech-polycarbonate-embossed-and-compact-rolls"},
      { name: "Lotus Diamond Polycarbonate rolls", href: "/products/polycarbonate-sheets/lotus-diamond-polycarbonate-rolls" },
      { name: "Ultralite ISI marked Polycarbonate corrugated sheets", href: "/products/polycarbonate-sheets/ultralite-isi-marked-polycarbonate-corrugated-sheets" },
      { name: "Polycarbonate Awning", href: "/products/polycarbonate-sheets/polycarbonate-awning" },
      { name: "Danpal Polycarbonate standing seam", href: "/products/polycarbonate-sheets/danpal-polycarbonate-standing-seam" },
      { name: "Lotus Polycarbonate frosted sheets", href: "/products/polycarbonate-sheets/lotus-polycarbonate-frosted-sheets" },
      { name: "S Polytech (Korea) Polycarbonate multiwall sheets", href: "/products/polycarbonate-sheets/s-polytech-korea-polycarbonate-multiwall-sheets" },
      { name: "Lotus Polycarbonate multiwall sheets", href: "/products/polycarbonate-sheets/lotus-polycarbonate-multiwall-sheets" },
      { name: "Lotus Polycarbonate embossed and compact rolls", href: "/products/polycarbonate-sheets/lotus-polycarbonate-embossed-and-compact-rolls" },
    ],
    hasMore: false,
  },
  {
    title: "PVC Products",
    path: "/products?category=PVC Products",
    items: [
      { name: "PVC gutter system", href: "/products/pvc-products/pvc-gutter-system" },
      { name: "PVC decorative tiles for roof", href: "/products/pvc-products/pvc-decorative-tiles-for-roof" },
      { name: "Vox PVC panel", href: "/products/pvc-products/vox-pvc-panel" },
      { name: "Pare PVC panel", href: "/products/pvc-products/pare-pvc-panel" },
      { name: "PP decorative rolls", href: "/products/pvc-products/pp-decorative-rolls" },
      { name: "Lotus PVC greca roofing sheets", href: "/products/pvc-products/lotus-pvc-greca-roofing-sheets" },
    ],
    hasMore: false,
  },
  {
    title: "Acrylic Sheets",
    path: "/products?category=Acrylic Sheets",
    items: [
      { name: "Cast Acrylic sheets", href: "/products/acrylic-sheets/cast-acrylic-sheets" },
      { name: "PS sheets", href: "/products/acrylic-sheets/ps-sheets" },
      { name: "Decorative Acrylic sheets", href: "/products/acrylic-sheets/decorative-acrylic-sheets" },
      { name: "Alabaster onyx Acrylic sheets", href: "/products/acrylic-sheets/alabaster-onyx-acrylic-sheets" },
      { name: "Alabaster decorative sheets", href: "/products/acrylic-sheets/alabaster-decorative-sheets" },
      { name: "Acrylic mirror sheets", href: "/products/acrylic-sheets/acrylic-mirror-sheets" },
      { name: "FRP wrinkle decorative sheets", href: "/products/acrylic-sheets/frp-wrinkle-decorative-sheets" },
    ],
    hasMore: false,
  },
  {
    title: "FRP Roofing Sheets",
    path: "/products?category=FRP Roofing Sheets",
    items: [
      { name: "FRP printed roofing sheets", href: "/products/frp-roofing-sheets/frp-printed-roofing-sheets" },
      { name: "FRP industrial roofing sheets", href: "/products/frp-roofing-sheets/frp-industrial-roofing-sheets" },
      { name: "FRP decorative rolls", href: "/products/frp-roofing-sheets/frp-decorative-rolls" },
    ],
    hasMore: false,
  },
  {
    title: "Accessories and Other",
    path: "/products?category=Accessories and Other",
    items: [
      { name: "Industrial turbo ventilator", href: "/products/accessories-and-other/industrial-turbo-ventilator" },
      { name: "Aluminum section for polycarbonate", href: "/products/accessories-and-other/aluminum-section-for-polycarbonate" },
      { name: "Primus Self tapping screws", href: "/products/accessories-and-other/primus-self-tapping-screws" },
      { name: "PVC cap & washer", href: "/products/accessories-and-other/pvc-cap-and-washer" },
      { name: "SS washers", href: "/products/accessories-and-other/ss-washers" },
      { name: "Floor guard rolls", href: "/products/accessories-and-other/floor-guard-rolls" },
      { name: "Aluminum insulated foil", href: "/products/accessories-and-other/aluminum-insulated-foil" },
      { name: "Kalon butyl & bitumen tapes", href: "/products/accessories-and-other/kalon-butyl-and-bitumen-tapes" },
    ],
    hasMore: false,
  },
  {
    title: "Tile Roof Sheets",
    path: "/products?category=Tile Roof Sheets",
    items: [
      { name: "Precoated tile roof sheets", href: "/products/tile-roof-sheets/precoated-tile-roof-sheets" },
      { name: "Georoof Zinc aluminum tile roof sheets", href: "/products/tile-roof-sheets/georoof-zinc-aluminum-tile-roof-sheets" },
      { name: "UPVC tile roof sheets", href: "/products/tile-roof-sheets/upvc-tile-roof-sheetss" },
      { name: "Kalon Stone coated Metal tile roof sheets", href: "/products/tile-roof-sheets/kalon-stone-coated-metal-tile-roof-sheets" },
      { name: "Oralium aluminum tile roof sheets", href: "/products/tile-roof-sheets/oralium-aluminum-tile-roof-sheets" },
    ],
    hasMore: false,
  },
  {
    title: "Color Coated Sheets",
    path: "/products?category=Color Coated Sheets",
    items: [
      { name: "AMNS precoated roofing sheets", href: "/products/color-coated-sheets/amns-precoated-roofing-sheets" },
      { name: "Tata durashine roofing sheets", href: "/products/color-coated-sheets/tata-durashine-roofing-sheets" },
      { name: "JSW roofing sheet", href: "/products/color-coated-sheets/jsw-roofing-sheet" },
      { name: "Essar roofing sheets", href: "/products/color-coated-sheets/essar-roofing-sheets" },
      { name: "JSW decking sheets", href: "/products/color-coated-sheets/jsw-decking-sheets" },
      { name: "JSW color coated puff insulated roofing sheets", href: "/products/color-coated-sheets/jsw-color-coated-puff-insulated-roofing-sheets" },
      { name: "Tata cool shield roofing sheets", href: "/products/color-coated-sheets/tata-cool-shield-roofing-sheets" },
    ],
    hasMore: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);
  
  // Mobile Sidebar States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleDropdownClick = () => {
    setHideDropdown(true);
    setTimeout(() => setHideDropdown(false), 200); 
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false); // Reset accordion
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER BAR */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/logo.png" 
              alt="Vijay Agency"
              width={180}
              height={80}
              priority
              className={styles.logo}
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className={styles.navMenu}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.name === "HOME" && pathname === "/");
              const isProducts = link.name === "PRODUCTS";

              return (
                <li 
                  key={link.name} 
                  className={`${styles.navItem} ${isProducts ? styles.hasDropdown : ""}`}
                >
                  <Link 
                    href={link.path} 
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  >
                    {link.name}
                    
                    {isProducts && (
                      <svg className={styles.dropdownIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </Link>

                  {/* DESKTOP MEGA MENU */}
                  {isProducts && (
                    <div className={styles.megaMenuWrapper} style={{ display: hideDropdown ? 'none' : '' }}>
                      {/* Dropdown Container */}
                      <div className={styles.megaMenu} style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                        <div className={styles.megaGrid}>
                          {productCategories.map((category, index) => (
                            <div key={index} className={styles.megaCol}>
                              <h4 className={styles.megaTitle}>
                                <Link href={category.path} className={styles.megaTitleLink} onClick={handleDropdownClick}>
                                  {category.title}
                                </Link>
                              </h4>
                              <ul className={styles.megaList}>
                                {category.items.map((item, i) => (
                                  <li key={i}>
                                    <Link href={item.href} className={styles.megaItem} onClick={handleDropdownClick}>
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              {category.hasMore && (
                                <Link href={category.path} className={styles.moreLink} onClick={handleDropdownClick}>
                                  ...more
                                </Link>
                              )}
                            </div>
                          ))}
                          <div className={styles.megaColAll}>
                            <Link href="/products" className={styles.viewAllBtn} onClick={handleDropdownClick}>
                              View All Categories
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Scroll Down Indicator Arrow */}
                      <div className={styles.scrollIndicator}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                      
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className={styles.ctaContainer}>
            <button className={styles.quoteBtn}>
              REQUEST QUOTE
            </button>
          </div>

          {/* MOBILE HAMBURGER ICON */}
          <button 
            className={styles.hamburgerBtn} 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </div>
      </nav>

      {/* MOBILE SIDEBAR & OVERLAY */}
      <div 
        className={`${styles.sidebarOverlay} ${isMobileMenuOpen ? styles.open : ""}`} 
        onClick={closeMobileMenu}
      ></div>

      <div className={`${styles.sidebar} ${isMobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <Image src="/logo.png" alt="Vijay Agency" width={120} height={40} className={styles.logo} />
          <button className={styles.closeBtn} onClick={closeMobileMenu} aria-label="Close Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.mobileNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.name === "HOME" && pathname === "/");

            if (link.name === "PRODUCTS") {
              return (
                <div key="mobile-products" className={styles.mobileProductsWrapper}>
                  <div 
                    className={`${styles.mobileProductsHeader} ${pathname.includes('/products') ? styles.active : ""}`}
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  >
                    <span>PRODUCTS</span>
                    <svg className={`${styles.mobileAccordionIcon} ${isMobileProductsOpen ? styles.open : ""}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  
                  {/* ACCORDION CONTENT */}
                  <div className={`${styles.mobileProductsContent} ${isMobileProductsOpen ? styles.open : ""}`}>
                    {productCategories.map((category, index) => (
                      <div key={`mob-cat-${index}`}>
                        <Link href={category.path} className={styles.mobileCategoryTitle} onClick={closeMobileMenu}>
                          {category.title}
                        </Link>
                        <ul className={styles.mobileCategoryList}>
                          {category.items.map((item, i) => (
                            <li key={`mob-item-${i}`}>
                              <Link href={item.href} className={styles.mobileItem} onClick={closeMobileMenu}>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link href="/products" className={styles.mobileCategoryTitle} style={{ color: "#f58220", marginTop: "20px" }} onClick={closeMobileMenu}>
                      View All Products →
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link 
                key={link.name}
                href={link.path} 
                className={`${styles.mobileNavLink} ${isActive ? styles.active : ""}`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* MOBILE CTA */}
        <div className={styles.mobileSidebarCTA}>
          <button className={styles.quoteBtn} style={{ width: "100%" }}>
            REQUEST QUOTE
          </button>
        </div>
      </div>
    </>
  );
}