import Headings from "components/globalComponents/Headings";
import SectionClipPathEffect from "components/globalComponents/SectionClipPathEffect";
import * as S from "./styles";

const AboutDescription = () => (
  <SectionClipPathEffect>
    <S.ContentAbout>
      <Headings
        msg="Um pouco sobre mim"
        colorText="#1e1e1e"
        colorEffect="#486afe"
        fontSizeText="2rem"
        marginText="0 0 1rem 1.5rem"
        aria-label="Titulo da seção"
      />
      <S.TextDescription aria-label="Texto com a descrição do Programador">
        Sou um Desenvolvedor a princípio Front End, com foco em
        <strong> React | Next.js</strong>, apaixonado pela Programação estou em
        constante aprendizado e desenvolvimento profissional sempre me
        atualizando, no momento crio projetos Pesssoais e freelances voltados a
        Desenvolvimento Web, mas ao mesmo tempo estudando sobre desenvolvimento
        Mobile com <strong>React Native</strong> .
      </S.TextDescription>
    </S.ContentAbout>
  </SectionClipPathEffect>
);

export default AboutDescription;
