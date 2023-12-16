import NavbarInDown from "./NavbarInDown";
import NavbarInUp from "./NavbarInUp";

export default function Navbar({
  refreshPage,
  handleClick,
  pagesHamburgerBar,
  setPagesHamburgerBar,
  selectedLanguage,
  setSelectedLanguage,
  t,
}) {
  return (
    <>
      <NavbarInUp t={t} />
      <NavbarInDown
        refreshPage={refreshPage}
        handleClick={handleClick}
        pagesHamburgerBar={pagesHamburgerBar}
        setPagesHamburgerBar={setPagesHamburgerBar}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        t={t}
      />
    </>
  );
}
