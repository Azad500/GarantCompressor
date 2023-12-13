import ProductsStyle from "./Products.module.scss";
import { useEffect, useState } from "react";
import AllInformationsJS from "../../informations";

export default function Products({
  pagesHamburgerBar,
  setPagesHamburgerBar,
  t,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPagesHamburgerBar(false);
  };
  useEffect(() => {
    if (
      AllInformationsJS.AzerbaijanLanguage.ProductsPart.Categories.length > 0 &&
      !selectedCategory
    ) {
      setSelectedCategory(
        AllInformationsJS.AzerbaijanLanguage.ProductsPart.Categories[0]
      );
    }
  }, [selectedCategory]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={ProductsStyle.ProductsSection}>
      <div
        className={`${ProductsStyle.leftAsideMobile} ${
          pagesHamburgerBar ? ProductsStyle.active : ""
        }`}
      >
        <h2>{t("Products")}</h2>
        <ul>
          {AllInformationsJS?.AzerbaijanLanguage.ProductsPart?.Categories?.map(
            (category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`${
                  selectedCategory === category ? ProductsStyle.selected : ""
                } ${category}`}
              >
                {category}
              </li>
            )
          )}
        </ul>
      </div>
      <div className={ProductsStyle.leftAsideDesktop}>
        <h2>{t("Products")}</h2>
        <ul>
          {AllInformationsJS?.AzerbaijanLanguage.ProductsPart?.Categories?.map(
            (category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`${
                  selectedCategory === category ? ProductsStyle.selected : ""
                } ${category}`}
              >
                {category}
              </li>
            )
          )}
        </ul>
      </div>
      <div className={ProductsStyle.cardsContainer}>
        {AllInformationsJS.AzerbaijanLanguage.ProductsPart.Products.filter(
          (product) =>
            selectedCategory ? product.categories === selectedCategory : true
        ).map((product, index) => (
          <div key={index} className={ProductsStyle.cardItem}>
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <p>{product.workingPower}</p>
            <p>{product.freeAirDelivery}</p>
            <p>{product.workingPressure}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
