import Headings from "components/globalComponents/Headings";
import SliderPhoto from "components/globalComponents/SliderPhoto";
import { images1, images2 } from "../cardsBoxSkilssMock";
import * as S from "./styles";

const SectionSkilss = () => {
  const responsiveSlide = [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 3,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.4,
        slidesToScroll: 3,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 3,
        infinite: false,
        dots: true,
      },
    },
  ];
  return (
    <>
      <S.ContentSkilss id="skilss">
        <Headings
          msg="Minhas Habilidades"
          colorEffect="#b7f600"
          colorText="#f8f8f8"
          fontSizeText="2rem"
          marginText="1.5rem 0 1.4rem 2rem"
          aria-label="Titulo da seção"
        />
        <SliderPhoto
          images={images1}
          receptorCards="skilss"
          slidesToShow={4.4}
          marginBox="2rem 1.5rem"
          responsive={responsiveSlide}
        />
        <S.Span></S.Span>
        <SliderPhoto
          images={images2}
          receptorCards="skilss"
          slidesToShow={4.4}
          marginBox="3rem 1.5rem 2rem"
          responsive={responsiveSlide}
        />
      </S.ContentSkilss>
    </>
  );
};

export default SectionSkilss;
