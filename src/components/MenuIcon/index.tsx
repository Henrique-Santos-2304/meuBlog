import * as S from "./styles";

export interface CheckProps {
  check?: boolean;
  handleOpenMenu?: () => void;
}
const MenuIcon = ({ check, handleOpenMenu }: CheckProps) => {
  return (
    <S.Wrapper
      role="button"
      aria-label="Open or Close Menu"
      onClick={handleOpenMenu}
      check={check}
    >
      <S.LineSpan data-testid="span-test" check={check}></S.LineSpan>
    </S.Wrapper>
  );
};

export default MenuIcon;
