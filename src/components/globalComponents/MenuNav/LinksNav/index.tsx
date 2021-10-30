import * as S from "./styles";
import Link from "next/link";

const LinkNav = () => (
  <>
    <S.ContentLink>
      <Link href="#">Inicio</Link>
    </S.ContentLink>
    <S.ContentLink>
      <Link href="#projects">Projetos</Link>
    </S.ContentLink>
    <S.ContentLink>
      <Link href="#skilss">Habilidades</Link>
    </S.ContentLink>
    <S.ContentLink>
      <Link href="#contacts">Contato</Link>
    </S.ContentLink>
  </>
);

export default LinkNav;
