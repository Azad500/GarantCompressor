import styles from "./Partners.module.scss";
import AllInformations from "../../informations";
import { useState } from "react";

const partnersData = [
  AllInformations.PartnersLogo.FiloLogoImage,
  AllInformations.PartnersLogo.EkomakLogoImage,
  AllInformations.PartnersLogo.AydinTrafoLogoImage,
  AllInformations.PartnersLogo.DalgaKiranLogoImage,
];

const repeatedClientsData = Array.from(
  { length: 20 },
  (_, index) => partnersData[index % partnersData.length]
);

export default function Partners({ partnersRef, t }) {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseMove = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section ref={partnersRef} className={styles.section}>
      <div className={styles.partnersText}>
        <p>{t("Partners")}</p>
      </div>
      <div
        className={`${styles.slidePartnersLogo} ${
          isPaused ? styles.paused : ""
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className={styles.logoElement}>
            {repeatedClientsData.map((client, clientIndex) => (
              <div key={clientIndex}>
                <img className={styles.imageElement} src={client} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
