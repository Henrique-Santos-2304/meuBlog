/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from "./styles";
import Slider from "react-slick";

import Headings from "components/globalComponents/Headings";
import CardBox from "../CardBox";
import { images } from "../arrayCardMock";

const SectionProject = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <S.Dots>
        <ul aria-label="Botões para trocar as fotos"> {dots} </ul>
      </S.Dots>
    ),
  };
  return (
    <S.Wrapper>
      <Headings
        msg="Meus Projetos"
        fontSizeText="2rem"
        marginText="0 0 1.4rem 2rem"
        aria-label="Titulo da seção"
      />

      <Slider {...settings}>
        {images.map((image) => (
          <CardBox
            key={image.title}
            title={image.title}
            img={image.img}
            buttonCode={image.buttonCode}
          />
        ))}
      </Slider>
    </S.Wrapper>
  );
};

export default SectionProject;
