import styles from "./FourCompressors.module.scss";
import AllInformations from "../../informations";
import { Link } from "react-router-dom";

export default function FourCompressors({ productsRef, t }) {
  return (
    <div ref={productsRef} className={styles.container}>
      <section className={styles.section}>
        <p className={styles.productsText}>{t("Products")}</p>
        <div className={styles.upStepContainer}>
          {/* ----------------firstImageInUpStep---------------- */}
          <div className={styles.firstImageInUpStep}>
            <img
              className={styles.firstImage}
              src={AllInformations.FourCompressors.FirstCompressorImage}
              alt="First Compressor"
            />
            <div className={styles.compressorsTexts}>
              <a>{t("FourCompressorsAndTexts.FirstCompressor.AzHeaderText")}</a>
              <a>{t("FourCompressorsAndTexts.FirstCompressor.AzFirstTexts")}</a>
              <a>
                {t("FourCompressorsAndTexts.FirstCompressor.AzSecondTexts")}
              </a>
              <a>{t("FourCompressorsAndTexts.FirstCompressor.AzThirdTexts")}</a>
              <a>
                {t("FourCompressorsAndTexts.FirstCompressor.AzFourthTexts")}
              </a>
            </div>
          </div>
          {/* ----------------secondImageInUpStep---------------- */}
          <div className={styles.secondImageInUpStep}>
            <img
              className={styles.secondImage}
              src={AllInformations.FourCompressors.SecondCompressorImage}
              alt="Second Compressor"
            />
            <div className={styles.compressorsTexts}>
              <a>
                {t("FourCompressorsAndTexts.SecondCompressor.AzHeaderText")}
              </a>
              <a>
                {t("FourCompressorsAndTexts.SecondCompressor.AzFirstTexts")}
              </a>
              <a>
                {t("FourCompressorsAndTexts.SecondCompressor.AzSecondTexts")}
              </a>
              <a>
                {t("FourCompressorsAndTexts.SecondCompressor.AzThirdTexts")}
              </a>
              <a>
                {t("FourCompressorsAndTexts.SecondCompressor.AzFourthTexts")}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.downStepContainer}>
          {/* ----------------firstImageInDownStep---------------- */}
          <div className={styles.firstImageInDownStep}>
            <img
              className={styles.thirdImage}
              src={AllInformations.FourCompressors.ThirdCompressorImage}
              alt="Third Compressor"
            />
            <div className={styles.compressorsTexts}>
              <a>{t("FourCompressorsAndTexts.ThirdCompressor.AzHeaderText")}</a>
              <a>{t("FourCompressorsAndTexts.ThirdCompressor.AzFirstTexts")}</a>
              <a>
                {t("FourCompressorsAndTexts.ThirdCompressor.AzSecondTexts")}
              </a>
              <a>{t("FourCompressorsAndTexts.ThirdCompressor.AzThirdTexts")}</a>
              <a>
                {t("FourCompressorsAndTexts.ThirdCompressor.AzFourthTexts")}
              </a>
            </div>
          </div>
          {/* ----------------secondImageInDownStep---------------- */}
          <div className={styles.secondImageInDownStep}>
            <img
              className={styles.fourthImage}
              src={AllInformations.FourCompressors.FourthCompressorImage}
              alt="Fourth Compressor"
            />
            <div className={styles.compressorsTexts}>
              <a>
                {t("FourCompressorsAndTexts.FourthCompressor.AzHeaderText")}
              </a>
              <a>
                {t("FourCompressorsAndTexts.FourthCompressor.AzFirstTexts")}
              </a>
              <a>
                {t("FourCompressorsAndTexts.FourthCompressor.AzSecondTexts")}
              </a>
              <a>
                {t("FourCompressorsAndTexts.FourthCompressor.AzThirdTexts")}
              </a>
              <a>
                {t("FourCompressorsAndTexts.FourthCompressor.AzFourthTexts")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.detailedSearchElement}>
        <Link
          to={{ pathname: "/products", state: { fromNavbar: true } }}
          className={styles.Link}
        >
          <p className={styles.detailedSearchText}>{t("DetailedSearch")}</p>
        </Link>
      </div>
    </div>
  );
}
