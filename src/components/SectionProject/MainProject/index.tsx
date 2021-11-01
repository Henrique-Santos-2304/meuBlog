/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from "./styles";

import Headings from "components/globalComponents/Headings";
import SliderPhoto from "components/globalComponents/SliderPhoto";
import { projects } from "graphql/typesQueries/types";

type propsProject = {
  dataProject: projects;
};
const SectionProject = ({ dataProject }: propsProject) => {
  console.log(dataProject);
  return (
    <S.Wrapper id="projects">
      <S.Title>
        <Headings
          msg={dataProject.title}
          fontSizeText="2rem"
          marginText="1.5rem 0 1.4rem 3rem"
          aria-label="Titulo da seção"
        />
      </S.Title>
      <S.ContentSlide>
        <SliderPhoto
          images={dataProject.slidesProject}
          receptorCards="projects"
          slidesToShow={1}
          slidesToScroll={1}
          marginBox="2rem 0 1rem"
        />
      </S.ContentSlide>
    </S.Wrapper>
  );
};

export default SectionProject;
