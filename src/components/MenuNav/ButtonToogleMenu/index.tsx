import * as S from "./styles";
type props = {
  menuVisible: boolean;
};

const ButtonToogleMenu = ({ menuVisible }: props) => (
  <>
    {!menuVisible ? (
      <S.IconOpen
        role="button"
        aria-label="Botão Para abrir o Menu"
        title="Abrir Menu"
      ></S.IconOpen>
    ) : (
      <S.IconClose
        role="button"
        aria-label="Botão Para fechar o Menu"
        title="Fechar Menu"
      ></S.IconClose>
    )}
  </>
);
export default ButtonToogleMenu;
