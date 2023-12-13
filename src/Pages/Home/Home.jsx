import CompanyProfile from "../../Components/CompanyProfile/CompanyProfile";
import CarouselInPage from "../../Components/Compressors/Carousel";
import FourCompressors from "../../Components/Compressors/FourCompressors";
import Partners from "../../Components/Partners/Partners";
import SpareParts from "../../Components/SpareParts/SpareParts";

export default function Home({
  productsRef,
  sparePartsRef,
  partnersRef,
  companyProfileRef,
  t,
}) {
  return (
    <div>
      <CarouselInPage t={t} />
      <FourCompressors productsRef={productsRef} t={t} />
      <SpareParts sparePartsRef={sparePartsRef} t={t} />
      <Partners partnersRef={partnersRef} t={t} />
    </div>
  );
}
