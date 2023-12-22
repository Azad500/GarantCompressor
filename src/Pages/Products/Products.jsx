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
      data.ProductsPartTexts.ProductsParts.Categories.includes(
        selectedCategory
      );
    if (!categoryExists) {
      setSelectedCategory(data.ProductsPartTexts.ProductsParts.Categories[0]);
    }
    window.scrollTo(0, 0);
  }, [data]);

  const CompressorType1 = t(
    "ProductsPartTexts.CompressorType1.CompressorType1Categories"
  );
  const CompressorType2 = t(
    "ProductsPartTexts.CompressorType2.CompressorType2Categories"
  );
  const CompressorType3 = t(
    "ProductsPartTexts.CompressorType3.CompressorType3Categories"
  );
  const CompressorType4 = t(
    "ProductsPartTexts.CompressorType4.CompressorType4Categories"
  );

  const CompressorType1Info = [
    {
      category: t("ProductsPartTexts.CompressorType1.Text1.category"),
      image: AllInformations.ProductsImages.CompressorType1.ProductsImage1,
      title: t("ProductsPartTexts.CompressorType1.Text1.title"),
      workingPower: t("ProductsPartTexts.CompressorType1.Text1.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType1.Text1.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType1.Text1.workingPressure"
      ),
    },
    {
      category: t("ProductsPartTexts.CompressorType1.Text2.category"),
      image: AllInformations.ProductsImages.CompressorType1.ProductsImage2,
      title: t("ProductsPartTexts.CompressorType1.Text2.title"),
      workingPower: t("ProductsPartTexts.CompressorType1.Text2.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType1.Text2.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType1.Text2.workingPressure"
      ),
    },
    {
      category: t("ProductsPartTexts.CompressorType1.Text3.category"),
      image: AllInformations.ProductsImages.CompressorType1.ProductsImage3,
      title: t("ProductsPartTexts.CompressorType1.Text3.title"),
      workingPower: t("ProductsPartTexts.CompressorType1.Text3.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType1.Text3.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType1.Text3.workingPressure"
      ),
    },
  ];

  const CompressorType2Info = [
    {
      category: t("ProductsPartTexts.CompressorType2.Text1.category"),
      image: AllInformations.ProductsImages.CompressorType2.ProductsImage4,
      title: t("ProductsPartTexts.CompressorType2.Text1.title"),
      workingPower: t("ProductsPartTexts.CompressorType2.Text1.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType2.Text1.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType2.Text1.workingPressure"
      ),
    },
    {
      category: t("ProductsPartTexts.CompressorType2.Text2.category"),
      image: AllInformations.ProductsImages.CompressorType2.ProductsImage5,
      title: t("ProductsPartTexts.CompressorType2.Text2.title"),
      workingPower: t("ProductsPartTexts.CompressorType2.Text2.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType2.Text2.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType2.Text2.workingPressure"
      ),
    },
    {
      category: t("ProductsPartTexts.CompressorType2.Text3.category"),
      image: AllInformations.ProductsImages.CompressorType2.ProductsImage6,
      title: t("ProductsPartTexts.CompressorType2.Text3.title"),
      workingPower: t("ProductsPartTexts.CompressorType2.Text3.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType2.Text3.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType2.Text3.workingPressure"
      ),
    },
  ];

  const CompressorType3Info = [
    {
      category: t("ProductsPartTexts.CompressorType3.Text1.category"),
      image: AllInformations.ProductsImages.CompressorType3.ProductsImage1,
      title: t("ProductsPartTexts.CompressorType3.Text1.title"),
      workingPower: t("ProductsPartTexts.CompressorType3.Text1.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType3.Text1.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType3.Text1.workingPressure"
      ),
    },
    {
      category: t("ProductsPartTexts.CompressorType3.Text2.category"),
      image: AllInformations.ProductsImages.CompressorType3.ProductsImage3,
      title: t("ProductsPartTexts.CompressorType3.Text2.title"),
      workingPower: t("ProductsPartTexts.CompressorType3.Text2.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType3.Text2.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType3.Text2.workingPressure"
      ),
    },
    {
      category: t("ProductsPartTexts.CompressorType3.Text3.category"),
      image: AllInformations.ProductsImages.CompressorType3.ProductsImage5,
      title: t("ProductsPartTexts.CompressorType3.Text3.title"),
      workingPower: t("ProductsPartTexts.CompressorType3.Text3.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType3.Text3.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType3.Text3.workingPressure"
      ),
    },
  ];

  const CompressorType4Info = [
    {
      category: t("ProductsPartTexts.CompressorType4.Text1.category"),
      image: AllInformations.ProductsImages.CompressorType4.ProductsImage2,
      title: t("ProductsPartTexts.CompressorType4.Text1.title"),
      workingPower: t("ProductsPartTexts.CompressorType4.Text1.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType4.Text1.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType4.Text1.workingPressure"
      ),
    },
    {
      category: t("ProductsPartTexts.CompressorType4.Text2.category"),
      image: AllInformations.ProductsImages.CompressorType4.ProductsImage4,
      title: t("ProductsPartTexts.CompressorType4.Text2.title"),
      workingPower: t("ProductsPartTexts.CompressorType4.Text2.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType4.Text2.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType4.Text2.workingPressure"
      ),
    },
    {
      category: t("ProductsPartTexts.CompressorType4.Text3.category"),
      image: AllInformations.ProductsImages.CompressorType4.ProductsImage6,
      title: t("ProductsPartTexts.CompressorType4.Text3.title"),
      workingPower: t("ProductsPartTexts.CompressorType4.Text3.workingPower"),
      freeAirDelivery: t(
        "ProductsPartTexts.CompressorType4.Text3.freeAirDelivery"
      ),
      workingPressure: t(
        "ProductsPartTexts.CompressorType4.Text3.workingPressure"
      ),
    },
  ];

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
            {data.ProductsPartTexts.ProductsParts.Categories.map(
              (category, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    selectedCategory === category ? styles.selected : ""
                  }`}
                >
                  {category}
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.leftAsideDesktop}>
          <h2>{t("Products")}</h2>
          <ul>
            {data.ProductsPartTexts.ProductsParts.Categories.map(
              (category, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    selectedCategory === category ? styles.selected : ""
                  }`}
                >
                  {category}
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.cardsContainer}>
          {selectedCategory === CompressorType1 &&
            CompressorType1Info.filter((spare) =>
              selectedCategory ? spare.category === selectedCategory : true
            ).map((spare, index) => (
              <div key={index} className={styles.cardItem}>
                <img src={spare.image} alt="CompressorType1" />
                <div className={styles.onlyTexts}>
                  <h3>{spare.category}</h3>
                  <p>{spare.title}</p>
                  <p>{spare.workingPower}</p>
                  <p>{spare.freeAirDelivery}</p>
                  <p>{spare.workingPressure}</p>
                </div>
              </div>
            ))}
          {selectedCategory === CompressorType2 &&
            CompressorType2Info.filter((spare) =>
              selectedCategory ? spare.category === selectedCategory : true
            ).map((spare, index) => (
              <div key={index} className={styles.cardItem}>
                <img src={spare.image} alt="CompressorType2" />
                <div className={styles.onlyTexts}>
                  <h3>{spare.category}</h3>
                  <p>{spare.title}</p>
                  <p>{spare.workingPower}</p>
                  <p>{spare.freeAirDelivery}</p>
                  <p>{spare.workingPressure}</p>
                </div>
              </div>
            ))}
          {selectedCategory === CompressorType3 &&
            CompressorType3Info.filter((spare) =>
              selectedCategory ? spare.category === selectedCategory : true
            ).map((spare, index) => (
              <div key={index} className={styles.cardItem}>
                <img src={spare.image} alt="CompressorType3" />
                <div className={styles.onlyTexts}>
                  <h3>{spare.category}</h3>
                  <p>{spare.title}</p>
                  <p>{spare.workingPower}</p>
                  <p>{spare.freeAirDelivery}</p>
                  <p>{spare.workingPressure}</p>
                </div>
              </div>
            ))}
          {selectedCategory === CompressorType4 &&
            CompressorType4Info.filter((spare) =>
              selectedCategory ? spare.category === selectedCategory : true
            ).map((spare, index) => (
              <div key={index} className={styles.cardItem}>
                <img src={spare.image} alt="CompressorType4" />
                <div className={styles.onlyTexts}>
                  <h3>{spare.category}</h3>
                  <p>{spare.title}</p>
                  <p>{spare.workingPower}</p>
                  <p>{spare.freeAirDelivery}</p>
                  <p>{spare.workingPressure}</p>
                </div>
              </div>
            ))}
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
