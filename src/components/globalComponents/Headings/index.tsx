import * as S from "./styles";

export type headeingProps = {
  msg?: string;
  colorText?: string;
  marginText?: string | string[];
  paddingText?: string | string[];
  fontSizeText?: string | string[];
};

const Headings = ({
  msg,
  colorText,
  marginText,
  paddingText,
  fontSizeText,
}: headeingProps) => (
  <S.Heading
    colorText={colorText}
    paddingText={paddingText}
    marginText={marginText}
    fontSizeText={fontSizeText}
  >
    {msg}
  </S.Heading>
);

export default Headings;
