import Logo from "components/Logo";
import { useState } from "react";
import MenuIcon from "components/MenuIcon";
import * as S from "./styles";
import MenuLink from "components/MenuLink";

const Header = () => {
  const [checkMenu, setCheckMenu] = useState(false);
  function handleIsOpenMenu() {
    setCheckMenu(!checkMenu);
  }
  return (
    <>
      <S.ContentBody>
        <S.Wrapper>
          <Logo />
          <S.ContentMenuFull>
            <MenuLink isOpen={checkMenu} />
          </S.ContentMenuFull>
          <MenuIcon check={checkMenu} handleOpenMenu={handleIsOpenMenu} />
        </S.Wrapper>
      </S.ContentBody>
    </>
  );
};
export default Header;
