/* eslint-disable @typescript-eslint/no-explicit-any */
import Headings from "components/globalComponents/Headings";
import SliderPhoto from "components/globalComponents/SliderPhoto";
import { slidesProject } from "graphql/typesQueries/types";
import * as S from "./styles";

type propsProject = {
  title: string;
  images: slidesProject[];
};
const SectionProject = ({ title, images }: propsProject) => {
  return (
    <S.Wrapper id="projects">
      <S.Title>
        <Headings
          msg={title}
          fontSizeText="2rem"
          marginText="1.5rem 0 1.4rem 3rem"
          aria-label="Titulo da seção"
        />
      </S.Title>
      <S.ContentSlide>
        <SliderPhoto
          images={images}
          receptorCards="projects"
          autoplay
          slidesToShow={1}
          slidesToScroll={1}
          marginBox="2rem 0 4rem"
        />
      </S.ContentSlide>
    </S.Wrapper>
  );
};

export default SectionProject;
