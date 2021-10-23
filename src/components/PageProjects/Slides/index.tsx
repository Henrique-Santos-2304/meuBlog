/* eslint-disable @typescript-eslint/no-explicit-any */
import CardBox from "components/PageProjects/CardBox";
import { cardSlidesProps } from "graphql/typesFinal/queryProjects";
import React from "react";
import Slider from "react-slick";
import * as S from "./styles";

type props = {
  cardsSlides: cardSlidesProps[];
};

const Slides = ({ cardsSlides }: props) => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.03,
          centerMode: false,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
    appendDots: (dots: any) => (
      <S.Dots>
        <ul aria-label="Botões para trocar as fotos"> {dots} </ul>
      </S.Dots>
    ),
  };

  return (
    <Slider {...settings}>
      {cardsSlides.map((cards, index) => (
        <CardBox
          key={index}
          url={cards.imageFront.imageUser.url}
          title={cards.title}
          subDescription={cards.miniDescription}
          alt={cards.imageFront.alt}
          buttons={cards.buttons}
        />
      ))}
    </Slider>
  );
};
export default Slides;
