import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import AllInformations from "../../informations";
import styles from "./Carousel.module.scss";
import "./Carousel.css";

function CarouselInPage({ t, selectedLanguage, setSelectedLanguage }) {
  return (
    <>
      {" "}
      <Carousel className={styles.carouselContainer}>
        <Carousel.Item className={styles.firstImage}>
          <div className={styles.leftTexts}>
            <p>{t("FirstLeftTextInCarousel")}</p>
            <p>{t("SecondLeftTextInCarousel")}</p>
          </div>
          {selectedLanguage === "az" ? (
            <img src={AllInformations.SameParts.AzLogo} alt="Az Company Logo" />
          ) : (
            false
          )}
          {selectedLanguage === "en" ? (
            <img src={AllInformations.SameParts.EnLogo} alt="En Company Logo" />
          ) : (
            false
          )}
          {selectedLanguage === "ru" ? (
            <img src={AllInformations.SameParts.RuLogo} alt="Ru Company Logo" />
          ) : (
            false
          )}
          <div className={styles.rightTexts}>
            <p>{t("FirstRightTextInCarousel")}</p>
            <p>{t("SecondRightTextİnCarousel")}</p>
          </div>
        </Carousel.Item>
        <Carousel.Item className={styles.secondImage}>
          <img
            src={AllInformations.SameParts.EkoMakCompressors}
            alt="Compressor"
          />
        </Carousel.Item>
        <Carousel.Item className={styles.thirdImage}>
          <p>{t("TheWorldDeliveryText")}</p>
          <img src={AllInformations.SameParts.Delivery} alt="Delivery" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselInPage;
