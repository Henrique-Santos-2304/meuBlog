import * as S from "./styles";

export type headeingProps = {
  msg?: string;
  colorText?: string;
  marginText?: string | string[];
  paddingText?: string | string[];
  fontSizeText?: string | string[];
  colorEffect?: string;
};

const Headings = ({
  msg,
  colorText,
  marginText,
  paddingText,
  fontSizeText,
  colorEffect,
}: headeingProps) => (
  <S.Heading
    colorText={colorText}
    paddingText={paddingText}
    marginText={marginText}
    fontSizeText={fontSizeText}
    colorEffect={colorEffect}
  >
    {msg}
  </S.Heading>
);

export default Headings;
