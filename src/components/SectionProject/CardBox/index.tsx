import * as S from "./styles";

const CardBox = () => (
  <S.ContentSection>
    <S.ContentTitle aria-label="Titulo do projeto">
      <S.TitleProject>LeScone</S.TitleProject>
    </S.ContentTitle>
    <S.Wrapper aria-label="Imagem do projeto">
      <S.PhotoProject
        src="https://res.cloudinary.com/defnibbpl/image/upload/v1634678383/Lescone_9fb07ad59b.gif"
        layout="fill"
        quality={100}
      />
    </S.Wrapper>
    <S.ContentButton>
      <S.ButtonAbout aria-label="Link para detalhes do Projeto">
        Sobre
      </S.ButtonAbout>
      <S.ButtonCode aria-label="Link para código do Projeto">
        <S.Icon />
        Ver Código
      </S.ButtonCode>
    </S.ContentButton>
  </S.ContentSection>
);

export default CardBox;
