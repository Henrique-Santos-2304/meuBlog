import * as S from "./styles";

type props = {
  children: React.ReactNode;
  error: string | undefined;
  typeLabel: string;
  txtLabel: string;
};
const ContentInput = ({ children, error, typeLabel, txtLabel }: props) => (
  <S.ContentInputs>
    <S.Label htmlFor={typeLabel}>{txtLabel}</S.Label>
    {children}
    {error && (
      <S.Alert role="alert">
        <S.Icon></S.Icon>
        <p>{error}</p>
      </S.Alert>
    )}
  </S.ContentInputs>
);

export default ContentInput;
