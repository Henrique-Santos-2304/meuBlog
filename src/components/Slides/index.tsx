/* eslint-disable @typescript-eslint/no-explicit-any */
import CardBox from "components/CardBox";
import React from "react";
import Slider from "react-slick";
import { images } from "../../pages/projects/images/images";
import * as S from "./styles";

type imageProps = {
  url: string;
  title: string;
  subDescription: string;
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
const Slides = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 2.4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
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
      {images.map((image: imageProps, index) => (
        <CardBox
          key={index}
          url={image.url}
          title={image.title}
          subDescription={image.subDescription}
        />
      ))}
    </Slider>
  );
};
export default Slides;
