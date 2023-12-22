import styles from "../SparePart/SpareParts.module.scss";
import { useEffect, useState } from "react";
import dataAz from "../../../public/locales/az/translation.json";
import dataEn from "../../../public/locales/en/translation.json";
import dataRu from "../../../public/locales/ru/translation.json";
import AllInformations from "../../informations";

export default function SparePartsInPage({
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
      data.SparePartPage.Categories.includes(selectedCategory);
    if (!categoryExists) {
      setSelectedCategory(data.SparePartPage.Categories[0]);
    }
    window.scrollTo(0, 0);
  }, [data]);

  const airCategories = t("AirCategories");
  const oilCategories = t("OilCategories");
  const lineCategories = t("LineCategories");
  const inFiltersElementCategories = t("InFiltersElementCategories");
  const airOilFiltersCategories = t("AirOilFiltersCategories");
  const separatorsCategories = t("SeparatorsCategories");

  const airFiltersInfo = [
    {
      category: t("AirFiltersTexts.Texts1.category"),
      image: AllInformations.AirFilters.AirFilter1,
      title: t("AirFiltersTexts.Texts1.title"),
      description: t("AirFiltersTexts.Texts1.description"),
    },
    {
      category: t("AirFiltersTexts.Texts2.category"),
      image: AllInformations.AirFilters.AirFilter2,
      title: t("AirFiltersTexts.Texts2.title"),
      description: t("AirFiltersTexts.Texts2.description"),
    },
    {
      category: t("AirFiltersTexts.Texts3.category"),
      image: AllInformations.AirFilters.AirFilter3,
      title: t("AirFiltersTexts.Texts3.title"),
      description: t("AirFiltersTexts.Texts3.description"),
    },
    {
      category: t("AirFiltersTexts.Texts4.category"),
      image: AllInformations.AirFilters.AirFilter4,
      title: t("AirFiltersTexts.Texts1.title"),
      description: t("AirFiltersTexts.Texts4.description"),
    },
    {
      category: t("AirFiltersTexts.Texts5.category"),
      image: AllInformations.AirFilters.AirFilter5,
      title: t("AirFiltersTexts.Texts5.title"),
      description: t("AirFiltersTexts.Texts5.description"),
    },
  ];

  const oilFiltersInfo = [
    {
      category: t("OilFiltersTexts.Texts1.category"),
      image: AllInformations.YFilters.YFilter1,
      title: t("AirFiltersTexts.Texts1.title"),
      description: t("AirFiltersTexts.Texts1.description"),
    },
    {
      category: t("OilFiltersTexts.Texts2.category"),
      image: AllInformations.YFilters.YFilter2,
      title: t("AirFiltersTexts.Texts2.title"),
      description: t("AirFiltersTexts.Texts2.description"),
    },
    {
      category: t("OilFiltersTexts.Texts3.category"),
      image: AllInformations.YFilters.YFilter3,
      title: t("OilFiltersTexts.Texts3.title"),
      description: t("OilFiltersTexts.Texts3.description"),
    },
    {
      category: t("OilFiltersTexts.Texts4.category"),
      image: AllInformations.YFilters.YFilter4,
      title: t("OilFiltersTexts.Texts1.title"),
      description: t("OilFiltersTexts.Texts4.description"),
    },
  ];

  const lineFiltersInfo = [
    {
      category: t("LineFiltersTexts.Texts1.category"),
      image: AllInformations.YTXFilters.YTXFilter1,
      title: t("LineFiltersTexts.Texts1.title"),
      description: t("LineFiltersTexts.Texts1.description"),
    },
    {
      category: t("LineFiltersTexts.Texts2.category"),
      image: AllInformations.YTXFilters.YTXFilter2,
      title: t("LineFiltersTexts.Texts2.title"),
      description: t("LineFiltersTexts.Texts2.description"),
    },
    {
      category: t("LineFiltersTexts.Texts3.category"),
      image: AllInformations.YTXFilters.YTXFilter3,
      title: t("LineFiltersTexts.Texts3.title"),
      description: t("LineFiltersTexts.Texts3.description"),
    },
    {
      category: t("LineFiltersTexts.Texts4.category"),
      image: AllInformations.YTXFilters.YTXFilter4,
      title: t("LineFiltersTexts.Texts4.title"),
      description: t("LineFiltersTexts.Texts4.description"),
    },
    {
      category: t("LineFiltersTexts.Texts5.category"),
      image: AllInformations.YTXFilters.YTXFilter5,
      title: t("LineFiltersTexts.Texts5.title"),
      description: t("LineFiltersTexts.Texts5.description"),
    },
  ];

  const inFiltersElementInfo = [
    {
      category: t("InFiltersElementTexts.Texts1.category"),
      image: AllInformations.XFIEFilters.XFIE1,
      title: t("InFiltersElementTexts.Texts1.title"),
      description: t("InFiltersElementTexts.Texts1.description"),
    },
    {
      category: t("InFiltersElementTexts.Texts2.category"),
      image: AllInformations.XFIEFilters.XFIE2,
      title: t("InFiltersElementTexts.Texts2.title"),
      description: t("InFiltersElementTexts.Texts2.description"),
    },
  ];

  const AirOilFiltersInfo = [
    {
      category: t("AirOilFiltersTexts.Texts1.category"),
      image: AllInformations.AirOilFilters.AirOilSeparator1,
      title: t("AirOilFiltersTexts.Texts1.title"),
      description: t("AirOilFiltersTexts.Texts1.description"),
    },
    {
      category: t("AirOilFiltersTexts.Texts2.category"),
      image: AllInformations.AirOilFilters.AirOilSeparator1,
      title: t("AirOilFiltersTexts.Texts2.title"),
      description: t("AirOilFiltersTexts.Texts2.description"),
    },
    {
      category: t("AirOilFiltersTexts.Texts2.category"),
      image: AllInformations.AirOilFilters.AirOilSeparator1,
      title: t("AirOilFiltersTexts.Texts3.title"),
      description: t("AirOilFiltersTexts.Texts3.description"),
    },
  ];

  const SeparatorsInfo = [
    {
      category: t("SeparatorsTexts.Texts1.category"),
      image: AllInformations.SeparatorsFilters.Separator1,
      title: t("SeparatorsTexts.Texts1.title"),
      description: t("SeparatorsTexts.Texts1.description"),
    },
    {
      category: t("SeparatorsTexts.Texts2.category"),
      image: AllInformations.SeparatorsFilters.Separator2,
      title: t("SeparatorsTexts.Texts2.title"),
      description: t("SeparatorsTexts.Texts2.description"),
    },
    {
      category: t("SeparatorsTexts.Texts2.category"),
      image: AllInformations.SeparatorsFilters.Separator3,
      title: t("SeparatorsTexts.Texts3.title"),
      description: t("SeparatorsTexts.Texts3.description"),
    },
    {
      category: t("SeparatorsTexts.Texts4.category"),
      image: AllInformations.SeparatorsFilters.Separator4,
      title: t("SeparatorsTexts.Texts4.title"),
      description: t("SeparatorsTexts.Texts4.description"),
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
          <h2>{t("SpareParts")}</h2>
          <ul>
            {data.SparePartPage.Categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`${
                  selectedCategory === category ? styles.selected : ""
                }`}
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
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.cardsContainer}>
          {selectedCategory === airCategories &&
            airFiltersInfo
              .filter((spare) =>
                selectedCategory ? spare.category === selectedCategory : true
              )
              .map((spare, index) => (
                <div key={index} className={styles.cardItem}>
                  <img src={spare.image} alt="Air Filters" />
                  <div className={styles.onlyTexts}>
                    <h3>{spare.category}</h3>
                    <p>{spare.title}</p>
                    <p>{spare.description}</p>
                  </div>
                </div>
              ))}
          {selectedCategory === oilCategories &&
            oilFiltersInfo
              .filter((spare) =>
                selectedCategory ? spare.category === selectedCategory : true
              )
              .map((spare, index) => (
                <div key={index} className={styles.cardItem}>
                  <img src={spare.image} alt="Oil Filters" />
                  <div className={styles.onlyTexts}>
                    <h3>{spare.category}</h3>
                    <p>{spare.title}</p>
                    <p>{spare.description}</p>
                  </div>
                </div>
              ))}
          {selectedCategory === lineCategories &&
            lineFiltersInfo
              .filter((spare) =>
                selectedCategory ? spare.category === selectedCategory : true
              )
              .map((spare, index) => (
                <div key={index} className={styles.cardItem}>
                  <img src={spare.image} alt="Line Filters" />
                  <div className={styles.onlyTexts}>
                    <h3>{spare.category}</h3>
                    <p>{spare.title}</p>
                    <p>{spare.description}</p>
                  </div>
                </div>
              ))}
          {selectedCategory === inFiltersElementCategories &&
            inFiltersElementInfo
              .filter((spare) =>
                selectedCategory ? spare.category === selectedCategory : true
              )
              .map((spare, index) => (
                <div key={index} className={styles.cardItem}>
                  <img src={spare.image} alt="Filters Element" />
                  <div className={styles.onlyTexts}>
                    <h3>{spare.category}</h3>
                    <p>{spare.title}</p>
                    <p>{spare.description}</p>
                  </div>
                </div>
              ))}
          {selectedCategory === airOilFiltersCategories &&
            AirOilFiltersInfo.filter((spare) =>
              selectedCategory ? spare.category === selectedCategory : true
            ).map((spare, index) => (
              <div key={index} className={styles.cardItem}>
                <img src={spare.image} alt="Air Oil Filters" />
                <div className={styles.onlyTexts}>
                  <h3>{spare.category}</h3>
                  <p>{spare.title}</p>
                  <p>{spare.description}</p>
                </div>
              </div>
            ))}
          {selectedCategory === separatorsCategories &&
            SeparatorsInfo.filter((spare) =>
              selectedCategory ? spare.category === selectedCategory : true
            ).map((spare, index) => (
              <div key={index} className={styles.cardItem}>
                <img src={spare.image} alt="Separator" />
                <div className={styles.onlyTexts}>
                  <h3>{spare.category}</h3>
                  <p>{spare.title}</p>
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
