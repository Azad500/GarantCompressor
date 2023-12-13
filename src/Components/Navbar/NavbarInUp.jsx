import styles from "./NavbarInUp.module.scss";
import AllInformations from "../../informations";
export default function NavbarInUp({ t }) {
  return (
    <section className={styles.section}>
      <div className={styles.locationContainer}>
        <i className="fa-solid fa-location-dot"></i>
        <a target="_blank" href={AllInformations.Navbar.LocationInMap}>
          {t("LocationInPage")}
        </a>
      </div>
      <div className={styles.numbersAndSosialNetworksElements}>
        <div className={styles.numbersElement}>
          <div className={styles.whatsappElement}>
            <i className="fa-brands fa-whatsapp"></i>
            <a target="_blank" href={AllInformations.Navbar.WpPhoneLink}>
              {AllInformations.Navbar.WpPhone}
            </a>
          </div>
          <div className={styles.callElement}>
            <i className="fa-solid fa-phone"></i>
            <a target="_blank" href={AllInformations.Navbar.CallPhoneLink}>
              {AllInformations.Navbar.CallPhone}
            </a>
          </div>
          <div className={styles.mailElement}>
            <i className="fa-solid fa-envelope"></i>
            <a target="_blank" href={AllInformations.Navbar.EmailLink}>
              {AllInformations.Navbar.Email}
            </a>
          </div>
        </div>
        <div className={styles.sosialNetworkElement}>
          <a target="_blank" href={AllInformations.Navbar.FaceBookLink}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a target="_blank" href={AllInformations.Navbar.InstagramLink}>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a target="_blank" href={AllInformations.Navbar.LinkEdinLink}>
            <i className="fa-brands fa-linkedin"> </i>
          </a>
          <a target="_blank" href={AllInformations.Navbar.TikTokLink}>
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
