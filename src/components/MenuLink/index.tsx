import * as S from "./styles";
export interface CheckProps {
  isOpen: boolean;
}
const MenuLink = ({ isOpen }: CheckProps) => (
  <S.Wrapper aria-hidden={!isOpen} isOpen={isOpen}>
    <S.MenuLink href="#">Inicio</S.MenuLink>
    <S.MenuLink href="#project">Projetos</S.MenuLink>
    <S.MenuLink href="#skills">Habilidades</S.MenuLink>
    <S.MenuLink href="#about">Sobre</S.MenuLink>
  </S.Wrapper>
);

export default MenuLink;
