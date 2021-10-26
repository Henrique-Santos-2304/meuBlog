import Headings from "components/globalComponents/Headings";
import SectionClipPathEffect from "components/globalComponents/SectionClipPathEffect";
import * as S from "./styles";
type aboutProps = {
  title: string;
  description: string;
  mt?: string;
};
const AboutDescription = ({ title, description, mt }: aboutProps) => (
  <SectionClipPathEffect mt={mt}>
    <S.ContentAbout>
      <Headings
        msg={title}
        colorText="#1e1e1e"
        colorEffect="#486afe"
        fontSizeText="2rem"
        marginText="0 0 1rem 1.5rem"
        aria-label="Titulo da seção"
      />
      <S.TextDescription aria-label="Texto com a descrição do Programador">
        {description}
      </S.TextDescription>
    </S.ContentAbout>
  </SectionClipPathEffect>
);

export default AboutDescription;
