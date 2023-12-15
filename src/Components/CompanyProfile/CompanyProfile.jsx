import styles from "./CompanyProfile.module.scss";
import AllInformations from "../../informations";
import { Link } from "react-router-dom";

export default function CompanyProfile({ companyProfileRef, t }) {
  return (
    <section ref={companyProfileRef} className={styles.section}>
      <div className={styles.companyHeaderText}>
        <p>{t("CompanyProfile.AzCompanyProfile")}</p>
        <p>{t("CompanyProfile.AzCompanyName")}</p>
      </div>
      <div className={styles.companyTextsContainer}>
        <div className={styles.companyVideo}>
          <img
            src={AllInformations.SameParts.EkoMakCompressors}
            alt="Compressor"
          />
        </div>
        <div className={styles.companyTextsElement}>
          <p>{t("CompanyProfile.AzCompanyName")}</p>
          <p>{t("CompanyProfile.AzAboutCompany")}</p>
          <div className={styles.detailedSearchElement}>
            <Link className={styles.Link} to="/aboutUs">
              <p className={styles.detailedSearchText}>
                {t("CompanyProfile.AzDetailedSearchTexts")}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
