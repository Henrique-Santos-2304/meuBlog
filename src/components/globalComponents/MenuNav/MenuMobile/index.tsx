/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from "./styles";
import Image from "next/image";
import { useState } from "react";
import LinksNav from "../LinksNav";
import ButtonToogleMenu from "../ButtonToogleMenu";
import { menuNav } from "graphql/typesQueries/types";

type propsMenu = {
  menuNav: menuNav;
};
const MenuNav = ({ menuNav }: propsMenu) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <S.Contenticon
        onClick={() => setMenuVisible(!menuVisible)}
        aria-label={menuNav.ariaLabe}
        isVisible={menuVisible}
      >
        <ButtonToogleMenu
          menuVisible={menuVisible}
          openMenu={menuNav.openMenuNav}
          closeMenu={menuNav.closeMenuNav}
        />
      </S.Contenticon>
      <S.ContainerFull
        isVisible={menuVisible}
        onClick={() => setMenuVisible(false)}
        aria-label={menuNav.navigationPage.ariaLabel}
      >
        <S.Wrapper isVisible={menuVisible} data-testid="subMenuNav">
          <S.MenuNav isVisible={menuVisible}>
            <S.PhotoContainer>
              <Image
                src={menuNav.navigationPage.imageNav.url}
                alt={menuNav.navigationPage.imageNav.alt}
                layout="fill"
              />
            </S.PhotoContainer>

            <LinksNav navigations={menuNav.linksNagivation} />
          </S.MenuNav>
        </S.Wrapper>
      </S.ContainerFull>
    </>
  );
};

export default MenuNav;
