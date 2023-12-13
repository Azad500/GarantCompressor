import ProductsStyle from "../SparePart/SpareParts.module.scss";
import { useEffect, useState } from "react";
import AllInformationsJS from "../../informations";

export default function sparePartsPage({
  pagesHamburgerBar,
  setPagesHamburgerBar,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPagesHamburgerBar(false);
  };
  useEffect(() => {
    if (
      AllInformationsJS.AzerbaijanLanguage.SparePartPage.Categories.length >
        0 &&
      !selectedCategory
    ) {
      setSelectedCategory(
        AllInformationsJS.AzerbaijanLanguage.SparePartPage.Categories[0]
      );
    }
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  return (
    <section className={ProductsStyle.ProductsSection}>
      <div
        className={`${ProductsStyle.leftAsideMobile} ${
          pagesHamburgerBar ? ProductsStyle.active : ""
        }`}
      >
        <h2>Ehtiyat Hissələri</h2>
        <ul>
          {AllInformationsJS?.AzerbaijanLanguage.SparePartPage.Categories.map(
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
        <h2>Ehtiyat Hissələri</h2>
        <ul>
          {AllInformationsJS?.AzerbaijanLanguage.SparePartPage.Categories.map(
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
        {AllInformationsJS.AzerbaijanLanguage.SparePartPage.Spares?.filter(
          (spare) =>
            selectedCategory ? spare.category === selectedCategory : true
        ).map((spare, index) => (
          <div key={index} className={ProductsStyle.cardItem}>
            <img src={spare.Img} alt="" />
            <h3>{spare.title}</h3>
            <p>{spare.thePrice}</p>
            <p>{spare.category}</p>
            <p>{spare.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
