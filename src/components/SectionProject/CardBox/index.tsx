import * as S from "./styles";
import Link from "next/link";

type cardsSlides = {
  title: string;
  img: string;
  buttonCode: string;
  marginBox: string;
};
const CardBox = ({ title, img, buttonCode, marginBox }: cardsSlides) => (
  <S.ContentSection marginBox={marginBox} aria-label="Titulo do projeto">
    <S.ContentTitle>
      <S.TitleProject>{title}</S.TitleProject>
    </S.ContentTitle>
    <S.Wrapper aria-label="Imagem do projeto">
      <S.PhotoProject src={img} layout="fill" quality={100} />
    </S.Wrapper>
    <S.ContentButton>
      <Link href={buttonCode} passHref>
        <a target="_blank">
          <S.ButtonCode aria-label="Link para código do Projeto">
            <S.Icon />
            Ver Código
          </S.ButtonCode>
        </a>
      </Link>
    </S.ContentButton>
  </S.ContentSection>
);

export default CardBox;
