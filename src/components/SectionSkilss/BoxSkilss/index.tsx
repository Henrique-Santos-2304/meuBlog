import { imagesProps } from "types/typesComponents/typesSlide";
import * as S from "./styles";

type boxSkilssProps = { data: imagesProps; marginBox: string };

const BoxSkilss = ({ data, marginBox }: boxSkilssProps) => (
  <S.ContainerSkilss aria-label={data.ariaLabel} marginBox={marginBox}>
    <S.ContentImage>
      <S.ImageSkilss
        src={data.image.url}
        alt={data.image.alternativeText}
        layout="fill"
        priority
      />
    </S.ContentImage>
    <S.TitleSkilss>{data.title}</S.TitleSkilss>
  </S.ContainerSkilss>
);

export default BoxSkilss;
