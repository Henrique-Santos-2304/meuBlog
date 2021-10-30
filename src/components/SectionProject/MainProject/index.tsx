/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from "./styles";

import Headings from "components/globalComponents/Headings";
import { images } from "../arrayCardMock";
import SliderPhoto from "components/globalComponents/SliderPhoto";

const SectionProject = () => {
  return (
    <S.Wrapper id="projects">
      <S.Title>
        <Headings
          msg="Meus Projetos"
          fontSizeText="2rem"
          marginText="1.5rem 0 1.4rem 3rem"
          aria-label="Titulo da seção"
        />
      </S.Title>
      <S.ContentSlide>
        <SliderPhoto
          images={images}
          receptorCards="projects"
          slidesToShow={1}
          marginBox="2rem 0 1rem"
        />
      </S.ContentSlide>
    </S.Wrapper>
  );
};

export default SectionProject;
