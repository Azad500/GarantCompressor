import styles from "./SpareParts.module.scss";
import { Link } from "react-router-dom";
import AllInformations from "../../informations";
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
            <div className={`${styles.imgElement} ${styles.imgElement1}`}>
              <img
                className={styles.firstImage}
                src={AllInformations.FourSpareParts.SparePart1}
                alt="First Spare Part Image"
              />
            </div>
            <div className={styles.sparePartTexts}>
              <p>{t("SparePart.SparePartFirst.SparePartText1")}</p>
              <p>{t("SparePart.SparePartFirst.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <button className={styles.sparePartButton}>
                  <Link to="/products"> {t("DetailedSearchText")}</Link>
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------secondSparePart-------------------- */}
          <div className={styles.SparePartElement}>
            <div className={`${styles.imgElement} ${styles.imgElement2}`}>
              <img
                className={styles.secondImage}
                src={AllInformations.FourSpareParts.SparePart2}
                alt="Second Spare Part Image"
              />
            </div>
            <div className={styles.sparePartTexts}>
              <p>{t("SparePart.SparePartSecond.SparePartText1")}</p>
              <p>{t("SparePart.SparePartSecond.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <button className={styles.sparePartButton}>
                  <Link to="/products"> {t("DetailedSearchText")}</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* -----------------secondElement-------------- */}
        <div className={styles.imageAndTextContainer}>
          {/* ----------------------firstSparePart-------------------- */}
          <div className={styles.SparePartElement}>
            <div className={`${styles.imgElement} ${styles.imgElement3}`}>
              <img
                className={styles.thirdImage}
                src={AllInformations.FourSpareParts.SparePart3}
                alt="Third Spare Part Image"
              />
            </div>
            <div className={styles.sparePartTexts}>
              <p>{t("SparePart.SparePartThird.SparePartText1")}</p>
              <p>{t("SparePart.SparePartThird.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <button className={styles.sparePartButton}>
                  <Link to="/products"> {t("DetailedSearchText")}</Link>
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------secondSparePart-------------------- */}
          <div className={styles.SparePartElement}>
            <div className={`${styles.imgElement} ${styles.imgElement4}`}>
              <img
                className={styles.fourthImage}
                src={AllInformations.FourSpareParts.SparePart4}
                alt="Fourth Spare Part Image"
              />
            </div>
            <div className={styles.sparePartTexts}>
              <p>{t("SparePart.SparePartFourth.SparePartText1")}</p>
              <p>{t("SparePart.SparePartFourth.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <button className={styles.sparePartButton}>
                  <Link to="/products"> {t("DetailedSearchText")}</Link>
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
