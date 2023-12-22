import styles from "./Footer.module.scss";
import AllInformations from "../../informations";

export default function Footer({ footerRef, t }) {
  return (
    <section ref={footerRef} className={styles.section}>
      <div className={styles.headerText}>
        <p>{t("ContactWithUs")}</p>
      </div>
      <div className={styles.sosialNetwork}>
        <div className={styles.firstPart}>
          <a target="_blank" href={AllInformations.Navbar.FaceBookLink}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a target="_blank" href={AllInformations.Navbar.InstagramLink}>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        {/* <div className={styles.secondPart}>
          <a target="_blank" href={AllInformations.Navbar.LinkEdinLink}>
            <i className="fa-brands fa-linkedin"> </i>
          </a>
          <a target="_blank" href={AllInformations.Navbar.TikTokLink}>
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div> */}
      </div>
      <div className={styles.numbersAndMailContainer}>
        <div className={styles.whatsaapNumberElement}>
          <i className="fa-brands fa-whatsapp"></i>
          <a target="_blank" href={AllInformations.Navbar.WpPhoneLink}>
            {AllInformations.Navbar.WpPhone}
          </a>
        </div>
        <div className={styles.callNumberElement}>
          <i className="fa-solid fa-phone"></i>
          <a target="_blank" href={AllInformations.Navbar.CallPhoneLink}>
            {AllInformations.Navbar.CallPhone}
          </a>
        </div>
        <div className={styles.mailContainer}>
          <i className="fa-solid fa-envelope"></i>
          <a target="_blank" href={AllInformations.Navbar.EmailLink}>
            {AllInformations.Navbar.Email}
          </a>
        </div>
      </div>
    </section>
  );
}
