import Headings from "components/globalComponents/Headings";
import SliderPhoto from "components/globalComponents/SliderPhoto";
import { images1, images2 } from "../cardsBoxSkilssMock";
import * as S from "./styles";

const SectionSkilss = () => {
  return (
    <>
      <S.ContentSkilss id="skilss">
        <Headings
          msg="Minhas Habilidades"
          colorEffect="#b7f600"
          colorText="#f8f8f8"
          fontSizeText="2rem"
          marginText="0 0 2rem 3rem"
          aria-label="Titulo da seção"
        />
        <SliderPhoto
          images={images1}
          receptorCards="skilss"
          slidesToShow={2.4}
          marginBox="2rem 1.5rem"
        />
        <S.Span></S.Span>
        <SliderPhoto
          images={images2}
          receptorCards="skilss"
          slidesToShow={2.4}
          marginBox="3rem 1.5rem 2rem"
        />
      </S.ContentSkilss>
    </>
  );
};

export default SectionSkilss;
