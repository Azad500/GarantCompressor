import styles from "./Developer.module.scss";
import AllInformations from "../../informations";

export default function Developer({ t }) {
  return (
    <section className={styles.section}>
      <div className={styles.wrapperElement}>
        <p>{t("MakeSite")}</p>
        <div className={styles.developerNames}>
          <p>{t("FirstDeveloperName")}</p>
          <p>{t("SecondDeveloperName")}</p>
        </div>
      </div>
    </section>
  );
}
