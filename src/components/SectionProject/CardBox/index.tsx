/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from "./styles";
import Link from "next/link";
import { imagesProps } from "types/typesComponents/typesSlide";

type cardsSlides = {
  data: imagesProps;

  marginBox: string;
};
const CardBox = ({ data, marginBox }: cardsSlides) => (
  <S.ContentSection marginBox={marginBox} aria-label={data.ariaLabel}>
    <S.ContentTitle>
      <S.TitleProject>{data.title}</S.TitleProject>
    </S.ContentTitle>
    <S.Wrapper aria-label="Imagem do projeto">
      <S.PhotoProject
        src={data.image.url}
        alt={data.image.alternativeText}
        layout="fill"
      />
    </S.Wrapper>
    <S.ContentButton>
      <Link href={data.urlProject!} passHref>
        <a target="_blank">
          <S.ButtonCode aria-label={data.ariaLabelButton}>
            <S.Icon />
            {data.buttonText}
          </S.ButtonCode>
        </a>
      </Link>
    </S.ContentButton>
  </S.ContentSection>
);

export default CardBox;
