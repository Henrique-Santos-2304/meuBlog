import Headings from "components/globalComponents/Headings";
import SliderPhoto from "components/globalComponents/SliderPhoto";
import { skilss } from "graphql/typesQueries/types";
import * as S from "./styles";

type propsSkilss = {
  dataSkilss: skilss;
};
const SectionSkilss = ({ dataSkilss }: propsSkilss) => {
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
          msg={dataSkilss.title}
          colorEffect="#b7f600"
          colorText="#f8f8f8"
          fontSizeText="2rem"
          marginText="1.5rem 0 1.4rem 2rem"
          aria-label={dataSkilss.ariaLabel}
        />
        <SliderPhoto
          images={dataSkilss.slidesSkills}
          receptorCards="skilss"
          autoplay={false}
          slidesToShow={4.4}
          slidesToScroll={2}
          marginBox="2rem 1.5rem"
          responsive={responsiveSlide}
        />
        <S.Span></S.Span>
        <SliderPhoto
          images={dataSkilss.slidesCssSkilss}
          receptorCards="skilss"
          autoplay={false}
          slidesToShow={4.4}
          slidesToScroll={2}
          marginBox="3rem 1.5rem 2rem"
          responsive={responsiveSlide}
        />
      </S.ContentSkilss>
    </>
  );
};

export default SectionSkilss;
