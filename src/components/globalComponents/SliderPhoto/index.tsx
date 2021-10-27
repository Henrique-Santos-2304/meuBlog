/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CardBox from "components/SectionProject/CardBox";
import BoxSkilss from "components/SectionSkilss/BoxSkilss";
import * as S from "./styles";

type imagesProps = {
  img: string;
  title: string;
  buttonCode?: string;
};
type slideImageprops = {
  images: imagesProps[];
  receptorCards: "skilss" | "projects";
  slidesToShow: number;
  marginBox: string;
};
const SliderPhoto = ({
  images,
  receptorCards,
  slidesToShow,
  marginBox,
}: slideImageprops) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <S.Dots>
        <ul aria-label="Botões para trocar as fotos"> {dots} </ul>
      </S.Dots>
    ),
  };
  return (
    <S.SliderBox {...settings} aria-label="Slides de fotos">
      {images.map((image) =>
        receptorCards === "skilss" ? (
          <BoxSkilss
            key={image.title}
            title={image.title}
            img={image.img}
            marginBox={marginBox}
            aria-label="Slide de Habilidades"
          />
        ) : (
          <CardBox
            key={image.title}
            title={image.title}
            img={image.img}
            buttonCode={image.buttonCode!}
            marginBox={marginBox}
            aria-label="Slide de Projetos"
          />
        )
      )}
    </S.SliderBox>
  );
};

export default SliderPhoto;