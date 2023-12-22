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
      data.SparePartsTexts.SparePartPage.Categories.includes(selectedCategory);
    if (!categoryExists) {
      setSelectedCategory(data.SparePartsTexts.SparePartPage.Categories[0]);
    }
    window.scrollTo(0, 0);
  }, [data]);

  const airCategories = t("SparePartsTexts.AirFiltersTexts.AirCategories");
  const oilCategories = t("SparePartsTexts.OilFiltersTexts.OilCategories");
  const lineCategories = t("SparePartsTexts.LineFiltersTexts.LineCategories");
  const inFiltersElementCategories = t(
    "SparePartsTexts.InFiltersElementTexts.InFiltersElementCategories"
  );
  const airOilFiltersCategories = t(
    "SparePartsTexts.AirOilFiltersTexts.AirOilFiltersCategories"
  );
  const separatorsCategories = t(
    "SparePartsTexts.SeparatorsTexts.SeparatorsCategories"
  );

  const airFiltersInfo = [
    {
      category: t("SparePartsTexts.AirFiltersTexts.Texts1.category"),
      image: AllInformations.SparePartsImages.AirFilters.AirFilter1,
      title: t("SparePartsTexts.AirFiltersTexts.Texts1.title"),
      description: t("SparePartsTexts.AirFiltersTexts.Texts1.description"),
    },
    {
      category: t("SparePartsTexts.AirFiltersTexts.Texts2.category"),
      image: AllInformations.SparePartsImages.AirFilters.AirFilter2,
      title: t("SparePartsTexts.AirFiltersTexts.Texts2.title"),
      description: t("SparePartsTexts.AirFiltersTexts.Texts2.description"),
    },
    {
      category: t("SparePartsTexts.AirFiltersTexts.Texts3.category"),
      image: AllInformations.SparePartsImages.AirFilters.AirFilter3,
      title: t("SparePartsTexts.AirFiltersTexts.Texts3.title"),
      description: t("SparePartsTexts.AirFiltersTexts.Texts3.description"),
    },
    {
      category: t("SparePartsTexts.AirFiltersTexts.Texts4.category"),
      image: AllInformations.SparePartsImages.AirFilters.AirFilter4,
      title: t("SparePartsTexts.AirFiltersTexts.Texts1.title"),
      description: t("SparePartsTexts.AirFiltersTexts.Texts4.description"),
    },
    {
      category: t("SparePartsTexts.AirFiltersTexts.Texts5.category"),
      image: AllInformations.SparePartsImages.AirFilters.AirFilter5,
      title: t("SparePartsTexts.AirFiltersTexts.Texts5.title"),
      description: t("SparePartsTexts.AirFiltersTexts.Texts5.description"),
    },
  ];

  const oilFiltersInfo = [
    {
      category: t("SparePartsTexts.OilFiltersTexts.Texts1.category"),
      image: AllInformations.SparePartsImages.YFilters.YFilter1,
      title: t("SparePartsTexts.AirFiltersTexts.Texts1.title"),
      description: t("SparePartsTexts.AirFiltersTexts.Texts1.description"),
    },
    {
      category: t("SparePartsTexts.OilFiltersTexts.Texts2.category"),
      image: AllInformations.SparePartsImages.YFilters.YFilter2,
      title: t("SparePartsTexts.AirFiltersTexts.Texts2.title"),
      description: t("SparePartsTexts.AirFiltersTexts.Texts2.description"),
    },
    {
      category: t("SparePartsTexts.OilFiltersTexts.Texts3.category"),
      image: AllInformations.SparePartsImages.YFilters.YFilter3,
      title: t("SparePartsTexts.OilFiltersTexts.Texts3.title"),
      description: t("SparePartsTexts.OilFiltersTexts.Texts3.description"),
    },
    {
      category: t("SparePartsTexts.OilFiltersTexts.Texts4.category"),
      image: AllInformations.SparePartsImages.YFilters.YFilter4,
      title: t("SparePartsTexts.OilFiltersTexts.Texts1.title"),
      description: t("SparePartsTexts.OilFiltersTexts.Texts4.description"),
    },
  ];

  const lineFiltersInfo = [
    {
      category: t("SparePartsTexts.LineFiltersTexts.Texts1.category"),
      image: AllInformations.SparePartsImages.YTXFilters.YTXFilter1,
      title: t("SparePartsTexts.LineFiltersTexts.Texts1.title"),
      description: t("SparePartsTexts.LineFiltersTexts.Texts1.description"),
    },
    {
      category: t("SparePartsTexts.LineFiltersTexts.Texts2.category"),
      image: AllInformations.SparePartsImages.YTXFilters.YTXFilter2,
      title: t("SparePartsTexts.LineFiltersTexts.Texts2.title"),
      description: t("SparePartsTexts.LineFiltersTexts.Texts2.description"),
    },
    {
      category: t("SparePartsTexts.LineFiltersTexts.Texts3.category"),
      image: AllInformations.SparePartsImages.YTXFilters.YTXFilter3,
      title: t("SparePartsTexts.LineFiltersTexts.Texts3.title"),
      description: t("SparePartsTexts.LineFiltersTexts.Texts3.description"),
    },
    {
      category: t("SparePartsTexts.LineFiltersTexts.Texts4.category"),
      image: AllInformations.SparePartsImages.YTXFilters.YTXFilter4,
      title: t("SparePartsTexts.LineFiltersTexts.Texts4.title"),
      description: t("SparePartsTexts.LineFiltersTexts.Texts4.description"),
    },
    {
      category: t("SparePartsTexts.LineFiltersTexts.Texts5.category"),
      image: AllInformations.SparePartsImages.YTXFilters.YTXFilter5,
      title: t("SparePartsTexts.LineFiltersTexts.Texts5.title"),
      description: t("SparePartsTexts.LineFiltersTexts.Texts5.description"),
    },
  ];

  const inFiltersElementInfo = [
    {
      category: t("SparePartsTexts.InFiltersElementTexts.Texts1.category"),
      image: AllInformations.SparePartsImages.XFIEFilters.XFIE1,
      title: t("SparePartsTexts.InFiltersElementTexts.Texts1.title"),
      description: t(
        "SparePartsTexts.InFiltersElementTexts.Texts1.description"
      ),
    },
    {
      category: t("SparePartsTexts.InFiltersElementTexts.Texts2.category"),
      image: AllInformations.SparePartsImages.XFIEFilters.XFIE2,
      title: t("SparePartsTexts.InFiltersElementTexts.Texts2.title"),
      description: t(
        "SparePartsTexts.InFiltersElementTexts.Texts2.description"
      ),
    },
  ];

  const AirOilFiltersInfo = [
    {
      category: t("SparePartsTexts.AirOilFiltersTexts.Texts1.category"),
      image: AllInformations.SparePartsImages.AirOilFilters.AirOilSeparator1,
      title: t("SparePartsTexts.AirOilFiltersTexts.Texts1.title"),
      description: t("SparePartsTexts.AirOilFiltersTexts.Texts1.description"),
    },
    {
      category: t("SparePartsTexts.AirOilFiltersTexts.Texts2.category"),
      image: AllInformations.SparePartsImages.AirOilFilters.AirOilSeparator1,
      title: t("SparePartsTexts.AirOilFiltersTexts.Texts2.title"),
      description: t("SparePartsTexts.AirOilFiltersTexts.Texts2.description"),
    },
    {
      category: t("SparePartsTexts.AirOilFiltersTexts.Texts2.category"),
      image: AllInformations.SparePartsImages.AirOilFilters.AirOilSeparator1,
      title: t("SparePartsTexts.AirOilFiltersTexts.Texts3.title"),
      description: t("SparePartsTexts.AirOilFiltersTexts.Texts3.description"),
    },
  ];

  const SeparatorsInfo = [
    {
      category: t("SparePartsTexts.SeparatorsTexts.Texts1.category"),
      image: AllInformations.SparePartsImages.SeparatorsFilters.Separator1,
      title: t("SparePartsTexts.SeparatorsTexts.Texts1.title"),
      description: t("SparePartsTexts.SeparatorsTexts.Texts1.description"),
    },
    {
      category: t("SparePartsTexts.SeparatorsTexts.Texts2.category"),
      image: AllInformations.SparePartsImages.SeparatorsFilters.Separator2,
      title: t("SparePartsTexts.SeparatorsTexts.Texts2.title"),
      description: t("SparePartsTexts.SeparatorsTexts.Texts2.description"),
    },
    {
      category: t("SparePartsTexts.SeparatorsTexts.Texts2.category"),
      image: AllInformations.SparePartsImages.SeparatorsFilters.Separator3,
      title: t("SparePartsTexts.SeparatorsTexts.Texts3.title"),
      description: t("SparePartsTexts.SeparatorsTexts.Texts3.description"),
    },
    {
      category: t("SparePartsTexts.SeparatorsTexts.Texts4.category"),
      image: AllInformations.SparePartsImages.SeparatorsFilters.Separator4,
      title: t("SparePartsTexts.SeparatorsTexts.Texts4.title"),
      description: t("SparePartsTexts.SeparatorsTexts.Texts4.description"),
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
            {data.SparePartsTexts.SparePartPage.Categories.map(
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
          <h2>{t("SpareParts")}</h2>
          <ul>
            {data.SparePartsTexts.SparePartPage.Categories.map(
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
