import styles from "./NavbarInDown.module.scss";
import AllInformations from "../../informations";
import DropDownLanguage from "./DropDownMenu";
import HamburgerBar from "./HamburgerBar";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavbarInDown({
  handleClick,
  pagesHamburgerBar,
  setPagesHamburgerBar,
  t,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  // const handleChangeButtonClick = () => {
  //   if (location.pathname === "/spareParts") {
  //     navigate("/products");
  //   } else {
  //     navigate("/spareParts");
  //   }
  // };
  // const handleChangeButtonClick = () => {
  //   const newPath =
  //     location.pathname === "/products" ? "/spareParts" : "/products";
  //   navigate(newPath);
  // };
  return (
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        <img src={t("Logo")} alt="Company Logo" />
        <h1>{AllInformations.Navbar.CompanyName}</h1>
      </div>
      <div className={styles.hamburgerContainer}>
        <DropDownLanguage />
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
        {location.pathname === "/products" ? (
          <li>
            <Link to="/spareParts">{t("Products")}</Link>
          </li>
        ) : (
          <li>
            <a onClick={() => handleClick("productsRef")}>{t("Products")}</a>
          </li>
        )}
        {location.pathname === "/spareParts" ? (
          <li>
            <Link to="/products">{t("SpareParts")}</Link>
          </li>
        ) : (
          <li>
            <a onClick={() => handleClick("sparePartsRef")}>
              {t("SpareParts")}
            </a>
          </li>
        )}
        {location.pathname !== "/products" &&
          location.pathname !== "/spareParts" && (
            <li>
              <a onClick={() => handleClick("partnersRef")}>{t("Partners")}</a>
            </li>
          )}
        <li>
          <a onClick={() => handleClick("companyProfileRef")}>{t("AboutUs")}</a>
        </li>
        <li>
          <a onClick={() => handleClick("footerRef")}>{t("ContactWithUs")}</a>
        </li>
      </ul>
      <div className={styles.dropdownContainer}>
        <DropDownLanguage />
      </div>
    </section>
  );
}
