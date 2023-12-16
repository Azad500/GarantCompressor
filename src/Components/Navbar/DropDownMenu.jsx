import { useEffect, useState } from "react";
import styles from "./DropDownMenu.module.scss";
import { useTranslation } from "react-i18next";

export default function DropDownLanguage({
  selectedLanguage,
  setSelectedLanguage,
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      setSelectedLanguage(lang);
      setSelectedLang(lang);
      i18n.changeLanguage(lang);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setSelectedLang(lng);
  };

  function toggleButton() {
    setDropdownVisible(!dropdownVisible);
  }

  function selectLanguage(language) {
    setSelectedLanguage(language);
    setTimeout(() => {
      setDropdownVisible(false);
    }, 400);
  }

  return (
    <div className={styles.dropdownElement}>
      <div onClick={toggleButton} className={styles.dropdownLanguageSelected}>
        <p className={styles.languageonPage}>{selectedLanguage}</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div
        className={`${styles.languageElement}${
          dropdownVisible ? " " + styles.active : ""
        }`}
      >
        <div
          disabled={i18n.resolvedLanguage === "az"}
          onClick={() => changeLanguage("az")}
        >
          <div
            onClick={() => selectLanguage("az")}
            className={`${styles.checkAndLanguage} ${styles.firstLanguage}`}
          >
            {selectedLanguage === "az" && <p className={styles.checkIcon}>✓</p>}
            <p className={styles.langText}>az</p>
          </div>
        </div>
        <div
          disabled={i18n.resolvedLanguage === "en"}
          onClick={() => changeLanguage("en")}
        >
          <div
            onClick={() => selectLanguage("en")}
            className={styles.checkAndLanguage}
          >
            {selectedLanguage === "en" && <p className={styles.checkIcon}>✓</p>}
            <p className={styles.langText}>en</p>
          </div>
        </div>
        <div
          disabled={i18n.resolvedLanguage === "ru"}
          onClick={() => changeLanguage("ru")}
        >
          <div
            onClick={() => selectLanguage("ru")}
            className={`${styles.checkAndLanguage} ${styles.thirdLanguage}`}
          >
            {selectedLanguage === "ru" && <p className={styles.checkIcon}>✓</p>}
            <p className={styles.langText}>ru</p>
          </div>
        </div>
      </div>
    </div>
  );
}
