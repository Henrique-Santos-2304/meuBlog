import Headings from "components/globalComponents/Headings";
import CardBox from "../CardBox";
import * as S from "./styles";

const SectionProject = () => (
  <S.Wrapper>
    <Headings
      msg="Meus Projetos"
      fontSizeText="2rem"
      marginText="0 0 1.4rem 2rem"
      aria-label="Titulo da seção"
    />
    <CardBox />
  </S.Wrapper>
);

export default SectionProject;
