import * as S from "./styles";
import { OpenClose } from "graphql/typesQueries/types";

type props = {
  menuVisible: boolean;
  openMenu: OpenClose;
  closeMenu: OpenClose;
};

const ButtonToogleMenu = ({ menuVisible, openMenu, closeMenu }: props) => {
  return (
    <>
      {!menuVisible ? (
        <S.IconOpen
          role="button"
          aria-label={openMenu.ariaLabel}
          title={openMenu.title}
        ></S.IconOpen>
      ) : (
        <S.IconClose
          role="button"
          aria-label={closeMenu.ariaLabel}
          title={closeMenu.title}
        ></S.IconClose>
      )}
    </>
  );
};
export default ButtonToogleMenu;
