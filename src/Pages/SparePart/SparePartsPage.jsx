import styles from "../SparePart/SparePartsPage.module.scss";
import { useEffect, useState } from "react";
import dataAz from "../../../public/locales/az/translation.json";
import dataEn from "../../../public/locales/en/translation.json";
import dataRu from "../../../public/locales/ru/translation.json";
import AllInformations from "../../informations";

export default function SparePartsPage({
  pagesHamburgerBar,
  setPagesHamburgerBar,
  t,
  currentLanguage,
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
      data.SparePartPage.Categories.includes(selectedCategory);
    if (!categoryExists) {
      setSelectedCategory(data.SparePartPage.Categories[0]);
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
          <h2>{t("SpareParts")}</h2>
          <ul>
            {data.SparePartPage.Categories.map((category, index) => (
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
          <h2>{t("SpareParts")}</h2>
          <ul>
            {data.SparePartPage.Categories.map((category, index) => (
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
          {data.SparePartPage.Spares?.filter((spare) =>
            selectedCategory ? spare.category === selectedCategory : true
          ).map((spare, index) => (
            <div key={index} className={styles.cardItem}>
              <img src={spare.Img} alt="Images" />
              <div className={styles.onlyTexts}>
                <h3>{spare.category}</h3>
                <p>{spare.title}</p>
                <p>{spare.thePrice}</p>
                <p>{spare.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.compressorInSparePart}>
        <img src={AllInformations.SpareParts.SparePartsImage} alt="SparePart" />
        <div className={styles.aboutInSparePart}>
          <p>{t("AboutInSpareParts")}</p>
        </div>
      </div>
    </section>
  );
}
