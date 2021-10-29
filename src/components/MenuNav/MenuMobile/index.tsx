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
      >
        <ButtonToogleMenu menuVisible={menuVisible} />
      </S.Contenticon>
      <S.Wrapper isVisible={menuVisible} aria-label="Menu de nagação de telas">
        <S.MenuNav
          isVisible={menuVisible}
          onClick={() => setMenuVisible(false)}
        >
          <S.PhotoContainer>
            <Image
              src="https://res.cloudinary.com/defnibbpl/image/upload/v1635012439/image_User_940e9f11e7.jpg"
              layout="fill"
            />
          </S.PhotoContainer>

          <LinksNav />
        </S.MenuNav>
      </S.Wrapper>
    </>
  );
};

export default MenuNav;
