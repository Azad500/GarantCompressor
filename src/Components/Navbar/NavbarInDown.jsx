import styles from "./NavbarInDown.module.scss";
import AllInformations from "../../informations";
import DropDownLanguage from "./DropDownMenu";
import HamburgerBar from "./HamburgerBar";
import { Link, useLocation } from "react-router-dom";

export default function NavbarInDown({
  handleClick,
  pagesHamburgerBar,
  setPagesHamburgerBar,
  selectedLanguage,
  setSelectedLanguage,
  t,
}) {
  const location = useLocation();
  return (
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        {selectedLanguage === "az" ? (
          <img src={AllInformations.SameParts.AzLogo} alt="Az Company Logo" />
        ) : (
          false
        )}
        {selectedLanguage === "en" ? (
          <img src={AllInformations.SameParts.EnLogo} alt="En Company Logo" />
        ) : (
          false
        )}
        {selectedLanguage === "ru" ? (
          <img src={AllInformations.SameParts.RuLogo} alt="Ru Company Logo" />
        ) : (
          false
        )}
        <h1>{AllInformations.Navbar.CompanyName}</h1>
      </div>
      {location.pathname !== "/" && (
        <div className={styles.homeElement}>
          <Link to="/">
            <i className="fa-solid fa-house"></i>
          </Link>
        </div>
      )}
      <div className={styles.hamburgerContainer}>
        <DropDownLanguage
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        <HamburgerBar
          pagesHamburgerBar={pagesHamburgerBar}
          setPagesHamburgerBar={setPagesHamburgerBar}
          t={t}
        />
      </div>
      <ul className={styles.menuContainer}>
        <li>
          <a href="/">{t("Home")}</a>
        </li>
        {location.pathname === "/spareParts" ||
        location.pathname === "/aboutUs" ? (
          <li>
            <Link to="/products">{t("Products")}</Link>
          </li>
        ) : (
          <li>
            <a onClick={() => handleClick("productsRef")}>{t("Products")}</a>
          </li>
        )}
        {location.pathname === "/products" ||
        location.pathname === "/aboutUs" ? (
          <li>
            <Link to="/spareParts">{t("SpareParts")}</Link>
          </li>
        ) : (
          <li>
            <a onClick={() => handleClick("sparePartsRef")}>
              {t("SpareParts")}
            </a>
          </li>
        )}
        {location.pathname !== "/products" &&
          location.pathname !== "/aboutUs" &&
          location.pathname !== "/spareParts" && (
            <li>
              <a onClick={() => handleClick("partnersRef")}>{t("Partners")}</a>
            </li>
          )}
        {location.pathname === "/spareParts" ||
        location.pathname === "/products" ? (
          <li>
            <Link to="aboutUs">{t("AboutUs")}</Link>
          </li>
        ) : (
          <li>
            <a onClick={() => handleClick("companyProfileRef")}>
              {t("AboutUs")}
            </a>
          </li>
        )}
        <li>
          <a onClick={() => handleClick("footerRef")}>{t("ContactWithUs")}</a>
        </li>
      </ul>
      <div className={styles.dropdownContainer}>
        <DropDownLanguage
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
    </section>
  );
}
