/* eslint-disable @typescript-eslint/no-explicit-any */
import CardBox from "components/CardBox";
import { cardSlidesProps } from "graphql/typesFinal/queryProjects";
import React from "react";
import Slider from "react-slick";
import * as S from "./styles";

type props = {
  cardsSlides: cardSlidesProps[];
};
function SamplePrevArrow(props: {
  className?: string;
  style?: any;
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <S.Icons
      className={className}
      style={{ ...style }}
      onClick={onClick}
      id="left"
    />
  );
}
function SampleNextArrow(props: {
  className?: string;
  style?: any;
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <S.Icons className={className} style={{ ...style }} onClick={onClick} />
  );
}
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
    arrows: true,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.03,
          centerMode: false,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.02,
          centerMode: false,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
    appendDots: (dots: any) => (
      <S.Dots>
        <ul> {dots} </ul>
      </S.Dots>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
