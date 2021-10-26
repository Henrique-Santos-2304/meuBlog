import * as S from "./styles";

type boxSkilssProps = { img: string; title: string; marginBox: string };

const BoxSkilss = ({ img, title, marginBox }: boxSkilssProps) => (
  <S.ContainerSkilss
    aria-label="Linguagens,Frameworks ou bibliotecas dominadas"
    marginBox={marginBox}
  >
    <S.ContentImage>
      <S.ImageSkilss src={img} layout="fill" />
    </S.ContentImage>
    <S.TitleSkilss>{title}</S.TitleSkilss>
  </S.ContainerSkilss>
);

export default BoxSkilss;
