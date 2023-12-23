import styles from "./SpareParts.module.scss";
import { Link } from "react-router-dom";
import AllInformations from "../../informations";

export default function SpareParts({ sparePartsRef, t }) {
  return (
    <section ref={sparePartsRef} className={styles.section}>
      <div className={styles.headerText}>
        <p>{t("SpareParts")}</p>
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
              <p>{t("FourSparePart.SparePartFirst.SparePartText1")}</p>
              <p>{t("FourSparePart.SparePartFirst.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <Link className={styles.link} to="/spareParts">
                  <button className={styles.sparePartButton}>
                    {t("DetailedSearchText")}
                  </button>
                </Link>
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
              <p>{t("FourSparePart.SparePartSecond.SparePartText1")}</p>
              <p>{t("FourSparePart.SparePartSecond.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <Link className={styles.link} to="/spareParts">
                  <button className={styles.sparePartButton}>
                    {t("DetailedSearchText")}
                  </button>
                </Link>
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
              <p>{t("FourSparePart.SparePartThird.SparePartText1")}</p>
              <p>{t("FourSparePart.SparePartThird.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <Link className={styles.link} to="/spareParts">
                  <button className={styles.sparePartButton}>
                    {t("DetailedSearchText")}
                  </button>
                </Link>
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
              <p>{t("FourSparePart.SparePartFourth.SparePartText1")}</p>
              <p>{t("FourSparePart.SparePartFourth.SparePartText2")}</p>
              <div className={styles.buttonElement}>
                <Link className={styles.link} to="/spareParts">
                  <button className={styles.sparePartButton}>
                    {t("DetailedSearchText")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailedSearchElement}>
        <Link
          to={{ pathname: "/spareParts", state: { fromNavbar: true } }}
          className={styles.Link}
        >
          <p>{t("DetailedSearch")}</p>
        </Link>
      </div>
    </section>
  );
}
