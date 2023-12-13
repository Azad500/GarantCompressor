import NavbarInDown from "./NavbarInDown";
import NavbarInUp from "./NavbarInUp";

export default function Navbar({
  refreshPage,
  handleClick,
  pagesHamburgerBar,
  setPagesHamburgerBar,
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
        t={t}
      />
    </>
  );
}
