import styles from "./App.module.scss";
import Footer from "./Components/Footer/Footer";
import Developer from "./Components/Footer/Developer";
import { useRef, useState } from "react";
import Products from "../src/Pages/Products/Products";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SparePartsPage from "./Pages/SparePart/SparePartsPage";
import { useTranslation } from "react-i18next";
import AboutUs from "./Pages/AboutUs/AboutUs";
import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";

export default function App() {
  const { t, i18n } = useTranslation();
  const [pagesHamburgerBar, setPagesHamburgerBar] = useState(false);
  const refs = {
    productsRef: useRef(null),
    sparePartsRef: useRef(null),
    partnersRef: useRef(null),
    companyProfileRef: useRef(null),
    footerRef: useRef(null),
  };

  const handleClick = (refName) => {
    const refNames = refs[refName];
    refNames.current?.scrollIntoView({ behavior: "smooth" });
  };

  const currentLanguage = i18n.language;

  return (
    <div className={styles.container}>
      <Navbar
        handleClick={handleClick}
        pagesHamburgerBar={pagesHamburgerBar}
        setPagesHamburgerBar={setPagesHamburgerBar}
        t={t}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productsRef={refs.productsRef}
              sparePartsRef={refs.sparePartsRef}
              partnersRef={refs.partnersRef}
              companyProfileRef={refs.companyProfileRef}
              t={t}
            />
          }
        />
        <Route
          path="/spareParts"
          element={
            <Products
              pagesHamburgerBar={pagesHamburgerBar}
              setPagesHamburgerBar={setPagesHamburgerBar}
              currentLanguage={currentLanguage}
              t={t}
            />
          }
        />
        <Route
          path="/products"
          element={
            <SparePartsPage
              pagesHamburgerBar={pagesHamburgerBar}
              setPagesHamburgerBar={setPagesHamburgerBar}
              currentLanguage={currentLanguage}
              t={t}
            />
          }
        />
        <Route path="/aboutUs" element={<AboutUs t={t} />} />
      </Routes>
      <Footer footerRef={refs.footerRef} t={t} />
      <Developer t={t} />
    </div>
  );
}
