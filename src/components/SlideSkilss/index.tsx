import React from "react";
import Slider from "react-slick";
import { image, stylesImg } from "components/CardSkilss/cards";
import CardSkilss from "components/CardSkilss";

const SlideSkilss = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 4.4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4.4,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
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
