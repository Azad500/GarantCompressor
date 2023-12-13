import styles from "./App.module.scss";
import Footer from "./Components/Footer/Footer";
import Developer from "./Components/Footer/Developer";
import { useRef, useState } from "react";
import Products from "../src/Pages/Products/Products";
import { Route, Routes, useParams } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import CompanyProfile from "./Components/CompanyProfile/CompanyProfile";
import SparePartsPage from "./Pages/SparePart/SparePartsPage";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
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
            />
          }
        />
      </Routes>
      <CompanyProfile companyProfileRef={refs.companyProfileRef} t={t} />

      <Footer footerRef={refs.footerRef} t={t} />
      <Developer t={t} />
    </div>
  );
}
