import styles from "./Products.module.scss";
import { useEffect, useState } from "react";
import dataAz from "../../../public/locales/az/translation.json";
import dataEn from "../../../public/locales/en/translation.json";
import dataRu from "../../../public/locales/ru/translation.json";
import AllInformations from "../../informations";

export default function Products({
  pagesHamburgerBar,
  setPagesHamburgerBar,
  currentLanguage,
  t,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const languageData = {
    az: dataAz,
    en: dataEn,
    ru: dataRu,
  };
  const data = languageData[currentLanguage] || dataAz;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPagesHamburgerBar(false);
  };
  useEffect(() => {
    const categoryExists =
      data.ProductsPart.Categories.includes(selectedCategory);
    if (!categoryExists) {
      setSelectedCategory(data.ProductsPart.Categories[0]);
    }
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <section className={styles.container}>
      <div className={styles.ProductsSection}>
        <div
          className={`${styles.leftAsideMobile} ${
            pagesHamburgerBar ? styles.active : ""
          }`}
        >
          <h2>{t("Products")}</h2>
          <ul>
            {data.ProductsPart?.Categories?.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`${
                  selectedCategory === category ? styles.selected : ""
                } ${category}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.leftAsideDesktop}>
          <h2>{t("Products")}</h2>
          <ul>
            {data.ProductsPart.Categories?.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`${
                  selectedCategory === category ? styles.selected : ""
                } ${category}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.cardsContainer}>
          {data.ProductsPart.Products?.filter((product) =>
            selectedCategory ? product.categories === selectedCategory : true
          ).map((product, index) => {
            const productImage = AllInformations.ProductsImages[index];
            return (
              <div key={index} className={styles.cardItem}>
                <img src={productImage} alt="Product" />
                <div className={styles.onlyTexts}>
                  <h3>{product.title}</h3>
                  <p>{product.workingPower}</p>
                  <p>{product.freeAirDelivery}</p>
                  <p>{product.workingPressure}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.compressorInProduct}>
        <img
          src={AllInformations.Products.CompressorInProduct}
          alt="Compressor"
        />
        <div className={styles.aboutInProducts}>
          <p>{t("AboutInProducts")}</p>
        </div>
      </div>
    </section>
  );
}
