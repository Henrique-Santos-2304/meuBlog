import * as S from "./styles";

export interface CheckProps {
  check?: boolean;
  handleOpenMenu?: () => void;
}
const MenuIcon = ({ check, handleOpenMenu }: CheckProps) => {
  return (
    <S.Wrapper data-testid="divClick" onClick={handleOpenMenu} check={check}>
      <S.LineSpan data-testid="span-test" check={check}></S.LineSpan>
    </S.Wrapper>
  );
};

export default MenuIcon;
