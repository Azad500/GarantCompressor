import React, { useEffect, useState } from "react";
import styles from "./HamburgerBar.module.scss";
import AllInformations from "../../informations";
import { useLocation } from "react-router-dom";

export default function HamburgerBar({
  setPagesHamburgerBar,
  pagesHamburgerBar,
  t,
}) {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const location = useLocation();
  const handleToggleMenu = () => {
    if (location.pathname === "/products") {
      setPagesHamburgerBar(!pagesHamburgerBar);
    } else if (location.pathname === "/spareParts") {
      setPagesHamburgerBar(!pagesHamburgerBar);
    } else {
      setActiveHamburger(!activeHamburger);
    }
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (activeHamburger || pagesHamburgerBar) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [activeHamburger, pagesHamburgerBar]);

  return (
    <section className={styles.navbarContainer}>
      <button
        className={`${styles.hamburger} ${
          activeHamburger || pagesHamburgerBar ? styles.is_active : ""
        }`}
        onClick={handleToggleMenu}
      >
        <div className={styles.bar}></div>
      </button>
      <div
        className={`${styles.mobile_nav} ${
          activeHamburger ? styles.is_active : ""
        }`}
      >
        <div className={styles.wrapper}>
          <div className={styles.locationElement}>
            <i className="fa-solid fa-location-dot"></i>
            <a target="_blank" href={AllInformations.Navbar.LocationInMap}>
              {t("LocationInPage")}
            </a>
          </div>
          <div className={styles.whatsappContainer}>
            <i className="fa-brands fa-whatsapp"></i>
            <a target="_blank" href={AllInformations.Navbar.WpPhoneLink}>
              {AllInformations.Navbar.WpPhone}
            </a>
          </div>
          <div className={styles.PhoneContainer}>
            <i className="fa-solid fa-phone"></i>
            <a target="_blank" href={AllInformations.Navbar.CallPhoneLink}>
              {AllInformations.Navbar.CallPhone}
            </a>
          </div>
          <div className={styles.emailContainer}>
            <i className="fa-solid fa-envelope"></i>
            <a target="_blank" href={AllInformations.Navbar.EmailLink}>
              {AllInformations.Navbar.Email}
            </a>
          </div>
        </div>
        <div className={styles.sosialNetworkElement}>
          <a target="_blank" href={AllInformations.Navbar.FaceBookLink}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a target="_blank" href={AllInformations.Navbar.InstagramLink}>
            <i className="fa-brands fa-instagram"></i>
          </a>
          {/* <a target="_blank" href={AllInformations.Navbar.LinkEdinLink}>
            <i className="fa-brands fa-linkedin"> </i>
          </a>
          <a target="_blank" href={AllInformations.Navbar.TikTokLink}>
            <i className="fa-brands fa-tiktok"></i>
          </a> */}
        </div>
      </div>
    </section>
  );
}
