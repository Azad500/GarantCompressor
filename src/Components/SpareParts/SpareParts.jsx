import AllInformations from "../../informations";
import styles from "./SpareParts.module.scss";
import { Link } from "react-router-dom";
export default function SpareParts({ sparePartsRef, t }) {
  return (
    <section ref={sparePartsRef} className={styles.section}>
      <div className={styles.headerText}>
        <p>{t("SparePart.SamePartInSparePart.AzSparePartText")}</p>
      </div>
      <div className={styles.twoElement}>
        {/* -----------------firstElement-------------- */}
        <div className={styles.imageAndTextContainer}>
          {/* ----------------------firstSparePart-------------------- */}
          <div className={styles.SparePartElement}>
            <img
              className={styles.firstImage}
              src={
                AllInformations.AzerbaijanLanguage.SparePart.SparePartFirst
                  .SparePart1
              }
              alt="First Spare Part Image"
            />
            <div className={styles.sparePartTexts}>
              <p>{t("SparePart.SparePartFirst.SparePartText1")}</p>
              <p>{t("SparePart.SparePartFirst.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <button className={styles.sparePartButton}>
                  {t("DetailedSearchText")}
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------secondSparePart-------------------- */}
          <div className={styles.SparePartElement}>
            <img
              className={styles.secondImage}
              src={
                AllInformations.AzerbaijanLanguage.SparePart.SparePartSecond
                  .SparePart2
              }
              alt="First Spare Part Image"
            />
            <div className={styles.sparePartTexts}>
              <p>{t("SparePart.SparePartSecond.SparePartText1")}</p>
              <p>{t("SparePart.SparePartSecond.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <button className={styles.sparePartButton}>
                  {t("DetailedSearchText")}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* -----------------secondElement-------------- */}
        <div className={styles.imageAndTextContainer}>
          {/* ----------------------firstSparePart-------------------- */}
          <div className={styles.SparePartElement}>
            <img
              className={`${styles.firstImage} ${styles.imageInBottomLeft}`}
              src={
                AllInformations.AzerbaijanLanguage.SparePart.SparePartThird
                  .SparePart3
              }
              alt="First Spare Part Image"
            />
            <div className={styles.sparePartTexts}>
              <p>{t("SparePart.SparePartThird.SparePartText1")}</p>
              <p>{t("SparePart.SparePartThird.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <button className={styles.sparePartButton}>
                  {t("DetailedSearchText")}
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------secondSparePart-------------------- */}
          <div className={styles.SparePartElement}>
            <img
              className={`${styles.secondImage} ${styles.imageInBottomRight}`}
              src={
                AllInformations.AzerbaijanLanguage.SparePart.SparePartFourth
                  .SparePart4
              }
              alt="First Spare Part Image"
            />
            <div className={styles.sparePartTexts}>
              <p>{t("SparePart.SparePartFourth.SparePartText1")}</p>
              <p>{t("SparePart.SparePartFourth.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <button className={styles.sparePartButton}>
                  {t("DetailedSearchText")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailedSearchElement}>
        <Link
          to={{ pathname: "/products", state: { fromNavbar: true } }}
          className={styles.Link}
        >
          <p>{t("DetailedSearch")}</p>
        </Link>
      </div>
    </section>
  );
}
