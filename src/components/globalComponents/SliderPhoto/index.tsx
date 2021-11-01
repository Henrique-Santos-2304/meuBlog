/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CardBox from "components/SectionProject/CardBox";
import BoxSkilss from "components/SectionSkilss/BoxSkilss";
import * as S from "./styles";
import { slideImageprops } from "types/typesComponents/typesSlide";

const SliderPhoto = ({
  images,
  receptorCards,
  slidesToShow,
  slidesToScroll,
  marginBox,
  responsive,
}: slideImageprops) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false,
    responsive,
    appendDots: (dots: any) => (
      <S.Dots>
        <ul aria-label="Botões para trocar as fotos"> {dots} </ul>
      </S.Dots>
    ),
  };
  return (
    <S.SliderBox {...settings} aria-label="Slides de fotos">
      {receptorCards === "skilss" &&
        images.map((image) => (
          <BoxSkilss key={image.title} data={image} marginBox={marginBox} />
        ))}

      {receptorCards === "projects" &&
        images.map((image) => (
          <CardBox
            key={image.title}
            data={image}
            marginBox={marginBox}
            data-testid="projectss"
          />
        ))}
    </S.SliderBox>
  );
};

export default SliderPhoto;
