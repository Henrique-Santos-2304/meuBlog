/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "react-slick";
import { image, stylesImg } from "components/CardSkilss/cards";
import CardSkilss from "components/CardSkilss";
import * as S from "./styles";

const SlideSkilss = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 4.8,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5.4,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
        },
      },

      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4.8,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3.9,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2.4,
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
  };
  return (
    <>
      <Slider {...settings}>
        {image.map((img, index) => (
          <CardSkilss url={img.url} title={img.title} key={index} />
        ))}
      </Slider>
      <Slider {...settings}>
        {stylesImg.map((img, index) => (
          <CardSkilss url={img.url} title={img.title} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default SlideSkilss;
