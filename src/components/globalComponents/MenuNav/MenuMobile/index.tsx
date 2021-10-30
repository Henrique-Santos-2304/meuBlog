import * as S from "./styles";
import Image from "next/image";
import { useState } from "react";
import LinksNav from "../LinksNav";
import ButtonToogleMenu from "../ButtonToogleMenu";

const MenuNav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <S.Contenticon
        onClick={() => setMenuVisible(!menuVisible)}
        aria-label="Botão de abrir e fechar menu de navegção"
        isVisible={menuVisible}
      >
        <ButtonToogleMenu menuVisible={menuVisible} />
      </S.Contenticon>
      <S.ContainerFull
        isVisible={menuVisible}
        onClick={() => setMenuVisible(false)}
        aria-label="Menu de nagação de telas"
      >
        <S.Wrapper isVisible={menuVisible} data-testid="subMenuNav">
          <S.MenuNav isVisible={menuVisible}>
            <S.PhotoContainer>
              <Image
                src="https://res.cloudinary.com/defnibbpl/image/upload/v1635012439/image_User_940e9f11e7.jpg"
                layout="fill"
              />
            </S.PhotoContainer>

            <LinksNav />
          </S.MenuNav>
        </S.Wrapper>
      </S.ContainerFull>
    </>
  );
};

export default MenuNav;
