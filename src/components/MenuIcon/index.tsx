import { useState } from "react";
import * as S from "./styles";

export interface CheckProps {
  check: boolean;
}
const MenuIcon = ({ check = false }: CheckProps) => {
  const [checkMenu, setCheckMenu] = useState(check);
  return (
    <S.Wrapper
      data-testid="divClick"
      onClick={() => setCheckMenu(!checkMenu)}
      check={checkMenu}
    >
      <S.LineSpan data-testid="span-test" check={checkMenu}></S.LineSpan>
    </S.Wrapper>
  );
};

export default MenuIcon;
