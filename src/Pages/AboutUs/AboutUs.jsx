import { useEffect, useState } from "react";
import AllInformations from "../../informations";
import styles from "./AboutUs.module.scss";
export default function AboutUs({ t }) {
  const customersData = [
    AllInformations.AboutUsPage.customerSlider.FiloLogoImage,
    AllInformations.AboutUsPage.customerSlider.EkomakLogoImage,
    AllInformations.AboutUsPage.customerSlider.AydinTrafoLogoImage,
    AllInformations.AboutUsPage.customerSlider.DalgaKiranLogoImage,
  ];
  const [isPaused, setIsPaused] = useState();
  const handleMouseMove = () => {
    setIsPaused(true);
  };
  const repeatedClientsData = Array.from(
    { length: 20 },
    (_, index) => customersData[index % customersData.length]
  );

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.AboutUsSection}>
      <div className={styles.companyAboutDiv}>
        <h4>{t("CompanyProfile.AzCompanyProfile")}</h4>
        <div className={styles.aboutUsDesc}>
          <div>
            <img
              src={AllInformations.SameParts.EkoMakCompressors}
              alt="Compressor"
            />
          </div>
          <div className={styles.companyTexts}>
            <p>{t("CompanyProfile.AzAboutCompany")}</p>
          </div>
        </div>
      </div>
      <div className={styles.top4Cards}>
        <div>
          <div>
            <img
              src={AllInformations.AboutUsPage.top4.FirstInfo.img}
              alt="FirstImage"
            />
          </div>
          <h3>{t("AboutUsPage.FirstInfo.title")}</h3>
          <p>{t("AboutUsPage.FirstInfo.description")}</p>
        </div>
        <div>
          <div>
            <img
              src={AllInformations.AboutUsPage.top4.SecondInfo.img}
              alt="SecondImage"
            />
          </div>
          <h3>{t("AboutUsPage.SecondInfo.title")}</h3>
          <p>{t("AboutUsPage.SecondInfo.description")}</p>
        </div>
        <div>
          <div>
            <img
              src={AllInformations.AboutUsPage.top4.ThirdInfo.img}
              alt="ThirdImage"
            />
          </div>
          <h3>{t("AboutUsPage.ThirdInfo.title")}</h3>
          <p>{t("AboutUsPage.ThirdInfo.description")}</p>
        </div>
        <div>
          <div>
            <img
              src={AllInformations.AboutUsPage.top4.FourthInfo.img}
              alt="FourthImage"
            />
          </div>
          <h3>{t("AboutUsPage.FourthInfo.title")}</h3>
          <p>{t("AboutUsPage.FourthInfo.description")}</p>
        </div>
      </div>
      <div className={styles.customersDiv}>
        <div className={styles.customersHead}>
          <h4>{t("AboutUsPage.title")}</h4>
        </div>
        <div
          className={`${styles.slideCustomersLogo} ${
            isPaused ? styles.paused : ""
          }`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className={styles.logoElement}>
              {repeatedClientsData.map((customer, customerIndex) => (
                <div key={customerIndex}>
                  <img
                    className={styles.imageElement}
                    src={customer}
                    alt="customers"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
